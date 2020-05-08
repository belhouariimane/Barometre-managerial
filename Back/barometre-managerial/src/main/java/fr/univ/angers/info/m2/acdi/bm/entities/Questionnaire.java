package fr.univ.angers.info.m2.acdi.bm.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import fr.univ.angers.info.m2.acdi.bm.helpers.Helpers;

@Entity
public class Questionnaire {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private Long idAdministrateur;
	private Boolean anonymous;
	private String titre;
	private String url;
	private Date datePeremption;
	
	public Long getId() {
		return id;
	}	
	public Long getIdAdministrateur() {
		return idAdministrateur;
	}	
	public void setIdAdministrateur(Long idAdministrateur) {
		this.idAdministrateur = idAdministrateur;
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
	
	public Boolean validity() {
		return (
			this.idAdministrateur != null &&
			!Helpers.strEmpty(this.titre) &&
			this.datePeremption != null
		);
	}
}
