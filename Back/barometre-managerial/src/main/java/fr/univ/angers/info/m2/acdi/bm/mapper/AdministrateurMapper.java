package fr.univ.angers.info.m2.acdi.bm.mapper;

import org.mapstruct.Mapper;

import fr.univ.angers.info.m2.acdi.bm.dto.AdministrateurCreateDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.AdministrateurRetourDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.AdministrateurUpdateDTO;
import fr.univ.angers.info.m2.acdi.bm.dto.LoginDTO;
import fr.univ.angers.info.m2.acdi.bm.entities.Administrateur;

@Mapper(componentModel="spring")
public interface AdministrateurMapper {

	Administrateur createDtoToEntity(AdministrateurCreateDTO dto);

	Administrateur updateDtoToEntity(AdministrateurUpdateDTO dto);

	Administrateur loginToEntity(LoginDTO dto);

	AdministrateurRetourDTO entityToRetour(Administrateur entity);

}
