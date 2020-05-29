package fr.univ.angers.info.m2.acdi.bm.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import fr.univ.angers.info.m2.acdi.bm.constantes.ConstantesREST;
import fr.univ.angers.info.m2.acdi.bm.dto.QuestionnaireCreateDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.QuestionnaireUpdateDTO;
import fr.univ.angers.info.m2.acdi.bm.entities.Administrateur;
import fr.univ.angers.info.m2.acdi.bm.entities.Questionnaire;
import fr.univ.angers.info.m2.acdi.bm.exceptions.ResourceNotFoundException;
import fr.univ.angers.info.m2.acdi.bm.mapper.QuestionnaireMapper;
import fr.univ.angers.info.m2.acdi.bm.repositories.AdministrateurRepository;
import fr.univ.angers.info.m2.acdi.bm.repositories.QuestionnaireRepository;
import fr.univ.angers.info.m2.acdi.bm.request.response.ResponseSingleQuestionnaire;

@Service
public class QuestionnaireService {

	@Autowired
	private QuestionnaireRepository questionnaireRepository;
	@Autowired
	private QuestionnaireMapper questionnaireMapper;
	@Autowired
	private AdministrateurRepository administrateurRepository;

	public ResponseSingleQuestionnaire insertOne(QuestionnaireCreateDTO questionnaireDTO) {

		// Vérification de la validité du questionnaire,
		// conformité des champs obligatoires
		if (!questionnaireDTO.validity().booleanValue()) {
			return new ResponseSingleQuestionnaire(ConstantesREST.QUESTIONNAIRE_NOT_VALIDE, null,
					HttpStatus.BAD_REQUEST);
		}

		try {
			administrateurRepository.findById(questionnaireDTO.getAdministrateur().getId())
					.orElseThrow(() -> new ResourceNotFoundException(Administrateur.class.getSimpleName(), "id",
							questionnaireDTO.getAdministrateur().getId()));
		} catch (ResourceNotFoundException e) {
			return new ResponseSingleQuestionnaire(e.getMessage(), null, HttpStatus.BAD_REQUEST);
		}

		Questionnaire questionnaireToSave = this.questionnaireMapper.createDtoToEntity(questionnaireDTO);
		questionnaireToSave.setDateCreation(new Date());
		Questionnaire savedQuestionnaire = this.questionnaireRepository.save(questionnaireToSave);

		return new ResponseSingleQuestionnaire(ConstantesREST.QUESTIONNAIRE_CREATED, savedQuestionnaire, HttpStatus.OK);
	}

	public ResponseSingleQuestionnaire readQuestionnaireById(Long id) {
		Optional<Questionnaire> questionnaire = this.questionnaireRepository.findById(id);
		if (!questionnaire.isPresent()) {
			return new ResponseSingleQuestionnaire(ConstantesREST.QUESTIONNAIRE_NOT_FOUND, null, HttpStatus.NOT_FOUND);
		}
		return new ResponseSingleQuestionnaire(ConstantesREST.QUESTIONNAIRE_FOUND, questionnaire.get(), HttpStatus.OK);
	}

	public ResponseSingleQuestionnaire updateQuestionnaire(QuestionnaireUpdateDTO questionnaireDTO) {
		// Le questionnaire passé dans le corps de la requête doit comporter un champ id
		if (questionnaireDTO.getId() == null) {
			return new ResponseSingleQuestionnaire(ConstantesREST.QUESTIONNAIRE_UPDATE_ID_NULL, null,
					HttpStatus.BAD_REQUEST);
		}

		// si le questionnaire d'identifiant renseigné n'existe pas,
		// on ne fait pas de mise à jour
		Optional<Questionnaire> lastRecord = this.questionnaireRepository.findById(questionnaireDTO.getId());
		if (!lastRecord.isPresent()) {
			return new ResponseSingleQuestionnaire(ConstantesREST.QUESTIONNAIRE_NOT_FOUND, null, HttpStatus.NOT_FOUND);
		}

		// Seront modifiés les champs qui ont été renseignés
		Questionnaire questionnaireToUpdate = lastRecord.get();
		
		// Ici on ne fait pas de modification de l'administrateur
		
		if (questionnaireDTO.getTitre() != null) {
			questionnaireToUpdate.setTitre(questionnaireDTO.getTitre());
		}
		if (questionnaireDTO.getUrl() != null) {
			questionnaireToUpdate.setUrl(questionnaireDTO.getUrl());
		}
		if (questionnaireDTO.getDatePeremption() != null) {
			questionnaireToUpdate.setDatePeremption(questionnaireDTO.getDatePeremption());
		}
		if (questionnaireDTO.getAnonymous() != null) {
			questionnaireToUpdate.setAnonymous(questionnaireDTO.getAnonymous());
		}
		if (questionnaireDTO.getDescription() != null) {
			questionnaireToUpdate.setDescription(questionnaireDTO.getDescription());
		}
		if (questionnaireDTO.getRemerciement() != null) {
			questionnaireToUpdate.setRemerciement(questionnaireDTO.getRemerciement());
		}

		Questionnaire savedQuestionnaire = this.questionnaireRepository.save(questionnaireToUpdate);

		return new ResponseSingleQuestionnaire(ConstantesREST.QUESTIONNAIRE_UPDATED, savedQuestionnaire, HttpStatus.OK);
	}

	public List<Questionnaire> findByIdAdministrateur(Long idAdministrateur) {
		return this.questionnaireRepository.findByAdministrateur_Id(idAdministrateur);
	}

	public void deleteById(Long id) {
		this.questionnaireRepository.deleteById(id);
	}
}
