/**
 * 
 */
package fr.univ.angers.info.m2.acdi.bm.request.response;

import java.io.Serializable;

/**
 * @author aharboul
 *
 */
public class RetourGeneral implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7870028619526546030L;
	private String description;
	private Object retour;

	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * @return the retour
	 */
	public Object getRetour() {
		return retour;
	}

	/**
	 * @param retour the retour to set
	 */
	public void setRetour(Object retour) {
		this.retour = retour;
	}

}
