const openModals = document.querySelectorAll('.openModal');
const modals = document.querySelectorAll('.modal');
const modalsContent = document.querySelectorAll('.modal-content');
const body = document.querySelector('body');
const closeModals = document.querySelectorAll('.closeModal')

const projectImages = document.querySelectorAll('.img-fluid')

// ouverture des modals version desktop
openModals.forEach(openModal => {
    openModal.addEventListener('click', () => {
        modals.forEach(modal => {
            if(openModal.dataset.id === modal.dataset.id){
                modal.style.display = "flex";
                body.style.overflow = "hidden";
            }
        })
    })
})

// ouverture des modals version mobile
projectImages.forEach(projectImage => {
    projectImage.addEventListener('click', () => {
        modals.forEach(modal => {
            if(projectImage.dataset.id === modal.dataset.id){
                modal.style.display = "flex";
                body.style.overflow = "hidden";
            }
        })
    })
})

// fermer les modals via le bouton
closeModals.forEach(closeModal => {
    closeModal.addEventListener('click', () => {
        modals.forEach(modal => {
            modal.style.display = "none";
            body.style.overflow = "auto";
        })
    })
})

// fermer les modals si l'on clique a coté
window.addEventListener('click', e => {

    modals.forEach(modal => {
        if(e.target == modal){
            modal.style.display = "none";
            body.style.overflow = "auto";
        }
    })
})

