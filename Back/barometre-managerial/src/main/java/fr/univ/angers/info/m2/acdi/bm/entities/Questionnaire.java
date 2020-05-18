package fr.univ.angers.info.m2.acdi.bm.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import fr.univ.angers.info.m2.acdi.bm.helpers.Helpers;

@Entity
public class Questionnaire {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String titre;
	private String url;
	private Date datePeremption;
	private Boolean anonymous;
	@ManyToOne
	private Administrateur administrateur;

	public Long getId() {
		return id;
	}

	/**
	 * @return the administrateur
	 */
	public Administrateur getAdministrateur() {
		return administrateur;
	}

	/**
	 * @param administrateur the administrateur to set
	 */
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

	public Boolean validity() {
		return (this.administrateur != null && this.administrateur.getId() != null && !Helpers.strEmpty(this.titre)
				&& this.datePeremption != null);
	}
}
