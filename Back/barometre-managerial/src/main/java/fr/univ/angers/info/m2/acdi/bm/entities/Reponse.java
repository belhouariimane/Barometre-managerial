/**
 *
 */
package fr.univ.angers.info.m2.acdi.bm.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

/**
 * @author aharboul
 *
 */
/**
 * @author aharboul
 *
 */
@Entity(name = "Reponse")
@Table(name = "reponse")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Reponse implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String valeur;

	@ManyToOne(fetch = FetchType.LAZY)
	private Participant participant;

	@ManyToOne(fetch = FetchType.LAZY)
	private Question question;

//	@ManyToMany
	@OneToOne
	private Proposition proposition;

	public Reponse() {
		super();
	}

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
	 * @return the participant
	 */
	public Participant getParticipant() {
		return participant;
	}

	/**
	 * @param participant the participant to set
	 */
	public void setParticipant(Participant participant) {
		this.participant = participant;
	}

	/**
	 * @return the question
	 */
	public Question getQuestion() {
		return question;
	}

	/**
	 * @param question the question to set
	 */
	public void setQuestion(Question question) {
		this.question = question;
	}

	/**
	 * @return the proposition
	 */
	public Proposition getProposition() {
		return proposition;
	}

	/**
	 * @param proposition the proposition to set
	 */
	public void setProposition(Proposition proposition) {
		this.proposition = proposition;
	}

	@Override
	public String toString() {
		return "Reponse [id=" + id + ", valeur=" + valeur + ", participant=" + participant + ", question=" + question
				+ ", proposition=" + proposition + "]";
	}

}
