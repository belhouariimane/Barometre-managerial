package fr.univ.angers.info.m2.acdi.bm.repositories;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import fr.univ.angers.info.m2.acdi.bm.BarometreManagerialApplication;
import fr.univ.angers.info.m2.acdi.bm.entities.Administrateur;
import fr.univ.angers.info.m2.acdi.bm.exceptions.ResourceNotFoundException;

/**
 * @author aharboul
 *
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = BarometreManagerialApplication.class)
class AdministrateurRepositoryTest {

	@Autowired
	private AdministrateurRepository administrateurRepository;

	@Test
	public void givenAdministrateurRepository_whenSaveAndRetreiveEntity_thenOK()
			throws ResourceNotFoundException {
		Administrateur administrateur = new Administrateur();
		administrateur.setEmail("abdessabour@test.com");
		administrateur.setNom("HARBOUL");
		administrateur.setEmail("ABDESSABOUR");

		Administrateur saved = administrateurRepository.save(administrateur);
		Administrateur foundEntity = administrateurRepository.findById(saved.getId())
				.orElseThrow(() -> new ResourceNotFoundException(Administrateur.class.getSimpleName(), "id", saved.getId()));

		assertNotNull(foundEntity);
		assertEquals(saved.getEmail(), foundEntity.getEmail());
	}

}
