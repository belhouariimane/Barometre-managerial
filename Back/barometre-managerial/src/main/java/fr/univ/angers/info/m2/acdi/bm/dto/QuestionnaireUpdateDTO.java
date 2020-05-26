package fr.univ.angers.info.m2.acdi.bm.dto;

import java.util.Date;

public class QuestionnaireUpdateDTO {
	private Long id;
	private String titre;
	private String url;
	private Date datePeremption;
	private Boolean anonymous;
	private String description;
	private String remerciement;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
}
