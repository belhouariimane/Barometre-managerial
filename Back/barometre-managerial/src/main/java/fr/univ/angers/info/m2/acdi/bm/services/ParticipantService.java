package fr.univ.angers.info.m2.acdi.bm.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.univ.angers.info.m2.acdi.bm.constantes.ConstantesREST;
import fr.univ.angers.info.m2.acdi.bm.entities.Participant;
import fr.univ.angers.info.m2.acdi.bm.entities.Proposition;
import fr.univ.angers.info.m2.acdi.bm.entities.Question;
import fr.univ.angers.info.m2.acdi.bm.entities.Questionnaire;
import fr.univ.angers.info.m2.acdi.bm.entities.Reponse;
import fr.univ.angers.info.m2.acdi.bm.exceptions.ParticipantNotFoundException;
import fr.univ.angers.info.m2.acdi.bm.exceptions.QuestionnaireNotFoundException;
import fr.univ.angers.info.m2.acdi.bm.repositories.ParticipantRepository;
import fr.univ.angers.info.m2.acdi.bm.repositories.PropositionRepository;
import fr.univ.angers.info.m2.acdi.bm.repositories.QuestionRepository;
import fr.univ.angers.info.m2.acdi.bm.repositories.QuestionnaireRepository;
import fr.univ.angers.info.m2.acdi.bm.response.RetourGeneral;

@Service
public class ParticipantService {

	@Autowired
	private ParticipantRepository participantRepository;
	@Autowired
	private QuestionnaireRepository questionnaireRepository;
	@Autowired
	private PropositionRepository propositionRepository;
	@Autowired
	private QuestionRepository questionRepository;

	public RetourGeneral save(Participant participant) {
		RetourGeneral retour = new RetourGeneral();
		try {
			if (participant.checkNull()) {
				retour.setDescription(ConstantesREST.EMPTY_REQUEST);
			} else {
				Long idQuestionnaire = participant.getQuestionnaire().getId();
				Questionnaire q = questionnaireRepository.findById(idQuestionnaire)
						.orElseThrow(() -> new QuestionnaireNotFoundException(idQuestionnaire));
				participant.setQuestionnaire(q);
				for (Reponse r : participant.getReponses()) {
					Long idQuestion = r.getQuestion().getId();
					final Question question = questionRepository.findById(idQuestion)
							.orElseThrow(() -> new QuestionnaireNotFoundException(idQuestion));
					r.setQuestion(question);
					r.setParticipant(participant);
					for (Proposition proposition : r.getPropositions()) {
						proposition.setQuestion(question);
					}
				}
				participant = participantRepository.save(participant);
				retour.setDescription(ConstantesREST.OK);
				retour.setRetour(participant);
			}
		} catch (QuestionnaireNotFoundException e) {
			retour.setDescription(ConstantesREST.ID_NOT_FOUND);
		} catch (Exception e) {
			retour.setDescription(ConstantesREST.CREATE_ERROR);
		}

		return retour;
	}

	public RetourGeneral findAll() {
		RetourGeneral retour = new RetourGeneral();

		Iterable<Participant> it = participantRepository.findAll();
		List<Participant> participants = new ArrayList<Participant>();
		it.forEach(participants::add);
		if (participants == null || participants.isEmpty()) {
			retour.setDescription(ConstantesREST.objectNotFound(participants));
		} else {
			retour.setDescription(ConstantesREST.OK);
			retour.setRetour(participants);
		}
		return retour;
	}

	public RetourGeneral findById(Long id) {
		RetourGeneral retour = new RetourGeneral();
		if (id == null) {
			retour.setDescription(ConstantesREST.ID_NULL);
		} else {
			Participant found = null;
			try {
				found = participantRepository.findById(id).orElseThrow(() -> new ParticipantNotFoundException(id));
				retour.setRetour(found);
				retour.setDescription(ConstantesREST.OK);
			} catch (ParticipantNotFoundException e) {
				retour.setDescription(ConstantesREST.objectNotFound(found));
			}
		}
		return retour;
	}

}
