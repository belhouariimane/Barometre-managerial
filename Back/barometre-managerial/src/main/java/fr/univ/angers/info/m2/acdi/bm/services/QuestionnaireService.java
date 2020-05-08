package fr.univ.angers.info.m2.acdi.bm.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import fr.univ.angers.info.m2.acdi.bm.entities.Questionnaire;
import fr.univ.angers.info.m2.acdi.bm.exceptions.AdministrateurNotFoundException;
import fr.univ.angers.info.m2.acdi.bm.repositories.QuestionnaireRepository;
import fr.univ.angers.info.m2.acdi.bm.request.response.ResponseSingleQuestionnaire;

@Service
public class QuestionnaireService {
	
	@Autowired
	private QuestionnaireRepository questionnaireRepository;
	@Autowired
	private AdministrateurService administrateurService;
	
	public ResponseEntity<ResponseSingleQuestionnaire> creerQuestionnaire(Questionnaire questionnaire) {
		// Vérification de la validité du questionnaire,
		// conformité des champs obligatoires
		if (!questionnaire.validity()) {
			return new ResponseEntity<ResponseSingleQuestionnaire>(
				new ResponseSingleQuestionnaire("Questionnaire invalide", null),
				HttpStatus.BAD_REQUEST // Erreur 400
			);
		}
		
		// TODO : Ici vérifier que l'identifiant de l'administrateur existe vraiment
		try {
			administrateurService.findById(questionnaire.getIdAdministrateur());
		} catch (AdministrateurNotFoundException e) {
			// TODO Auto-generated catch block
			//e.printStackTrace();
			return new ResponseEntity<ResponseSingleQuestionnaire>(
				new ResponseSingleQuestionnaire("L'administrateur d'identifiant renseilgné n'a pas été trouvé", null),
				HttpStatus.BAD_REQUEST // Erreur 400
			);
		}
		
		// S'assurer que le champs id du questionnaire est forcément NULL
		if (questionnaire.getId() != null) {
			return new ResponseEntity<ResponseSingleQuestionnaire>(
				new ResponseSingleQuestionnaire("Impossible de créer un questionnaire ayant déjà un identifiant", null),
				HttpStatus.BAD_REQUEST // Erreur 400
			);
		}
		
		Questionnaire savedQuestionnaire = this.questionnaireRepository.save(questionnaire);
		
		return new ResponseEntity<ResponseSingleQuestionnaire>(
			new ResponseSingleQuestionnaire("Questionnaire créé", savedQuestionnaire),
			HttpStatus.OK // Status 200
		);
	}
	
	public ResponseEntity<ResponseSingleQuestionnaire> readQuestionnaire(Long id) {
		Optional<Questionnaire> questionnaire = this.questionnaireRepository.findById(id);
		if (!questionnaire.isPresent()) {
			return new ResponseEntity<ResponseSingleQuestionnaire>(
				new ResponseSingleQuestionnaire("Le questionnaire d'identifiant renseigné n'a pas été trouvé", null),
				HttpStatus.valueOf(419)
			);
		}
		return new ResponseEntity<ResponseSingleQuestionnaire>(
			new ResponseSingleQuestionnaire("Questionnaire trouvé", questionnaire.get()),
			HttpStatus.OK
		);
	}
	
	public ResponseEntity<ResponseSingleQuestionnaire> updateQuestionnaire(Questionnaire questionnaire) {
		// Le questionnaire passé dans le corps de la requête doit comporter un champ id
		if (questionnaire.getId() == null) {
			return new ResponseEntity<ResponseSingleQuestionnaire>(
				new ResponseSingleQuestionnaire("Il faut renseigner l'identifiant du questionnaire à mettre à jour", null),
				HttpStatus.BAD_REQUEST
			);
		}
		
		// si le questionnaire d'identifiant renseigné n'existe pas,
		// on ne fait pas de mise à jour
		Optional<Questionnaire> lastRecord = this.questionnaireRepository.findById(questionnaire.getId());
		if (!lastRecord.isPresent()) {
			return new ResponseEntity<ResponseSingleQuestionnaire>(
				new ResponseSingleQuestionnaire("Le questionnaire d'identifiant renseigné n'a pas été trouvé", null),
				HttpStatus.valueOf(419)
			);
		}
		
		// Seront modifiés les champs qui ont été renseignés
		Questionnaire questionnaireToUpdate = lastRecord.get();
		
		if (questionnaire.getIdAdministrateur() != null) {
			questionnaireToUpdate.setIdAdministrateur(questionnaire.getIdAdministrateur());
		}
		if (questionnaire.getTitre() != null) {
			questionnaireToUpdate.setTitre(questionnaire.getTitre());
		}
		if (questionnaire.getUrl() != null) {
			questionnaireToUpdate.setUrl(questionnaire.getUrl());
		}
		if (questionnaire.getDatePeremption() != null) {
			questionnaireToUpdate.setDatePeremption(questionnaire.getDatePeremption());
		}
		if (questionnaire.getAnonymous() != null) {
			questionnaireToUpdate.setAnonymous(questionnaire.getAnonymous());
		}
		
		Questionnaire savedQuestionnaire = this.questionnaireRepository.save(questionnaireToUpdate);
		
		return new ResponseEntity<ResponseSingleQuestionnaire>(
			new ResponseSingleQuestionnaire("Mise à jour du questionnaire effectué avec succès", savedQuestionnaire),
			HttpStatus.OK
		);
	}
	
	public List<Questionnaire> findByIdAdministrateur(Long idAdministrateur) {
		return this.questionnaireRepository.findByIdAdministrateur(idAdministrateur);
	}
}
