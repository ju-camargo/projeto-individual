var stars = 0;
var stars2 = 0;
var stars3 = 0;
var stars4 = 0;
var stars5 = 0;
var stars6 = 0;
var stars7 = 0;
var stars8 = 0;

function atualizarEstrelas(selecionadas) {
    stars = selecionadas;

    for (var i = 1; i <= 5; i++) {
        var div_estrelas = document.getElementById(`es${i}`);
        if (i <= selecionadas) {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela2.png" style="width: 35px;">`;
        } else {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela1.png" style="width: 35px;">`;
        }
    }
}

function atualizarEstrelas2(selecionadas) {
    stars2 = selecionadas;

    for (var i = 1; i <= 5; i++) {
        var div_estrelas = document.getElementById(`es${i}c`);
        if (i <= selecionadas) {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela2.png" style="width: 35px;">`;
        } else {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela1.png" style="width: 35px;">`;
        }
    }
}

function atualizarEstrelas3(selecionadas) {
    stars3 = selecionadas;

    for (var i = 1; i <= 5; i++) {
        var div_estrelas = document.getElementById(`es${i}p`);
        if (i <= selecionadas) {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela2.png" style="width: 35px;">`;
        } else {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela1.png" style="width: 35px;">`;
        }
    }
}

function atualizarEstrelas4(selecionadas) {
    stars4 = selecionadas;

    for (var i = 1; i <= 5; i++) {
        var div_estrelas = document.getElementById(`es${i}cf`);
        if (i <= selecionadas) {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela2.png" style="width: 35px;">`;
        } else {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela1.png" style="width: 35px;">`;
        }
    }
}

function atualizarEstrelas5(selecionadas) {
    stars5 = selecionadas;

    for (var i = 1; i <= 5; i++) {
        var div_estrelas = document.getElementById(`es${i}o`);
        if (i <= selecionadas) {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela2.png" style="width: 35px;">`;
        } else {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela1.png" style="width: 35px;">`;
        }
    }
}

function atualizarEstrelas6(selecionadas) {
    stars6 = selecionadas;

    for (var i = 1; i <= 5; i++) {
        var div_estrelas = document.getElementById(`es${i}ep`);
        if (i <= selecionadas) {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela2.png" style="width: 35px;">`;
        } else {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela1.png" style="width: 35px;">`;
        }
    }
}

function atualizarEstrelas7(selecionadas) {
    stars7 = selecionadas;

    for (var i = 1; i <= 5; i++) {
        var div_estrelas = document.getElementById(`es${i}rm1`);
        if (i <= selecionadas) {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela2.png" style="width: 35px;">`;
        } else {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela1.png" style="width: 35px;">`;
        }
    }
}

function atualizarEstrelas8(selecionadas) {
    stars8 = selecionadas;

    for (var i = 1; i <= 5; i++) {
        var div_estrelas = document.getElementById(`es${i}rm2`);
        if (i <= selecionadas) {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela2.png" style="width: 35px;">`;
        } else {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela1.png" style="width: 35px;">`;
        }
    }
}