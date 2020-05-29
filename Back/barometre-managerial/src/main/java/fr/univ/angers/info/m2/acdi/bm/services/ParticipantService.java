package fr.univ.angers.info.m2.acdi.bm.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.univ.angers.info.m2.acdi.bm.constantes.ConstantesREST;
import fr.univ.angers.info.m2.acdi.bm.dto.ParticipantCreateDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.ParticipantRetourDTO;
import fr.univ.angers.info.m2.acdi.bm.entities.Participant;
import fr.univ.angers.info.m2.acdi.bm.entities.Proposition;
import fr.univ.angers.info.m2.acdi.bm.entities.Question;
import fr.univ.angers.info.m2.acdi.bm.entities.Questionnaire;
import fr.univ.angers.info.m2.acdi.bm.entities.Reponse;
import fr.univ.angers.info.m2.acdi.bm.exceptions.ResourceNotFoundException;
import fr.univ.angers.info.m2.acdi.bm.mapper.ParticipantMapper;
import fr.univ.angers.info.m2.acdi.bm.repositories.ParticipantRepository;
import fr.univ.angers.info.m2.acdi.bm.repositories.PropositionRepository;
import fr.univ.angers.info.m2.acdi.bm.repositories.QuestionRepository;
import fr.univ.angers.info.m2.acdi.bm.repositories.QuestionnaireRepository;
import fr.univ.angers.info.m2.acdi.bm.request.response.RetourGeneral;

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
	@Autowired
	private ParticipantMapper participantMapper;

	public RetourGeneral save(ParticipantCreateDTO dto) {
		RetourGeneral retour = new RetourGeneral();
		try {
			if (dto.checkNull()) {
				retour.setDescription(ConstantesREST.EMPTY_REQUEST);
			} else {
				Participant newParticipant = participantMapper.createDtoToEntity(dto);
				Long idQuestionnaire = newParticipant.getQuestionnaire().getId();
				Questionnaire q = questionnaireRepository.findById(idQuestionnaire)
						.orElseThrow(() -> new ResourceNotFoundException(Questionnaire.class.getSimpleName(), "id",
								idQuestionnaire));
				if (q.getDatePeremption().before(new Date())) {
					retour.setDescription(ConstantesREST.DATE_PEREMPTION_DEPASSE);
					return retour;
				}
				List<Long> idsQuestionsRequired = new ArrayList<>();
				List<Long> idsReponses = new ArrayList<>();
				if (q.getQuestions() != null && !q.getQuestions().isEmpty()) {
					for (Question question : q.getQuestions()) {
						if (question.getIsRequired().booleanValue())
							idsQuestionsRequired.add(question.getId());
					}
				}
				for (Reponse r : newParticipant.getReponses()) {
					idsReponses.add(r.getQuestion().getId());
				}
				boolean existenceAllReponseRequired = idsQuestionsRequired.stream().anyMatch(idsReponses::contains);
				if (!existenceAllReponseRequired) {
					retour.setDescription(ConstantesREST.REQUIRED_ANSWERS);
					return retour;
				}
				newParticipant.setQuestionnaire(q);
				for (Reponse r : newParticipant.getReponses()) {
					Long idQuestion = r.getQuestion().getId();
					final Question question = questionRepository.findById(idQuestion).orElseThrow(
							() -> new ResourceNotFoundException(Question.class.getSimpleName(), "id", idQuestion));

					r.setQuestion(question);
					r.setParticipant(newParticipant);
					if (r.getProposition() != null && r.getProposition().getId() != null) {
						Long idProposition = r.getProposition().getId();
						final Proposition proposition = propositionRepository.findById(idProposition)
								.orElseThrow(() -> new ResourceNotFoundException(Proposition.class.getSimpleName(),
										"id", idProposition));
						r.setProposition(proposition);
					}
				}
				newParticipant.setDateParticipation(new Date());
				newParticipant = participantRepository.save(newParticipant);
				ParticipantRetourDTO participantRetourDTO = participantMapper.entityToRetourDto(newParticipant);
				retour.setDescription(ConstantesREST.OK);
				retour.setRetour(participantRetourDTO);
			}
		} catch (ResourceNotFoundException e) {
			retour.setDescription(e.getMessage());
		} catch (Exception e) {
			retour.setDescription(ConstantesREST.CREATE_ERROR);
		}

		return retour;
	}

	public RetourGeneral findAll() {
		RetourGeneral retour = new RetourGeneral();
		try {
			Iterable<Participant> it = participantRepository.findAll();
			List<Participant> participants = new ArrayList<>();
			it.forEach(participants::add);
			if (participants.isEmpty()) {
				retour.setDescription(ConstantesREST.objectNotFound(participants));
			} else {
				List<ParticipantRetourDTO> retourlist = new ArrayList<>();
				for (Participant participant : participants) {
					retourlist.add(participantMapper.entityToRetourDto(participant));
				}
				retour.setDescription(ConstantesREST.OK);
				retour.setRetour(retourlist);
			}
		} catch (Exception e) {
			retour.setDescription(ConstantesREST.UNKNOWN_ERROR);
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
				found = participantRepository.findById(id)
						.orElseThrow(() -> new ResourceNotFoundException(Participant.class.getSimpleName(), "id", id));
				retour.setRetour(found);
				retour.setDescription(ConstantesREST.OK);
			} catch (ResourceNotFoundException e) {
				retour.setDescription(e.getMessage());
			}
		}
		return retour;
	}

}
