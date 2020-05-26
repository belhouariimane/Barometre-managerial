package fr.univ.angers.info.m2.acdi.bm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.univ.angers.info.m2.acdi.bm.dto.AdministrateurCreateDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.AdministrateurUpdateDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.LoginDTO;
import fr.univ.angers.info.m2.acdi.bm.request.response.RetourGeneral;
import fr.univ.angers.info.m2.acdi.bm.services.AdministrateurService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

/**
 * 
 * @author aharboul
 *
 */
@Api("API pour la gestion des administrateurs.")
@RestController
@RequestMapping(path = "/api/admin")
public class AdministrateurController {

	@Autowired
	private AdministrateurService administrateurService;

	@ApiOperation(value = "Création d'un nouveau administrateur")
	@PostMapping("/create")
	public ResponseEntity<RetourGeneral> creerAdministrateur(@RequestBody AdministrateurCreateDTO newAdministrateur) {
		return traitementReponse(administrateurService.save(newAdministrateur));
	}

	@ApiOperation(value = "Mise à jour d'un administrateur")
	@PutMapping("/update/{id}")
	public ResponseEntity<RetourGeneral> updateAdministrateur(@RequestBody AdministrateurUpdateDTO administrateur,
			@PathVariable Long id) {
		return traitementReponse(administrateurService.update(administrateur, id));
	}

	@ApiOperation(value = "Suppression d'un administrateur")
	@DeleteMapping("/delete/{id}")
	public void deleteAdministrateur(@PathVariable Long id) {
		administrateurService.deleteById(id);
	}

	@ApiOperation(value = "Récupérer tous les administrateurs")
	@GetMapping("/readAll")
	public ResponseEntity<RetourGeneral> all() {
		return traitementReponse(administrateurService.findAll());
	}

	@ApiOperation(value = "Récupérer un administrateur en renseignant son identifiant")
	@GetMapping("/read/{id}")
	public ResponseEntity<RetourGeneral> recupererAdministrateurParId(@PathVariable Long id) {
		return traitementReponse(administrateurService.findById(id));
	}

	@ApiOperation(value = "Authentification de l'administrateur en renseignant son email et mot de passe")
	@PostMapping("/login")
	public ResponseEntity<RetourGeneral> authentification(@RequestBody LoginDTO loginDTO) {
		return traitementReponse(administrateurService.login(loginDTO));
	}

	private ResponseEntity<RetourGeneral> traitementReponse(RetourGeneral retour) {
		if (retour.getRetour() != null) {
			return new ResponseEntity<>(retour, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(retour, HttpStatus.BAD_REQUEST);
		}
	}

}
