var container = [
    // './assets/login-cadastro/chapeu.png',
    './assets/login-cadastro/chapeu2.png',
    './assets/login-cadastro/plat2.png'
];

var i = 0;

meuContainer.innerHTML = container[i];

function avançar() {
    i = (i + 1) % container.length;
    atualizarPosicao();
}

function retroceder() {
    i = (i - 1) % container.length;
    atualizarPosicao();
}

function atualizarPosicao() {
    // meuContainer.innerHTML = container[i];
    var item = container[i];

    if (item.startsWith('./assets/')) {
        // Se o item começar com 'login/src/', é considerado um caminho de imagem
        meuContainer.innerHTML = `<img src="${item}" alt="Imagem" style="width: 50%;">`;
    }
}

// Adiciona a funcionalidade de carrossel automático
var intervalo = setInterval(function () {
    avançar();
}, 3000); // Troca automaticamente a cada 2 segundos

// Pára a troca automática quando o mouse entra no contêiner
meuContainer.addEventListener('mouseenter', function () {
    clearInterval(intervalo);
});

// Retoma a troca automática quando o mouse sai do contêiner
meuContainer.addEventListener('mouseleave', function () {
    intervalo = setInterval(function () {
    avançar();
    }, 5000);
});