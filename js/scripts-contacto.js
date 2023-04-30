/* Modo oscuro*/
const switchButton = document.getElementById('switch'),
    luna = document.getElementById('luna'),
    sol = document.getElementById('sol'),
    body = document.getElementById('body'),
    header = document.getElementById('header'),
    actual = document.getElementById('actual'),
    lupa = document.getElementById('lupa'),
    main = document.getElementById('content'),
    form = document.getElementById('form'),
    contacto = document.getElementById('contacto'),
    enviar = document.getElementById('enviar'),
    footer = document.getElementById('footer');


switchButton.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    sol.classList.toggle('active');
    luna.classList.toggle('folse');
    header.classList.toggle('dark');
    footer.classList.toggle('dark');
    actual.classList.toggle('verde');
    lupa.classList.toggle('verde');
    main.classList.toggle('dark1');
    form.classList.toggle('dark');
    enviar.classList.toggle('dark');
    contacto.classList.toggle('dark');
    switchButton.classList.toggle('dark');


})

