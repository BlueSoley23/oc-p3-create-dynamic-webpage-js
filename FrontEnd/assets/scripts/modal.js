import { openDeleteModal, openUploadModal, closeDeleteModalBtn, closeUploadModalBtn, backUploadModalBtn, modifierBtn,
openUploaModalBtn, deleteModal, uploadModal, overlay, modalContainer, closeModal }
from "./modalLib.mjs";



// Écouteur d'évenement sur le bouton de fermeture de la modale de suppression
closeDeleteModalBtn.addEventListener('click', () => {
    closeModal();
});

// Écouteur d'évenement sur le bouton de fermeture de la modale de chargement
closeUploadModalBtn.addEventListener('click', () => {
    closeModal();
});

// Écouteur d'évenement sur l'overlay (fermeture de la modale de suppression)
overlay.addEventListener('click', () => {
    closeModal();
});

// Écouteur d'évenement sur le bouton de retour en arrière de la modale de chargement
backUploadModalBtn.addEventListener('click', () => {
    uploadModal.style.display = 'none';
    openDeleteModal();
});

// Écouteur d'évenement sur le bouton "modifier" (ouverture de la modale de suppression)
modifierBtn.addEventListener('click', async () => {
    openDeleteModal();
    deleteModal.style.display = 'block';
    overlay.style.display = 'block';
    modalContainer.style.display = 'block';
    uploadModal.style.display = 'none';
});

// Écouteur d'évenement sur le bouton de chargement de fichiers (ouverture de la modale d'upload)
openUploaModalBtn.addEventListener('click', () => {
    openUploadModal();
    uploadModal.style.display = 'block';
    overlay.style.display = 'block';
    modalContainer.style.display = 'block';
    deleteModal.style.display = 'none';
});



