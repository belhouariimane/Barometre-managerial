package fr.univ.angers.info.m2.acdi.bm.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import fr.univ.angers.info.m2.acdi.bm.entities.Questionnaire;

public interface QuestionnaireRepository extends CrudRepository<Questionnaire, Long>{
	List<Questionnaire> findByIdAdministrateur(Long idAdministrateur);
}
