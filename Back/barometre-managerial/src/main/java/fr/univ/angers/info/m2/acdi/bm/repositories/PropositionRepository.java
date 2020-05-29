/**
 * 
 */
package fr.univ.angers.info.m2.acdi.bm.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import fr.univ.angers.info.m2.acdi.bm.entities.Proposition;

/**
 * @author aharboul
 *
 */
public interface PropositionRepository extends CrudRepository<Proposition, Long> {
	List<Proposition> findByQuestion_Id(Long idQuestion);
	void deleteByQuestion_id(Long idQuestion);
}
