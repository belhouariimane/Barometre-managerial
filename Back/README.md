## Administrateur

#### create
```
POST
http://barometre-managerial.leria-etud.univ-angers.fr/admin/create
```
```json
// Paramètres dans le corps de la requête
{
  "email": "administrateur@domain.com",
  "password": "password",
  "nom": "nom",
  "prenom": "prenom"
}
```

#### delete
```
DELETE
http://barometre-managerial.leria-etud.univ-angers.fr/admin/delete/{id}
```

### login
Retourne, en cas de succès, les informations de l'administrateur qui vient d'être connecté.
```
POST
http://barometre-managerial.leria-etud.univ-angers.fr/admin/login
```
```json
// Paramètres dans le corps de la requête
{
  "email": "administrateur@domain.com",
  "password": "password"
}
```

#### read
Retourne les informations d'un administrateur dont l'identifiant est passé dans l'URL (le champs `password` sera **NULL**).
```
GET
http://barometre-managerial/leria-etud.univ-angers.fr/admin/read/{id}
```

#### readAll
Retourne la liste de tous les administrateurs en base de données.
```
GET
http://barometre-managerial/leria-etud.univ-angers.fr/admin/readAll
```

#### update
Mise à jour des informations d'un administrateur. Les champs à modifier seront passés dans le corps de la requête.
```
PUT
http://barometre-managerial.leria-etud.univ-angers.fr/admin/update/{id}
```
```json
// Exemple de champs à modifier
{
  "nom": "nouveau",
  "prenom": "nouveau"
}
```

## Questionnaire

#### create
Retourne, en cas de succès, l'objet questionnaire créé avec son identifiant dans la base de données.
```
POST
http://barometre-managerial.leria-etud.univ-angers.fr/questionnaire/create
```
```json
// Paramètres dans le corps de la requête
{
  "administrateur": { "id": id },
  "datePeremption": "YYYY-MM-DDTHH:mm:ss",
  "titre": "titre",
  "url": "url", // facultatif
  "anonymous": boolean // facultatif
}
```

#### delete
```
DELETE
http://barometre-managerial.leria-etud.univ-angers.fr/questionnaire/delete/{id}
```

#### findByIdAdministrateur
Retourne une liste de tous les questionnaires créés par un administateur.
```
GET
http://barometre-managerial.leria-etud.univ-angers.fr/questionnaire/findByIdAdministrateur/{idAdministrateur}
```

#### read
Retourne un objet questionnaire, sans les questions associées.
```
GET
http://barometre-managerial.leria-etud.univ-angers.fr/questionnaire/read/{id} 
```

#### update
Mise à jour des informations générales d'un questionnaire. Les champs à modifier seront passés dans le corps de la requête.
```
PUT
http://barometre-managerial.leria-etud.univ-angers.fr/questionnaire/update
```
```json
// Paramètres dans le corps de la requête
{
  "id": id, // identifiant du questionnaire à modifier
  "titre": "nouveau" // un exemple de champs à modifier
  // ...
}
```

## Question

#### create
Il est possible de créer `5` types de questions :
- CHECKBOX
- COMBOBOX
- EVALUATION
- RADIO
- OUVERT

```
POST
http://barometre-managerial.leria-etud.univ-angers.fr/question/create
```
```json
// Paramètres dans le corps de la requête (exemple)
{
	"questionnaire": {"id": 2},
	"typeQuestion": "RADIO",
	"valeur": "Quel est votre village de naissance ?",
	"propositions": [
		{ "valeur": "Angers" },
		{ "valeur": "Marrakech" }
	]
}
```
```json
// Retour de la requête à la création d'une question (exemple)
{
  "message": "Question rajoutée",
  "question": {
    "id": 3,
    "typeQuestion": "RADIO",
    "valeur": "Quel est votre village de naissance ?",
    "isRequired": false,
    "isFilter": false,
    "questionnaire": {
      "id": 2,
      "titre": "1 er sondage",
      "url": "",
      "datePeremption": "2020-05-30",
      "anonymous": null,
      "administrateur": {
        "id": 1,
        "email": "admin2@google.com",
        "password": null,
        "nom": "nom",
        "prenom": "prenom",
        "hibernateLazyInitializer": {}
      }
    },
    "propositions": [
      {
        "id": 4,
        "valeur": "Angers",
        "question": 3
      },
      {
        "id": 5,
        "valeur": "Marrakech",
        "question": 3
      }
    ]
  },
  "status": "OK"
}
```

#### read
Le retour de la lecture d'une question a la même structure que celui de sa création.
```
GET
http://barometre-managerial.leria-etud.univ-angers.fr/question/read/{id}
```

#### findByIdQuestionnaire
Retourne une liste de toutes les questions associées à un questionnaire.
```
GET
http://barometre-managerial.leria-etud.univ-angers.fr/question/findByIdQuestionnaire/{idQuestionnaire} 
```

#### update
Mise à jour d'une questions. Les champs à modifier seront passés en paramètres du corps de la requête
```
PUT
http://barometre-managerial.leria-etud.univ-angers.fr/question/update
```
```json
// Paramètres dans le corps de la requête
{
  "id": id, // identifiant de la question à mettre à jour
  //... autres champs
}
// La structure complète d'une question est montrée ci-dessus dans le retour
// de la requête de création d'une question
```

## Participant

Participations aux sondages.

#### create
```
POST
http://barometre-managerial.leria-etud.univ-angers.fr/participant/create
```
```json
// Paramètres dans le corps de la requête
{
  "nom": "nom",
  "prenom": "prenom",
  "questionnaire": {
    "id": 2
  },
  "reponses": [
    {
      "question": {
        "id": 3
      },
      "propositions": [
        {
          "id": 4
        }
      ]
    }
  ]
}
// Les champs nom et prenom sont renseignés suivant si le questionnaire
// est anonyme ou pas
```

#### read
Lecture d'une participation.
```
GET
http://barometre-managerial.leria-etud.univ-angers.fr/participant/{id}
```
```json
// Exemple de retour
{
  "description": "OK",
  "retour": {
    "id": 6,
    "nom": "nom",
    "prenom": "prenom",
    "questionnaire_id": 2
  }
}
```
#### readAll
Retourne la liste de toutes les participations.
```
GET
http://barometre-managerial.leria-etud.univ-angers.fr/participant/readAll
```