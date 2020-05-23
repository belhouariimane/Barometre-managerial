/**
 * 
 */
package fr.univ.angers.info.m2.acdi.bm.exceptions;

/**
 * @author aharboul
 *
 */
public class ParticipantNotFoundException extends Exception {

	private Long id;

	public ParticipantNotFoundException(Long id) {
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
