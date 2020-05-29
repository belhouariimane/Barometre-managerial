package fr.univ.angers.info.m2.acdi.bm.mapper;

import org.mapstruct.Mapper;

import fr.univ.angers.info.m2.acdi.bm.dto.QuestionnaireCreateDTO;
import fr.univ.angers.info.m2.acdi.bm.entities.Questionnaire;

@Mapper(componentModel="spring")
public interface QuestionnaireMapper {
	Questionnaire createDtoToEntity(QuestionnaireCreateDTO questionnaireDto);
}
