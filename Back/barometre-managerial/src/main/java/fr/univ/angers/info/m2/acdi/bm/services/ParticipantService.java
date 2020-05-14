package fr.univ.angers.info.m2.acdi.bm.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import fr.univ.angers.info.m2.acdi.bm.entities.Administrateur;
import fr.univ.angers.info.m2.acdi.bm.entities.Participant;
import fr.univ.angers.info.m2.acdi.bm.exceptions.AdministrateurNotFoundException;
import fr.univ.angers.info.m2.acdi.bm.exceptions.ParticipantNotFoundException;
import fr.univ.angers.info.m2.acdi.bm.repositories.AdministrateurRepository;
import fr.univ.angers.info.m2.acdi.bm.repositories.ParticipantRepository;

@Service
public class ParticipantService {

	@Autowired
	private ParticipantRepository participantRepository;

	public Participant save(Participant participant) {
		return participantRepository.save(participant);
	}

	public List<Participant> findAll() {
		Iterable<Participant> it = participantRepository.findAll();
		List<Participant> admin = new ArrayList<Participant>();
		it.forEach(e -> admin.add(e));
		return admin;
	}

	public Participant findById(Long id) throws ParticipantNotFoundException {
		return participantRepository.findById(id).orElseThrow(() -> new ParticipantNotFoundException(id));
	}

}
