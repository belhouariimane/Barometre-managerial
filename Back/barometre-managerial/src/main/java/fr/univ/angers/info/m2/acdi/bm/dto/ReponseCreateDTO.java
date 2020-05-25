package fr.univ.angers.info.m2.acdi.bm.dto;

import java.io.Serializable;
import java.lang.reflect.Field;
import java.util.List;

public class ReponseCreateDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private Long idQuestion;
	private String valeur;
	private List<Long> idsProposition;

	/**
	 * @return the idQuestion
	 */
	public Long getIdQuestion() {
		return idQuestion;
	}

	/**
	 * @param idQuestion the idQuestion to set
	 */
	public void setIdQuestion(Long idQuestion) {
		this.idQuestion = idQuestion;
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
	 * @return the idsProposition
	 */
	public List<Long> getIdsProposition() {
		return idsProposition;
	}

	/**
	 * @param idsProposition the idsProposition to set
	 */
	public void setIdsProposition(List<Long> idsProposition) {
		this.idsProposition = idsProposition;
	}

	public boolean checkNull() throws IllegalAccessException {
		for (Field f : this.getClass().getDeclaredFields())
			if (f.get(this) != null)
				return false;
		return true;
	}

}
