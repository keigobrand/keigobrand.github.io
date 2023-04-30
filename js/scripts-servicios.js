//Contacto popup
const Popup1 = document.getElementById('Popup1');
const Popup2 = document.getElementById('Popup2');
const Popup3 = document.getElementById('Popup3');
const Popup4 = document.getElementById('Popup4');
const Popup5 = document.getElementById('Popup5');
const Popup6 = document.getElementById('Popup6');
const Popup = document.getElementsByClassName('Popup');
const packBranding = document.getElementById('pack-branding');
const DisenoMarca = document.getElementById('diseno-marca');
const ManualIC = document.getElementById('manual-corporativo');
const Desarrollo = document.getElementById('desarrollo');
const Packaging = document.getElementById('packaging');
const Merchandasing = document.getElementById('merchandasing');
const cerrarButton = document.getElementsByClassName('Popup-cerrar');


packBranding.onclick = function(){
    Popup1.style.display="flex";
}
DisenoMarca.onclick = function(){
    Popup2.style.display="flex";
}
ManualIC.onclick = function(){
    Popup3.style.display="flex";
}
Desarrollo.onclick = function(){
    Popup4.style.display="flex";
}
Packaging.onclick = function(){
    Popup5.style.display="flex";
}
Merchandasing.onclick = function(){
    Popup6.style.display="flex";
}

for (let i = 0; i < cerrarButton.length; i++) {
    cerrarButton[i].onclick = function () {
        for (let j = 0; j < Popup.length; j++) {
            Popup[j].style.display = "none";
        }
    }
}

/* Modo oscuro*/
const switchButton = document.getElementById('switch'),
    luna = document.getElementById('luna'),
    sol = document.getElementById('sol'),
    body = document.getElementById('body'),
    header = document.getElementById('header'),
    actual = document.getElementById('actual'),
    lupa = document.getElementById('lupa'),
    main = document.getElementById('content'),
    footer = document.getElementById('footer'),
    form = document.getElementById('form'),
    enviar = document.getElementById('enviar'),
    subir = document.getElementById('input-subir'),
    servicios = document.getElementById('Servicios');


switchButton.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    sol.classList.toggle('active');
    luna.classList.toggle('folse');
    header.classList.toggle('dark');
    footer.classList.toggle('dark');
    actual.classList.toggle('verde');
    lupa.classList.toggle('verde');
    main.classList.toggle('dark1');
    enviar.classList.toggle('dark');
    switchButton.classList.toggle('dark');
    subir.classList.toggle('dark');
    form.classList.toggle('dark');
    servicios.classList.toggle('dark');

})