package fr.univ.angers.info.m2.acdi.bm.services;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import fr.univ.angers.info.m2.acdi.bm.constantes.ConstantesREST;
import fr.univ.angers.info.m2.acdi.bm.dto.AdministrateurCreateDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.AdministrateurRetourDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.AdministrateurUpdateDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.LoginDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.RetourGeneral;
import fr.univ.angers.info.m2.acdi.bm.entities.Administrateur;
import fr.univ.angers.info.m2.acdi.bm.exceptions.ResourceNotFoundException;
import fr.univ.angers.info.m2.acdi.bm.helpers.Helpers;
import fr.univ.angers.info.m2.acdi.bm.helpers.PasswordUtils;
import fr.univ.angers.info.m2.acdi.bm.mapper.AdministrateurMapper;
import fr.univ.angers.info.m2.acdi.bm.repositories.AdministrateurRepository;

@Service
public class AdministrateurService {

	@Autowired
	private AdministrateurRepository administrateurRepository;
	@Autowired
	private AdministrateurMapper administrateurMapper;

	public RetourGeneral findAll() {
		RetourGeneral retour = new RetourGeneral();
		try {
			Iterable<Administrateur> it = administrateurRepository.findAll();
			List<Administrateur> admin = new ArrayList<>();
			it.forEach(admin::add);
			retour.setRetour(admin);
			retour.setDescription(ConstantesREST.OK);
		} catch (Exception e) {
			retour.setDescription(ConstantesREST.UNKNOWN_ERROR);
		}
		return retour;
	}

	public RetourGeneral save(AdministrateurCreateDTO administrateurDto) {
		RetourGeneral retour = new RetourGeneral();
		if (administrateurDto != null) {
			try {
				if (administrateurDto.checkNull()) {
					retour.setDescription(ConstantesREST.EMPTY_REQUEST);
				} else {
					String hashedPassword = PasswordUtils.generateStorngPasswordHash(administrateurDto.getPassword());
					administrateurDto.setPassword(hashedPassword);
					Administrateur toSave = administrateurMapper.createDtoToEntity(administrateurDto);
					Administrateur saved = administrateurRepository.save(toSave);
					AdministrateurRetourDTO retourAdminDto = administrateurMapper.entityToRetour(saved);
					retour.setRetour(retourAdminDto);
					retour.setDescription(ConstantesREST.OK);
				}
			} catch (DataIntegrityViolationException e1) {
				retour.setDescription(ConstantesREST.EXISTED_EMAIL);
			} catch (Exception e) {
				retour.setDescription(ConstantesREST.UNKNOWN_ERROR);
			}
		}
		return retour;
	}

	public RetourGeneral update(AdministrateurUpdateDTO dto, Long id) {
		RetourGeneral retour = new RetourGeneral();
		if (dto != null) {
			try {
				if (dto.checkNull()) {
					retour.setDescription(ConstantesREST.EMPTY_REQUEST);
				} else {
					Administrateur adminFound = administrateurRepository.findById(id).orElseThrow(
							() -> new ResourceNotFoundException(Administrateur.class.getSimpleName(), "id", id));
					majChampsAdministrateur(dto, adminFound);
					Administrateur updated = administrateurRepository.save(adminFound);
					AdministrateurRetourDTO retourAdminDto = administrateurMapper.entityToRetour(updated);
					retour.setRetour(retourAdminDto);
					retour.setDescription(ConstantesREST.OK);
				}
			} catch (ResourceNotFoundException e1) {
				retour.setDescription(e1.getMessage());
			} catch (Exception e) {
				retour.setDescription(ConstantesREST.UNKNOWN_ERROR);
			}
		}
		return retour;
	}

	public RetourGeneral findById(Long id) {
		RetourGeneral retour = new RetourGeneral();
		try {
			Administrateur found = administrateurRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException(Administrateur.class.getSimpleName(), "id", id));
			AdministrateurRetourDTO retourAdminDto = administrateurMapper.entityToRetour(found);
			retour.setRetour(retourAdminDto);
			retour.setDescription(ConstantesREST.OK);
		} catch (ResourceNotFoundException e) {
			retour.setDescription(e.getMessage());
		}

		return retour;
	}

	public void deleteById(Long id) {
		administrateurRepository.deleteById(id);
	}

	public RetourGeneral login(LoginDTO loginDTO) {
		RetourGeneral retour = new RetourGeneral();
		try {
			if (loginDTO.checkNull()) {
				retour.setDescription(ConstantesREST.EMPTY_REQUEST);
			} else {
				if (Helpers.strEmpty(loginDTO.getEmail()) || Helpers.strEmpty(loginDTO.getPassword())) {
					retour.setDescription(ConstantesREST.EMAIL_OR_PASSWORD_NOT_SEND);
				} else {
					List<Administrateur> administrateurs = administrateurRepository.findByEmail(loginDTO.getEmail());
					if (administrateurs != null && !administrateurs.isEmpty()) {
						Administrateur returnedAdmin = administrateurs.get(0);
						boolean isPasswordValid = PasswordUtils.validatePassword(loginDTO.getPassword(),
								returnedAdmin.getPassword());
						if (isPasswordValid) {
							AdministrateurRetourDTO retourAdministrateurDto = administrateurMapper
									.entityToRetour(returnedAdmin);
							retour.setDescription(ConstantesREST.OK);
							retour.setRetour(retourAdministrateurDto);
						} else {
							retour.setDescription(ConstantesREST.PASSWORD_INVALID);
						}
					}
				}
			}
		} catch (NoSuchAlgorithmException | InvalidKeySpecException e1) {
			retour.setDescription(ConstantesREST.PASSWORD_VALIDATION_ERROR);
		} catch (Exception e) {
			retour.setDescription(ConstantesREST.UNKNOWN_ERROR);
		}
		return retour;
	}

	private void majChampsAdministrateur(final AdministrateurUpdateDTO from, final Administrateur to) {
		if (from.getNom() != null) {
			to.setNom(from.getNom());
		}
		if (from.getPrenom() != null) {
			to.setPrenom(from.getPrenom());
		}
		if (from.getEmail() != null) {
			to.setEmail(from.getEmail());
		}
		// TODO handle password change
	}
}
