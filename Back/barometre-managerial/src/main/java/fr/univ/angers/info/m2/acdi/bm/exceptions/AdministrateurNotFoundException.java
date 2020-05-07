/**
 * 
 */
package fr.univ.angers.info.m2.acdi.bm.exceptions;

/**
 * @author aharboul
 *
 */
public class AdministrateurNotFoundException extends Exception {

	private Long id;

	public AdministrateurNotFoundException(Long id) {
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
