create database coppel;

use coppel;

create table articulos (
	id bigint not null auto_increment primary key,
	sku varchar(6) not null unique,
    nombre varchar(50) not null, 
    marca varchar(30) not null,
    cantidad int not null,
    fecha_creacion timestamp default current_timestamp
);