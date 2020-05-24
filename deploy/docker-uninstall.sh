#!/bin/bash

echo "DESINSTALLATION DOCKER"

# Pour la désinstallation + suppression de /var/lib/docker
sudo apt-get purge docker-ce
sudo rm -rf /var/lib/docker

echo "FIN DE LA DESINSTALLATION"