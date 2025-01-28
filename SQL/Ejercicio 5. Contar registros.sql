-- 5. Mostrar cuántos juegos hay de la plataforma PS3 del tipo Acción.

SELECT COUNT(*)
FROM Juegos
WHERE plataforma = 'PS3' AND tipo = 'Acción';
GO


