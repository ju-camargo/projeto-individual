var database = require("../database/config");

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarPet(nome, tipo, fkDono) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarPet():", nome, tipo, fkDono);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO pet (nome, tipo, fkDono) VALUES ('${nome}', '${tipo}', '${fkDono}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar(){
    var instrucao = `SELECT * FROM pet;`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
    .then(result => {
        console.log("Operação bem-sucedida:", result);
        return result;
    })
    .catch(error => {
        console.error("Erro na operação:", error);
        throw error;
    });
}

module.exports = {
    cadastrarPet, 
    listar
};