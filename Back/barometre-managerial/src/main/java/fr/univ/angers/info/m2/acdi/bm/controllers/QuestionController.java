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

import fr.univ.angers.info.m2.acdi.bm.entities.Question;
import fr.univ.angers.info.m2.acdi.bm.request.response.ResponseSingleQuestion;
import fr.univ.angers.info.m2.acdi.bm.services.QuestionService;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/question")
//@CrossOrigin( origins = {"http://localhost:4200"} )
public class QuestionController {
	@Autowired
	private QuestionService questionService;
	
	@ApiOperation(value = "Création d'une question")
	@PostMapping("/create")
	public ResponseEntity<ResponseSingleQuestion> createOne(@RequestBody Question question) {
		ResponseSingleQuestion rsq = this.questionService.insertOne(question);
		return new ResponseEntity<ResponseSingleQuestion>(rsq, rsq.getStatus());
	}
	
	@ApiOperation(value = "Lecture d'une question en renseignant son identifiant")
	@GetMapping("/read/{id}")
	public ResponseEntity<ResponseSingleQuestion> read(@PathVariable("id") Long id) {
		ResponseSingleQuestion rsq = this.questionService.readQuestionById(id);
		return new ResponseEntity<ResponseSingleQuestion>(rsq, rsq.getStatus());
	}
	
	@ApiOperation(value = "Mise à jour des champs d'une question")
	@PostMapping("/update")
	public ResponseEntity<ResponseSingleQuestion> update(@RequestBody Question question) {
		ResponseSingleQuestion rsq = this.questionService.updateQuestion(question);
		return new ResponseEntity<ResponseSingleQuestion>(rsq, rsq.getStatus());
	}
	
	@ApiOperation(value = "Liste de toutes les questions associées à un questionnaire")
	@GetMapping("/findByIdQuestionnaire/{idQuestionnaire}")
	public List<Question> findByIdQuestionnaire(@PathVariable("idQuestionnaire") Long idQuestionnaire) {
		return this.questionService.findByIdQuestionnaire(idQuestionnaire);
	}
	
	@ApiOperation(value = "Suppression d'une question")
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable("id") Long id) {
		this.questionService.deleteById(id);
	}
}
