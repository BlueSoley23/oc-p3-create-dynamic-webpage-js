/*
###############################################################################################################
###############################################################################################################
##########################   DÉCLARATION DES CONSTANTES, VARIABLES ET   #######################################
##########################  SÉLÉCTION DES ÉLÉMENTS UTILISÉS DANS LE DOM #######################################
###############################################################################################################
*/

import { printErrorAlert } from './errorAlert.mjs';


// CONSTANTES DE SÉECTIONS DES ÉLÉMENTS DU DOM UTILISÉS DANS LE MODULE

// SÉLÉCTION DES ÉLÉMENTS DU DOM ESSENTIELS ET GÉNÉRAUX (OVERLAY, CONTENAIRES, ETC...)
// Sélection du container global de la modale (overlay, modales, etc...)
export const modalContainer = document.querySelector('.modal-container');
// Sélection du sous-container des modales (modales de chargement et de suppression)
export const modalsSubContainer = document.querySelector('.modal-container__modals');
// Sélection de l'overlay de la modale
export const overlay = document.querySelector('.modal-container__overlay');
// Sélection de la modale de suppression des travaux (images) / (delete)
export const deleteModal = document.querySelector('.modal-container__modal--delete-modal');
// Sélection de la modale de chargement des travaux (images) / (upload)
export const uploadModal = document.querySelector('.modal-container__modal--upload-modal');

// SÉLÉCTION DES ÉLÉMENTS DU DOM UTILISÉS DANS LA MODALE DE SUPPRESSION (DELETE)
// Sélection du bouton "modifier", le bouton d'ouverture de la modale (de suppression)
export const modifierBtn = document.querySelector('.modifier-link__content--title');
// Sélection du bouton de fermeture de la modale de suppression
export const closeDeleteModalBtn = document.querySelector('.delete-modal__btn--close');
// Sélection du bouton de chargement de fichiers (ouverture de la modale d'upload)
export const openUploaModalBtn = document.querySelector('.delete-modal__btn--upload');
// Sélection de la galerie de travaux (images) de la modale de suppression
export const deleteModalGallery = document.querySelector('.delete-modal__gallery');

// SÉLECTION DES ÉLÉMENTS DU DOM UTILISÉS DANS LA MODALE DE CHARGEMENT (UPLOAD)
// Sélection du bouton de fermeture de la modale d'upload
export const closeUploadModalBtn = document.querySelector('.upload-modal__btn--close');
// Sélection du bouton de retour en arrière de la modale d'upload
export const backUploadModalBtn = document.querySelector('.upload-modal__btn--back');
// Sélection de la section de chargement de fichiers images (zone bleue) / (upload de travaux)
export const uploadSection = document.querySelector('.upload-modal__upload-area');
// Sélection du logo de chargement de fichiers (upload)
export const uploadLogo = document.querySelector('.upload-modal__upload-logo');
// Bouton de chargement ouvrant la fenêtre de sélection de fichiers
export const uploadBtn = document.querySelector('.upload-modal__btn--upload-file');

// SÉLECTION DES ÉLÉMENTS DU DOM UTILISÉS DANS LE FORMULAIRE DE CHARGEMENT
// Sélection de l'<input> de type file (upload) du formulaire de chargement de travaux
export const uploadInput = document.getElementById('uploadFileInput');
// Sélection du champ "Title" de type <input> (text), du formulaire de chargement de travaux
export const uploadTitleField = document.querySelector('.upload-modal__form__input--title');
// Séléction du champ "Category" de type <select>, du formulaire de chargement de travaux
export const uploadCategoryField = document.querySelector('.upload-modal__form__input--category');
// Sélection du bouton de validation du formulaire de chargement de travaux
export const uploadSubmitBtn = document.querySelector('.upload-modal__form__btn--submit');
// Selection de la zone bleue entourant le bouton et logo d'upload/l'image uploadée
export const uploadArea = document.querySelector('.upload-modal__upload-area');
// Sélection de la zone d'upload d'image
export const uploadImg = document.querySelector('.upload-img');

// DÉCLARATION DES VARIABLES GLOBALES UTILISÉES DANS LE MODULE
// Variable de stockage du token d'authentification
export let token = localStorage.getItem('token');

