/**
 * 
 */
package fr.univ.angers.info.m2.acdi.bm.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
import fr.univ.angers.info.m2.acdi.bm.services.AdministrateurService;

/**
 * @author aharboul
 *
 */
@RestController
@RequestMapping(path = "/admin")
public class AdministrateurController {

	@Autowired
	private AdministrateurService administrateurService;

	@PostMapping("/create")
	Administrateur creerAdministrateur(@RequestBody Administrateur newAdministrateur) {
		return administrateurService.save(newAdministrateur);
	}

	@PutMapping("/update/{id}")
	Administrateur updateAdministrateur(@RequestBody Administrateur administrateur, @PathVariable Long id) {
		try {
			return administrateurService.update(administrateur, id);
		} catch (AdministrateurNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	@DeleteMapping("/delete/{id}")
	void deleteAdministrateur(@PathVariable Long id) {
		administrateurService.deleteById(id);
	}

	@GetMapping("/all")
	List<Administrateur> all() {
		return administrateurService.findAll();
	}

	@GetMapping("/{id}")
	Administrateur recupererAdministrateurParId(@PathVariable Long id) {
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
	Administrateur authentification(@PathVariable String email, @PathVariable String password) {
		return administrateurService.login(email, password);
	}

}
