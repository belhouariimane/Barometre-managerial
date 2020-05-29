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
	public static final String SAPARATOR = ";";

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
		final Questionnaire questionnaire = questionnaireRepository.findById(idQuestionnaire)
				.orElseThrow(() -> new ResourceNotFoundException(QUESTIONNAIRE_CLASS_NAME, "id", idQuestionnaire));
		try {
			statistiqueDTO.setStatistiquesGlobales(getStatsGlobaleQuestionnaire(questionnaire));
			statistiqueDTO.setDataGlobalCSV(construireDataGlobalCsv(statistiqueDTO.getStatistiquesGlobales()));
			statistiqueDTO.setDataNonAnonymousCSV(getStatsByAnounymous(questionnaire));
			statistiqueDTO.setStatistiquesFiltres(getStatsFiltreQuestionnaire(questionnaire));
			statistiqueDTO.setDataFilterCSV(construireDataFiltreCsv(statistiqueDTO.getStatistiquesFiltres()));
		} catch (ResourceNotFoundException e) {
			retourGeneral.setDescription(e.getMessage());
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

	private String getStatsByAnounymous(final Questionnaire questionnaire) {
		String resultat = "";
		if (questionnaire.getQuestions() != null && !questionnaire.getQuestions().isEmpty()) {
			List<String> questionsLabels = new ArrayList<>();
			for (Question question : questionnaire.getQuestions()) {
				questionsLabels.add(question.getValeur());
			}
			String entete = construireEnteteAnonymousCsv(questionnaire.getAnonymous().booleanValue(), questionsLabels);
			List<String> itemReponsesFormated = new ArrayList<>();
			for (Participant participant : questionnaire.getParticipants()) {
				List<List<String>> reponsesLabels = new ArrayList<>();
				for (Question question : questionnaire.getQuestions()) {
					List<String> reponses = new ArrayList<>();
					if (participant.getReponses() != null && !participant.getReponses().isEmpty()) {
						for (Reponse reponse : participant.getReponses()) {
							if (reponse.getQuestion().getId().equals(question.getId())) {
								if (reponse.getProposition() != null) {
									reponses.add(reponse.getProposition().getValeur());
								} else if (!Helpers.strEmpty(reponse.getValeur()).booleanValue()) {
									reponses.add(reponse.getValeur());
								}
							}
						}
					}
					reponsesLabels.add(reponses);
				}
				String item = construireDataAnonymousCsv(questionnaire.getAnonymous().booleanValue(), participant,
						reponsesLabels);
				itemReponsesFormated.add(item);

			}
			resultat = construireAnonymousCsv(entete, itemReponsesFormated);
		}
		return resultat;
	}

	private String construireAnonymousCsv(String entete, List<String> data) {
		StringBuilder builder = new StringBuilder("");
		builder.append(entete);
		data.forEach(builder::append);
		return builder.toString();
	}

	private String construireEnteteAnonymousCsv(boolean isAnounymous, List<String> questionsLabels) {
		StringBuilder builder = new StringBuilder("");
		if (isAnounymous) {
			builder.append("idParticipant");
			builder.append(SAPARATOR);
		} else {
			builder.append("Nom");
			builder.append(SAPARATOR);
			builder.append("Prenom");
			builder.append(SAPARATOR);
		}
		for (String question : questionsLabels) {
			builder.append(question);
			builder.append(SAPARATOR);
		}
		builder.setLength(builder.length() - 1);
		builder.append("\n");
		return builder.toString();
	}

	private String construireDataAnonymousCsv(boolean isAnounymous, Participant participant,
			List<List<String>> reponsesLabels) {
		StringBuilder builder = new StringBuilder("");
		if (isAnounymous) {
			builder.append(participant.getId());
			builder.append(SAPARATOR);
		} else {
			builder.append(participant.getNom());
			builder.append(SAPARATOR);
			builder.append(participant.getPrenom());
			builder.append(SAPARATOR);
		}

		for (List<String> reponse : reponsesLabels) {
			if (reponse.isEmpty()) {
				builder.append("Non répondu");
				builder.append(SAPARATOR);
			} else {
				builder.append("[");
				for (String prop : reponse) {
					builder.append(prop);
					builder.append("|");
				}
				builder.setLength(builder.length() - 1);
				builder.append("]");
			}
			builder.append(SAPARATOR);
		}
		builder.setLength(builder.length() - 1);
		builder.append("\n");
		return builder.toString();
	}

	private List<StatistiqueGlobaleDTO> getStatsGlobaleQuestionnaire(final Questionnaire questionnaire) {
		List<StatistiqueGlobaleDTO> list = new ArrayList<>();
		if (questionnaire.getQuestions() != null) {
			for (Question question : questionnaire.getQuestions()) {
				if (question.getHasGraph() != null && question.getHasGraph().booleanValue()
						&& question.getPropositions() != null && !question.getPropositions().isEmpty()) {
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
						if (reponse.getQuestion() != null && reponse.getQuestion().getId().equals(idQuestion)
								&& reponse.getProposition() != null && reponse.getProposition().getId() != null
								&& reponse.getProposition().getId().equals(idProposition)) {
							compteur++;
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
		builder.append(SAPARATOR);
		builder.append("Reponse");
		builder.append(SAPARATOR);
		builder.append("Nombre de répondants");
		builder.append(SAPARATOR);
		for (StatistiqueGlobaleDTO si : list) {
			for (int i = 0; i < si.getPropositions().size(); i++) {
				builder.append(si.getQuestion());
				builder.append(SAPARATOR);
				builder.append(si.getPropositions().get(i));
				builder.append(SAPARATOR);
				builder.append(si.getNombreRepondantsParProposition().get(i));
				builder.append("\n");
			}
		}
		return builder.toString();
	}

	private List<StatistiqueFiltreDTO> getStatsFiltreQuestionnaire(final Questionnaire questionnaire) {
		List<Map<Proposition, Map<Proposition, Integer>>> list = getStatsQuestionnaireWithFilter(questionnaire);
		if (list == null || list.isEmpty())
			return Collections.emptyList();
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

	private List<Map<Proposition, Map<Proposition, Integer>>> getStatsQuestionnaireWithFilter(
			final Questionnaire questionnaire) {
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
					if (question.getHasGraph().booleanValue()) {
						normalQuestions.add(question);
					}
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

	private String construireDataFiltreCsv(final List<StatistiqueFiltreDTO> list) {
		StringBuilder builder = new StringBuilder("");
		builder.append("Question");
		builder.append(SAPARATOR);
		builder.append("Question de filtre");
		builder.append(SAPARATOR);
		builder.append("Filtre");
		builder.append(SAPARATOR);
		builder.append("Reponse");
		builder.append(SAPARATOR);
		builder.append("Nombre de répondants");
		builder.append("\n");
		for (StatistiqueFiltreDTO si : list) {
			for (int i = 0; i < si.getLabels().size(); i++) {
				builder.append(si.getQuestion());
				builder.append(SAPARATOR);
				builder.append(si.getQuestionFilter());
				builder.append(SAPARATOR);
				builder.append(si.getFilter());
				builder.append(SAPARATOR);
				builder.append(si.getLabels().get(i));
				builder.append(SAPARATOR);
				builder.append(si.getData().get(i));
				builder.append("\n");
			}
		}
		return builder.toString();
	}
}
