#Création d'une image : Vous créez une image Docker en utilisant un fichier de configuration appelé Dockerfile. Ce fichier définit les étapes nécessaires pour construire votre application et ses dépendances.
#Construction de l'image : Vous utilisez la commande docker build pour créer une image Docker à partir du Dockerfile.
#Exécution d'un conteneur : Vous démarrez un conteneur en utilisant l'image créée avec la commande docker run.
#Isolation et portabilité : Le conteneur s'exécute de manière isolée, avec son propre système de fichiers et ses dépendances, tout en partageant le noyau de l'hôte. Cela permet une portabilité élevée, car le conteneur peut être exécuté de manière cohérente sur différents environnements.


#Lancer docker en premier lieu
# à partir de quel image nous allons construire notre nouvelle image (on construit notre image avec FROM)
FROM php:8.2-apache  
# Copier des fichier présents dans le Dockerfile, dans l'image, ici on va le chercher dans php: 8.2-apache  
COPY . /var/www/html
# RUN permet de lancer des commandes lors de la construction du conteneur (pour faire un saut à la ligne on met \   )
RUN apt update && \
apt upgrade

# Un conteneur Docker est une instance en cours d'exécution d'une image Docker.  Il encapsule une application et son environnement d'exécution, en fournissant une isolation légère par rapport au système d'exploitation hôte. Les conteneurs partagent le noyau du système d'exploitation de l'hôte, mais ils sont isolés les uns des autres, offrant une portabilité et une flexibilité élevées.

# On ouvre ensuite le terminal à l'endroit souhaité 
# sur docker, Une image Docker est un ensemble immuable de fichiers binaires, de bibliothèques et de code source nécessaires pour exécuter une application. Elle contient le système d'exploitation, les bibliothèques, les dépendances et l'application elle-même. Les images Docker sont utilisées comme des modèles pour créer des conteneurs. C'est une sauvegarde d'un fichier afin ensuite de créer un conteneur avec les infos des images (la config qu'on aime bien)

# Pour créer une image :   docker build -t superphp .   ( -t  est pour donner un nom)
