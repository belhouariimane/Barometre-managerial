package fr.univ.angers.info.m2.acdi.bm.enums;

public enum TypeQuestion {
	RADIO ("RADIO"),
	CHECKBOX ("CHECKBOX"),
	COMBOBOX ("COMBOBOX"),
	EVALUATION ("EVALUATION"),
	OUVERT ("OUVERT");
	
	private String typeQuestion = "";
	
	TypeQuestion (String typeQuestion) {
		this.typeQuestion = typeQuestion;
	}
	
	public String toString() {
		return this.typeQuestion;
	}
	
	public static boolean contains(String s) {
		for (TypeQuestion tq:values()) {
			if (tq.name().equals(s)) {
				return true;
			}
		}
		return false;
	}
}
