/**
 * 
 */
package fr.univ.angers.info.m2.acdi.bm.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author aharboul
 *
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String nomRessource;
	private String nomChamp;
	private Object valeurChamp;

	public ResourceNotFoundException(String nomRessource, String nomChamp, Object valeurChamp) {
		super(String.format("%s introuvable avec  %s: '%s'", nomRessource, nomChamp, valeurChamp));
		this.nomRessource = nomRessource;
		this.nomChamp = nomChamp;
		this.valeurChamp = valeurChamp;
	}

	public String getNomRessource() {
		return nomRessource;
	}

	public String getNomChamp() {
		return nomChamp;
	}

	public Object getValeurChamp() {
		return valeurChamp;
	}
}
