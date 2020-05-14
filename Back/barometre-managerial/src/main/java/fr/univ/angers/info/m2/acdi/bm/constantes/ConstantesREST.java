/**
 * 
 */
package fr.univ.angers.info.m2.acdi.bm.constantes;

/**
 * @author aharboul
 *
 */
public class ConstantesREST {
	
	private ConstantesREST() {
		throw new IllegalAccessError("classes des Constante");
	}

	public static final String OK = "OK";
	public static final String ID_NOT_INSERTABLE = "L'id ne doit pas etre renseigné lors de la création , il sera généré automatiquement.";
	public static final String EMPTY_REQUEST = "Impossible de traiter un objet null !";
	public static final String EXISTED_EMAIL = "Cet email existe deja !";
	public static final String UNKNOWN_ERROR = "Erreur inconnue !";
	public static final String ID_NOT_FOUND = "Aucun enregistrement trouvé avec cet Id ! ";
	public static final String PASSWORD_INVALID = "Le mot de passe que vous avez entré n'est pas bon , Veuillez ressayer!";
	public static final String PASSWORD_VALIDATION_ERROR = "Probleme technique lors de la validation du password";
	public static final String EMAIL_OR_PASSWORD_NOT_SEND = "L'email ou le mot de passe ou les deux sont manquants ! ";
}
