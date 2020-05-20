package fr.univ.angers.info.m2.acdi.bm.entities;

import java.io.Serializable;
import java.lang.reflect.Field;
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

import org.springframework.data.annotation.CreatedDate;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity(name = "Participant")
@Table(name = "participant")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Participant implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
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
	
	public boolean checkNull() throws IllegalAccessException {
		for (Field f : this.getClass().getDeclaredFields())
			if (f.get(this) != null)
				return false;
		return true;
	}

}
