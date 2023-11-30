var database = require("../database/config");

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idUsuario, pet.nome AS nomePet, usuario.nome AS nomeUsuario, fkCasa, casa.nome AS nomeCasa, email, filme.nome as nomeFilme
        FROM usuario left JOIN pet ON fkDono = idUsuario left JOIN casa ON fkCasa = idCasa left JOIN avaliacao ON fkUsuario = idUsuario
        left JOIN filme ON fkFilme = idFilme  WHERE email = '${email}' AND senha = '${senha}' limit 1
        ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pegarCaracteres (idUsuario){
    var instrucao = `
    SELECT  c.nome AS nomeCasa, MAX(f.nome) AS ultimoNomeFilme, p.nome AS nomePet
        FROM usuario as u JOIN pet as p ON p.fkDono = u.idUsuario JOIN casa as c ON u.fkCasa = c.idCasa JOIN avaliacao as a ON a.fkUsuario = u.idUsuario
         JOIN filme as f ON a.fkFilme = f.idFilme  WHERE u.idUsuario = ${idUsuario} GROUP BY u.idUsuario, c.nome, p.nome;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar,
    pegarCaracteres,
};