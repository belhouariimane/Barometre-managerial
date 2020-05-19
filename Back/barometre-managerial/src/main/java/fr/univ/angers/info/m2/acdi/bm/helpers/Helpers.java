package fr.univ.angers.info.m2.acdi.bm.helpers;

import java.lang.reflect.Field;
import java.util.ArrayList;

public class Helpers {
	public static Boolean strEmpty(String string) {
		return (string == null || string.trim().isEmpty());
	}

	public static Boolean arrayListEmpty(ArrayList<String> array) {
		return (array == null || array.isEmpty());
	}

	public static boolean checkNull(Object o) throws IllegalAccessException {
		for (Field f : o.getClass().getDeclaredFields())
			if (f.get(o) != null)
				return false;
		return true;
	}
}