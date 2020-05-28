package fr.univ.angers.info.m2.acdi.bm.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import fr.univ.angers.info.m2.acdi.bm.constantes.ConstantesREST;
import fr.univ.angers.info.m2.acdi.bm.dto.AdministrateurCreateDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.AdministrateurRetourDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.AdministrateurUpdateDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.LoginDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.LoginRetourDTO;
import fr.univ.angers.info.m2.acdi.bm.entities.Administrateur;
import fr.univ.angers.info.m2.acdi.bm.exceptions.ResourceNotFoundException;
import fr.univ.angers.info.m2.acdi.bm.helpers.JwtUtil;
import fr.univ.angers.info.m2.acdi.bm.mapper.AdministrateurMapper;
import fr.univ.angers.info.m2.acdi.bm.repositories.AdministrateurRepository;
import fr.univ.angers.info.m2.acdi.bm.request.response.RetourGeneral;

@Service
public class AdministrateurService implements UserDetailsService {

	@Autowired
	private AdministrateurRepository administrateurRepository;
	@Autowired
	private AdministrateurMapper administrateurMapper;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private JwtUtil jwtUtil;
	@Autowired
	private AuthenticationManager authenticationManager;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Administrateur administrateur = administrateurRepository.findByEmail(username);
		return new User(administrateur.getEmail(), administrateur.getPassword(), new ArrayList<>());
	}

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
					administrateurDto.setPassword(passwordEncoder.encode(administrateurDto.getPassword()));
					Administrateur toSave = administrateurMapper.createDtoToEntity(administrateurDto);
					toSave.setDateCreation(new Date());
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
			authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getEmail(), loginDTO.getPassword()));
			Administrateur found = administrateurRepository.findByEmail(loginDTO.getEmail());
			LoginRetourDTO loginRetour = administrateurMapper.entityToLoginRetour(found);
			loginRetour.setTokenJwt(jwtUtil.generateToken(loginDTO.getEmail()));
			retour.setRetour(loginRetour);
			retour.setDescription(ConstantesREST.OK);
		} catch (Exception e) {
			retour.setDescription(ConstantesREST.CREDANTIALS_INVALID);
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
		if (from.getPassword() != null) {
			to.setPassword(passwordEncoder.encode(from.getPassword()));
		}
	}

}
