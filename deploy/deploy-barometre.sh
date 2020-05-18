#!/bin/bash

NETWORK_NAME=mynetwork

IMAGE_NAME_NGINX=nginx
IMAGE_NAME_BM_SPRING_BOOT=bmspringboot
IMAGE_NAME_DATABASE=mysql:5.7

CONTAINER_NAME_NGINX=nginx
CONTAINER_NAME_BM_SPRING_BOOT=bmspringboot
CONTAINER_NAME_DATABASE=database

VOLUME_DATA=~/.db
MYSQL_ROOT_PASSWORD=root

# arrêts et suppréssions des containers
docker stop $CONTAINER_NAME_NGINX
docker stop $CONTAINER_NAME_BM_SPRING_BOOT
docker stop $CONTAINER_NAME_DATABASE

docker rm $CONTAINER_NAME_NGINX
docker rm $CONTAINER_NAME_BM_SPRING_BOOT
docker rm $CONTAINER_NAME_DATABASE

# suppression du réseau créé s'il existe
docker network rm $NETWORK_NAME

# création du Network
docker network create -d bridge $NETWORK_NAME

# création du container de base de données
docker run --name $CONTAINER_NAME_BM_SPRING_BOOT -v $VOLUME_DATA:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD -d -p 3306:3306 $IMAGE_NAME_DATABASE

# Pour les étapes suivantes, il faut s'assurer qu'on est bien dans le répertoire
# $HOME/deploy
cd $HOME/deploy/bmspringboot

# Création du container back-end
docker image build --force-rm -t $IMAGE_NAME_BM_SPRING_BOOT .
docker run --name $CONTAINER_NAME_BM_SPRING_BOOT -p 8080:8080 -d --network "$NETWORK_NAME" $IMAGE_NAME_BM_SPRING_BOOT

# Création du container nginx
cd $HOME/deploy/nginx
docker image build --force-rm -t $IMAGE_NAME_NGINX .
docker run --name $CONTAINER_NAME_NGINX -p 80:80 -p 443:443 -d --network "$NETWORK_NAME" $IMAGE_NAME_NGINX

cd $HOME
echo "FIN DES INSTALLATIONS"
