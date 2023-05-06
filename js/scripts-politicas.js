/* Modo oscuro*/
const switchButton = document.getElementById('switch'),
    luna = document.getElementById('luna'),
    sol = document.getElementById('sol'),
    body = document.getElementById('body'),
    header = document.getElementById('header'),
    lupa = document.getElementById('lupa'),
    main = document.getElementById('content'),
    footer = document.getElementById('footer');


switchButton.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    sol.classList.toggle('dark');
    luna.classList.toggle('dark');
    header.classList.toggle('dark');
    footer.classList.toggle('dark');
    lupa.classList.toggle('dark');
    main.classList.toggle('dark');
    switchButton.classList.toggle('dark');


})

