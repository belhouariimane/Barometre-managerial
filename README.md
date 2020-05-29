# [Baromètre managérial](https://barometre-managerial.leria-etud.univ-angers.fr)

Les répertoires `Back` et `Front` contiennent respectivement les sources des applications **spring-boot** et **angular** du projet `Baromètre managérial`.
Le répertoire `deploy` contient les scripts d'automatisation du déploiement de ce projet.

## Déploiement sur un serveur

#### Récupération des sources depuis un Repository Github

```bash
cd $HOME
git clone https://github.com/belhouariimane/Barometre-managerial.git
cd Barometre-managerial # Branche master
git checkout <BRANCH_NAME>
```

Si les sources sont déjà présents dans le répértoire `$HOME`, il faut les mettre à jour pour déployer les dernières versions.
```bash
cd Barometre-managerial
git pull
```

#### Installation Docker
```bash
cd Barometre-managerial/deploy
./docker-install.sh
```

#### Création des containers et déploiement du projet
```bash
cd Barometre-managerial/deploy
./deploy-barometre.sh
```
Pour le premier déploiement, il faut créer une base de données. L'application **spring-boot** ne crée pas de base de données mais cherche à se connecter sur une déjà existante. Si aucune base de données n'est présence, le conteneur **spring-boot** ne se lancera pas.
Les autres conteneurs seront lancés quand même.
```bash
docker ps # Liste de tous les conteneurs qui sont en train de tourner
# Création d'une base de données dans le conteneur de BDD
docker exec -it <CONTAINER_NAME_DATABASE> mysql -uroot -p
```
Après avoir rentré le mot de passe de l'utilisateur `root`,
```sql
CREATE DATABASE <DB_NAME>;
-- Le nom de la base de donnée doit correspondre à celui se trouvant
-- dans le fichier application.properties de Spring Boot
```