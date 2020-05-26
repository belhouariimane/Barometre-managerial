package fr.univ.angers.info.m2.acdi.bm.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.univ.angers.info.m2.acdi.bm.dto.QuestionnaireCreateDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.QuestionnaireUpdateDTO;
import fr.univ.angers.info.m2.acdi.bm.entities.Questionnaire;
import fr.univ.angers.info.m2.acdi.bm.request.response.ResponseSingleQuestionnaire;
import fr.univ.angers.info.m2.acdi.bm.services.QuestionnaireService;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api/questionnaire")
public class QuestionnaireController {
	
	@Autowired
	private QuestionnaireService questionnaireService;
	
	@ApiOperation(value = "Création d'un questionnaire")
	@PostMapping("/create")
	public ResponseEntity<ResponseSingleQuestionnaire> create(@RequestBody QuestionnaireCreateDTO questionnaireDTO) {
		ResponseSingleQuestionnaire rsq = this.questionnaireService.insertOne(questionnaireDTO);
		return new ResponseEntity<ResponseSingleQuestionnaire>(rsq, rsq.getStatus());
	}
	
	@ApiOperation(value = "Lecture d'un questionnaire en renseignant son identifiant")
	@GetMapping("/read/{id}")
	public ResponseEntity<ResponseSingleQuestionnaire> read(@PathVariable("id") Long id) {
		ResponseSingleQuestionnaire rsq = this.questionnaireService.readQuestionnaireById(id);
		return new ResponseEntity<ResponseSingleQuestionnaire>(rsq, rsq.getStatus());
	}
	
	@ApiOperation(value = "Mise à jour des champs d'un questionnaire")
	@PostMapping("/update")
	public ResponseEntity<ResponseSingleQuestionnaire> update(@RequestBody QuestionnaireUpdateDTO questionnaireDTO) {
		ResponseSingleQuestionnaire rsq = this.questionnaireService.updateQuestionnaire(questionnaireDTO);
		return new ResponseEntity<ResponseSingleQuestionnaire>(rsq, rsq.getStatus());
	}
	
	@ApiOperation(value = "Liste de tous les questionnaires créés par un administrateur")
	@GetMapping("/findByIdAdministrateur/{idAdministrateur}")
	public List<Questionnaire> findByIdAdministrateur(@PathVariable("idAdministrateur") Long idAdministrateur) {
		return this.questionnaireService.findByIdAdministrateur(idAdministrateur);
	}
	
	@ApiOperation(value = "Suppression d'un questionnaire")
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable("id") Long id) {
		this.questionnaireService.deleteById(id);
	}
}
