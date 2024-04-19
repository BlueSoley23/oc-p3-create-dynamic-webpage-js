export function printErrorAlert (error, response) {
    alert("########   " + error + "   #######\n\nUne erreur est survenue ! Voici quelques conseils pour tenter de résoudre le problème : \n\
    - Vérifier  la combinaison email/mot de passe saisie.\n\
    - Vérifier votre connexion internet. \n\
    - Recharger la page (F5 / Cmd + R).\n\
    - Videz le cache de votre navigateur (Ctrl+Shift+Del).\n\
    - Redémarrez votre navigateur ou essayez-en un autre.\n\
    - Redémarrez votre ordinateur.\n\
    - Réessayez plus tard.\n\
    - Essayez avec un autre appareil.\n\n\
    Sinon, contacter votre administrateur système ou webmaster et lui transmettre ce message d'erreur : \n\n"
    + "Informations : " + error + "\n" + "Type d'erreur : " + error.name +  "\n" + "Statut de la réponse : "
    + response.status + "\n" + "URL actuelle : " + window.location.href + "\n" + "Détails de l'erreur : " + error.message );
}