var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/avaliar1", function (req, res) {
    avaliacaoController.avaliar1(req, res);
})

router.post("/avaliar2", function (req, res) {
    avaliacaoController.avaliar2(req, res);
})

router.post("/avaliar3", function (req, res) {
    avaliacaoController.avaliar3(req, res);
})

router.post("/avaliar4", function (req, res) {
    avaliacaoController.avaliar4(req, res);
})

router.post("/avaliar5", function (req, res) {
    avaliacaoController.avaliar5(req, res);
})

router.post("/avaliar6", function (req, res) {
    avaliacaoController.avaliar6(req, res);
})

router.post("/avaliar7", function (req, res) {
    avaliacaoController.avaliar7(req, res);
})

router.post("/avaliar8", function (req, res) {
    avaliacaoController.avaliar8(req, res);
})

router.post("/pegarFilme", function (req, res) {
    avaliacaoController.pegarFilme(req, res);
})

module.exports = router;