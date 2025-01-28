-- 3. Modificar registro para sumar 1 mes a las fechas de las puntuaciones de plataforma PC.

-- Mostrar las fechas antes de la actualización
SELECT fecha
FROM puntuacionbasicas
WHERE plataforma = 'PC';
GO

-- Actualizar las fechas sumando 1 mes
UPDATE puntuacionbasicas
SET fecha = DATEADD(month, 1, fecha)
WHERE plataforma = 'PC';
GO

-- Mostrar las fechas después de la actualización
SELECT fecha
FROM puntuacionbasicas
WHERE plataforma = 'PC';
GO
