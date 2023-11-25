var filmes = [
    './assets/home/filmes/1.png',
    './assets/home/filmes/2.png',
    './assets/home/filmes/3.png',
    './assets/home/filmes/4.png',
    './assets/home/filmes/5.png',
    './assets/home/filmes/6.png',
    './assets/home/filmes/7.png',
    './assets/home/filmes/8.png',
];

var c = 0;

meuContainer2.innerHTML = filmes[c];

function avancarFilme() {
    c = (c + 1) % filmes.length;
    atualizarFilme();
}

function retrocederFilme() {
    i = (c - 1) % filmes.length;
    atualizarFilme();
}

function atualizarFilme() {
    // meuContainer.innerHTML = filmes[i];
    var item = filmes[c];

    if (item.startsWith('./assets/home/')) {
        // Se o item começar com 'login/src/', é considerado um caminho de imagem
        meuContainer2.innerHTML = `<img src="${item}" alt="Imagem" style="width: 90%;">`;
    }
}


// Adiciona a funcionalidade de carrossel automático
var intervaloFilmes = setInterval(function () {
    avancarFilme();
}, 5000); // Troca automaticamente a cada 2 segundos

// Pára a troca automática quando o mouse entra no contêiner
meuContainer2.addEventListener('mouseenter', function () {
    clearInterval(intervalo2);
});

// Retoma a troca automática quando o mouse sai do contêiner
meuContainer2.addEventListener('mouseleave', function () {
    intervaloFilmes = setInterval(function () {
        avancarFilme();
    }, 5000);
});