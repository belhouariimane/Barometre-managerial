package fr.univ.angers.info.m2.acdi.bm.dto;

import java.io.Serializable;
import java.lang.reflect.Field;
import java.util.List;

public class ParticipantCreateDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private String prenom;
	private String nom;
	private Long idQuestionnaire;
	private List<ReponseCreateDTO> reponses;

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

	/**
	 * @return the reponses
	 */
	public List<ReponseCreateDTO> getReponses() {
		return reponses;
	}

	/**
	 * @param reponses the reponses to set
	 */
	public void setReponses(List<ReponseCreateDTO> reponses) {
		this.reponses = reponses;
	}

	public boolean checkNull() throws IllegalAccessException {
		for (Field f : this.getClass().getDeclaredFields())
			if (f.get(this) != null)
				return false;
		return true;
	}

}
