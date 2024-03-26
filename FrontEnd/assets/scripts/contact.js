// #######################################################################################################
// #######################################################################################################
// #######################   EXECUTION DES FONCTIONS DU FORMULAIR DE CONTACT  ############################
// #######################################################################################################
// #######################################################################################################




// #############################   Réception des informations et traitement ###########################

// Sélection du formulaire de contact
const contactForm = document.querySelector('.contact__form');

// Écouteur d'événements pour l'événement de soumission du formulaire
contactForm.addEventListener('submit', function(event) {
    // Empêcher l'action par défaut de l'événement de soumission (qui est de recharger la page)
    event.preventDefault();

    // Récupérer les données du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    document.querySelector('.contact__form--submit').addEventListener('click', () => {

        // Traiter les données du formulaire (par exemple, les envoyer à un serveur)
        // ...
        // Recharger la page
        location.reload();

    });
});




