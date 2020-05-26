package fr.univ.angers.info.m2.acdi.bm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.univ.angers.info.m2.acdi.bm.dto.ParticipantCreateDTO;
import fr.univ.angers.info.m2.acdi.bm.request.response.RetourGeneral;
import fr.univ.angers.info.m2.acdi.bm.services.ParticipantService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

/**
 * @author aharboul
 *
 */
@Api("API pour la gestion des participations.")
@RestController
@RequestMapping(path = "/participant")
public class ParticipantController {

	@Autowired
	private ParticipantService participantService;

	@ApiOperation(value = "Création d'une nouvel participant")
	@PostMapping("/create")
	public ResponseEntity<RetourGeneral> creerParticipant(@RequestBody ParticipantCreateDTO newParticipant) {
		return traitementReponse(participantService.save(newParticipant));
	}

	@ApiOperation(value = "Récupérer tous les participants")
	@GetMapping("/readAll")
	public ResponseEntity<RetourGeneral> all() {
		return traitementReponse(participantService.findAll());
	}

	@ApiOperation(value = "Récupérer un participant en renseignant son identifiant")
	@GetMapping("/read/{id}")
	public ResponseEntity<RetourGeneral> recupererParticipantParId(@PathVariable Long id) {
		return traitementReponse(participantService.findById(id));
	}

	private ResponseEntity<RetourGeneral> traitementReponse(RetourGeneral retour) {
		if (retour.getRetour() != null) {
			return new ResponseEntity<>(retour, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(retour, HttpStatus.BAD_REQUEST);
		}
	}

}
