-- 9. Cuántas puntuaciones se han realizado, su suma y número de juegos distintos puntuados, todo ello por plataforma, para aquellas plataformas con más de 6 puntuaciones, ordenados por la suma de mayor a menor

SELECT plataforma, COUNT(*) AS n_punt, SUM(puntuacion) AS suma, COUNT(distinct juego) AS n_juegos
FROM PuntuacionBasicas
GROUP BY plataforma
HAVING COUNT(*) > 6
ORDER BY suma DESC;
GO