// #######################################################################################################
// ########################################   Authentication   ###########################################
// ####################   Gère l'authentification de l'utilisateur sur le site   #########################
// #######################################################################################################

// Récupération du token de l'utilisateur dans le localStorage
const token = localStorage.getItem('token');

if (token) {
    // Si l'utilisateur est connecté, on modifie l'affichage de certaines parties du site

    // On ajoute la classe .logged à .header, .header-block, .portfolio__title--section et .modifier-link__content
    document.querySelector('.header').classList.add('logged');
    document.querySelector('.header-block').classList.add('logged');
    document.querySelector('.portfolio__title--section').classList.add('logged');
    document.querySelector('.modifier-link__content').classList.add('logged');

    // On ajoute la classe .hidden à .nav-list__item--login et .categories
    document.querySelector('.nav-list__item--login').classList.add('hidden');
    document.querySelector('.categories').classList.add('hidden');

    // On supprime la classe .hidden de .nav-list__item--logout, modifier-link__btn et .edit-bar
    document.querySelector('.nav-list__item--logout').classList.remove('hidden');
    document.querySelector('.modifier-link__btn').classList.remove('hidden');
    document.querySelector('.edit-bar').classList.remove('hidden');

    // On supprime la classe .guest de .header-block
    document.querySelector('.header-block').classList.remove('guest');
}

else {
    // Si l'utilisateur n'est pas connecté, on modifie l'affichage de certaines parties du site

    // On ajoute la classe .guest à .header-block
    document.querySelector('.header-block').classList.add('guest');

    // On supprime la classe .logged de .header, .header-block, .portfolio__title--section et .modifier-link__content
    document.querySelector('.header').classList.remove('logged');
    document.querySelector('.header-block').classList.remove('logged');
    document.querySelector('.portfolio__title--section').classList.remove('logged');
    document.querySelector('.modifier-link__content').classList.remove('logged');

    // On supprime la classe .hidden de .nav-list__item--login et .categories
    document.querySelector('.nav-list__item--login').classList.remove('hidden');
    document.querySelector('.categories').classList.remove('hidden');

    // On ajoute la classe .hidden à .nav-list__item--logout, modifier-link__btn et .edit-bar
    document.querySelector('.nav-list__item--logout').classList.add('hidden');
    document.querySelector('.modifier-link__btn').classList.add('hidden');
    document.querySelector('.edit-bar').classList.add('hidden');
}

// #######################################################################################################
// ########################################   Logout   ###################################################
// ####################   Gère la déconnexion de l'utilisateur du site   #################################
// #######################################################################################################

// On sélectionne le bouton de déconnexion dans le DOM
const logoutButton = document.querySelector('.nav-list__item--logout');

// On ajoute un gestionnaire d'événements au clic sur le bouton de déconnexion
logoutButton.addEventListener('click', function(event) {

    // On empêche le comportement par défaut du bouton
    event.preventDefault();

    // On supprime le token du localStorage
    localStorage.removeItem('token');

    // On recharge la page
    location.reload();

   // On prévient l'utilisateur que la déconnexion a bien eu lieu
    alert('Vous avez été déconnecté !');
});







