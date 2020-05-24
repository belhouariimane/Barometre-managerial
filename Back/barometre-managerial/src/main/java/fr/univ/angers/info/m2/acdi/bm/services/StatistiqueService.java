package fr.univ.angers.info.m2.acdi.bm.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import fr.univ.angers.info.m2.acdi.bm.constantes.ConstantesREST;
import fr.univ.angers.info.m2.acdi.bm.dto.StatistiqueDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.StatistiqueItemDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.WrapperStatistiqueItemsDTO;
import fr.univ.angers.info.m2.acdi.bm.entities.Administrateur;
import fr.univ.angers.info.m2.acdi.bm.entities.Participant;
import fr.univ.angers.info.m2.acdi.bm.entities.Proposition;
import fr.univ.angers.info.m2.acdi.bm.entities.Question;
import fr.univ.angers.info.m2.acdi.bm.entities.Questionnaire;
import fr.univ.angers.info.m2.acdi.bm.entities.Reponse;
import fr.univ.angers.info.m2.acdi.bm.exceptions.ResourceNotFoundException;
import fr.univ.angers.info.m2.acdi.bm.repositories.QuestionRepository;
import fr.univ.angers.info.m2.acdi.bm.repositories.QuestionnaireRepository;
import fr.univ.angers.info.m2.acdi.bm.response.RetourGeneral;

@Service
public class StatistiqueService {

	@Autowired
	private QuestionRepository questionRepository;
	@Autowired
	private QuestionnaireRepository questionnaireRepository;

	public Integer nombreDePartcipantParQuestionnaire(Long idQuestionnaire) {
		final Questionnaire questionnaire = questionnaireRepository.findById(idQuestionnaire)
				.orElseThrow(() -> new ResourceNotFoundException("Questionnaire", "id", idQuestionnaire));
		if (questionnaire.getParticipants() != null)
			return questionnaire.getParticipants().size();
		return null;
	}

	public Integer nombreDePersonneRepondantAUneQuestion(Long idQuestionnaire, Long idQuestion) {
		final Questionnaire questionnaire = questionnaireRepository.findById(idQuestionnaire)
				.orElseThrow(() -> new ResourceNotFoundException("Questionnaire", "id", idQuestionnaire));
		Integer compteur = 0;
		if (questionnaire.getParticipants() != null)
			for (Participant participant : questionnaire.getParticipants()) {
				if (participant.getReponses() != null && !participant.getReponses().isEmpty()) {
					for (Reponse reponse : participant.getReponses()) {
						if (reponse.getQuestion() != null && reponse.getQuestion().getId().equals(idQuestion)) {
							compteur++;
						}
					}
				}
			}
		return compteur;
	}

	public RetourGeneral getStatsWithCsv(Long id) {
		RetourGeneral retourGeneral = new RetourGeneral();
		StatistiqueDTO statistiqueDTO = new StatistiqueDTO();
		WrapperStatistiqueItemsDTO wrapper = buildStatistiqueQuestionnaire(id);
		statistiqueDTO.setStatistiques(wrapper);
		statistiqueDTO.setDataCSV(construireCsv(wrapper));
		retourGeneral.setDescription(ConstantesREST.OK);
		retourGeneral.setRetour(statistiqueDTO);
		return retourGeneral;
	}

	private String construireCsv(final WrapperStatistiqueItemsDTO wrapper) {
		StringBuilder builder = new StringBuilder("");
		for (StatistiqueItemDTO si : wrapper.getStatistiques()) {
			builder.append(si.getQuestion());
			builder.append(",");
			builder.append(si.getQuestionFilter());
			builder.append(",");
			builder.append(si.getFilter());
			builder.append("\n");
			for (String label : si.getLabels()) {
				builder.append(label);
				builder.append(",");
			}
			if (builder.length() > 0) {
				builder.deleteCharAt(builder.length() - 1);
			}
			builder.append("\n");
			for (Integer data : si.getData()) {
				builder.append(data);
				builder.append(",");
			}
			if (builder.length() > 0) {
				builder.deleteCharAt(builder.length() - 1);
			}
			builder.append("\n\n");
		}
		return builder.toString();
	}

