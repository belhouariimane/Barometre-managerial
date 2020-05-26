package fr.univ.angers.info.m2.acdi.bm.helpers;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import fr.univ.angers.info.m2.acdi.bm.entities.Administrateur;

public class AdministrateurSerializer extends StdSerializer<Administrateur> {

	private static final long serialVersionUID = 1L;

	public AdministrateurSerializer() {
		this(null);
	}

	public AdministrateurSerializer(Class<Administrateur> t) {
		super(t);
	}

	@Override
	public void serialize(Administrateur value, JsonGenerator jgen, SerializerProvider provider) throws IOException {

		jgen.writeStartObject();
		if (value != null) {
			if (value.getId() != null) {
				jgen.writeNumberField("id", value.getId());
			}
			if (value.getNom() != null) {
				jgen.writeStringField("nom", value.getNom());
			}
			if (value.getPrenom() != null) {
				jgen.writeStringField("prenom", value.getPrenom());
			}
			if (value.getEmail() != null) {
				jgen.writeStringField("email",value.getEmail());
			}
		}

		jgen.writeEndObject();
	}
}