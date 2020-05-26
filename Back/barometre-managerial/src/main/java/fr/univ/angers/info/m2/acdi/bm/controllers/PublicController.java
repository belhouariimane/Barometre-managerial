package fr.univ.angers.info.m2.acdi.bm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.univ.angers.info.m2.acdi.bm.dto.AdministrateurCreateDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.LoginDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.ParticipantCreateDTO;
import fr.univ.angers.info.m2.acdi.bm.request.response.RetourGeneral;
import fr.univ.angers.info.m2.acdi.bm.services.AdministrateurService;
import fr.univ.angers.info.m2.acdi.bm.services.ParticipantService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

/**
 * 
 * @author aharboul
 *
 */
@Api("Gestion des Api publiques.")
@RestController
@RequestMapping(path = "/public")
public class PublicController {

	@Autowired
	private AdministrateurService administrateurService;
	@Autowired
	private ParticipantService participantService;

	@ApiOperation(value = "Création d'un nouveau administrateur")
	@PostMapping("/admin/create")
	public ResponseEntity<RetourGeneral> creerAdministrateur(@RequestBody AdministrateurCreateDTO newAdministrateur) {
		return traitementReponse(administrateurService.save(newAdministrateur));
	}

	@ApiOperation(value = "Authentification de l'administrateur en renseignant son email et mot de passe")
	@PostMapping("/login")
	public ResponseEntity<RetourGeneral> authentification(@RequestBody LoginDTO loginDTO) {
		return traitementReponse(administrateurService.login(loginDTO));
	}

	@ApiOperation(value = "Création d'une nouvel participant")
	@PostMapping("/participant/create")
	public ResponseEntity<RetourGeneral> creerParticipant(@RequestBody ParticipantCreateDTO newParticipant) {
		return traitementReponse(participantService.save(newParticipant));
	}

	private ResponseEntity<RetourGeneral> traitementReponse(RetourGeneral retour) {
		if (retour.getRetour() != null) {
			return new ResponseEntity<>(retour, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(retour, HttpStatus.BAD_REQUEST);
		}
	}

}
