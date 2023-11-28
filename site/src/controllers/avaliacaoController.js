var avaliacaoModel = require("../models/avaliacaoModel");

function avaliar1(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    // var nome = req.body.nomeServer;
    // var email = req.body.emailServer;
    // var senha = req.body.senhaServer;

    var fkFilme = req.body.fkFilmeServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var estrelas = req.body.starsServer;

    // var estrelas2 = req.body.stars2Server;
    // var estrelas3 = req.body.stars2Server;
    // var estrelas4 = req.body.stars2Server;
    // var estrelas5 = req.body.stars2Server;
    // var estrelas6 = req.body.stars2Server;
    // var estrelas7 = req.body.stars2Server;
    // var estrelas8 = req.body.stars2Server;

    // Faça as validações dos valores
    // if (nome == undefined) {
    //     res.status(400).send("Seu nome está undefined!");
    // } else if (email == undefined) {
    //     res.status(400).send("Seu email está undefined!");
    // } else if (senha == undefined) {
    //     res.status(400).send("Sua senha está undefined!");
    // }  
    // else {

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    //     usuarioModel.avaliar(estrelas, estrelas2, estrelas3, estrelas4, estrelas5, estrelas6, estrelas7, estrelas8)
    //         .then(
    //             function (resultado) {
    //                 res.json(resultado);
    //             }
    //         ).catch(
    //             function (erro) {
    //                 console.log(erro);
    //                 console.log(
    //                     "\nHouve um erro ao realizar o cadastro! Erro: ",
    //                     erro.sqlMessage
    //                 );
    //                 res.status(500).json(erro.sqlMessage);
    //             }
    //         );
    // }
    // }

    avaliacaoModel.avaliar1(fkFilme, fkUsuario, estrelas)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    avaliar1
}