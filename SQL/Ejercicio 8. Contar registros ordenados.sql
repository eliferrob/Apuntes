-- 8. Mostrar nº de clientes registrados por día de la semana ordenados por el día de la semana.

SELECT datename(dw, fecharegistro) AS dia_semana, COUNT(*) AS n_clientes
FROM cliente
GROUP BY datename(dw, fecharegistro), datepart(dw, fecharegistro)
ORDER BY datepart(dw, fecharegistro);
GO


