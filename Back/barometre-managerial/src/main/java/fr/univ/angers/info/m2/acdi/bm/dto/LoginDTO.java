package fr.univ.angers.info.m2.acdi.bm.dto;

import java.io.Serializable;
import java.lang.reflect.Field;

public class LoginDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String email;
	private String password;

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	public boolean checkNull() throws IllegalAccessException {
		for (Field f : this.getClass().getDeclaredFields())
			if (f.get(this) != null)
				return false;
		return true;
	}

}
