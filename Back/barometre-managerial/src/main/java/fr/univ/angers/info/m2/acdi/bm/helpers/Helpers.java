package fr.univ.angers.info.m2.acdi.bm.helpers;

import java.util.ArrayList;

public class Helpers {
	public static Boolean strEmpty(String string) {
		return (string == null || string.trim().isEmpty());
	}
	
	public static Boolean arrayListEmpty(ArrayList<String> array) {
		return (array == null || array.isEmpty());
	}
}
