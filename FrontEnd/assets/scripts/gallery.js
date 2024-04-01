// #######################################################################################################
// #######################################################################################################
// #####################   DECLARATION DES FONCTIONS ET CONSTANTES DE LA GALLERIE   ######################
// #######################################################################################################
// #######################################################################################################





// #######################################################################################################
// #############   Déclaration des constantes correspondantes aux éléments du DOM utilisés   #############
// #######################################################################################################

// Récupération de l'élément du DOM qui contiendra les boutons de filtrage
const categoriesSection = document.querySelector('.categories');

// DÉCLARATION DES FONCTIONS EXPORTÉES DEPUIS LE MODULE

// Récupération de l'élément du DOM qui contiendra les travaux
const gallery = document.querySelector('.gallery');



/*                                                                                                      */
// #######################################################################################################
// ###########################################   getWorks()   ############################################
// ##############################   Récupération des travaux depuis l'API   ##############################
// #######################################################################################################

// Déclaration de la fonction asynchrone qui récupère les travaux depuis l'API
async function getWorks() {

    // Envoie une requête GET à l'API pour récupérer les données des travaux, et attend la réponse avant
    // de continuer l'exécution du code grâce à await
    return await fetch('http://localhost:5678/api/works')

    // Si la réponse est reçue, on la convertit en JSON et on la retourne
        .then(response => response.json())

    // Si la réponse n'est pas reçue, on affiche une boîte de dialogue avec le message d'erreur
        .catch(error => {
        alert('Veuillez contacter votre administrateur système en lui indiquant ce message d\'erreur :\n\n' + error);

    });
}



/*                                                                                                      */
// #######################################################################################################
// #########################################   printWorks()   ############################################
// ##########################   Affichage des travaux sur la page d'accueil   ############################
// #######################################################################################################

// Déclaration de la fonction asynchrone qui affiche les travaux sur la page d'accueil
async function printWorks(works) {

    try {
        // Parcourt les données et affiche chaque travail sur la page d'accueil
        for (let item of works) {

            // Création d'un élément HTML qui contiendra un travail
            const workElement = document.createElement('figure');

            // Création de chaque élément HTML <figure> correspondant à chaque travail avec son titre
            // et son image
            workElement.innerHTML = `
                                <img src="${item.imageUrl}" alt="${item.title}">
                                <figcaption>${item.title}</figcaption>
                            `;

            // Rattache l'élément HTML dans le DOM (le projet est affiché dans la section .gallery)
            gallery.appendChild(workElement);
        }

    }

    catch (error) {

        // Si une erreur est survenue, on affiche une boîte de dialogue avec le message d'erreur
        alert('Veuillez contacter votre administrateur système en lui indiquant ce message d\'erreur :\n\n' + error);
    }
}



/*                                                                                                      */
// #######################################################################################################
// ########################################   getCategories()   ##########################################
// ##########################   Renvoie la liste des catégories sans doublons   ##########################
// #######################################################################################################

// Déclaration de la fonction asynchrone qui récupère les catégories des travaux sans doublons
async function getCategories() {

    try {

        // Récupération des travaux depuis l'API
        let works = await getWorks();

        // Création d'un objet Set contenant les noms des catégories sans doublons
        const categories = new Set(works.map(work => work.category.name));

        // Conversion de l'objet Set en tableau
        let categoriesArray = Array.from(categories);

        // Ajoute "Tous" au début du tableau
        categoriesArray.unshift("Tous");

        // Retourne le tableau des catégories
        return categoriesArray;

    }

    catch (error) {

        // Si une erreur est survenue, on affiche une boîte de dialogue avec le message d'erreur
        alert('Veuillez contacter votre administrateur système en lui indiquant ce message d\'erreur :\n\n' + error);
    }
}



/*                                                                                                      */
// #######################################################################################################
// ########################################   printCategories()   ########################################
// ####################   Affiche des boutons filtrant les travaux par catégories   ######################
// #######################################################################################################


// Déclaration de la fonction asynchrone qui affiche les boutons de filtrage par catégorie
async function printCategories() {

    // Récupération des catégories depuis l'API
    const categories = await getCategories();

    // Parcourt les catégories et crée un bouton pour chaque catégorie
    for (let category of categories) {
        // Création d'un élément HTML qui contiendra un bouton
        const buttonElement = document.createElement('button');

        // Ajout de la classe 'category-button' au bouton
        buttonElement.innerHTML = `${category}`;

        // Si la catégorie est 'Tous', on ajoute la classe 'tous-button' au bouton
        if (category === 'Tous') {
            buttonElement.classList.add('tous-button'); // Ajoute la classe 'tous-button' au bouton 'Tous'
        }

        // On intègre les boutons dans la section .categories
        categoriesSection.appendChild(buttonElement);
    }
}



/*                                                                                                      */
// #######################################################################################################
// ########################################   sortByCategories()   #######################################
// ####################   Affiche les travaux correspondant à la catégorie choisie   #####################
// #######################################################################################################

// Déclaration de la fonction asynchrone qui affiche les travaux correspondant à la catégorie choisie
function sortByCategories() {

    // Configuration de l'EventListener sur la section .categories
    categoriesSection.addEventListener('click', function(event) {

        // Si l'élément cliqué est un bouton
        if (event.target.tagName === 'BUTTON') {

            // On récupère tous les boutons de la section .categories
            const buttons = categoriesSection.querySelectorAll('button');

            // On parcourt tous les boutons et on retire la classe 'selected'
            buttons.forEach(button => button.classList.remove('selected'));

            // On ajoute la classe 'selected' au bouton cliqué
            event.target.classList.add('selected');

            // On récupère le nom de la catégorie choisie au format textuel pour s'assurer que les caractères
            // spéciaux sont bien traités
            let category = event.target.textContent;

            // On vide la section .gallery
            gallery.innerHTML = '';

            // On récupère puis on affiche les travaux correspondant à la catégorie choisie, ou tous
            // les travaux si la catégorie choisie est 'Tous'
            getWorks().then(works => printWorks(works.filter(work => work.category.name === category || category === 'Tous')));
        }
    });
}





/*                                                                                                      */
// #######################################################################################################
// #######################################################################################################
// ###########################   EXECUTION DES FONCTIONS DE LA GALLERIE  #################################
// #######################################################################################################
// #######################################################################################################




// ############################   Affichage des oeuvres sur la page d'accueil   ##########################

// Recupération et affichage des oeuvres avec l'appel des fonctions getWorks et printWorks
getWorks().then(works => printWorks(works));


// ####################   Affichage des boutons de catégories sur la page d'accueil   ####################

// Recupération et affichage des catégories avec l'appel de la fonction getCategories
getCategories().then(categories => printCategories(categories));


// ###################   Filtre des oeuvres par catégories sur la page d'accueil   #######################

// Filtre des oeuvres par catégories avec l'appel de la fonction sortByCategories
sortByCategories();


