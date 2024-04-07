# Projet Portfolio Architecte d'Intérieur

Ce projet est un site portfolio pour une architecte d'intérieur. Il a été développé en utilisant la méthodologie BEM
pour l'organisation et la stylisation des éléments de la page, l'harmonie d'unités CSS relatives (les em), et
l'utilisation d'un design system.

## Fonctionnalités

1. **Page de présentation des travaux de l'architecte** : Cette page affiche les différents projets réalisés par
   l'architecte. Les projets sont filtrés et affichés dans une galerie.

2. **Page de connexion de l'administrateur du site** : Cette page permet à l'administrateur du site de se connecter. Une
   fois connecté, l'administrateur a accès à des fonctionnalités supplémentaires comme l'ajout, la modification et la
   suppression de projets.

3. **Modale d'upload de nouveaux médias** : Cette fonctionnalité permet à l'administrateur de télécharger de nouveaux
   médias sur le site.

4. **Modale de suppression de médias** : Cette fonctionnalité permet à l'administrateur de supprimer des médias
   existants sur le site.

## Appels à l'API

Les données sont récupérées via des appels à l'API. Les données récupérées sont ensuite utilisées pour afficher les
projets dans la galerie. Lorsqu'un utilisateur est connecté, des appels supplémentaires à l'API sont effectués pour
récupérer les données de l'utilisateur.

## Gestion de la connexion de l'utilisateur

La connexion de l'utilisateur est gérée via JavaScript. Une fois qu'un utilisateur est connecté, il a accès à des
fonctionnalités supplémentaires. La différence entre un utilisateur connecté et non connecté est gérée via JavaScript.

## Filtre des projets dans la galerie

Le filtre des projets dans la galerie est réalisé via JavaScript. Les utilisateurs peuvent filtrer les projets en
fonction de différents critères.

## Envoi de nouvelles images à l'API

L'envoi de nouvelles images à l'API est réalisé via JavaScript. Cette fonctionnalité est accessible uniquement aux
utilisateurs connectés.

## Suppression d'images de l'API

La suppression d'images de l'API est réalisée via JavaScript. Cette fonctionnalité est accessible uniquement aux
utilisateurs connectés.

## Mise en application des compétences

Dans le cadre de ce projet, j'ai mis en application les compétences suivantes :

- **Gérer les événements utilisateurs avec JavaScript** : J'ai utilisé JavaScript pour gérer les interactions des
  utilisateurs avec le site, y compris la connexion de l'utilisateur, le filtrage des projets dans la galerie, l'ajout,
  la modification et la suppression de projets.

- **Manipuler les éléments du DOM avec JavaScript** : J'ai utilisé JavaScript pour manipuler les éléments du DOM afin de
  mettre à jour dynamiquement le contenu de la page en fonction des actions de l'utilisateur et des données récupérées
  de l'API.

- **Récupérer les données utilisateurs dans le JavaScript via des formulaires** : J'ai utilisé JavaScript pour récupérer
  les données des utilisateurs via des formulaires, y compris les informations de connexion de l'utilisateur et les
  données des nouveaux médias à télécharger.

## Installation

Pour installer ce projet sur votre machine locale, suivez les étapes suivantes :

1. Clonez le dépôt sur votre machine locale
2. Naviguez jusqu'au dossier du projet via la ligne de commande
3. Installez les dépendances en utilisant la commande `npm install`
4. Lancez le serveur en utilisant la commande `npm start`
5. Ouvrez votre navigateur et accédez à `http://localhost:8080`

## Utilisation

Pour utiliser ce projet, naviguez jusqu'à `http://localhost:8080` dans votre navigateur. Vous pouvez voir les projets de
l'architecte, vous connecter en tant qu'administrateur pour ajouter, modifier ou supprimer des projets, et filtrer les
projets dans la galerie.

## Tests

1. **Test de la page de connexion** :
    - Naviguez jusqu'à la page de connexion.
    - Entrez un nom d'utilisateur et un mot de passe valides.
    - Cliquez sur le bouton de connexion.
    - Vérifiez que vous êtes redirigé vers la page d'accueil.

2. **Test de l'ajout de nouveaux médias** :
    - Connectez-vous en tant qu'administrateur.
    - Naviguez jusqu'à la page d'ajout de médias.
    - Sélectionnez un fichier média à ajouter.
    - Cliquez sur le bouton d'ajout de médias.
    - Vérifiez que le nouveau média apparaît dans la galerie.

3. **Test de la suppression de médias** :
    - Connectez-vous en tant qu'administrateur.
    - Naviguez jusqu'à la page de gestion des médias.
    - Sélectionnez un média à supprimer.
    - Cliquez sur le bouton de suppression de médias.
    - Vérifiez que le média supprimé n'apparaît plus dans la galerie.

<div class="glitch-embed-wrap" style="position: fixed; top: 0; left: 0; bottom: 0; right: 0; height: 100%; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/oc-p3-js-portfolio?path=README.md&previewSize=0"
    title="oc-p3-js-portfolio on Glitch"
    allow="geolocation; microphone; camera; midi; encrypted-media; xr-spatial-tracking; fullscreen"
    allowFullScreen
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

<p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px;text-align:center;"
            src="./FrontEnd/assets/icons/w3c_validated_icon.png"
            alt="HTML, CSS & JavaScript valide ! (W3C)" />
    </a>
</p>


