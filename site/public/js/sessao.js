// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;
    var nomePet = sessionStorage.NOME_PET;

    // var tipoPet = sessionStorage.TIPO_PET;

    var b_usuario = document.getElementById("b_usuario");
    var n_pet = document.getElementById("n_pet");
    // var t_pet = document.getElementById("t_pet");

    if(nomePet != null){
        n_pet.innerHTML = nomePet;
    }

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "dashboard.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "dashboard.html";
}

// carregamento (loading)
// function aguardar() {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "flex";
// }

// function finalizarAguardar(texto) {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "none";

//     var divErrosLogin = document.getElementById("div_erros_login");
//     if (texto) {
//         divErrosLogin.style.display = "flex";
//         divErrosLogin.innerHTML = texto;
//     }
// }

