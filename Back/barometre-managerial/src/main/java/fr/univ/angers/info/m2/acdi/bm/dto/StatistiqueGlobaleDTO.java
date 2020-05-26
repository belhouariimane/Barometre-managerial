/**
 *
 */
package fr.univ.angers.info.m2.acdi.bm.dto;

import java.io.Serializable;
import java.util.List;

/**
 * @author aharboul
 *
 */

public class StatistiqueGlobaleDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private String question;
	private List<String> propositions;
	private List<Integer> nombreRepondantsParProposition;

	/**
	 * @param question
	 * @param proposition
	 * @param nombreRepondants
	 */
	public StatistiqueGlobaleDTO(String question, List<String> propositions,
			List<Integer> nombreRepondantsParProposition) {
		super();
		this.question = question;
		this.propositions = propositions;
		this.nombreRepondantsParProposition = nombreRepondantsParProposition;
	}

	/**
	 * @return the question
	 */
	public String getQuestion() {
		return question;
	}

	/**
	 * @param question the question to set
	 */
	public void setQuestion(String question) {
		this.question = question;
	}

	/**
	 * @return the propositions
	 */
	public List<String> getPropositions() {
		return propositions;
	}

	/**
	 * @param propositions the propositions to set
	 */
	public void setPropositions(List<String> propositions) {
		this.propositions = propositions;
	}

	/**
	 * @return the nombreRepondantsParProposition
	 */
	public List<Integer> getNombreRepondantsParProposition() {
		return nombreRepondantsParProposition;
	}

	/**
	 * @param nombreRepondantsParProposition the nombreRepondantsParProposition to
	 *                                       set
	 */
	public void setNombreRepondantsParProposition(List<Integer> nombreRepondantsParProposition) {
		this.nombreRepondantsParProposition = nombreRepondantsParProposition;
	}

}
