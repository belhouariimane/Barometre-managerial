/**
 * 
 */
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

import fr.univ.angers.info.m2.acdi.bm.entities.Participant;
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
	public ResponseEntity<RetourGeneral> creerParticipant(@RequestBody Participant newParticipant) {
		return traitementReponse(participantService.save(newParticipant));
	}

	@GetMapping("/all")
	public ResponseEntity<RetourGeneral> all() {
		return traitementReponse(participantService.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<RetourGeneral> recupererParticipantParId(@PathVariable Long id) {
		return traitementReponse(participantService.findById(id));
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
