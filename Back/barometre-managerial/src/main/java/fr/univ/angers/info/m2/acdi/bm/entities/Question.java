package fr.univ.angers.info.m2.acdi.bm.entities;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import fr.univ.angers.info.m2.acdi.bm.enums.TypeQuestion;
import fr.univ.angers.info.m2.acdi.bm.helpers.Helpers;

@Entity
public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private Long idQuestionnaire;
	private String typeQuestion;
	private String valeur;
	private Boolean isRequired;
	private Boolean isFilter;
	private ArrayList<String> propositions;

	public Long getIdQuestionnaire() {
		return idQuestionnaire;
	}

	public void setIdQuestionnaire(Long idQuestionnaire) {
		this.idQuestionnaire = idQuestionnaire;
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

	public void setPropositions(ArrayList<String> propositions) {
		this.propositions = propositions;
	}

	public ArrayList<String> getPropositions() {
		return propositions;
	}

	public Long getId() {
		return id;
	}

	public Boolean validity() {
		if (this.idQuestionnaire == null || Helpers.strEmpty(this.typeQuestion) || Helpers.strEmpty(this.valeur)) {
			return false;
		}

		// Vérification de la validité du typeQuestion
		if (!TypeQuestion.contains(this.typeQuestion)) {
			return false;
		}

		// En fonction du type de question, vérifier
		// la validité des propositions
		if (TypeQuestion.CHECKBOX.toString().equals(this.typeQuestion)
				|| TypeQuestion.COMBOBOX.toString().equals(this.typeQuestion)
				|| TypeQuestion.EVALUATION.toString().equals(this.typeQuestion)
				|| TypeQuestion.RADIO.toString().equals(this.typeQuestion)) {
			if (Helpers.arrayListEmpty(this.propositions)) {
				return false;
			}
		} else {
			// Question OUVERTE
			if (!Helpers.arrayListEmpty(this.propositions)) {
				return false;
			}
		}
		return true;
	}
}
