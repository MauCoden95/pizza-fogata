create database donremolo;

create table products(
    id SERIAL primary key,
    type varchar (255),
    name varchar(255),
    price_big int(255),
    price_small int(255),
    image varchar(255)
);