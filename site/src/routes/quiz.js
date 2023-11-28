var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

// Rota para obter o ID da casa
// router.post("/obterIdCasa", function (req, res) {
//     var fkCasaVar = req.body.fkCasaServer;

//     quizController.obterIdCasa(req, res, fkCasaVar);
// });

//Rota para cadastrar a casa do usuário
router.post("/cadastrarCasa", function (req, res) {
    quizController.cadastrarCasa(req, res);
})


module.exports = router;