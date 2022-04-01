const opens = document.querySelectorAll('.lb-open');



opens.forEach( open => {

    open.addEventListener('click', (event) => {

        const lightboxOverlay = document.querySelector('.lightboxOverlay')
        const closed = document.querySelectorAll('.lb-close');

        body.style.overflow = "hidden";

        closed.forEach(close => {
            close.addEventListener('click' , () => {
             body.style.overflow = "auto";
            })
        })

        lightboxOverlay.addEventListener( 'click', (e) => {
            if (e.target === lightboxOverlay){
                body.style.overflow = "auto"
            }
        });

    });
} )