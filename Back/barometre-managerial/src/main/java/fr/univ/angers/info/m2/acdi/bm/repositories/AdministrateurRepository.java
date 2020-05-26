/**
 * 
 */
package fr.univ.angers.info.m2.acdi.bm.repositories;

import org.springframework.data.repository.CrudRepository;

import fr.univ.angers.info.m2.acdi.bm.entities.Administrateur;

/**
 * @author aharboul
 *
 */
public interface AdministrateurRepository extends CrudRepository<Administrateur, Long> {

	Administrateur findByEmail(String email);
}
