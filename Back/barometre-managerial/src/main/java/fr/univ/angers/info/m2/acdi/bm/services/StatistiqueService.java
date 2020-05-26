package fr.univ.angers.info.m2.acdi.bm.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.univ.angers.info.m2.acdi.bm.constantes.ConstantesREST;
import fr.univ.angers.info.m2.acdi.bm.dto.StatistiqueDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.StatistiqueFiltreDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.StatistiqueGlobaleDTO;
import fr.univ.angers.info.m2.acdi.bm.entities.Participant;
import fr.univ.angers.info.m2.acdi.bm.entities.Proposition;
import fr.univ.angers.info.m2.acdi.bm.entities.Question;
import fr.univ.angers.info.m2.acdi.bm.entities.Questionnaire;
import fr.univ.angers.info.m2.acdi.bm.entities.Reponse;
import fr.univ.angers.info.m2.acdi.bm.exceptions.ResourceNotFoundException;
import fr.univ.angers.info.m2.acdi.bm.helpers.Helpers;
import fr.univ.angers.info.m2.acdi.bm.repositories.QuestionnaireRepository;
import fr.univ.angers.info.m2.acdi.bm.request.response.RetourGeneral;

@Service
public class StatistiqueService {

	@Autowired
	private QuestionnaireRepository questionnaireRepository;
	public static final String QUESTIONNAIRE_CLASS_NAME = Questionnaire.class.getSimpleName();

	public Integer nombreDePartcipantParQuestionnaire(Long idQuestionnaire) {
		final Questionnaire questionnaire = questionnaireRepository.findById(idQuestionnaire)
				.orElseThrow(() -> new ResourceNotFoundException(QUESTIONNAIRE_CLASS_NAME, "id", idQuestionnaire));
		if (questionnaire.getParticipants() != null)
			return questionnaire.getParticipants().size();
		return null;
	}

	public RetourGeneral getStatsWithCsv(Long idQuestionnaire) {
		RetourGeneral retourGeneral = new RetourGeneral();
		StatistiqueDTO statistiqueDTO = new StatistiqueDTO();

		try {
			statistiqueDTO.setStatistiquesGlobales(getStatsGlobaleQuestionnaire(idQuestionnaire));
			statistiqueDTO.setDataGlobalCSV(construireDataGlobalCsv(statistiqueDTO.getStatistiquesGlobales()));
			statistiqueDTO.setStatistiquesFiltres(buildWrapperStatistiqueQuestionnaireFiltre(idQuestionnaire));
			statistiqueDTO.setDataFilterCSV(construireDataFiltreCsv(statistiqueDTO.getStatistiquesFiltres()));
		} catch (Exception e) {
			retourGeneral.setDescription(ConstantesREST.UNKNOWN_ERROR);
		} finally {
			if (!Helpers.strEmpty(statistiqueDTO.getDataGlobalCSV()).booleanValue()) {
				retourGeneral.setDescription(ConstantesREST.OK);
			}
			retourGeneral.setRetour(statistiqueDTO);
		}

		return retourGeneral;
	}

	private List<StatistiqueGlobaleDTO> getStatsGlobaleQuestionnaire(Long idQuestionnaire) {
		final Questionnaire questionnaire = questionnaireRepository.findById(idQuestionnaire)
				.orElseThrow(() -> new ResourceNotFoundException(QUESTIONNAIRE_CLASS_NAME, "id", idQuestionnaire));
		List<StatistiqueGlobaleDTO> list = new ArrayList<>();
		if (questionnaire.getQuestions() != null) {
			for (Question question : questionnaire.getQuestions()) {
				if (question.getPropositions() != null && !question.getPropositions().isEmpty()) {
					StatistiqueGlobaleDTO statistiqueGlobaleDTO = new StatistiqueGlobaleDTO(question.getValeur(),
							new ArrayList<>(), new ArrayList<>());
					for (Proposition proposition : question.getPropositions()) {
						Integer nombreRepPropostition = nombrePersonneRepondantPropositionParQuestion(questionnaire,
								question.getId(), proposition.getId());
						statistiqueGlobaleDTO.getPropositions().add(proposition.getValeur());
						statistiqueGlobaleDTO.getNombreRepondantsParProposition().add(nombreRepPropostition);
					}
					list.add(statistiqueGlobaleDTO);
				}
			}
		}
		return list;
	}

