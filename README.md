# Baromètre managérial

Les répertoires `Back` et `FRONT` contiennent respectivement les sources des applications **spring-boot** et ***angular** du projet `Baromètre managérial`.
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
./deploy-barometre
```

## Exposition des APIs

[https://barometre-managerial.leria-etud.univ-angers.fr/api/swagger-ui.html#/](https://barometre-managerial.leria-etud.univ-angers.fr/api/swagger-ui.html#/)