var container2 = [
    '/site/src/pedra-filosofal.jpg',
    '/site/src/camera-secreta.jpg'
];

var c = 0;

meuContainer2.innerHTML = container2[c];

function avançar() {
    c = (c + 1) % container2.length;
    atualizarPosicao();
}

function retroceder() {
    i = (c - 1) % container2.length;
    atualizarPosicao();
}

function atualizarPosicao() {
    // meuContainer.innerHTML = container2[i];
    var item = container2[c];

    if (item.startsWith('/site/src/')) {
        // Se o item começar com 'login/src/', é considerado um caminho de imagem
        meuContainer2.innerHTML = `<img src="${item}" alt="Imagem" style="width:25%;">`;
    }
}


// Adiciona a funcionalidade de carrossel automático
var intervalo = setInterval(function () {
    avançar();
}, 5000); // Troca automaticamente a cada 2 segundos

// Pára a troca automática quando o mouse entra no contêiner
meuContainer2.addEventListener('mouseenter', function () {
    clearInterval(intervalo);
});

// Retoma a troca automática quando o mouse sai do contêiner
meuContainer2.addEventListener('mouseleave', function () {
    intervalo = setInterval(function () {
        avançar();
    }, 5000);
});