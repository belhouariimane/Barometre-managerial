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

public class StatistiqueDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private String dataNonAnonymousCSV;
	private String dataGlobalCSV;
	private String dataFilterCSV;
	private List<StatistiqueGlobaleDTO> statistiquesGlobales;
	private List<StatistiqueFiltreDTO> statistiquesFiltres;

	public StatistiqueDTO() {
		super();
	}

	/**
	 * @return the dataNonAnonymousCSV
	 */
	public String getDataNonAnonymousCSV() {
		return dataNonAnonymousCSV;
	}

	/**
	 * @param dataNonAnonymousCSV the dataNonAnonymousCSV to set
	 */
	public void setDataNonAnonymousCSV(String dataNonAnonymousCSV) {
		this.dataNonAnonymousCSV = dataNonAnonymousCSV;
	}

	/**
	 * @return the dataGlobalCSV
	 */
	public String getDataGlobalCSV() {
		return dataGlobalCSV;
	}

	/**
	 * @param dataGlobalCSV the dataGlobalCSV to set
	 */
	public void setDataGlobalCSV(String dataGlobalCSV) {
		this.dataGlobalCSV = dataGlobalCSV;
	}

	/**
	 * @return the dataFilterCSV
	 */
	public String getDataFilterCSV() {
		return dataFilterCSV;
	}

	/**
	 * @param dataFilterCSV the dataFilterCSV to set
	 */
	public void setDataFilterCSV(String dataFilterCSV) {
		this.dataFilterCSV = dataFilterCSV;
	}

	/**
	 * @return the statistiquesGlobales
	 */
	public List<StatistiqueGlobaleDTO> getStatistiquesGlobales() {
		return statistiquesGlobales;
	}

	/**
	 * @param statistiquesGlobales the statistiquesGlobales to set
	 */
	public void setStatistiquesGlobales(List<StatistiqueGlobaleDTO> statistiquesGlobales) {
		this.statistiquesGlobales = statistiquesGlobales;
	}

	/**
	 * @return the statistiquesFiltres
	 */
	public List<StatistiqueFiltreDTO> getStatistiquesFiltres() {
		return statistiquesFiltres;
	}

	/**
	 * @param statistiquesFiltres the statistiquesFiltres to set
	 */
	public void setStatistiquesFiltres(List<StatistiqueFiltreDTO> statistiquesFiltres) {
		this.statistiquesFiltres = statistiquesFiltres;
	}

}
