/**
 * 
 */
package fr.univ.angers.info.m2.acdi.bm.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.univ.angers.info.m2.acdi.bm.entities.Administrateur;
import fr.univ.angers.info.m2.acdi.bm.exceptions.AdministrateurNotFoundException;
import fr.univ.angers.info.m2.acdi.bm.response.RetourGeneral;
import fr.univ.angers.info.m2.acdi.bm.services.AdministrateurService;

/**
 * @author aharboul
 *
 */
@RestController
@RequestMapping(path = "/admin")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AdministrateurController {

	@Autowired
	private AdministrateurService administrateurService;

	@PostMapping("/create")
	public ResponseEntity<RetourGeneral> creerAdministrateur(@RequestBody Administrateur newAdministrateur) {
		RetourGeneral retour = administrateurService.save(newAdministrateur);
		return traitementReponse(retour);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<RetourGeneral> updateAdministrateur(@RequestBody Administrateur administrateur,
			@PathVariable Long id) {
		RetourGeneral retour = administrateurService.update(administrateur, id);
		return traitementReponse(retour);
	}

	@DeleteMapping("/delete/{id}")
	public void deleteAdministrateur(@PathVariable Long id) {
		administrateurService.deleteById(id);
	}

	@GetMapping("/readAll")
	public List<Administrateur> all() {
		return administrateurService.findAll();
	}

	@GetMapping("/read/{id}")
	public Administrateur recupererAdministrateurParId(@PathVariable Long id) {
		Administrateur administrateur = null;
		try {
			administrateur = administrateurService.findById(id);
		} catch (AdministrateurNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return administrateur;
	}

	@PostMapping("/login")
	public ResponseEntity<RetourGeneral> authentification(@RequestBody Administrateur administrateur) {
		RetourGeneral retour = administrateurService.login(administrateur);
		return traitementReponse(retour);
	}

	private ResponseEntity<RetourGeneral> traitementReponse(RetourGeneral retour) {
		if (retour.getRetour() != null) {
			return new ResponseEntity<>(retour, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(retour, HttpStatus.BAD_REQUEST);
		}
	}

}
