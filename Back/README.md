## Exposition des APIs avec SWAGGER
En `localhost`, vous pouvez avoir accès à la description et test de tous les APIs de l'applications via l'outil Swagger [localhost:8080/api/swagger-ui.html](localhost:8080/api/swagger-ui.html).

## Administrateur

#### create
```
POST
https://barometre-managerial.leria-etud.univ-angers.fr/api/public/admin/create
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
https://barometre-managerial.leria-etud.univ-angers.fr/api/admin/delete/{id}
```

### login
Retourne, en cas de succès, les informations de l'administrateur qui vient d'être connecté.
```
POST
https://barometre-managerial.leria-etud.univ-angers.fr/api/public/admin/login
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
https://barometre-managerial/leria-etud.univ-angers.fr/api/admin/read/{id}
```

#### readAll
Retourne la liste de tous les administrateurs en base de données.
```
GET
https://barometre-managerial/leria-etud.univ-angers.fr/api/admin/readAll
```

#### update
Mise à jour des informations d'un administrateur. Les champs à modifier seront passés dans le corps de la requête.
```
PUT
https://barometre-managerial.leria-etud.univ-angers.fr/api/admin/update/{id}
```
```json
// Seront modifiés les champs qui sont renseignés dans le corps de cette requête
{
  "email": "administrateur@domain.com",
  "nom": "nouveau",
  "password": "password",
  "prenom": "nouveau"
}
```

## Questionnaire

#### create
Retourne, en cas de succès, l'objet questionnaire créé avec son identifiant dans la base de données.
```
POST
https://barometre-managerial.leria-etud.univ-angers.fr/api/questionnaire/create
```
```json
// Paramètres dans le corps de la requête
{
  "administrateur": { "id": 1 },
  "anonymous": true, // valeur booléenne
  "datePeremption": "YYYY-MM-DDTHH:mm:ss",
  "description": "description du questionnaire",
  "remerciement": "remerciement après réponse au questionnaire",
  "titre": "titre",
  "url": "url",
}
```

#### delete
```
DELETE
https://barometre-managerial.leria-etud.univ-angers.fr/api/questionnaire/delete/{id}
```

#### findByIdAdministrateur
Retourne une liste de tous les questionnaires créés par un administateur.
```
GET
https://barometre-managerial.leria-etud.univ-angers.fr/api/questionnaire/findByIdAdministrateur/{idAdministrateur}
```

#### read
Retourne un objet questionnaire, sans les questions associées.
```
GET
https://barometre-managerial.leria-etud.univ-angers.fr/api/questionnaire/read/{id} 
```

#### update
Mise à jour des informations générales d'un questionnaire. Les champs à modifier seront passés dans le corps de la requête.
```
POST
https://barometre-managerial.leria-etud.univ-angers.fr/api/questionnaire/update
```
```json
// Paramètres dans le corps de la requête
{
  "id": 1, // identifiant du questionnaire à modifier
  "anonymous": true, // valeur booléenne
  "datePeremption": "YYYY-MM-DDTHH:mm:ss",
  "description": "nouvelle description du questionnaire",
  "remerciement": "nouvelle remerciement après réponse au questionnaire",
  "titre": "nouveau titre", // un exemple de champs à modifier
  "url": "nouvelle url du questionnaire"
}
```

## Question

#### create
Il est possible de créer `5` types de questions :
- `CHECKBOX`
- `COMBOBOX`
- `DATE`
- `EVALUATION`
- `RADIO`
- `OUVERT`

```
POST
https://barometre-managerial.leria-etud.univ-angers.fr/api/question/create
```
```json
// Paramètres dans le corps de la requête (exemple)
{
  "hasGraph": true, // ou false
  "isFilter": true, // ou false
  "isRequired": true, // ou false
  "ordre": 0, // ordre de la question dans la liste des questions d'un questionnaire
  "propositions": [
		{ "valeur": "Angers" },
		{ "valeur": "Marrakech" }
	],
	"questionnaire": {"id": 2},
	"typeQuestion": "RADIO",
	"valeur": "Quel est votre village de naissance ?"	
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
    "hasGraph": true,
    "ordre": 0,
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
https://barometre-managerial.leria-etud.univ-angers.fr/api/question/read/{id}
```

#### findByIdQuestionnaire
Retourne une liste de toutes les questions associées à un questionnaire.
```
GET
https://barometre-managerial.leria-etud.univ-angers.fr/api/question/findByIdQuestionnaire/{idQuestionnaire} 
```

#### update
Mise à jour d'une questions. Les champs à modifier seront passés en paramètres du corps de la requête
```
POST
https://barometre-managerial.leria-etud.univ-angers.fr/api/question/update
```
```json
// Paramètres dans le corps de la requête
// Ne pas mettre le champ questionnaire car il n'est pas possible de changer l'appartenance d'une
// question en passant un identifiant d'un autre questionnaire.
// Seuls les champs passés dans le corps seront modifiés.
{
  "id": 1, // identifiant de la question à mettre à jour
  "propositions": [ // lors de la mise à jour des propositions, il faut indiquer leurs identifiants.
		{ "valeur": "Nantes", "id": 4, "question": "3" },
		{ "valeur": "Bordeaux", "id": 5, "question": "3" }
	]
  //... autres champs (voir exemple sur la création d'une question)
}
```

## Participant

Participations aux sondages.

#### create
```
POST
https://barometre-managerial.leria-etud.univ-angers.fr/api/public/participant/create
```
```json
// Paramètres dans le corps de la requête
{
  "idQuestionnaire": 1, // identifiant du sondage pour lequel on souhaire participer
  "nom": "nom",
  "prenom": "prenom",
  "reponses": [
    {
      "idQuestion": 1, // identifiant de la question répondu
      "idsProposition": [2, 5], // identifiants des propositions choisies pour cette question
    }
  ],
  "valeur": "une réponse en cas de question ouverte par exemple"
}
// Les champs nom et prenom sont renseignés suivant si le questionnaire
// est anonyme ou pas
```

#### read
Lecture d'une participation.
```
GET
https://barometre-managerial.leria-etud.univ-angers.fr/api/participant/{id}
```

#### readAll
Retourne la liste de toutes les participations.
```
GET
https://barometre-managerial.leria-etud.univ-angers.fr/api/participant/readAll
```

## Statistique

#### read
Lecture des statistiques d'un questionnaire en renseignant son identifiant
```
GET
https://barometre-managerial.leria-etud.univ-angers.fr/api/statistique/{idQuestionnaire}
```