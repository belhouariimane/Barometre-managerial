package fr.univ.angers.info.m2.acdi.bm.dto;

import java.io.Serializable;
import java.util.List;

public class StatistiqueFiltreDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	private String question;
	private String questionFilter;
	private String filter;
	private List<String> labels;
	private List<Integer> data;

	/**
	 * @param filter
	 * @param questionFilter
	 * @param labels
	 * @param data
	 */
	public StatistiqueFiltreDTO(String question, String questionFilter, String filter, List<String> labels,
			List<Integer> data) {
		super();
		this.filter = filter;
		this.question = question;
		this.questionFilter = questionFilter;
		this.labels = labels;
		this.data = data;
	}

	/**
	 * @return the filter
	 */
	public String getFilter() {
		return filter;
	}

	/**
	 * @param filter the filter to set
	 */
	public void setFilter(String filter) {
		this.filter = filter;
	}

	/**
	 * @return the question
	 */
	public String getQuestion() {
		return question;
	}

	/**
	 * @param question the question to set
	 */
	public void setQuestion(String question) {
		this.question = question;
	}

	/**
	 * @return the questionFilter
	 */
	public String getQuestionFilter() {
		return questionFilter;
	}

	/**
	 * @param questionFilter the questionFilter to set
	 */
	public void setQuestionFilter(String questionFilter) {
		this.questionFilter = questionFilter;
	}

	/**
	 * @return the labels
	 */
	public List<String> getLabels() {
		return labels;
	}

	/**
	 * @param labels the labels to set
	 */
	public void setLabels(List<String> labels) {
		this.labels = labels;
	}

	/**
	 * @return the data
	 */
	public List<Integer> getData() {
		return data;
	}

	/**
	 * @param data the data to set
	 */
	public void setData(List<Integer> data) {
		this.data = data;
	}

}
