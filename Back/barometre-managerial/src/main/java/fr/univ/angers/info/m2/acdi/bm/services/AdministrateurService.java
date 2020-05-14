package fr.univ.angers.info.m2.acdi.bm.services;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import fr.univ.angers.info.m2.acdi.bm.constantes.ConstantesREST;
import fr.univ.angers.info.m2.acdi.bm.entities.Administrateur;
import fr.univ.angers.info.m2.acdi.bm.exceptions.AdministrateurNotFoundException;
import fr.univ.angers.info.m2.acdi.bm.repositories.AdministrateurRepository;
import fr.univ.angers.info.m2.acdi.bm.response.RetourGeneral;
import fr.univ.angers.info.m2.acdi.bm.util.PasswordUtils;

@Service
public class AdministrateurService {

	@Autowired
	private AdministrateurRepository administrateurRepository;

	public List<Administrateur> findAll() {
		Iterable<Administrateur> it = administrateurRepository.findAll();
		List<Administrateur> admin = new ArrayList<>();
		it.forEach(admin::add);
		return admin;
	}

	public RetourGeneral save(Administrateur administrateur) {
		RetourGeneral retour = new RetourGeneral();
		if (administrateur != null) {
			try {
				if (administrateur.checkNull()) {
					retour.setDescription(ConstantesREST.EMPTY_REQUEST);
				} else {
					if (administrateur.getId() == null) {
						String hashedPassword = PasswordUtils.generateStorngPasswordHash(administrateur.getPassword());
						administrateur.setPassword(hashedPassword);
						Administrateur saved = administrateurRepository.save(administrateur);
						saved.setPassword(null);
						retour.setRetour(saved);
						retour.setDescription(ConstantesREST.OK);
					} else {
						retour.setDescription(ConstantesREST.ID_NOT_INSERTABLE);
					}
				}
			} catch (DataIntegrityViolationException e1) {
				retour.setDescription(ConstantesREST.EXISTED_EMAIL);
			} catch (Exception e) {
				retour.setDescription(ConstantesREST.UNKNOWN_ERROR);
			}
		}
		return retour;
	}

	public RetourGeneral update(Administrateur adminToBeUpdated, Long id) {
		RetourGeneral retour = new RetourGeneral();
		Administrateur adminFound;
		try {
			adminFound = findById(id);
			mappingAdministrateur(adminToBeUpdated, adminFound);
			adminFound = administrateurRepository.save(adminFound);
			adminFound.setPassword(null);
			retour.setRetour(adminFound);
			retour.setDescription(ConstantesREST.OK);
		} catch (AdministrateurNotFoundException e1) {
			retour.setDescription(ConstantesREST.ID_NOT_FOUND + e1.getId());
		} catch (Exception e) {
			retour.setDescription(ConstantesREST.UNKNOWN_ERROR);
		}
		return retour;
	}

	public Administrateur findById(Long id) throws AdministrateurNotFoundException {
		return administrateurRepository.findById(id).orElseThrow(() -> new AdministrateurNotFoundException(id));
	}

	public void deleteById(Long id) {
		administrateurRepository.deleteById(id);
	}

	public RetourGeneral login(Administrateur administrateur) {
		RetourGeneral retour = new RetourGeneral();
		try {
			if (administrateur.checkNull()) {
				retour.setDescription(ConstantesREST.EMPTY_REQUEST);
			} else {
				if (administrateur.getEmail() == null || administrateur.getEmail().isEmpty()
						|| administrateur.getPassword() == null || administrateur.getPassword().isEmpty()) {
					retour.setDescription(ConstantesREST.EMAIL_OR_PASSWORD_NOT_SEND);
				} else {
					List<Administrateur> administrateurs = administrateurRepository
							.findByEmail(administrateur.getEmail());
					if (administrateurs != null && !administrateurs.isEmpty()) {
						Administrateur returnedAdmin = administrateurs.get(0);
						boolean isPasswordValid = PasswordUtils.validatePassword(administrateur.getPassword(),
								returnedAdmin.getPassword());
						if (isPasswordValid) {
							retour.setDescription(ConstantesREST.OK);
							returnedAdmin.setPassword(null);
							retour.setRetour(returnedAdmin);
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

	private void mappingAdministrateur(final Administrateur from, final Administrateur to) {
		if (from.getNom() != null) {
			to.setNom(from.getNom());
		}
		if (from.getPrenom() != null) {
			to.setPrenom(from.getPrenom());
		}
		if (from.getEmail() != null) {
			to.setEmail(from.getEmail());
		}
	}
}
