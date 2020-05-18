package fr.univ.angers.info.m2.acdi.bm.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import fr.univ.angers.info.m2.acdi.bm.entities.Question;

public interface QuestionRepository extends CrudRepository<Question, Long>{
	List<Question> findByIdQuestionnaire(Long idQuestionnaire);
}
