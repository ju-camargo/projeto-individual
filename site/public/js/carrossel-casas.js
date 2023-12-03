var casas = [
    './assets/home/casas/casas.png',
    './assets/home/casas/lufalufa.png',
    './assets/home/casas/grifinoria.png',
    './assets/home/casas/corvinal.png',
    './assets/home/casas/sonserina.png'
];

var i = 0;

meuContainer.innerHTML = casas[i];

function avancarCasa() {
    i = (i + 1) % casas.length;
    atualizarCasa();
}

function retrocederCasa() {
    i = (i - 1) % casas.length;
    atualizarCasa();
}

function atualizarCasa() {
    var item = casas[i];

    if (item.startsWith('./assets/home/casas/')) {
        meuContainer.innerHTML = `<img src="${item}" alt="Imagem" style="width:80%;">`;
    }
}

var intervaloCasas = setInterval(function () {
    avancarCasa();
}, 2000); 

meuContainer.addEventListener('mouseenter', function () {
    clearInterval(intervalo);
});

meuContainer.addEventListener('mouseleave', function () {
    intervaloCasas = setInterval(function () {
        avancarCasa();
    }, 2000);
});