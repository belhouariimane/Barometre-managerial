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

public class StatistiqueDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private String dataCSV;
	private WrapperStatistiqueItemsDTO statistiques;

	public StatistiqueDTO() {
		super();
	}

	/**
	 * @return the dataCSV
	 */
	public String getDataCSV() {
		return dataCSV;
	}

	/**
	 * @param dataCSV the dataCSV to set
	 */
	public void setDataCSV(String dataCSV) {
		this.dataCSV = dataCSV;
	}

	/**
	 * @return the statistiques
	 */
	public WrapperStatistiqueItemsDTO getStatistiques() {
		return statistiques;
	}

	/**
	 * @param statistiques the statistiques to set
	 */
	public void setStatistiques(WrapperStatistiqueItemsDTO statistiques) {
		this.statistiques = statistiques;
	}

}
