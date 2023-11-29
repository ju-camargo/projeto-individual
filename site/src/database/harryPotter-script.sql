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
select * from avaliacao;
select * from pet;

select u.nome, u.fkCasa, c.nome from usuario as u 
join casa as c on u.fkCasa = c.idCasa;

select u.nome, u.fkCasa, c.nome from usuario as u 
join casa as c on u.fkCasa = c.idCasa
	where c.idCasa = 101;

select u.nome as nomeUsuario, f.nome as nomeFilme, a.estrelas from usuario as u
join avaliacao as a on a.fkUsuario = u.idUsuario
join filme as f on a.fkFilme = f.idFilme;

select p.nome as nomePet, p.tipo as raça, u.nome as dono from usuario as u
join pet as p on p.fkDono = u.idUsuario;