// DÉCLARATION DES FONCTIONS UTILISÉES DANS LE MODULE
// Fonction d'initialisation des modales de chargement et de suppression
function initModals() {
    modalContainer.style.display = 'none';
    uploadModal.style.display = 'none';
    deleteModal.style.display = 'none';
    overlay.style.display = 'none';
}

// DÉCLARATION DES FONCTIONS EXPORTÉES DEPUIS LE MODULE
export function closeModal() {
    uploadModal.style.display = 'none';
    deleteModal.style.display = 'none';
    overlay.style.display = 'none';
    modalContainer.style.display = 'none';
    window.location.reload();
}

export function clearModal() {
    modalContainer.style.display = 'none';
    uploadImg.dataset.loaded = 'false';
    uploadCategoryField.style.color = '#757575';
}

// Fonction d'ouverture de la modale de suppression
export async function openDeleteModal() {
    initModals();
    modalContainer.style.display = 'block';
    deleteModal.style.display = 'block';
    overlay.style.display = 'block';
    loadDeleteGallery();
}

// Fonction d'ouverture de la modale de chargement
export function openUploadModal() {
    initModals();
    modalContainer.style.display = 'block';
    uploadModal.style.display = 'block';
    overlay.style.display = 'block';
    loadUploadModal();
}

// Fonction de suppression des travaux de la gallerie de la modale de suppression
async function loadDeleteGallery() {
    const response = await fetch('http://localhost:5678/api/works');
    const works = await response.json();

    // Vider la galerie existante
    deleteModalGallery.innerHTML = '';

    for (let item of works) {
        const galleryElement = document.createElement('div');
        galleryElement.classList.add('delete-modal__gallery__item');
        galleryElement.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.title}" class="delete-modal__gallery__item--img">
            <img src="./assets/icons/delete-icon.svg" alt="Supprimer" class="delete-modal__gallery__item--delete-icon link">`;
        document.querySelector('.delete-modal__gallery').appendChild(galleryElement);

        const deleteIcon = galleryElement.querySelector('.delete-modal__gallery__item--delete-icon');
        deleteIcon.addEventListener('click', async (event) => {
            if (confirm('Voulez-vous vraiment supprimer ' + item.title + '  ?')) {
                event.preventDefault();
                try {
                    const response = await fetch(`http://localhost:5678/api/works/${item.id}`, {
                        method: 'DELETE',
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    });
                    if (response.ok) {
                        alert(item.title + ' a été correctement supprimé !');
                        // Recharger la galerie après la suppression
                        await loadDeleteGallery();
                    } else {
                        alert(('Erreur ' + '( ' + error + ' ) ' + ' lors de la suppression du travail ' + item.title + ' !'));
                    }
                } catch (error) {
                    printErrorAlert(error, response);
                }
            }
        });
    }
}




/* Fonction chargée de récupérer et ajouter au DOM l'image du travail dés qu'une action est détéctée avec la boite de dialogue du formulaire,
chargée de récupérer un fichier sur l'ordinateur client (la sélection d'un travail par le clique sur le bouton d'upload)
Finalement, c'est elle qui gère la prévisualisation du travail à chrger, le chargement d'une image au clic sur le bouton ou suyr une image déja chargée
ainsi que le chargement du formulmaire au clic sur le bouton de validation, donc globalement l'upload des nouveaux travaux ! */


