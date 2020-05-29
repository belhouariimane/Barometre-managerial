package fr.univ.angers.info.m2.acdi.bm.mapper;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import fr.univ.angers.info.m2.acdi.bm.dto.ParticipantCreateDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.ParticipantRetourDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.ReponseCreateDTO;
import fr.univ.angers.info.m2.acdi.bm.entities.Participant;
import fr.univ.angers.info.m2.acdi.bm.entities.Proposition;
import fr.univ.angers.info.m2.acdi.bm.entities.Question;
import fr.univ.angers.info.m2.acdi.bm.entities.Reponse;
import fr.univ.angers.info.m2.acdi.bm.helpers.Helpers;

@Mapper(componentModel = "spring")
public interface ParticipantMapper {

	@Mapping(source = "idQuestionnaire", target = "questionnaire.id")
	Participant createDtoToEntity(ParticipantCreateDTO dto);

	@Mapping(source = "questionnaire.id", target = "idQuestionnaire")
	ParticipantRetourDTO entityToRetourDto(Participant entity);

	default List<Reponse> from(List<ReponseCreateDTO> list) {
		if (list == null || list.isEmpty()) {
			return Collections.emptyList(); 
		}
		List<Reponse> reponses = new ArrayList<>();
		for (ReponseCreateDTO reponseCreateDTO : list) {
			reponses.addAll(from1(reponseCreateDTO));
		}
		return reponses;
	}

	default List<Reponse> from1(ReponseCreateDTO dto) {
		if (dto == null) {
			return Collections.emptyList();
		}

		if (dto.getIdQuestion() == null) {
			return Collections.emptyList();
		}

		List<Reponse> reponses = new ArrayList<>();
		if (dto.getIdsProposition() != null && !dto.getIdsProposition().isEmpty()) {
			for (Long idProposition : dto.getIdsProposition()) {
				Reponse r = new Reponse();
				Question q = new Question();
				q.setId(dto.getIdQuestion());
				r.setQuestion(q);
				Proposition p = new Proposition();
				p.setId(idProposition);
				r.setProposition(p);
				reponses.add(r);
			}
		} else if (!Helpers.strEmpty(dto.getValeur()).booleanValue()) {
			Reponse r = new Reponse();
			Question q = new Question();
			q.setId(dto.getIdQuestion());
			r.setQuestion(q);
			r.setValeur(dto.getValeur());
			reponses.add(r);
		} else {
			return Collections.emptyList();
		}
		return reponses;
	}

}
