/**
 * 
 */
package fr.univ.angers.info.m2.acdi.bm.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import fr.univ.angers.info.m2.acdi.bm.entities.Administrateur;
import fr.univ.angers.info.m2.acdi.bm.entities.Participant;

/**
 * @author aharboul
 *
 */
public interface ParticipantRepository extends CrudRepository<Participant, Long> {

}
