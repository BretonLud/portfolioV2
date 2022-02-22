const openModals = document.querySelectorAll('.openModal');
const modals = document.querySelectorAll('.modal');
const modalsContent = document.querySelectorAll('.modal-content');
const body = document.querySelector('body');
const closeModals = document.querySelectorAll('.closeModal')

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


closeModals.forEach(closeModal => {
    closeModal.addEventListener('click', () => {
        modals.forEach(modal => {
            modal.style.display = "none";
            body.style.overflow = "auto";
        })
    })
})

window.addEventListener('click', e => {
    modals.forEach(modal => {
        if(e.target == modal){
            modal.style.display = "none";
            body.style.overflow = "auto";
        }
    })
})