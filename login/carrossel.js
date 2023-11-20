var container = [
    'chapeu seletor',
    'avaliar filmes'
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
    meuContainer.innerHTML = container[i];
}



// Adiciona a funcionalidade de carrossel automático
var intervalo = setInterval(function () {
    avançar();
}, 2000); // Troca automaticamente a cada 2 segundos

// Pára a troca automática quando o mouse entra no contêiner
meuContainer.addEventListener('mouseenter', function () {
    clearInterval(intervalo);
});

// Retoma a troca automática quando o mouse sai do contêiner
meuContainer.addEventListener('mouseleave', function () {
    intervalo = setInterval(function () {
        avançar();
    }, 2000);
});
