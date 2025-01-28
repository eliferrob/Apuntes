-- 10. Mostrar el número de puntuaciones y la  media por cliente, pasando el nombre de cliente en mayúsculas. Para clientes con media de puntos mayor que 5 y nº de puntuaciones mayor que una. Ordenada por la media de mayor a menor.

SELECT UPPER(nombrecliente) AS nombre_cliente, COUNT(*) AS num_puntuaciones, AVG(puntuacion) AS media
FROM puntuacionbasicas
GROUP BY UPPER(nombrecliente)
HAVING AVG(puntuacion) > 5 AND COUNT(*) > 1
ORDER BY media DESC;
GO

SELECT COUNT(*) AS 'Número de programas'
FROM cadena AS c
INNER JOIN (
    SELECT TOP 5 WITH TIES ap.IdCadena, Share
    FROM Programa AS prog
    INNER JOIN AudienciaPrograma AS ap
        ON prog.IdPrograma = ap.IdPrograma
    WHERE DAY(ap.FechaHora) = 8 AND MONTH(ap.FechaHora) = 5
    ORDER BY Share DESC
) AS PC
ON c.IdCadena = PC.IdCadena
WHERE c.Cadena LIKE 'TELECINCO'
GROUP BY c.Cadena
GO

SELECT a.Valor AS Audiencia, Cadena
FROM Cadena AS c
INNER JOIN Audiencia AS a
    ON c.idCadena = a.IdCadena
INNER JOIN Periodo AS p
    ON a.idPeriodo = p.Id
INNER JOIN (
    SELECT TOP 1 WITH TIES Programa
    FROM Programa AS pr
    INNER JOIN AudienciaPrograma AS au
        ON pr.IdPrograma = au.IdPrograma
    WHERE DAY(au.FechaHora) = 9 AND MONTH(au.FechaHora) = 5 AND YEAR(au.FechaHora) = 2013
    ORDER BY Espectadores DESC
) AS PMV
    ON PMV.Programa = pr.Programa
WHERE p.Periodo LIKE 'Noche2%'
ORDER BY a.Valor DESC;
GO