const switchButton = document.getElementById('switch'),
    luna = document.getElementById('luna'),
    sol = document.getElementById('sol'),
    body = document.getElementById('body'),
    header = document.getElementById('header'),
    menuDark = document.getElementById('main'),
    actual = document.getElementById('actual'),
    lupa = document.getElementById('lupa'),
    main = document.getElementById('content'),
    logotipo = document.getElementById('logotipo'),
    isotipo = document.getElementById('isotipo'),
    footer = document.getElementById('footer');


switchButton.addEventListener('click', e =>{
    document.body.classList.toggle('dark');
    sol.classList.toggle('dark');
    luna.classList.toggle('dark');
    header.classList.toggle('dark');
    footer.classList.toggle('dark');
    actual.classList.toggle('dark');
    lupa.classList.toggle('dark');
    logotipo.classList.toggle('dark');
    isotipo.classList.toggle('dark');
    main.classList.toggle('dark');
    switchButton.classList.toggle('dark');
    

})