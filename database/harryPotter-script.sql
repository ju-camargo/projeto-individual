create database harryPotter;

create table casa (
	idCasa int primary key auto_increment,
    nome varchar(45)
);

create table varinha (
	idVarinha int primary key auto_increment,
    descricao varchar(45),
    fkUsuario int
);

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(45),
    cpf varchar(11),
    email varchar(45),
    senha varchar(45),
    fkCasa int,
    constraint fkcasa foreign key (fkCasa)
		references casa (idCasa),
	fkVarinha int,
    constraint fkVarinha foreign key (fkVarinha)
		references varinha (idVarinha)
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