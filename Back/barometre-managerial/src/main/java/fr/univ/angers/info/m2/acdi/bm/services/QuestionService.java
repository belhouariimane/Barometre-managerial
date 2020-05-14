package fr.univ.angers.info.m2.acdi.bm.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import fr.univ.angers.info.m2.acdi.bm.entities.Question;
import fr.univ.angers.info.m2.acdi.bm.repositories.QuestionRepository;
import fr.univ.angers.info.m2.acdi.bm.request.response.ResponseSingleQuestion;
import fr.univ.angers.info.m2.acdi.bm.request.response.ResponseSingleQuestionnaire;

@Service
public class QuestionService {

	@Autowired
	private QuestionnaireService questionnaireService;
	@Autowired
	private QuestionRepository questionRepository;
	
	public ResponseSingleQuestion insertOne(Question question) {
		// vérification de la validité des champs de la question
		if (!question.validity()) {
			return new ResponseSingleQuestion("Champs de la question invalides", null, HttpStatus.BAD_REQUEST);
		}
		
		// vérification de l'existence du questionnaire
		ResponseSingleQuestionnaire rsquestionnaire = questionnaireService.readQuestionnaireById(question.getIdQuestionnaire());
		if (rsquestionnaire.getQuestionnaire() == null) {
			return new ResponseSingleQuestion("Le questionnaire associée à cette question n'existe pas", null, HttpStatus.BAD_REQUEST);
		}
		
		// Les champs isRequired et isFilter sont à FALSE par défaut
		if (question.getIsFilter() == null) {
			question.setIsFilter(false);
		}
		if (question.getIsRequired() == null) {
			question.setIsRequired(false);
		}
		
		Question savedQuestion = this.questionRepository.save(question);
		return new ResponseSingleQuestion("Question rajoutée", savedQuestion, HttpStatus.OK);
	}
	
	public ResponseSingleQuestion readQuestionById(Long id) {
		Optional<Question> question = this.questionRepository.findById(id);
		if (!question.isPresent()) {
			return new ResponseSingleQuestion("La question d'identifiant renseigné n'a pas été trouvé", null, HttpStatus.valueOf(419));
		}
		return new ResponseSingleQuestion("Question trouvée", question.get(), HttpStatus.OK);
	}
	
	public ResponseSingleQuestion updateQuestion(Question question) {
		if (question.getId() == null) {
			return new ResponseSingleQuestion("Il faut renseigner l'identifiant de la question à mettre à jour", null, HttpStatus.BAD_REQUEST);
		}
		Optional<Question> lastRecord = this.questionRepository.findById(question.getId());
		if (!lastRecord.isPresent()) {
			return new ResponseSingleQuestion("La question n'a pas été trouvée", null, HttpStatus.valueOf(419));
		}
		
		// Les champs renseignés seront modifiés
		// TODO : Rajouter des tests de validités de la question
		Question questionToUpdate = lastRecord.get();
		if (question.getTypeQuestion() != null) {
			questionToUpdate.setTypeQuestion(question.getTypeQuestion());
		}
		if (question.getValeur() != null) {
			questionToUpdate.setValeur(question.getValeur());
		}
		if (question.getIsRequired() != null) {
			questionToUpdate.setIsRequired(question.getIsRequired());
		}
		if (question.getIsFilter() != null) {
			questionToUpdate.setIsFilter(question.getIsFilter());
		}
		if (question.getPropositions() != null) {
			questionToUpdate.setPropositions(question.getPropositions());
		}
		
		Question savedQuestion = this.questionRepository.save(questionToUpdate);
		
		return new ResponseSingleQuestion("Question mise à jour", savedQuestion, HttpStatus.OK);
	}
	
	public List<Question> findByIdQuestionnaire(Long idQuestionnaire) {
		return this.questionRepository.findByIdQuestionnaire(idQuestionnaire);
	}
}
