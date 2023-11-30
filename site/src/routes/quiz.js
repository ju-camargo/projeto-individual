var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Rota para cadastrar a casa do usuário
router.post("/cadastrarCasa", function (req, res) {
    quizController.cadastrarCasa(req, res);
})

router.post("/pegarCasa", function (req, res) {
    quizController.pegarCasa(req, res);
})

module.exports = router;