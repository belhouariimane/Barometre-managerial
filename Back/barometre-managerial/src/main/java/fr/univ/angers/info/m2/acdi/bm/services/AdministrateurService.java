package fr.univ.angers.info.m2.acdi.bm.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import fr.univ.angers.info.m2.acdi.bm.entities.Administrateur;
import fr.univ.angers.info.m2.acdi.bm.exceptions.AdministrateurNotFoundException;
import fr.univ.angers.info.m2.acdi.bm.repositories.AdministrateurRepository;

@Service
public class AdministrateurService {

	@Autowired
	private AdministrateurRepository administrateurRepository;

	public List<Administrateur> findAll() {
		Iterable<Administrateur> it = administrateurRepository.findAll();
		List<Administrateur> admin = new ArrayList<Administrateur>();
		it.forEach(e -> admin.add(e));
		return admin;
	}

	public Administrateur save(Administrateur administrateur) {
		return administrateurRepository.save(administrateur);
	}

	public Administrateur update(Administrateur administrateur, Long id) throws AdministrateurNotFoundException {
		Administrateur admin = findById(id);
		if (administrateur.getNom() != null) {
			admin.setNom(administrateur.getNom());
		}
		if (administrateur.getPrenom() != null) {
			admin.setPrenom(administrateur.getPrenom());
		}
		if (administrateur.getEmail() != null) {
			admin.setEmail(administrateur.getEmail());
		}
		return administrateurRepository.save(admin);
	}

	public Long count() {
		return administrateurRepository.count();
	}

	public Administrateur findById(Long id) throws AdministrateurNotFoundException {
		return administrateurRepository.findById(id).orElseThrow(() -> new AdministrateurNotFoundException(id));
	}

	public void deleteById(Long id) {
		administrateurRepository.deleteById(id);
	}

	public Administrateur login(String email, String password) {
		// TODO Hash Password
		return null;
	}
}
