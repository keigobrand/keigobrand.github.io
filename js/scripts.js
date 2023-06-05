/* Boton despelegar menu*/
document.querySelector(".Header-btn").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".Header-line1");
var line2__bars = document.querySelector(".Header-line2");
var line3__bars = document.querySelector(".Header-line3");
var menu = document.querySelector(".Header-nav");
var Btns = document.querySelector(".Header-btns");

function animateBars() {
    line1__bars.classList.toggle("Header-line--line1");
    line2__bars.classList.toggle("Header-line--line2");
    line3__bars.classList.toggle("Header-line--line3");
    menu.classList.toggle("active");
    Btns.classList.toggle("active");
}

/*mantener modo socuro o claro */
let modo = document.getElementById("switch");
let body = document.body;

modo.addEventListener("click", function () {
    let val = body.classList.toggle("dark")
    localStorage.setItem("modo", val)
})

let valor = localStorage.getItem("modo")

if (valor == "true") {
    body.classList.add("dark")
} else {
    body.classList.remove("dark")
}


/*preferencias del naveagaodr o dispositivo*/
function toggleModo() {
    const body = document.body;
    const val = body.classList.toggle("dark");
    localStorage.setItem("modo", val);
}


const preferenciaColor = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (localStorage.getItem("modo") === "true" || (localStorage.getItem("modo") === null && preferenciaColor)) {
    body.classList.add("dark");
}


/*cookies */

window.addEventListener('load', function () {
    var cookiePopup = document.getElementById('cookie-popup');
    var acceptCookieButton = document.getElementById('accept-cookie');

    if (!getCookie('cookie_accepted')) {
        cookiePopup.style.display = 'block';
    }

    acceptCookieButton.addEventListener('click', function () {
        setCookie('cookie_accepted', true, 365);
        cookiePopup.style.display = 'none';
    });
});

function setCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}