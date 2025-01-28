-- 2. Insertar tres registros en la tabla creada.

-- a) Dar un valor a idpais junto a los otros dos campos sin que de error.

SET IDENTITY_INSERT paises ON;
GO

INSERT INTO paises (idpais, pais, codpais)
VALUES (1, 'Australia', 'Aus');
GO

SET IDENTITY_INSERT paises OFF;
GO

-- b) Dar un alta correcta sin especificar idpais

INSERT INTO paises (pais, codpais)
VALUES ('USA', 'USA');
GO

-- c) Dar un alta incorrecta respecto a pais

INSERT INTO paises (pais, codpais)
VALUES (NULL, 'no');
GO


