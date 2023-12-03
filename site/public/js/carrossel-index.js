var fotos = [
    './assets/home/index/6.png',
    './assets/home/index/2.png',
    './assets/home/index/3.png',
    './assets/home/index/4.png',
    // './assets/home/index/5.png',
    './assets/home/index/1.png',
    './assets/home/index/7.png',
    './assets/home/index/8.png',
    './assets/home/index/9.png'
];

var i = 0;

meuContainer3.innerHTML = fotos[i];

function avancarFoto() {
    i = (i + 1) % fotos.length;
    atualizarFoto();
}

function retrocederFoto() {
    i = (i - 1) % fotos.length;
    atualizarFoto();
}

function atualizarFoto() {
    var item = fotos[i];

    if (item.startsWith('./assets/home/index')) {
        meuContainer3.innerHTML = `<img src="${item}" alt="Imagem" style="width:85%;">`;
    }
}

var intervaloFotos = setInterval(function () {
    avancarFoto();
}, 5000);

meuContainer3.addEventListener('mouseleave', function () {
    intervaloFotos = setInterval(function () {
        avancarFoto();
    }, 5000);
});