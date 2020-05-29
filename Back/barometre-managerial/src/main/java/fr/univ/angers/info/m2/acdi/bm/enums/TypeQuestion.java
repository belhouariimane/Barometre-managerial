package fr.univ.angers.info.m2.acdi.bm.enums;

public enum TypeQuestion {
	RADIO("RADIO"), CHECKBOX("CHECKBOX"), COMBOBOX("COMBOBOX"), DATE("DATE"), EVALUATION("EVALUATION"),
	OUVERT("OUVERT");

	private String typeQuestionn = "";

	TypeQuestion(String typeQuestionn) {
		this.typeQuestionn = typeQuestionn;
	}

	@Override
	public String toString() {
		return this.typeQuestionn;
	}

	public static boolean contains(String s) {
		for (TypeQuestion tq : values()) {
			if (tq.name().equals(s)) {
				return true;
			}
		}
		return false;
	}
}
