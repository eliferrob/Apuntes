-- 6. Mostrar los dos primeros clientes ordenados por fecha de nacimiento de más joven a menos joven que tengan email que finalice con .ca y nacidos en Mayo.

SELECT TOP 2 nombre, fechanacimiento, email
FROM cliente
WHERE (datename(month, fechanacimiento) = 'Mayo') AND (email LIKE '%.ca')
ORDER BY fechanacimiento DESC;
GO

