var casas = [
    './assets/home/casas.png',
    './assets/home/lufalufa.png',
    './assets/home/grifinoria.png',
    './assets/home/corvinal.png',
    './assets/home/sonserina.png'
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
    // meuContainer.innerHTML = casas[i];
    var item = casas[i];

    if (item.startsWith('./assets/')) {
        // Se o item começar com 'login/src/', é considerado um caminho de imagem
        meuContainer.innerHTML = `<img src="${item}" alt="Imagem" style="width:80%;">`;
    }
}

// Adiciona a funcionalidade de carrossel automático
var intervaloCasas = setInterval(function () {
    avancarCasa();
}, 5000); 

// Pára a troca automática quando o mouse entra no contêiner
meuContainer.addEventListener('mouseenter', function () {
    clearInterval(intervalo);
});

// Retoma a troca automática quando o mouse sai do contêiner
meuContainer.addEventListener('mouseleave', function () {
    intervaloCasas = setInterval(function () {
        avancarCasa();
    }, 5000);
});