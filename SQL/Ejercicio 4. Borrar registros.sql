-- 4. Borrar los paises creados antes, con  idpais mayor que 1.

SELECT idpais FROM paises;
DELETE paises
WHERE idpais > 1;
GO

