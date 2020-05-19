package fr.univ.angers.info.m2.acdi.bm.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.xml.bind.annotation.XmlTransient;

@Entity(name = "Participant")
@Table(name = "participant")
public class Participant implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Temporal(javax.persistence.TemporalType.DATE)
	private Date dateParticipation;
	private String prenom;
	private String nom;
	@ManyToOne(fetch = FetchType.LAZY)
	private Questionnaire questionnaire;
	@OneToMany(mappedBy = "participant", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Reponse> reponses;

	public Participant() {
		super();
	}

	public void addReponse(Reponse reponse) {
		reponses.add(reponse);
		reponse.setParticipant(this);
	}

	public void removeReponse(Reponse reponse) {
		reponses.remove(reponse);
		reponse.setParticipant(null);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDateParticipation() {
		return dateParticipation;
	}

	public void setDateParticipation(Date dateParticipation) {
		this.dateParticipation = dateParticipation;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public Questionnaire getQuestionnaire() {
		return questionnaire;
	}

	public void setQuestionnaire(Questionnaire questionnaire) {
		this.questionnaire = questionnaire;
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
		return "Participant{" + "id=" + id + ", dateParticipation=" + dateParticipation + ", prenom=" + prenom
				+ ", nom=" + nom + ", questionnaire=" + questionnaire + ", reponses=" + reponses + '}';
	}

}
