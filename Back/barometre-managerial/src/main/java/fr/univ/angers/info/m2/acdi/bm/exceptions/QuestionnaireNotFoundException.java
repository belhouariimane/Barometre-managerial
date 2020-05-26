/**
 * 
 */
package fr.univ.angers.info.m2.acdi.bm.exceptions;

/**
 * @author aharboul
 *
 */
public class QuestionnaireNotFoundException extends Exception {

	private static final long serialVersionUID = 1L;
	private Long id;

	public QuestionnaireNotFoundException(Long id) {
		this.id = id;
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

}
