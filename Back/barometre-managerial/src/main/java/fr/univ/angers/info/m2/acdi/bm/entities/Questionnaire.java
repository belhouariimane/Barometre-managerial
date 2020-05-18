package fr.univ.angers.info.m2.acdi.bm.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import fr.univ.angers.info.m2.acdi.bm.helpers.Helpers;

@Entity 
public class Questionnaire implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	public class Questionnaire {
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private Long id;
		private Long idAdministrateur;
		private Boolean anonymous;
		private String titre;
		private String url;
		private Date datePeremption;
		@ManyToOne
		private Administrateur administrateur;
		@OneToMany(mappedBy = "questionnaire")
		private List<Participant> participants;
		@OneToMany(mappedBy = "questionnaire")
		private List<Question> questions;

		public Long getId() {
			return id;
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

		/**
		 * @return the participants
		 */
		public List<Participant> getParticipants() {
			return participants;
		}

		/**
		 * @param participants the participants to set
		 */
		public void setParticipants(List<Participant> participants) {
			this.participants = participants;
		}

		/**
		 * @return the questions
		 */
		public List<Question> getQuestions() {
			return questions;
		}

		/**
		 * @param questions the questions to set
		 */
		public void setQuestions(List<Question> questions) {
			this.questions = questions;
		}

		/**
		 * @param id the id to set
		 */
		public void setId(Long id) {
			this.id = id;
		}

	public Boolean validity() {
		return (this.administrateur != null && this.administrateur.getId() != null && !Helpers.strEmpty(this.titre)
				&& this.datePeremption != null);

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
