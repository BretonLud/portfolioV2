const formMail = document.querySelector('#my_form');
const btn = document.querySelector('#btn');

btn.addEventListener('click', sendMail);

function sendMail(evt){
    evt.preventDefault();
    const form = new FormData(formMail);

    const Params = new URLSearchParams();

    form.forEach((value, key) => {
        Params.append(key, value);
    })

    const url = new URL(window.location.href)

    fetch(url.pathname + 'src/sendMail.php' + "?" + Params.toString() + "&ajax=1", {
        headers: {
            'X-Requested-with': 'XMLHttpRequest',
            'method': 'POST'
        }
    }).then(response =>
        response.json()
    ).then(data => {

        const contact = document.querySelector('#contact');

        if(data.Response === "success"){
            contact.innerHTML += '<div id="response" class="'+ data.Response +' modal"><div class="alert-success">'+ data.Message + '</div></div>'
            const result = document.querySelector('#response');
            result.style.display = "flex";
            if (result.classList.contains('success')){
                setTimeout(function (){formMail.reset(); result.style.display = "none"}, 3000)
            }
        } else if(data.Response === "error") {
            contact.innerHTML += '<div id="response" class="'+ data.Response +' modal"><div class="alert-danger">'+ data.Message + '</div></div>'
            const result = document.querySelector('#response');
            result.style.display = "flex";
            if (result.classList.contains('error')){
                setTimeout(function (){ result.style.display = "none"}, 3000)
            }
        }
    })
}