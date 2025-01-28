/*
 1. Crear una tabla Paises con la siguiente estructura:
    - **idPais**: entero, clave primaria y autogenerado
    - **pais**: cadena de caracteres de 50 caracteres máximo, no puede ser nulo
    - **codPais**: cadena de 3 caracteres de longitud fija, no puede ser nulo
*/

create table Paises
(
    idpais integer primary key identity,
    pais varchar(50) not null,
    codpais char(3) not null
);
go
