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
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

let currentTheme;

if (localStorage.getItem("theme")) {
    currentTheme = localStorage.getItem("theme");
} else if (prefersDarkScheme.matches) {
    currentTheme = "dark";
} else {
    currentTheme = "light";
}

if (currentTheme === "dark") {
    document.body.classList.add("dark");
} else {
    document.body.classList.add("light");
}

const switchThemeBtn = document.querySelector("#switch-theme-btn");

switchThemeBtn.addEventListener("click", function () {
    if (currentTheme === "light") {
        document.body.classList.replace("light", "dark");
        currentTheme = "dark";
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.replace("dark", "light");
        currentTheme = "light";
        localStorage.setItem("theme", "light");
    }
});