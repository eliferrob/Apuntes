-- 7. Mostrar los 3 primeros desarrolladores que tienen más juegos distintos, para desarrolladores que comiencen con B y para juegos que sean del tipo Acción

SELECT TOP 3 Desarrollador, COUNT(distinct juego) AS njuegos
FROM Juegos
WHERE (tipo  = 'Acción') AND (Desarrollador LIKE 'B%')
GROUP BY Desarrollador
ORDER BY njuegos DESC;
GO

