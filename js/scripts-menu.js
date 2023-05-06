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
/*let modo=document.getElementById("switch");
let body=document.body;

modo.addEventListener("click", function(){
    let val=body.classList.toggle("dark")
    localStorage.setItem("modo",val)
})

let valor=localStorage.getItem("modo")

if (valor=="true") {
    body.classList.add("dark")
} else {
    body.classList.remove("dark")
}*/
let modo = document.getElementById("switch");
let body = document.body;

// función para cambiar el modo a oscuro
function cambiarAModoOscuro() {
  body.classList.add("dark");
  localStorage.setItem("modo", "oscuro");
}

// función para cambiar el modo a claro
function cambiarAModoClaro() {
  body.classList.remove("dark");
  localStorage.setItem("modo", "claro");
}

// manejar el evento clic del interruptor
modo.addEventListener("click", function() {
  if (body.classList.contains("dark")) {
    cambiarAModoClaro();
  } else {
    cambiarAModoOscuro();
  }
});

// obtener el valor del modo del almacenamiento local
let valor = localStorage.getItem("modo");

// establecer el modo según el valor del almacenamiento local
if (valor === "oscuro") {
  cambiarAModoOscuro();
} else {
  cambiarAModoClaro();
}
