# Application de Gestion des Commandes - API E-Commerce

Application de Gestion des Commandes - API E-Commerce

## Description

Ce projet est une application de gestion des commandes pour une API E-Commerce. Elle permet de créer, récupérer, mettre à jour et supprimer des commandes.

## Fonctionnalités de l'API

- GET /orders: Récupère toutes les commandes.
- GET /orders/:id: Récupère une commande spécifique.
- GET /orders/product/:id: Récupère les commandes contenant un produit spécifique.
- GET /orders/user/:id: Récupère les commandes d'un utilisateur spécifique.
- POST /orders: Crée une nouvelle commande.
- PUT /orders/:id: Met à jour une commande spécifique.
- DELETE /orders/:id: Supprime une commande spécifique.

## Technologies Utilisées

- Node.js & Express: Pour le serveur backend.
- Sequelize: ORM pour la gestion de la base de données.
- Docker: Pour la conteneurisation de l'application.

## Installation et Configuration

- Clonez le dépôt.

- Aller dans le dossier docker
```sh
cd docker/
```

- Installez l'image et les containers docker
```sh
docker-compose build --no-cache
```

```sh
docker-compose up -d
```

On peut maintenant faire le test si tout fonctionne correctement via cette route :
http://localhost:3000/test
