var petModel = require("../models/petModel");

function cadastrarPet(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var tipo = req.body.tipoServer;
    var fkDono = req.body.fkDonoServer;

    console.log("Dados recebidos no petController: ", nome, tipo, fkDono);

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("O nome está undefined!");
        return;
    } else if (tipo == undefined) {
        res.status(400).send("O tipo está undefined!");
        return;
    }
    else if (fkDono == undefined) {
        res.status(400).send("Campo obrigatório não fornecido!");
        return;
    }
    else {
        console.log("Dados recebidos no petController: ", nome, tipo, fkDono);

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        petModel.cadastrarPet(nome, tipo, fkDono)
            .then(
                function (resultado) {
                    console.log("Resultado do cadastro no petModel: ", resultado);
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
}

// function listar(req, res){
   
   
//     petModel.listar().then(
//         function (resultado) {
//             console.log("Listagem das informações do pet: ", resultado);
//             res.json(resultado);
//         }
//     )
//         .catch(
//             function (erro) {
//                 console.log(erro);
//                 console.error("Erro durante a listagem: ", erro)
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }

// function listar(req, res) {
//     petModel.listar().then((resultado) => {
//       res.status(200).json(resultado);
//     });
//   }

module.exports = {
    cadastrarPet
}