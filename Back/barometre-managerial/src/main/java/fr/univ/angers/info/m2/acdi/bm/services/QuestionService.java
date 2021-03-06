package fr.univ.angers.info.m2.acdi.bm.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import fr.univ.angers.info.m2.acdi.bm.constantes.ConstantesREST;
import fr.univ.angers.info.m2.acdi.bm.entities.Proposition;
import fr.univ.angers.info.m2.acdi.bm.entities.Question;
import fr.univ.angers.info.m2.acdi.bm.repositories.PropositionRepository;
import fr.univ.angers.info.m2.acdi.bm.repositories.QuestionRepository;
import fr.univ.angers.info.m2.acdi.bm.request.response.ResponseSingleQuestion;
import fr.univ.angers.info.m2.acdi.bm.request.response.ResponseSingleQuestionnaire;

@Service
@Transactional
public class QuestionService {

	@Autowired
	private QuestionnaireService questionnaireService;
	@Autowired
	private QuestionRepository questionRepository;
	@Autowired
	private PropositionRepository propositionRepository;

	public ResponseSingleQuestion insertOne(Question question) {
		// vérification de la validité des champs de la question
		if (!question.validity().booleanValue()) {
			return new ResponseSingleQuestion(ConstantesREST.QUESTION_NOT_VALIDE, null, HttpStatus.BAD_REQUEST);
		}

		// vérification de l'existence du questionnaire
		ResponseSingleQuestionnaire rsquestionnaire = questionnaireService
				.readQuestionnaireById(question.getQuestionnaire().getId());
		if (rsquestionnaire.getQuestionnaire() == null) {
			return new ResponseSingleQuestion(ConstantesREST.QUESTIONNAIRE_NOT_FOUND, null, HttpStatus.BAD_REQUEST);
		}

		// Les champs isRequired et isFilter sont à FALSE par défaut
		if (question.getIsFilter() == null) {
			question.setIsFilter(false);
		}
		if (question.getIsRequired() == null) {
			question.setIsRequired(false);
		}
		if (question.getHasGraph() == null) {
			question.setHasGraph(false);
		}
		question.setQuestionnaire(rsquestionnaire.getQuestionnaire());

		// Faire une boucle, pour chaque proposition rajouter une référence à la
		// question
		for (Proposition p : question.getPropositions()) {
			p.setQuestion(question);
		}

		Question savedQuestion = this.questionRepository.save(question);

		return new ResponseSingleQuestion("Question rajoutée", savedQuestion, HttpStatus.OK);
	}

	public ResponseSingleQuestion readQuestionById(Long id) {
		Optional<Question> question = this.questionRepository.findById(id);
		if (!question.isPresent()) {
			return new ResponseSingleQuestion(ConstantesREST.QUESTION_NOT_FOUND, null, HttpStatus.NOT_FOUND);
		}
		return new ResponseSingleQuestion(ConstantesREST.QUESTION_FOUND, question.get(), HttpStatus.OK);
	}

	public ResponseSingleQuestion updateQuestion(Question question) {
		if (question.getId() == null) {
			return new ResponseSingleQuestion(ConstantesREST.QUESTION_UPDATE_ID_NULL, null, HttpStatus.BAD_REQUEST);
		}
		Optional<Question> lastRecord = this.questionRepository.findById(question.getId());
		if (!lastRecord.isPresent()) {
			return new ResponseSingleQuestion(ConstantesREST.QUESTION_NOT_FOUND, null, HttpStatus.NOT_FOUND);
		}

		// Les champs renseignés seront modifiés
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
		if (question.getHasGraph() != null) {
			questionToUpdate.setHasGraph(question.getHasGraph());
		}
		if (question.getOrdre() != null) {
			questionToUpdate.setOrdre(question.getOrdre());
		}
		if (question.getPropositions() != null && !question.getPropositions().isEmpty()) {

			if (questionToUpdate.getPropositions() != null && !questionToUpdate.getPropositions().isEmpty()) {
				for (Proposition proposition : questionToUpdate.getPropositions()) {
					proposition.setQuestion(null);
				}
				questionToUpdate.setPropositions(new ArrayList<Proposition>());
				for (final Proposition p : question.getPropositions()) {
					questionToUpdate.addProposition(p);
				}
			} else if (questionToUpdate.getPropositions() != null && questionToUpdate.getPropositions().isEmpty()) {
				for (final Proposition p : question.getPropositions()) {
					questionToUpdate.addProposition(p);
				}
			} else {
				questionToUpdate.setReponses(new ArrayList<>());
				for (final Proposition p : question.getPropositions()) {
					questionToUpdate.addProposition(p);
				}
			}
			// questionToUpdate.setPropositions(question.getPropositions());
			// this.propositionRepository.deleteByQuestion_id(question.getId());
		}

		Question savedQuestion = this.questionRepository.save(questionToUpdate);

		return new ResponseSingleQuestion(ConstantesREST.QUESTION_UPDATED, savedQuestion, HttpStatus.OK);
	}

	public List<Question> findByIdQuestionnaire(Long idQuestionnaire) {
		List<Question> result = this.questionRepository.findByQuestionnaire_Id(idQuestionnaire);
		Collections.sort(result); // tri croissant sur le champ ordre
		return result;
	}

	public void deleteById(Long id) {
		this.questionRepository.deleteById(id);
	}
}
