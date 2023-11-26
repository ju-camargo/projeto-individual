var express = require("express");
var router = express.Router();

var petController = require("../controllers/petController");

//Recebendo os dados do html e direcionando para a função cadastrar de petController.js
router.post("/cadastrarPet", function (req, res) {
    petController.cadastrarPet(req, res);
})

// router.post("/autenticar", function (req, res) {
//     petController.autenticar(req, res);
// });

module.exports = router;