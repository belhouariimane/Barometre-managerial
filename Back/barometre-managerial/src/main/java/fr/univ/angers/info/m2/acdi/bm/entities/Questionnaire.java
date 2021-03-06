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
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlTransient;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import fr.univ.angers.info.m2.acdi.bm.helpers.Helpers;

@Entity(name = "Questionnaire")
@Table(name = "questionnaire")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Questionnaire implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String titre;
	private String url;
	@Temporal(TemporalType.DATE)
	private Date datePeremption;
	private Boolean anonymous;
	private String description;
	private String remerciement;
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateCreation;

	// https://keepgrowing.in/java/springboot/how-to-get-json-response-only-with-an-id-of-the-related-entity/
	@ManyToOne(fetch = FetchType.LAZY)
	private Administrateur administrateur;

	@JsonIgnore
	@OneToMany(mappedBy = "questionnaire", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Participant> participants;

	@JsonIgnore
	@OneToMany(mappedBy = "questionnaire", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Question> questions;

	public Questionnaire() {
		super();
	}

	public void addParticipant(Participant participant) {
		participants.add(participant);
		participant.setQuestionnaire(this);
	}

	public void removeParticipant(Participant participant) {
		participants.remove(participant);
		participant.setQuestionnaire(null);
	}

	public void addQuestion(Question question) {
		questions.add(question);
		question.setQuestionnaire(this);
	}

	public void removeQuestion(Question question) {
		questions.remove(question);
		question.setQuestionnaire(null);
	}

	public Boolean validity() {
		return (this.administrateur != null && this.administrateur.getId() != null && !Helpers.strEmpty(this.titre)
				&& this.datePeremption != null);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Date getDatePeremption() {
		return datePeremption;
	}

	public void setDatePeremption(Date datePeremption) {
		this.datePeremption = datePeremption;
	}

	public Boolean getAnonymous() {
		return anonymous;
	}

	public void setAnonymous(Boolean anonymous) {
		this.anonymous = anonymous;
	}

	public Administrateur getAdministrateur() {
		return administrateur;
	}

	public void setAdministrateur(Administrateur administrateur) {
		this.administrateur = administrateur;
	}

	@XmlTransient
	public List<Participant> getParticipants() {
		return participants;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getRemerciement() {
		return remerciement;
	}

	public void setRemerciement(String remerciement) {
		this.remerciement = remerciement;
	}

	public Date getDateCreation() {
		return dateCreation;
	}

	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}

	public void setParticipants(List<Participant> participants) {
		this.participants = participants;
	}

	@XmlTransient
	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}

	@Override
	public String toString() {
		return "Questionnaire{" + "id=" + id + ", titre=" + titre + ", url=" + url + ", datePeremption="
				+ datePeremption + ", anonymous=" + anonymous + ", administrateur=" + administrateur + ", participants="
				+ participants + ", questions=" + questions + ", description" + description + ", remerciement" + remerciement
				+ ", dateCreation" + dateCreation + "}";
	}

}