	private Integer nombrePersonneRepondantPropositionParQuestion(Questionnaire questionnaire, Long idQuestion,
			Long idProposition) {
		Integer compteur = 0;
		if (questionnaire.getParticipants() != null) {
			for (Participant participant : questionnaire.getParticipants()) {
				if (participant.getReponses() != null && !participant.getReponses().isEmpty()) {
					for (Reponse reponse : participant.getReponses()) {
						if (reponse.getQuestion() != null && reponse.getQuestion().getId().equals(idQuestion)) {
							if (reponse.getProposition() != null && reponse.getProposition().getId() != null
									&& reponse.getProposition().getId().equals(idProposition)) {
								compteur++;
							}
						}
					}
				}
			}
		}

		return compteur;
	}

	private String construireDataGlobalCsv(final List<StatistiqueGlobaleDTO> list) {
		StringBuilder builder = new StringBuilder("");
		builder.append("Question");
		builder.append(",");
		builder.append("Reponse");
		builder.append(",");
		builder.append("Nombre de répondants");
		builder.append("\n");
		for (StatistiqueGlobaleDTO si : list) {
			for (int i = 0; i < si.getPropositions().size(); i++) {
				builder.append(si.getQuestion());
				builder.append(",");
				builder.append(si.getPropositions().get(i));
				builder.append(",");
				builder.append(si.getNombreRepondantsParProposition().get(i));
				builder.append("\n");
			}
		}
		return builder.toString();
	}

	private String construireDataFiltreCsv(final List<StatistiqueFiltreDTO> list) {
		StringBuilder builder = new StringBuilder("");
		builder.append("Question");
		builder.append(",");
		builder.append("Question de filtre");
		builder.append(",");
		builder.append("Filtre");
		builder.append(",");
		builder.append("Reponse");
		builder.append(",");
		builder.append("Nombre de répondants");
		builder.append("\n");
		for (StatistiqueFiltreDTO si : list) {
			for (int i = 0; i < si.getLabels().size(); i++) {
				builder.append(si.getQuestion());
				builder.append(",");
				builder.append(si.getQuestionFilter());
				builder.append(",");
				builder.append(si.getFilter());
				builder.append(",");
				builder.append(si.getLabels().get(i));
				builder.append(",");
				builder.append(si.getData().get(i));
				builder.append("\n");
			}
		}
		return builder.toString();
	}

	private List<StatistiqueFiltreDTO> buildWrapperStatistiqueQuestionnaireFiltre(Long idQuestionnaire) {
		List<Map<Proposition, Map<Proposition, Integer>>> list = getStatsQuestionnaireWithFilter(idQuestionnaire);
		if (list == null || list.isEmpty())
			return null;
		List<StatistiqueFiltreDTO> retour = new ArrayList<>();
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
				retour.add(new StatistiqueFiltreDTO(question, questionFilter, filter, labels, data));
			}
		}
		return retour;
	}

	private List<Map<Proposition, Map<Proposition, Integer>>> getStatsQuestionnaireWithFilter(Long idQuestionnaire) {
		final Questionnaire questionnaire = questionnaireRepository.findById(idQuestionnaire)
				.orElseThrow(() -> new ResourceNotFoundException(QUESTIONNAIRE_CLASS_NAME, "id", idQuestionnaire));
		List<Question> filteredQuestions = new ArrayList<>();
		List<Question> normalQuestions = new ArrayList<>();

		if (questionnaire.getQuestions() == null || questionnaire.getQuestions().isEmpty()) {
			return Collections.emptyList();
		}

		if (questionnaire.getQuestions() != null && !questionnaire.getQuestions().isEmpty()) {
			for (Question question : questionnaire.getQuestions()) {
				if (question.getIsFilter().booleanValue()) {
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
					if (reponseFilter.getQuestion().equals(filter) && reponseFilter.getProposition() != null) {
						for (Reponse reponse : participant.getReponses()) {
							if (reponse.getQuestion().equals(question) && reponse.getProposition() != null) {
								Integer compteurActuel = map.get(reponseFilter.getProposition())
										.get(reponse.getProposition());
								map.get(reponseFilter.getProposition()).put(reponse.getProposition(), ++compteurActuel);
							}
						}
					}
				}
			}
		}
		return map;
	}
}
