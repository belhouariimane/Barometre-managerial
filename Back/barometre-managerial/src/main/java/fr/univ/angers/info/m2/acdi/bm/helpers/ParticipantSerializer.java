package fr.univ.angers.info.m2.acdi.bm.helpers;

import java.io.IOException;
import java.text.SimpleDateFormat;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import fr.univ.angers.info.m2.acdi.bm.entities.Participant;

public class ParticipantSerializer extends StdSerializer<Participant> {

	public ParticipantSerializer() {
		this(null);
	}

	public ParticipantSerializer(Class<Participant> t) {
		super(t);
	}

	@Override
	public void serialize(Participant value, JsonGenerator jgen, SerializerProvider provider) throws IOException {

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
			if (value.getDateParticipation() != null) {
				jgen.writeStringField("dateParticipation",
						new SimpleDateFormat("dd-MM-yyyy").format(value.getDateParticipation()));
			}
			if (value.getQuestionnaire() != null && value.getQuestionnaire().getId() != null) {
				jgen.writeNumberField("questionnaire_id", value.getQuestionnaire().getId());
			}
		}

		jgen.writeEndObject();
	}
}