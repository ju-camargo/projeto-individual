create database harrypotter;
use harrypotter;
drop database harrypotter;

create table casa (
	idCasa int primary key auto_increment,
    nome varchar(45)
) auto_increment = 100;

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
truncate usuario;

create table pet (
	idPet int auto_increment,
    fkDono int,
    primary key(idPet, fkDono),
    nome varchar(45),
    tipo varchar(45),
    constraint fkdono foreign key (fkDono)
		references usuario (idUsuario)
) auto_increment = 200;

create table filme (
	idFilme int primary key auto_increment,
    nome varchar(45),
    anoLancamento int
);

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

insert into filme values
	(null, 'Harry Potter e a Pedra Filosofal', '');