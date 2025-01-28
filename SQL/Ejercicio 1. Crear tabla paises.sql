/*
 1. Crear una tabla Paises con la siguiente estructura:
    - **idPais**: entero, clave primaria y autogenerado
    - **pais**: cadena de caracteres de 50 caracteres máximo, no puede ser nulo
    - **codPais**: cadena de 3 caracteres de longitud fija, no puede ser nulo
*/

CREATE TABLE Paises
(
    idpais integer PRIMARY KEY IDENTITY, 
    pais varchar(50) NOT NULL,
    codpais char(3) NOT NULL
);
GO
