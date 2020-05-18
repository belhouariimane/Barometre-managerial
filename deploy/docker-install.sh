#!/bin/bash

echo "INSTALLATION DE DOCKER"

# Désinstallation d'anciennes version
sudo apt-get remove docker docker-engine docker.io containerd runc # le contenu de /var/lib/docker n'est pas supprimé

# Préparation du repository

sudo apt-get update
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -

# Pour les architectures x86_64 / amd64
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"

# Installation Docker Engine - Community
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io

# Tester l'installation
sudo docker run hello-world

echo "FIN DE L'INSTALLATION"
echo " *** "

echo "*** DOCKER UTILISATEUR NON-ROOT ***"

# Création d'un group docker
sudo groupadd docker

# Ajout de l'utilisateur courant dans ce group
sudo usermod -aG docker $USER

# Faire un redémarrage pour rendre ces modifications effectives
# ou bien, sur Linux, faire : 
#newgrp docker

# Vérification sans la commande sudo
docker run hello-world

echo "FIN - DOCKER UTILISATEUR NON-ROOT"
echo "*** LANCEMENT DE DOCKER AU MOMENT DU BOOT ***"

sudo chmod 666 /var/run/docker.sock

sudo systemctl enable docker

# Installation docker-compose
echo "INSTALLATION DOCKER COMPOSE"
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