	public WrapperStatistiqueItemsDTO buildStatistiqueQuestionnaire(Long idQuestionnaire) {
		WrapperStatistiqueItemsDTO statistiqueDTO = new WrapperStatistiqueItemsDTO();
		List<Map<Proposition, Map<Proposition, Integer>>> list = getStatsQuestionnaire(idQuestionnaire);
		if (list == null || list.isEmpty())
			return null;
		for (Map<Proposition, Map<Proposition, Integer>> map : list) {
			for (Map.Entry<Proposition, Map<Proposition, Integer>> entryFilter : map.entrySet()) {
				String filter = entryFilter.getKey().getValeur();
				String questionFilter = entryFilter.getKey().getQuestion().getValeur();
				String question = null;
				List<String> labels = new ArrayList<>();
				List<Integer> data = new ArrayList<>();
				boolean visited = false;
				for (Map.Entry<Proposition, Integer> entry : entryFilter.getValue().entrySet()) {
					if (!visited) {
						question = entry.getKey().getQuestion().getValeur();
						visited = true;
					}
					labels.add(entry.getKey().getValeur());
					data.add(entry.getValue());
				}
				statistiqueDTO.addNewStatistiqueItem(question, questionFilter, filter, labels, data);
			}
		}
		return statistiqueDTO;
	}

	public List<Map<Proposition, Map<Proposition, Integer>>> getStatsQuestionnaire(Long idQuestionnaire) {
		final Questionnaire questionnaire = questionnaireRepository.findById(idQuestionnaire)
				.orElseThrow(() -> new ResourceNotFoundException("Questionnaire", "id", idQuestionnaire));
		List<Question> filteredQuestions = new ArrayList<>();
		List<Question> normalQuestions = new ArrayList<>();

		if (questionnaire.getQuestions() == null || questionnaire.getQuestions().isEmpty()) {
			return null;
		}

		if (questionnaire.getQuestions() != null && !questionnaire.getQuestions().isEmpty()) {
			for (Question question : questionnaire.getQuestions()) {
				if (question.getIsFilter()) {
					filteredQuestions.add(question);
				} else {
					normalQuestions.add(question);
				}
			}
		}
		List<Map<Proposition, Map<Proposition, Integer>>> statsQuestionnaireMap = new ArrayList<>();
		if (!filteredQuestions.isEmpty() && !normalQuestions.isEmpty()) {
			for (Question fq : filteredQuestions) {
				for (Question nq : normalQuestions) {
					statsQuestionnaireMap.add(getStatsQuestionByFiltredQuestion(nq, fq));
				}
			}
		}
		return statsQuestionnaireMap;
	}

	private Map<Proposition, Map<Proposition, Integer>> getStatsQuestionByFiltredQuestion(Question question,
			Question filter) {
		if (question == null || filter == null || question.getQuestionnaire() == null
				|| filter.getQuestionnaire() == null
				|| !question.getQuestionnaire().equals(filter.getQuestionnaire())) {
			return null;
		}
		Map<Proposition, Map<Proposition, Integer>> map = new HashMap<>();
		List<Participant> participants = question.getQuestionnaire().getParticipants();
		List<Proposition> propositionsQuestion = question.getPropositions();
		List<Proposition> propositionsQuestionFilter = filter.getPropositions();

		/**
		 * Initialiser la map de statistiques de la question par rapport a la question
		 * de filtre
		 */
		for (Proposition propositionFilter : propositionsQuestionFilter) {
			map.put(propositionFilter, new HashMap<>());
			for (Proposition proposition : propositionsQuestion) {
				map.get(propositionFilter).put(proposition, 0);
			}
		}

		/**
		 * Traitement
		 */
		for (Participant participant : participants) {
			if (participant.getReponses() != null && participant.getReponses().size() > 1) {
				for (Reponse reponseFilter : participant.getReponses()) {
					if (reponseFilter.getQuestion().equals(filter) && reponseFilter.getPropositions() != null
							&& !reponseFilter.getPropositions().isEmpty()) {
						for (Proposition propositionFilter : reponseFilter.getPropositions()) {
							for (Reponse reponse : participant.getReponses()) {
								if (reponse.getQuestion().equals(question) && reponse.getPropositions() != null
										&& !reponse.getPropositions().isEmpty()) {
									for (Proposition proposition : reponse.getPropositions()) {
										Integer compteurActuel = map.get(propositionFilter).get(proposition);
										map.get(propositionFilter).put(proposition, ++compteurActuel);
									}
								}
							}
						}
					}
				}
			}
		}
		return map;
	}
}
