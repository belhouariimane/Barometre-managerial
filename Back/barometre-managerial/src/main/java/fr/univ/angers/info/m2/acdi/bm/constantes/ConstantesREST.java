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
	public static final String ID_NOT_FOUND = "Aucun enregistrement trouvé avec cet Id ";
	public static final String PASSWORD_INVALID = "Le mot de passe que vous avez entré n'est pas bon , Veuillez ressayer!";
	public static final String PASSWORD_VALIDATION_ERROR = "Probleme technique lors de la validation du password";
	public static final String EMAIL_OR_PASSWORD_NOT_SEND = "L'email ou le mot de passe ou les deux sont manquants ! ";
	public static final String ID_NULL = "L'id que vous essayer de passer est : NULL ! ";
	public static final String CREATE_ERROR = "Probleme lors de l'enregistrement !";
	public static final String REPONSE_REQUIRED_ERROR = "Vous devez repondre a une question obligatoire !";
	public static final String DATE_PEREMPTION_DEPASSE = "Vous ne pouvez plus participez a ce questionnaire !";
	
	public static final String ADMIN_NOT_FOUND = "Administrateur non trouvé";
	
	public static final String QUESTIONNAIRE_CREATED = "Questionnaire créé";
	public static final String QUESTIONNAIRE_FOUND = "Questionnaire trouvé";
	public static final String QUESTIONNAIRE_NOT_FOUND = "Questionnaire non trouvé";
	public static final String QUESTIONNAIRE_NOT_VALIDE = "Les champs du questionnaire sont invalides";
	public static final String QUESTIONNAIRE_UPDATED = "Mise à jour du questionnaire effectué avec succès";
	public static final String QUESTIONNAIRE_UPDATE_ID_NULL = "Il faut renseigner l'identifiant du questionnaire à mettre à jour";
	
	public static final String QUESTION_CREATED = "Question créée";
	public static final String QUESTION_FOUND = "Question trouvée";
	public static final String QUESTION_NOT_FOUND = "Question non trouvée";
	public static final String QUESTION_NOT_VALIDE = "Champs de la question invalides";
	public static final String QUESTION_UPDATE_ID_NULL = "Il faut renseigner l'identifiant de la question à mettre à jour";
	public static final String QUESTION_UPDATED = "Mise à jour de la question effectuée avec succès";

	public static String objectNotFound(Object object) {
		return object.getClass().getSimpleName() + " non trouvé dans la base de donnée !";
	}

}
