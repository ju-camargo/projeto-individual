var database = require("../database/config");

// function obterIdCasa(fkCasa) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkCasa);

//     // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
//     //  e na ordem de inserção dos dados.
//     var instrucao = `
//         SELECT idCasa FROM casa WHERE nome = '${fkCasa}';
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

function cadastrarCasa(idUsuario, idCasa, fkCasa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idUsuario, idCasa, fkCasa);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    // var instrucao = `
    //     UPDATE usuario SET fkCasa = '${fkCasa}' WHERE idCasa = '${idCasa}';
    // `;

    var instrucao = `
     UPDATE usuario SET fkCasa = '${fkCasa}' WHERE idUsuario = '${idUsuario}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pegarCasa() {
    var instrucao = `
    select count(u.fkCasa) as casas, c.nome from usuario as u join casa as c ON u.fkcasa = c.idcasa group by c.nome;
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarCasa,
    pegarCasa
};