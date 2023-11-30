var avaliacaoModel = require("../models/avaliacaoModel");

function avaliar1(req, res) {
    var fkFilme = req.body.fkFilmeServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var estrelas = req.body.starsServer;

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

function avaliar2(req, res) {
    var fkFilme = req.body.fkFilmeServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var estrelas = req.body.starsServer;

    avaliacaoModel.avaliar2(fkFilme, fkUsuario, estrelas)
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

function avaliar3(req, res) {
    var fkFilme = req.body.fkFilmeServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var estrelas = req.body.starsServer;

    avaliacaoModel.avaliar3(fkFilme, fkUsuario, estrelas)
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

function avaliar4(req, res) {
    var fkFilme = req.body.fkFilmeServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var estrelas = req.body.starsServer;

    avaliacaoModel.avaliar4(fkFilme, fkUsuario, estrelas)
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

function avaliar5(req, res) {
    var fkFilme = req.body.fkFilmeServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var estrelas = req.body.starsServer;

    avaliacaoModel.avaliar5(fkFilme, fkUsuario, estrelas)
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

function avaliar6(req, res) {
    var fkFilme = req.body.fkFilmeServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var estrelas = req.body.starsServer;

    avaliacaoModel.avaliar6(fkFilme, fkUsuario, estrelas)
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

function avaliar7(req, res) {
    var fkFilme = req.body.fkFilmeServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var estrelas = req.body.starsServer;

    avaliacaoModel.avaliar7(fkFilme, fkUsuario, estrelas)
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

function avaliar8(req, res) {
    var fkFilme = req.body.fkFilmeServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var estrelas = req.body.starsServer;

    avaliacaoModel.avaliar8(fkFilme, fkUsuario, estrelas)
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

function pegarFilme(req, res) {

    avaliacaoModel.pegarFilme5()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.error(erro);
            res.status(500).json("Erro ao cadastrar a casa do usuário.");
        });
}

module.exports = {
    avaliar1, 
    avaliar2,
    avaliar3,
    avaliar4,
    avaliar5,
    avaliar6,
    avaliar7,
    avaliar8,
    pegarFilme
}