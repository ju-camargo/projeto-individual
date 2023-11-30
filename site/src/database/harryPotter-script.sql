create database harrypotter;
use harrypotter;
drop database harrypotter;

create table casa (
	idCasa int primary key auto_increment,
    nome varchar(45)
) auto_increment = 100;

insert into casa values
	(null, 'Grifinória'), -- 100
    (null, 'Lufa-lufa'), -- 101
    (null, 'Corvinal'), -- 102
    (null, 'Sonserina'); -- 103

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(45),
    email varchar(45),
    senha varchar(45),
    fkCasa int,
    constraint fkcasa foreign key (fkCasa)
		references casa (idCasa)
);

create table pet (
	idPet int primary key auto_increment,
    nome varchar(45),
    tipo varchar(45),
	fkDono int unique,
    constraint fkdono foreign key (fkDono)
		references usuario (idUsuario)
) auto_increment = 200;

create table filme (
	idFilme int primary key,
    nome varchar(45),
    anoLancamento int
);

insert into filme values
	(1, 'Harry Potter e a Pedra Filosofal', 2001),
    (2, 'Harry Potter e a Camara Secreta', 2002),
    (3, 'Harry Potter e o Prisioneiro de Azkaban', 2004),
    (4, 'Harry Potter e o Cálice de fogo', 2005),
    (5, 'Harry Potter e a Ordem da Fênix', 2007),
    (6, 'Harry Potter e o enigma do Princípe', 2009),
    (7, 'Harry Potter e as Relíquias da Morte: Parte 1', 2010),
    (8, 'Harry Potter e as Relíquias da Morte: Parte 2', 2011);

create table avaliacao (
	fkFilme int,
    fkUsuario int,
    primary key (fkFilme, fkUsuario),
    estrelas int,
    constraint fkFilme foreign key (fkFilme)
		references filme (idFilme),
    constraint fkusuario foreign key (fkUsuario)
		references usuario (idUsuario)
);

select * from usuario;
select * from casa;
select * from filme;
select * from avaliacao;
select * from pet;

-- nome do usuario, filme e estrelas
select u.nome as nomeUsuario, f.nome as nomeFilme, a.estrelas from usuario as u
join avaliacao as a on a.fkUsuario = u.idUsuario
join filme as f on a.fkFilme = f.idFilme;

-- nome do pet, raça e dono
select p.nome as nomePet, p.tipo as raça, u.nome as dono from usuario as u
join pet as p on p.fkDono = u.idUsuario;

select u.nome, u.fkCasa, c.nome from usuario as u 
join casa as c on u.fkCasa = c.idCasa
	where c.idCasa = 101;
    
select u.nome, u.fkCasa, c.nome from usuario as u 
join casa as c on u.fkCasa = c.idCasa;

select c.nome from usuario as u 
join casa as c on u.fkCasa = c.idCasa where idUsuario = 1;

-- selects para pegar caracteres para dashboard
SELECT  c.nome AS nomeCasa, MAX(f.nome) AS ultimoNomeFilme, p.nome AS nomePet
FROM usuario as u JOIN pet as p ON p.fkDono = u.idUsuario JOIN casa as c ON u.fkCasa = c.idCasa JOIN avaliacao as a ON a.fkUsuario = u.idUsuario
JOIN filme as f ON a.fkFilme = f.idFilme  WHERE idUsuario = 1 GROUP BY u.idUsuario, c.nome, p.nome;
         
SELECT  c.nome AS nomeCasa, f.nome as nomeFilme, p.nome AS nomePet
FROM usuario as u JOIN pet as p ON p.fkDono = u.idUsuario JOIN casa as c ON u.fkCasa = c.idCasa JOIN avaliacao as a ON a.fkUsuario = u.idUsuario
JOIN filme as f ON a.fkFilme = f.idFilme;

-- selects para cadastro de usuario (pensando em ja armazenar os caracteres para dash
select count(u.fkCasa) as casas, c.nome from usuario as u join casa as c ON u.fkcasa = c.idcasa group by c.nome;
SELECT idUsuario, pet.nome AS nomePet, usuario.nome AS nomeUsuario, fkCasa, casa.nome AS nomeCasa, email, filme.nome as nomeFilme
FROM usuario left JOIN pet ON fkDono = idUsuario left JOIN casa ON fkCasa = idCasa left JOIN avaliacao ON fkUsuario = idUsuario
left JOIN filme ON fkFilme = idFilme  WHERE email = 'gabriel.amaral@sptech.school' AND senha = 'Alice1' limit 1;

SELECT idUsuario, pet.nome AS nomePet, usuario.nome AS nomeUsuario, fkCasa, casa.nome AS nomeCasa, email, filme.nome as nomeFilme
FROM usuario JOIN pet ON fkDono = idUsuario JOIN casa ON fkCasa = idCasa JOIN avaliacao ON fkUsuario = idUsuario 
JOIN filme ON fkFilme = idFilme where idUsuario = 1 limit 1;

-- selects para contagem de estrelas dos filmes
select count(a.estrelas) as estrelas, max(f.nome) as nome from avaliacao as a join filme as f on a.fkFilme = f.idFilme group by a.estrelas;
select count(a.estrelas) as estrelas, f.nome from avaliacao as a join filme as f ON a.fkFilme = f.idFilme group by f.nome;
select count(a.estrelas) as estrelas, f.nome from avaliacao as a join filme as f on a.fkFilme = f.idFilme where a.estrelas <= 5 and a.estrelas >= 3 group by f.nome;
select count(a.estrelas) as estrelas, f.nome from avaliacao as a join filme as f on a.fkFilme = f.idFilme where a.estrelas < 3 group by f.nome;
