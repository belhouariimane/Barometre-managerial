package fr.univ.angers.info.m2.acdi.bm.request.response;

import org.springframework.http.HttpStatus;

import fr.univ.angers.info.m2.acdi.bm.entities.Questionnaire;

public class ResponseSingleQuestionnaire {
	private String message;
	private Questionnaire questionnaire;
	private HttpStatus status;
	
	public ResponseSingleQuestionnaire(String message, Questionnaire questionnaire, HttpStatus status) {
		this.message = message;
		this.questionnaire = questionnaire;
		this.status = status;
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

	public HttpStatus getStatus() {
		return status;
	}

	public void setStatus(HttpStatus status) {
		this.status = status;
	}
	
}
