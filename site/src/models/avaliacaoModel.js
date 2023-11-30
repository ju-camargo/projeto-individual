var database = require("../database/config");

function avaliar1(fkFilme, fkUsuario, estrelas) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkFilme, fkUsuario, estrelas);
    
    var instrucao = `
        INSERT INTO avaliacao (fkFilme, fkUsuario, estrelas ) VALUES ('${fkFilme}', '${fkUsuario}' ,'${estrelas}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function avaliar2(fkFilme, fkUsuario, estrelas) {
    var instrucao = `
        INSERT INTO avaliacao (fkFilme, fkUsuario, estrelas ) VALUES ('${fkFilme}', '${fkUsuario}' ,'${estrelas}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function avaliar3(fkFilme, fkUsuario, estrelas) {
    var instrucao = `
        INSERT INTO avaliacao (fkFilme, fkUsuario, estrelas ) VALUES ('${fkFilme}', '${fkUsuario}' ,'${estrelas}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function avaliar4(fkFilme, fkUsuario, estrelas) {
    var instrucao = `
        INSERT INTO avaliacao (fkFilme, fkUsuario, estrelas ) VALUES ('${fkFilme}', '${fkUsuario}' ,'${estrelas}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function avaliar5(fkFilme, fkUsuario, estrelas) {
    var instrucao = `
        INSERT INTO avaliacao (fkFilme, fkUsuario, estrelas ) VALUES ('${fkFilme}', '${fkUsuario}' ,'${estrelas}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function avaliar6(fkFilme, fkUsuario, estrelas) {
    var instrucao = `
        INSERT INTO avaliacao (fkFilme, fkUsuario, estrelas ) VALUES ('${fkFilme}', '${fkUsuario}' ,'${estrelas}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function avaliar7(fkFilme, fkUsuario, estrelas) {
    var instrucao = `
        INSERT INTO avaliacao (fkFilme, fkUsuario, estrelas ) VALUES ('${fkFilme}', '${fkUsuario}' ,'${estrelas}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function avaliar8(fkFilme, fkUsuario, estrelas) {
    var instrucao = `
        INSERT INTO avaliacao (fkFilme, fkUsuario, estrelas ) VALUES ('${fkFilme}', '${fkUsuario}' ,'${estrelas}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pegarFilme(){
    var instrucao = `
    select count(a.estrelas) as estrelas, f.nome from avaliacao as a join filme as f ON a.fkFilme = f.idFilme group by f.nome;
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pegarFilme5(){
    var instrucao = `
    select count(a.estrelas) as estrelas, f.nome from avaliacao as a join filme as f on a.fkFilme = f.idFilme where a.estrelas <= 5 and a.estrelas >= 3 group by f.nome;
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pegarFilme1(){
    var instrucao = `
    select count(a.estrelas) as estrelas1, f1.nome from avaliacao as a join filme as f1 on a.fkFilme = f1.idFilme where a.estrelas < 3 group by f1.nome;
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
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
    pegarFilme5,
    pegarFilme1
};