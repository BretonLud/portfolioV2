const links = document.querySelectorAll('.nav-item');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.container h2');

function toggleMenu(){
    const menu = document.querySelector('.navbar');
    const burger = document.querySelector('.navbar-toggler');

    burger.addEventListener('click', () => {



        links.forEach(link => {
          link.addEventListener('click', () => {
              menu.classList.remove('menu__show', 'open');
          })
        })

        document.addEventListener('click', function (event){
            if (!burger.contains(event.target)){


                const ul = document.querySelector('.navbar-nav').contains(event.target)

                if (!ul){
                    menu.classList.remove('menu__show');
                }
            }
        })


        menu.classList.toggle('menu__show');
    })
}

toggleMenu();

let options

window.addEventListener('scroll', () => {
    if (window.scrollY >= 180){
        navbar.style.backgroundColor = '#fff';
    } else  {
        navbar.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})

if (window.innerWidth < 960){
    options = {
        routeMargin: "0px 0px",
        threshold : 0.45,
    }
    window.addEventListener('resize', ()=> {
      if  (window.innerWidth > 960){
          options = {
              routeMargin: "0px 0px",
              threshold : 0.8,
          }
      } else {
          options = {
              routeMargin: "0px 0px",
              threshold : 0.45,
          }
      }
    })
} else {
    options = {
        routeMargin: "0px 0px",
        threshold : 0.8,
    }
    window.addEventListener('resize', ()=> {
        if (window.innerWidth < 960) {
            options = {
                routeMargin: "0px 0px",
                threshold: 0.45,
            }
        } else {
            options = {
                routeMargin: "0px 0px",
                threshold: 0.8,
            }
        }
    })
}



const observer = new IntersectionObserver(handleIntersec, options);
const sections = document.querySelectorAll("section");
const listes = document.querySelectorAll(".nav-item");

sections.forEach(section => {
    observer.observe(section)
})



function handleIntersec(entries){
    entries.forEach(entry => {

        let id = entry.target.getAttribute("id");
        const link = document.querySelector(`nav ul li a[data-value="${id}"]`);

        if (entry.isIntersecting){
            listes.forEach(liste => {
                liste.classList.remove('active-nav')
            })
            link.classList.add('active-nav');
        } else {
            link.classList.remove('active-nav');
        }
    })
}