// Déclaration de la fonction loadUploadModal
export function loadUploadModal() {
    // Ajout d'un écouteur d'événements sur l'élément d'entrée de fichier avec l'ID 'uploadFileInput'
    // Cet écouteur se déclenche lorsque l'utilisateur sélectionne un fichier
    document.getElementById('uploadFileInput').addEventListener('change', function (e) {
        // Création d'un nouvel objet FileReader pour lire le contenu du fichier sélectionné
        const reader = new FileReader();
        // Ajout d'un écouteur d'événements qui se déclenche lorsque le fichier est entièrement lu
        reader.onload = function(e) {
            // Création d'un nouvel élément image
            const img = document.createElement('img');
            // Définition de la source de l'image comme étant le contenu du fichier lu
            img.src = e.target.result;
            // Ajout de la classe 'upload-img' à l'image
            img.classList.add('upload-img');
            // Effacement du contenu de l'élément 'uploadArea'
            uploadArea.innerHTML = '';
            // Modification du style de l'élément 'uploadArea' pour afficher l'image
            uploadArea.style.display = 'flex';
            uploadArea.style.justifyContent = 'center';
            uploadArea.style.alignItems = 'center';
            uploadArea.style.backgroundColor = '#E8F1F6';
            // Ajout de l'image à l'élément 'uploadArea'
            uploadArea.appendChild(img);
            // Ajout de la classe 'fileAdded' à l'élément 'uploadArea'
            uploadArea.classList.add('fileAdded');
            // Ajout d'un écouteur d'événements sur l'image qui se déclenche lorsque l'utilisateur clique dessus
            // Cela permet à l'utilisateur de sélectionner un nouveau fichier
            img.addEventListener('click', function () {
                uploadInput.click();
            });

            // Ajout d'un écouteur d'événements sur le formulaire avec la classe 'upload-modal__form'
            // Cet écouteur se déclenche lorsque l'utilisateur soumet le formulaire
            document.querySelector('.upload-modal__form').addEventListener('submit', function (e) {
                // Prévention de la soumission par défaut du formulaire
                e.preventDefault();
                // Récupération du fichier sélectionné, du titre et de la catégorie du formulaire
                const file = document.uploadInput.files[0];
                const title = document.getElementById('titleInput').value;
                const category = document.getElementById('categoryInput').value;
            });
        };
        // Prévisualisation de l'image à la place de l'icone d'upload
        reader.readAsDataURL(e.target.files[0]);
    });

    // Écouteur d'événements pour que le nom du travail soit le nom du fichier par défaut dans le champ titre du formulaire
    uploadInput.addEventListener('change', () => {
        uploadTitleField.value = uploadInput.files[0].name;
    });

    // Change la couleur du texte en fonction de la catégorie sélectionnée
    // Écouteur d'événements pour les changements sur l'élément de sélection de catégorie
    uploadCategoryField.addEventListener('change', function () {
        // Si une catégorie est sélectionnée, change la couleur du texte en noir
        if (this.value) {
            this.style.color = 'black';
        }
        // Si aucune catégorie n'est sélectionnée, change la couleur du texte en #757575
        else {
            this.style.color = '#757575';
        }
    });

    // Écouteur d'événements pour l'événement de clic sur le bouton de soumission du formulaire
    uploadSubmitBtn.addEventListener('click', async (event) => {
        // Empêche la soumission de formulaire par défaut
        event.preventDefault();

        // Obtient le fichier sélectionné, le titre et la catégorie du formulaire
        const file = uploadInput.files[0];
        const title = uploadTitleField.value;
        const category = uploadCategoryField.value;

        // Crée un nouvel objet FormData et ajoute le fichier, le titre et la catégorie
        const formData = new FormData();
        formData.append('image', uploadInput.files[0]);
        formData.append('title', uploadTitleField.value);
        formData.append('category', uploadCategoryField.value);

        try {
            // Lance une erreur si aucun fichier n'est sélectionné
            if (!file) {
                throw new Error('Veuillez sélectionner un fichier à charger !');
            }
            // Lance une erreur si aucun titre n'est fourni
            if (!title) {
                throw new Error('Veuillez renseigner un titre pour le travail !');
            }
            // Lance une erreur si aucune catégorie n'est sélectionnée
            if (!category) {
                throw new Error('Veuillez sélectionner une catégorie pour le travail !');
            }

            // Envoie une requête POST à l'API pour télécharger le nouveau travail
            const response = await fetch('http://localhost:5678/api/works', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                body: formData
            });

            // Si la requête est réussie, alerte l'utilisateur que le travail a été ajouté
            if (response.ok) {
                alert('Le travail a été correctement ajouté !');
                uploadTitleField.value = '';
                window.location.reload();
            }
            // Si la requête n'est pas réussie, lance une erreur
            else {
                throw new Error (error + " : " + error.message);
            }
        }
        // Attrape toutes les erreurs et alerte l'utilisateur
        catch (error) {
    {
            printErrorAlert(error, { status: 'No response' });
        }
    }
    });

    // Écouteur d'événements pour vider le champ Titre
    uploadTitleField.value = '';
}