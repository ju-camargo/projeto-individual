// var quizController = (function () {
    var quizModel = require("../models/quizModel");

    // function cadastrarCasa(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    // var nome = req.body.nomeServer;
    // var tipo = req.body.tipoServer;
    // var fkDono = req.body.fkDonoServer;

    // var fkCasaVar = req.body.fkCasaServer;
    // var idCasaVar = req.body.idCasaServer;

    // console.log("Dados recebidos no quizController: ", fkCasa);

    // Faça as validações dos valores
    // if (nome == undefined) {
    //     res.status(400).send("O nome está undefined!");
    //     return;
    // }
    // else if (fkDono == undefined) {
    //     res.status(400).send("Campo obrigatório não fornecido!");
    //     return;
    // }
    // else {
    // console.log("Dados recebidos no quizController: ", fkCasaVar);

    //         // Passe os valores como parâmetro e vá para o arquivo quizModel.js
    //         quizModel.cadastrarCasa(idCasaVar, fkCasaVar)
    //             .then(
    //                 function (resultado) {
    //                     console.log("Resultado do cadastro no quizModel: ", resultado);
    //                     res.json(resultado);
    //                 }
    //             ).catch(
    //                 function (erro) {
    //                     console.log(erro);
    //                     console.log(
    //                         "\nErro ao cadastrar a casa do usuário.! Erro: ",
    //                         erro.sqlMessage
    //                     );
    //                     res.status(500).json(erro.sqlMessage);
    //                 }
    //             );
    //     }
    // // }

    // module.exports = {
    //     cadastrarCasa
    // }

    // quizModel.obterIdCasa(fkCasaVar)  // Chama a função para obter o ID da casa
    //         .then(function (idCasaObtido) {
    //             if (idCasaObtido === idCasaVar) {
    //                 // Se o ID da casa obtido é o esperado, faz a requisição para cadastrar a fkCasa
    //                 return quizModel.cadastrarCasa(idCasaVar, fkCasaVar);
    //             } else {
    //                 // ID da casa obtido não corresponde ao esperado
    //                 throw new Error("ID da casa obtido não corresponde ao esperado.");
    //             }
    //         })
    //         .then(function (resultado) {
    //             res.json(resultado);
    //         })
    //         .catch(function (erro) {
    //             console.error(erro);
    //             res.status(500).json("Erro ao cadastrar a casa do usuário.");
    //         });
    // }

    // module.exports = {
    //     cadastrarCasa
    // };

    // function obterIdCasa(req, res, fkCasaVar) {
    //     quizModel.obterIdCasa(fkCasaVar)
    //         .then(function (idCasaObtido) {
    //             res.json({ idCasa: idCasaObtido });
    //         })
    //         .catch(function (erro) {
    //             console.error(erro);
    //             res.status(500).json("Erro ao obter o ID da casa.");
    //         });
    // }

    function cadastrarCasa(req, res) {
        var idCasa = req.body.idCasa;
        var fkCasa = req.body.fkCasaServer;
        // var idCasa = req.body.idCasaServer;
        // var idCasaVar = req.body.idCasaServer;

        quizModel.cadastrarCasa(idCasa, fkCasa)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.error(erro);
                res.status(500).json("Erro ao cadastrar a casa do usuário.");
            });
    }

    
module.exports = {
    cadastrarCasa
}

    // return {
    //     obterIdCasa: obterIdCasa,
    //     cadastrarCasa: cadastrarCasa
//     // };

// })();

// module.exports = quizController;