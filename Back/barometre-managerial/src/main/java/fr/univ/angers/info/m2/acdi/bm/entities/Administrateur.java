/**
 *
 */
package fr.univ.angers.info.m2.acdi.bm.entities;

import java.io.Serializable;
import java.lang.reflect.Field;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlTransient;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

/**
 * @author aharboul
 *
 */
@Entity(name = "Administrateur")
@Table(name = "administrateur")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Administrateur implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(unique = true)
	private String email;
	private String password;
	private String nom;
	private String prenom;
	@JsonIgnore
	@OneToMany(mappedBy = "administrateur", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Questionnaire> questionnaires;

	/**
	 *
	 */
	public Administrateur() {
		super();
	}

	public void addQuestionnaire(Questionnaire questionnaire) {
		questionnaires.add(questionnaire);
		questionnaire.setAdministrateur(this);
	}

	public void removeQuestionnaire(Questionnaire questionnaire) {
		questionnaires.remove(questionnaire);
		questionnaire.setAdministrateur(null);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	@XmlTransient
	public List<Questionnaire> getQuestionnaires() {
		return questionnaires;
	}

	public void setQuestionnaires(List<Questionnaire> questionnaires) {
		this.questionnaires = questionnaires;
	}

	@Override
	public String toString() {
		return "Administrateur [id=" + id + ", email=" + email + ", password=" + password + ", nom=" + nom + ", prenom="
				+ prenom + "]";
	}
	
	public boolean checkNull() throws IllegalAccessException {
		for (Field f : this.getClass().getDeclaredFields())
			if (f.get(this) != null)
				return false;
		return true;
	}

}
