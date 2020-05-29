package fr.univ.angers.info.m2.acdi.bm.helpers;

import java.util.List;

public class Helpers {

	private Helpers() {
		throw new IllegalStateException("Helpers class");
	}

	public static Boolean strEmpty(String string) {
		return (string == null || string.trim().isEmpty());
	}

	public static Boolean arrayListEmpty(List<String> array) {
		return (array == null || array.isEmpty());
	}
}