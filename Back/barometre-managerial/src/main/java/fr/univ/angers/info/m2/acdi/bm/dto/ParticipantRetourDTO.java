package fr.univ.angers.info.m2.acdi.bm.dto;

import java.io.Serializable;
import java.util.Date;

public class ParticipantRetourDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private Date dateParticipation;
	private String prenom;
	private String nom;
	private Long idQuestionnaire;

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
	 * @return the dateParticipation
	 */
	public Date getDateParticipation() {
		return dateParticipation;
	}

	/**
	 * @param dateParticipation the dateParticipation to set
	 */
	public void setDateParticipation(Date dateParticipation) {
		this.dateParticipation = dateParticipation;
	}

	/**
	 * @return the prenom
	 */
	public String getPrenom() {
		return prenom;
	}

	/**
	 * @param prenom the prenom to set
	 */
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	/**
	 * @return the nom
	 */
	public String getNom() {
		return nom;
	}

	/**
	 * @param nom the nom to set
	 */
	public void setNom(String nom) {
		this.nom = nom;
	}

	/**
	 * @return the idQuestionnaire
	 */
	public Long getIdQuestionnaire() {
		return idQuestionnaire;
	}

	/**
	 * @param idQuestionnaire the idQuestionnaire to set
	 */
	public void setIdQuestionnaire(Long idQuestionnaire) {
		this.idQuestionnaire = idQuestionnaire;
	}

}
