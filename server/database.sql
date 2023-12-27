create database donremolo;

create table products(
    id SERIAL primary key,
    type varchar (255),
    name varchar(255),
    price_big int(255),
    price_small int(255),
    image varchar(255)
);

create table users(
    id SERIAL primary key,
    name varchar(255),
    address varchar(255),
    dni int (255),
    phone int (255),
    password varchar(255)
);