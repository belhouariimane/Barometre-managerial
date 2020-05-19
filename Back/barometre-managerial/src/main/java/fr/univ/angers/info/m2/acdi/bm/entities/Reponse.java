/**
 *
 */
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

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String valeur;

	@ManyToOne(fetch = FetchType.LAZY)
	private Participant participant;

	@ManyToOne(fetch = FetchType.LAZY)
	private Question question;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "reponse_id")
	private List<Proposition> propositions;

	public Reponse() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getValeur() {
		return valeur;
	}

	public void setValeur(String valeur) {
		this.valeur = valeur;
	}

	public Participant getParticipant() {
		return participant;
	}

	public void setParticipant(Participant participant) {
		this.participant = participant;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	@XmlTransient
	public List<Proposition> getPropositions() {
		return propositions;
	}

	public void setPropositions(List<Proposition> propositions) {
		this.propositions = propositions;
	}

	@Override
	public String toString() {
		return "Reponse{" + "id=" + id + ", valeur=" + valeur + ", participant=" + participant + ", question="
				+ question + ", propositions=" + propositions + '}';
	}

}
