
var quizModel = require("../models/quizModel");

function cadastrarCasa(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idCasa = req.body.idCasaServer;
    var fkCasa = req.body.fkCasaServer;

    quizModel.cadastrarCasa(idUsuario, idCasa, fkCasa)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.error(erro);
            res.status(500).json("Erro ao cadastrar a casa do usuário.");
        });
}

function pegarCasa(req, res) {

    quizModel.pegarCasa()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.error(erro);
            res.status(500).json("Erro ao cadastrar a casa do usuário.");
        });
}


module.exports = {
    cadastrarCasa,
    pegarCasa
}