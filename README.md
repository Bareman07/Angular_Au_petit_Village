Projet Angular - Site Vitrine "Au Petit Village"

Description

Ce projet est un site vitrine dynamique développé avec Angular pour une entreprise vendant des figurines inspirées d'Astérix & Obélix. Il intègre plusieurs fonctionnalités interactives comme la recherche de produits, le tri, la pagination et une navigation fluide entre les pages grâce au routage Angular.

Fonctionnalités

Page d'accueil : Présentation de l'entreprise et affichage du catalogue des produits.

Page produit détaillée : Description complète de chaque produit.

Page "À propos" : Informations sur l'entreprise.

Tri et recherche : Tri des produits par nom ou prix et recherche dynamique.

Gestion des données : Stockage des produits en JSON.

Navigation fluide : Header et footer présents sur toutes les pages.

Pagination : Affichage des produits par lot pour une meilleure lisibilité.

Technologies utilisées

Angular (Standalone Mode + SSR) : Framework principal pour le développement.

Angular CLI : Outil de gestion du projet.

TypeScript : Langage principal utilisé.

Bootstrap : Pour le style et la mise en page.

SCSS : Feuilles de style avancées.

Git/GitHub : Versioning et stockage du projet.

Installation et exécution

Prérequis

Node.js (v16+ recommandé)

Angular CLI installé globalement :

npm install -g @angular/cli

Un serveur local (optionnel, mais recommandé pour le SSR)

Étapes d'installation

Cloner le repository GitHub :

git clone https://github.com/ton-profil/ton-repo.git

Accéder au dossier du projet :

cd Au_Petit_Village

Installer les dépendances :

npm install

Lancer le serveur de développement :

npm run dev

Accéder au site via :

http://localhost:4200

Structure du projet

src/
├── app/
│   ├── accueil/                 # Composant de la page d'accueil
│   │   ├── accueil.component.ts
│   │   ├── accueil.component.html
│   │   ├── accueil.component.css
│   ├── produit-detail/           # Page détaillée des produits
│   ├── about/                    # Page "À propos"
│   ├── services/                 # Services Angular (ex: gestion des produits)
│   ├── pipes/                    # Pipes de tri et de recherche
│   ├── shared/                    # Composants partagés (header, footer...)
├── assets/
│   ├── images/                   # Images des produits
├── styles.scss                    # Fichier global de styles
├── angular.json                   # Configuration Angular
├── package.json                   # Dépendances et scripts npm
└── tsconfig.json                   # Configuration TypeScript

Contributions

Les contributions sont les bienvenues ! Pour proposer une amélioration :

Forker le repository

Créer une branche (feature-ma-modif)

Committer les changements (git commit -m "Ajout d'une nouvelle fonctionnalité")

Pousser sur GitHub (git push origin feature-ma-modif)

Ouvrir une Pull Request

Auteur

Développé par [Ton Nom] dans le cadre d'un projet scolaire.
