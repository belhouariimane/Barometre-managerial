package fr.univ.angers.info.m2.acdi.bm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.univ.angers.info.m2.acdi.bm.request.response.RetourGeneral;
import fr.univ.angers.info.m2.acdi.bm.services.StatistiqueService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api("API pour la gestion des statistiques.")
@RestController
@RequestMapping("/api/statistique")
public class StatistiqueController {

	@Autowired
	private StatistiqueService statistiqueService;

	@ApiOperation(value = "Récupérer les statistiques d'un questionnaire en renseignant son identifiant")
	@GetMapping("/{id}")
	public ResponseEntity<RetourGeneral> getStatistiqueQuestionnaire(@PathVariable("id") Long id) {
		return traitementReponse(statistiqueService.getStatsWithCsv(id));
	}

	private ResponseEntity<RetourGeneral> traitementReponse(RetourGeneral retour) {
		if (retour.getRetour() != null) {
			return new ResponseEntity<>(retour, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(retour, HttpStatus.BAD_REQUEST);
		}
	}

}
