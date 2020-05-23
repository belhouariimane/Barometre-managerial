package fr.univ.angers.info.m2.acdi.bm.request.response;

import org.springframework.http.HttpStatus;

import fr.univ.angers.info.m2.acdi.bm.entities.Question;

public class ResponseSingleQuestion {
	private String message;
	private Question question;
	private HttpStatus status;
	public ResponseSingleQuestion(String message, Question question, HttpStatus status) {
		this.message = message;
		this.question = question;
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Question getQuestion() {
		return question;
	}
	public void setQuestion(Question question) {
		this.question = question;
	}
	public HttpStatus getStatus() {
		return status;
	}
	public void setStatus(HttpStatus status) {
		this.status = status;
	}
}
