package fr.univ.angers.info.m2.acdi.bm.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Question implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String valeur;
	private Boolean required;
	private Boolean filter;
	@OneToOne
	@JoinColumn(name="TYPE_QUESTION_ID")
	private TypeQuestion typequestion;
	@ManyToOne
	private Questionnaire questionnaire;
	@OneToMany(mappedBy = "question")
	private List<Reponse> reponses;
	@OneToMany(mappedBy = "question")
	private List<Proposition> propositions;

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the valeur
	 */
	public String getValeur() {
		return valeur;
	}

	/**
	 * @param valeur the valeur to set
	 */
	public void setValeur(String valeur) {
		this.valeur = valeur;
	}

	/**
	 * @return the required
	 */
	public Boolean getRequired() {
		return required;
	}

	/**
	 * @param required the required to set
	 */
	public void setRequired(Boolean required) {
		this.required = required;
	}

	/**
	 * @return the filter
	 */
	public Boolean getFilter() {
		return filter;
	}

	/**
	 * @param filter the filter to set
	 */
	public void setFilter(Boolean filter) {
		this.filter = filter;
	}

	/**
	 * @return the typequestion
	 */
	public TypeQuestion getTypequestion() {
		return typequestion;
	}

	/**
	 * @param typequestion the typequestion to set
	 */
	public void setTypequestion(TypeQuestion typequestion) {
		this.typequestion = typequestion;
	}

	/**
	 * @return the questionnaire
	 */
	public Questionnaire getQuestionnaire() {
		return questionnaire;
	}

	/**
	 * @param questionnaire the questionnaire to set
	 */
	public void setQuestionnaire(Questionnaire questionnaire) {
		this.questionnaire = questionnaire;
	}

	/**
	 * @return the reponses
	 */
	public List<Reponse> getReponses() {
		return reponses;
	}

	/**
	 * @param reponses the reponses to set
	 */
	public void setReponses(List<Reponse> reponses) {
		this.reponses = reponses;
	}

	/**
	 * @return the propositions
	 */
	public List<Proposition> getPropositions() {
		return propositions;
	}

	/**
	 * @param propositions the propositions to set
	 */
	public void setPropositions(List<Proposition> propositions) {
		this.propositions = propositions;
	}

}
