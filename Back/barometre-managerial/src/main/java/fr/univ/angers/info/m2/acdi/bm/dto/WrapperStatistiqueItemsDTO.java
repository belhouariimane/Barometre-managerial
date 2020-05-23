/**
 *
 */
package fr.univ.angers.info.m2.acdi.bm.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * @author aharboul
 *
 */

public class WrapperStatistiqueItemsDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private List<StatistiqueItemDTO> statistiques;

	public WrapperStatistiqueItemsDTO() {
		super();
		this.statistiques = new ArrayList<>();
	}

	public void addNewStatistiqueItem(String question, String questionFilter, String filter, List<String> labels,
			List<Integer> data) {
		StatistiqueItemDTO si = new StatistiqueItemDTO(question, questionFilter, filter, labels, data);
		statistiques.add(si);
	}

	/**
	 * @return the statistiques
	 */
	public List<StatistiqueItemDTO> getStatistiques() {
		return statistiques;
	}

	/**
	 * @param statistiques the statistiques to set
	 */
	public void setStatistiques(List<StatistiqueItemDTO> statistiques) {
		this.statistiques = statistiques;
	}

}
