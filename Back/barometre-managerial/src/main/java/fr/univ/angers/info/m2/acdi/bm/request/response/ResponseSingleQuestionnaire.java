package fr.univ.angers.info.m2.acdi.bm.request.response;

import fr.univ.angers.info.m2.acdi.bm.entities.Questionnaire;

public class ResponseSingleQuestionnaire {
	private String message;
	private Questionnaire questionnaire;
	
	public ResponseSingleQuestionnaire(String message, Questionnaire questionnaire) {
		this.message = message;
		this.questionnaire = questionnaire;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Questionnaire getQuestionnaire() {
		return questionnaire;
	}

	public void setQuestionnaire(Questionnaire questionnaire) {
		this.questionnaire = questionnaire;
	}	
}
