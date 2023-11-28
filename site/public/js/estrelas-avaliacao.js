var stars = 0;
var stars2 = 0;
var stars3 = 0;
var stars4 = 0;
var stars5 = 0;
var stars6 = 0;
var stars7 = 0;
var stars8 = 0;

var estrelaVar = 0;
var fkFilmeVar = 0;

function atualizarEstrelas(selecionadas) {
    stars = selecionadas;
    fkFilmeVar = 1;

    for (var i = 1; i <= 5; i++) {
        var div_estrelas = document.getElementById(`es${i}`);
        if (i <= selecionadas) {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela2.png" style="width: 35px;">`;
             estrelaVar++;
        } else {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela1.png" style="width: 35px;">`;
        }
    }
}


function avaliar1(){
    // var fkFilmeVar = sessionStorage.ID_FILME;
    // var fkFilmeVar = 1;
    var fkUsuarioVar = sessionStorage.ID_USUARIO;

    fetch("/avaliacao/avaliar1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fkFilmeServer: fkFilmeVar,
            fkUsuarioServer: fkUsuarioVar,
            starsServer: estrelaVar

        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
            
                alert("Avaliação feita com sucesso!");

            } else {
                throw "Houve um erro ao tentar avaliar o filme!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

var estrelaVar2 = 0;
function atualizarEstrelas2(selecionadas) {
    stars2 = selecionadas;
    fkFilmeVar = 2;

    for (var i = 1; i <= 5; i++) {
        var div_estrelas = document.getElementById(`es${i}c`);
        if (i <= selecionadas) {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela2.png" style="width: 35px;">`;
            estrelaVar2++;
        } else {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela1.png" style="width: 35px;">`;
        }
    }
}

function avaliar2(){
    var fkUsuarioVar = sessionStorage.ID_USUARIO;

    fetch("/avaliacao/avaliar2", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fkFilmeServer: fkFilmeVar,
            fkUsuarioServer: fkUsuarioVar,
            starsServer: estrelaVar2

        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
            
                alert("Avaliação feita com sucesso!");

            } else {
                throw "Houve um erro ao tentar avaliar o filme!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

var estrelaVar3 = 0;
function atualizarEstrelas3(selecionadas) {
    stars3 = selecionadas;
    fkFilmeVar = 3;

    for (var i = 1; i <= 5; i++) {
        var div_estrelas = document.getElementById(`es${i}p`);
        if (i <= selecionadas) {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela2.png" style="width: 35px;">`;
            estrelaVar3++;
        } else {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela1.png" style="width: 35px;">`;
        }
    }
}

function avaliar3(){
    var fkUsuarioVar = sessionStorage.ID_USUARIO;

    fetch("/avaliacao/avaliar3", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fkFilmeServer: fkFilmeVar,
            fkUsuarioServer: fkUsuarioVar,
            starsServer: estrelaVar3

        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
            
                alert("Avaliação feita com sucesso!");

            } else {
                throw "Houve um erro ao tentar avaliar o filme!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

var estrelaVar4 = 0;
function atualizarEstrelas4(selecionadas) {
    stars4 = selecionadas;
    fkFilmeVar = 4;

    for (var i = 1; i <= 5; i++) {
        var div_estrelas = document.getElementById(`es${i}cf`);
        if (i <= selecionadas) {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela2.png" style="width: 35px;">`;
            estrelaVar4++;
        } else {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela1.png" style="width: 35px;">`;
        }
    }
}

function avaliar4(){
    var fkUsuarioVar = sessionStorage.ID_USUARIO;

    fetch("/avaliacao/avaliar4", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fkFilmeServer: fkFilmeVar,
            fkUsuarioServer: fkUsuarioVar,
            starsServer: estrelaVar4

        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
            
                alert("Avaliação feita com sucesso!");

            } else {
                throw "Houve um erro ao tentar avaliar o filme!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

var estrelaVar5 = 0;
function atualizarEstrelas5(selecionadas) {
    stars5 = selecionadas;
    fkFilmeVar = 5;

    for (var i = 1; i <= 5; i++) {
        var div_estrelas = document.getElementById(`es${i}o`);
        if (i <= selecionadas) {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela2.png" style="width: 35px;">`;
            estrelaVar5++;
        } else {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela1.png" style="width: 35px;">`;
        }
    }
}

function avaliar5(){
    var fkUsuarioVar = sessionStorage.ID_USUARIO;

    fetch("/avaliacao/avaliar5", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fkFilmeServer: fkFilmeVar,
            fkUsuarioServer: fkUsuarioVar,
            starsServer: estrelaVar5

        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
            
                alert("Avaliação feita com sucesso!");

            } else {
                throw "Houve um erro ao tentar avaliar o filme!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

var estrelaVar6 = 0;
function atualizarEstrelas6(selecionadas) {
    stars6 = selecionadas;
    fkFilmeVar = 6;

    for (var i = 1; i <= 5; i++) {
        var div_estrelas = document.getElementById(`es${i}ep`);
        if (i <= selecionadas) {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela2.png" style="width: 35px;">`;
            estrelaVar6++;
        } else {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela1.png" style="width: 35px;">`;
        }
    }
}

function avaliar6(){
    var fkUsuarioVar = sessionStorage.ID_USUARIO;

    fetch("/avaliacao/avaliar6", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fkFilmeServer: fkFilmeVar,
            fkUsuarioServer: fkUsuarioVar,
            starsServer: estrelaVar6

        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
            
                alert("Avaliação feita com sucesso!");

            } else {
                throw "Houve um erro ao tentar avaliar o filme!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

var estrelaVar7 = 0;
function atualizarEstrelas7(selecionadas) {
    stars7 = selecionadas;
    fkFilmeVar = 7;

    for (var i = 1; i <= 5; i++) {
        var div_estrelas = document.getElementById(`es${i}rm1`);
        if (i <= selecionadas) {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela2.png" style="width: 35px;">`;
            estrelaVar7++;
        } else {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela1.png" style="width: 35px;">`;
        }
    }
}

function avaliar7(){
    var fkUsuarioVar = sessionStorage.ID_USUARIO;

    fetch("/avaliacao/avaliar7", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fkFilmeServer: fkFilmeVar,
            fkUsuarioServer: fkUsuarioVar,
            starsServer: estrelaVar7

        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
            
                alert("Avaliação feita com sucesso!");

            } else {
                throw "Houve um erro ao tentar avaliar o filme!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

var estrelaVar8 = 0;
function atualizarEstrelas8(selecionadas) {
    stars8 = selecionadas;
    fkFilmeVar = 8;

    for (var i = 1; i <= 5; i++) {
        var div_estrelas = document.getElementById(`es${i}rm2`);
        if (i <= selecionadas) {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela2.png" style="width: 35px;">`;
            estrelaVar8++;
        } else {
            div_estrelas.innerHTML = `<img src="./assets/avaliacao/estrelas/estrela1.png" style="width: 35px;">`;
        }
    }
}
function avaliar8(){
    var fkUsuarioVar = sessionStorage.ID_USUARIO;

    fetch("/avaliacao/avaliar8", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fkFilmeServer: fkFilmeVar,
            fkUsuarioServer: fkUsuarioVar,
            starsServer: estrelaVar8

        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
            
                alert("Avaliação feita com sucesso!");

            } else {
                throw "Houve um erro ao tentar avaliar o filme!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}
