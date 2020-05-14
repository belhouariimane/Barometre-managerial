/**
 * 
 */
package fr.univ.angers.info.m2.acdi.bm.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.univ.angers.info.m2.acdi.bm.entities.Participant;
import fr.univ.angers.info.m2.acdi.bm.exceptions.ParticipantNotFoundException;
import fr.univ.angers.info.m2.acdi.bm.response.RetourGeneral;
import fr.univ.angers.info.m2.acdi.bm.services.ParticipantService;

/**
 * @author aharboul
 *
 */
@RestController
@RequestMapping(path = "/participant")
public class ParticipantController {

	@Autowired
	private ParticipantService participantService;

	@PostMapping("/create")
	public Participant creerAdministrateur(@RequestBody Participant newParticipant) {
		return participantService.save(newParticipant);
	}

	@GetMapping("/all")
	List<Participant> all() {
		return participantService.findAll();
	}

	@GetMapping("/{id}")
	Participant recupererParticipantParId(@PathVariable Long id) {
		Participant participant = null;
		try {
			participant = participantService.findById(id);
		} catch (ParticipantNotFoundException e) {
			e.printStackTrace();
		}
		return participant;
	}

	@SuppressWarnings("unused")
	private ResponseEntity<RetourGeneral> traitementReponse(RetourGeneral retour) {
		if (retour.getRetour() != null) {
			return new ResponseEntity<>(retour, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(retour, HttpStatus.BAD_REQUEST);
		}
	}

}
