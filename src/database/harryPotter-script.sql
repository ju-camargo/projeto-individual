create database harryPotter;

create table casa (
	idCasa int primary key auto_increment,
    nome varchar(45)
);

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(45),
    cpf varchar(11),
    email varchar(45),
    senha varchar(45)
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

create table filme (
	idFilme int primary key auto_increment,
    nome varchar(45),
    dtLancamento date
);

insert into filme values
	(null, 'Harry Potter e a Pedra Filosofal', '');