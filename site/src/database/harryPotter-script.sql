create database harrypotter;
use harrypotter;

create table casa (
	idCasa int primary key auto_increment,
    nome varchar(45)
) auto_increment = 100;

insert into casa values
	(null, 'Grifinória'),
    (null, 'Lufa-lufa'),
    (null, 'Corvinal'),
    (null, 'Sonserina');

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(45),
    email varchar(45),
    senha varchar(45),
    fkCasa int,
    constraint fkcasa foreign key (fkCasa)
		references casa (idCasa)
);

select * from usuario;
select * from pet;
truncate pet;
truncate usuario;

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
