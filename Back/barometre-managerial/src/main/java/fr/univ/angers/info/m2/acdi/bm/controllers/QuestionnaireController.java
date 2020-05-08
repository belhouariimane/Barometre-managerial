package fr.univ.angers.info.m2.acdi.bm.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.univ.angers.info.m2.acdi.bm.entities.Questionnaire;
import fr.univ.angers.info.m2.acdi.bm.request.response.ResponseSingleQuestionnaire;
import fr.univ.angers.info.m2.acdi.bm.services.QuestionnaireService;

@RestController
@RequestMapping("/questionnaire")
public class QuestionnaireController {
	
	@Autowired
	private QuestionnaireService questionnaireService;
	
	@PostMapping("/create")
	public ResponseEntity<ResponseSingleQuestionnaire> create(@RequestBody Questionnaire questionnaire) {
		return this.questionnaireService.creerQuestionnaire(questionnaire);
	}
	
	@GetMapping("/read/{id}")
	public ResponseEntity<ResponseSingleQuestionnaire> read(@PathVariable("id") Long id) {
		return this.questionnaireService.readQuestionnaire(id);
	}
	
	@PutMapping("/update")
	public ResponseEntity<ResponseSingleQuestionnaire> update(Questionnaire questionnaire) {
		return this.questionnaireService.updateQuestionnaire(questionnaire);
	}
	
	@GetMapping("/findByIdAdministrateur/{idAdministrateur}")
	public List<Questionnaire> findByIdAdministrateur(@PathVariable("idAdministrateur") Long idAdministrateur) {
		return this.questionnaireService.findByIdAdministrateur(idAdministrateur);
	}
}
