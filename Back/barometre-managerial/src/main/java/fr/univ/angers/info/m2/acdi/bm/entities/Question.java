package fr.univ.angers.info.m2.acdi.bm.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlTransient;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import fr.univ.angers.info.m2.acdi.bm.enums.TypeQuestion;
import fr.univ.angers.info.m2.acdi.bm.helpers.Helpers;

@Entity(name = "Question")
@Table(name = "question")
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Question implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String typeQuestion;
	private String valeur;
	private Boolean isRequired;
	private Boolean isFilter;

	// https://keepgrowing.in/java/springboot/how-to-get-json-response-only-with-an-id-of-the-related-entity/
		
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "questionnaire_id", nullable = false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
	@JsonIdentityReference(alwaysAsId = true)
	@JsonProperty("questionnaire")
	private Questionnaire questionnaire;

	@OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
	private List<Proposition> propositions;

	@JsonIgnore
	@OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Reponse> reponses;

	public Question() {
		super();
	}

	public void addProposition(Proposition proposition) {
		propositions.add(proposition);
		proposition.setQuestion(this.id);
	}

	public void removeProposition(Proposition proposition) {
		propositions.remove(proposition);
		proposition.setQuestion(null);
	}

	public void addReponse(Reponse reponse) {
		reponses.add(reponse);
		reponse.setQuestion(this);
	}

	public void removeReponse(Reponse reponse) {
		reponses.remove(reponse);
		reponse.setQuestion(null);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTypeQuestion() {
		return typeQuestion;
	}

	public void setTypeQuestion(String typeQuestion) {
		this.typeQuestion = typeQuestion;
	}

	public String getValeur() {
		return valeur;
	}

	public void setValeur(String valeur) {
		this.valeur = valeur;
	}

	public Boolean getIsRequired() {
		return isRequired;
	}

	public void setIsRequired(Boolean isRequired) {
		this.isRequired = isRequired;
	}

	public Boolean getIsFilter() {
		return isFilter;
	}

	public void setIsFilter(Boolean isFilter) {
		this.isFilter = isFilter;
	}

	public Questionnaire getQuestionnaire() {
		return questionnaire;
	}

	public void setQuestionnaire(Long questionnaire) {
		Questionnaire quest = new Questionnaire();
		quest.setId(questionnaire);
		this.questionnaire = quest;
	}

	@XmlTransient
	public List<Proposition> getPropositions() {
		return propositions;
	}

	public void setPropositions(List<Proposition> propositions) {
		this.propositions = propositions;
	}

	@XmlTransient
	public List<Reponse> getReponses() {
		return reponses;
	}

	public void setReponses(List<Reponse> reponses) {
		this.reponses = reponses;
	}

	@Override
	public String toString() {
		return "Question{" + "id=" + id + ", typeQuestion=" + typeQuestion + ", valeur=" + valeur + ", isRequired="
				+ isRequired + ", isFilter=" + isFilter /*+ ", propositionsString=" + propositionsString*/
				+ ", questionnaire=" + questionnaire + ", propositions=" + propositions + ", reponses=" + reponses
				+ '}';
	}

	public Boolean validity() {
		if (this.questionnaire == null || this.questionnaire.getId() == null || Helpers.strEmpty(this.typeQuestion)
				|| Helpers.strEmpty(this.valeur)) {
			return false;
		}

		// Vérification de la validité du typeQuestion
		if (!TypeQuestion.contains(this.typeQuestion)) {
			return false;
		}

		// En fonction du type de question, vérifier
		// la validité des propositions
//		if (TypeQuestion.CHECKBOX.toString().equals(this.typeQuestion)
//				|| TypeQuestion.COMBOBOX.toString().equals(this.typeQuestion)
//				|| TypeQuestion.EVALUATION.toString().equals(this.typeQuestion)
//				|| TypeQuestion.RADIO.toString().equals(this.typeQuestion)) {
//			if (Helpers.arrayListEmpty(this.propositions)) {
//				return false;
//			}
//		} else {
//			// Question OUVERTE
//			if (!Helpers.arrayListEmpty(this.propositions)) {
//				return false;
//			}
//		}
		return true;
	}
}
