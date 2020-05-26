package fr.univ.angers.info.m2.acdi.bm.dto;

import java.util.Date;

import fr.univ.angers.info.m2.acdi.bm.entities.Administrateur;
import fr.univ.angers.info.m2.acdi.bm.helpers.Helpers;

public class QuestionnaireCreateDTO {
	private Administrateur administrateur;
	private String titre;
	private String url;
	private Date datePeremption;
	private Boolean anonymous;
	private String description;
	private String remerciement;
	
	public Administrateur getAdministrateur() {
		return administrateur;
	}
	public void setAdministrateur(Administrateur administrateur) {
		this.administrateur = administrateur;
	}
	public String getTitre() {
		return titre;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public Date getDatePeremption() {
		return datePeremption;
	}
	public void setDatePeremption(Date datePeremption) {
		this.datePeremption = datePeremption;
	}
	public Boolean getAnonymous() {
		return anonymous;
	}
	public void setAnonymous(Boolean anonymous) {
		this.anonymous = anonymous;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getRemerciement() {
		return remerciement;
	}
	public void setRemerciement(String remerciement) {
		this.remerciement = remerciement;
	}
	
	public Boolean validity() {
		return (this.administrateur != null && this.administrateur.getId() != null && !Helpers.strEmpty(this.titre)
				&& this.datePeremption != null);
	}
}
