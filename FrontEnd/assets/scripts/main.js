// #######################################################################################################
// ###################   Documentation Swagger : http://localhost:5678/api-docs/   #######################
// ######################   Page Front-end : http://127.0.0.1:5500/FrontEnd/   ###########################
// #######################################################################################################




// #################################################################################################################
// #################################################################################################################
// ##################################   Fonctions relatives à la gallerie   ########################################
// #################################################################################################################
// #################################################################################################################


    // #######################################################################################################
    // ############################   Affichage des oeuvres sur la page d'accueil   ##########################
    // #######################################################################################################

        // Importation de la fonction getWorks déclarée dans le fichier gallery.js
        import { getWorks } from './components/gallery.js';

        // Importation de la fonction printWorks déclarée dans le fichier gallery.js
        import { printWorks } from './components/gallery.js';
            

            // Recupération et affichage des oeuvres avec l'appel des fonctions getWorks et printWorks
            getWorks().then(works => printWorks(works));
            



    // #######################################################################################################
    // ####################   Affichage des boutons de catégories sur la page d'accueil   ####################
    // #######################################################################################################

        // Importation de la fonction getCategories déclarée dans le fichiergallery.js
        import { getCategories } from './components/gallery.js';

        // Importation de la fonction getCategories déclarée dans le fichier gallery.js
        import { printCategories } from './components/gallery.js';


            // Recupération et affichage des catégories avec l'appel de la fonction getCategories
            getCategories().then(categories => printCategories(categories));
        
        


    // #######################################################################################################
    // ###################   Filtre des oeuvres par catégories sur la page d'accueil   ######################
    // #######################################################################################################

        // Importation de la fonction filterWorks déclarée dans le fichier gallery.js
        import { sortByCategories } from './components/gallery.js';

            // Filtre des oeuvres par catégories avec l'appel de la fonction sortByCategories
            sortByCategories();


            

// #################################################################################################################
// #################################################################################################################
// ########################################   Fonctions relatives au login   #######################################
// #################################################################################################################
// #################################################################################################################


    // #######################################################################################################
    // ############################                       ...                       ##########################
    // #######################################################################################################