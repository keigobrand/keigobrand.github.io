const switchButton = document.getElementById('switch'),
    luna = document.getElementById('luna'),
    sol = document.getElementById('sol'),
    body = document.getElementById('body'),
    header = document.getElementById('header'),
    menu = document.getElementById('main'),
    actual = document.getElementById('actual'),
    lupa = document.getElementById('lupa'),
    content = document.getElementById('content'),
    logotipo = document.getElementById('logotipo');
    isotipo = document.getElementById('isotipo');
    footer = document.getElementById('footer');




switchButton.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    sol.classList.toggle('active');
    luna.classList.toggle('folse');
    header.classList.toggle('dark');
    footer.classList.toggle('dark');
    actual.classList.toggle('verde');
    lupa.classList.toggle('verde');
    logotipo.classList.toggle('dark');
    isotipo.classList.toggle('dark');
    content.classList.toggle('dark');
    switchButton.classList.toggle('dark');


})