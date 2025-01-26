## 0. COMENTARIOS

```sql
-- Comentar una línea

/*
Comentar un bloque
*/
```

## 1. CREAR BASE DE DATOS

```sql
create database nombredelatabla
go
```

## 2. USAR BASE DE DATOS

```sql
use nombredelatabla
go
```

## 3. CREAR TABLA (aceptando o no valores nulos)

```sql
create table nombredelatabla
(campoCodigo integer identity primary key,
campo1 varchar(50) not null,
campo2 int null,
campo3 int,
primary key (campo1, campo3)
);
go
```

## 4. ELIMINAR TABLA (si existe) Y REGISTROS

```sql
if object_id('nombredelatabla') is not null
drop table nombredelatabla
go
/*DROP para borrar la tabla entera, DELETE para borrar solo la informaci�n de la tabla, TRUNCATE para borrar todos los registros de golpe*/
truncate table nombretabla
delete from nombredelatabla
/*opcional*/
where campo1<>=12,'palabra';
go
```

## 5. INSERTAR VALORES A UNA TABLA YA CREADA

```sql
insert into nombredelatabla
(campo1, campo2)
values (valorcampo1, valorcampo2)
go
```


## 6. RECUPERAR INFORMACIÓN ALMACENADA (valores que no sean nulos)

```sql
select campo1,campo2
from nombredelatabla
/*opcional*/
where campo1<>=12,'palabra',etc; is not null
go

--Mostrar información de una tabla
sp_columns NombreTabla
go
```

## 7. ACTUALIZAR TABLA

```sql
update nombredelatabla
set campo=nuevovalor

/*opcional*/
where campo1<>=12,'palabra'
go
```

## 8. COMPROBAR SI EXISTE BASE DE DATOS

```sql
if (select name 
	from master.sys.sysdatabases
	where name='moviesbasicas') is null
	select 'No existe';
else
    select 'Existe';
go

/*Otra forma*/

if DB_ID ('nombredelatabla') is null
    select 'No existe'
else
    select 'Existe'
go
```

## 9. CAMBIAR IDIOMA
```sql
select @@language;
go

exec sp_helplanguage;
go

set language us_english;
go

set language Español;
go
```

## 10. DEFAULT
```sql
create table nombredelatabla
(Matricula varchar(10) primary key,
DescripcionEstado varchar(100) default 'Bueno',
codTipo integer default 1
);
go

insert nombredelatabla
(campo1,campo2,campo3)
values ('4589-HBZ',default,3);
go
```

## 11. FUNCIONES DE CADENAS DE CARACTERES

### Extraer subcadena (cadena,inicio,longitud)

```sql
select substring('Buenas tardes',8,6);
```

### Convertir valor numérico en cadena (número,longitud,caracteres)

```sql
select str(-123.456,7,3);
```

### Truncar dos cadenas ('cadena1',posiciónencadena1,caracteresdecadena1quesevanaborrar,'cadena2')

```sql
select stuff('cadena1',3,2,'cadena2');
```

### Longitud de una cadena

```sql
select len('Hola');
```

### Longitud cadena empezando por la izquierda

```sql
select left('buenos dias',8);
```

### Longitud cadena empezando por la derecha

```sql
select right('buenos dias',8);
```

### Utilizar símbolo ASCII

```sql
select char(126);
```

### Pasar a minúsculas

```sql
select lower('HOLA ESTUDIAnte');
```

### Pasar a mayúsculas

```sql
select upper('HOLA ESTUDIAnte');
```

### Quita espacios a la izquierda

```sql
select ltrim(' Hola ');
```

### Quita espacios a la derecha

```sql
select rtrim(' Hola ');
```
  
### Reemplazar ('frase','valorantiguo',valornuevo')

```sql
select replace('xxx.elmundo.es','x','w');
```

### Invertir cadena

```sql
select reverse('Hola');
```

### Dónde comienza la cadena

```sql
select charindex('or','Jorge Luis Borges',5);
```

Devuelve la posición en la que comienza la subcadena del primer parámetro, contenida en el segundo parámetro, comenzando en la posición del tercer parámetro. Retorna 13.

### Repertir cadena ('cadena',veces)

```sql
select replicate ('Hola',3);
```

### Meter espacios

```sql
select 'Hola'+space(7)+'que tal';
```

### Concatenar varios campos en uno

```sql
select concat(campo1,campo2)
```

## 12. FUNCIONES MATEMÁTICAS

### Retornar valor absoluto

```sql
select abs(-23);
```

### Redondea hacia arriba

```sql
select ceiling(12.34);
```

### Redondea hacia abajo

```sql
select floor(12.34);
```

### Potencias (primer argumento elevado al segundo argumento)

```sql
select power(2,3);
```

### Redondeo decimales(valor, decimales)

```sql
select round(12.35,1);
```

### Redondeo decimales

```sql
select cast(variable as decimal)
```

## 13. FUNCIONES FECHAHORA

### Definir formato de fecha

```sql
set dateformat ymd;
```

### Sacar fecha actual

```sql
select getdate()
```

### Extraer partes de una fecha

```sql
select datepart(month,'02/03/2021')
```

### Extraer el número de la fecha actual

```sql
select datepart(month/day/hour/year,getdate())
```

### Extraer partes de la fecha actual devolviendo una cadena (el nombre)

```sql
select datename(month/dw,getdate())
```

### Agregar días, meses, años, horas, minutos (añade 3 x a la fecha)

```sql
select dateadd(day/month/year/minute/hour,3,'1980/11/02');
```

### Añadir intervalos

```sql
select year(getdate()) as 'A�o',month(getdate()) as 'Mes';
```

### Diferencias entre fechas (year/day/mont,'fecha1','fecha2')

```sql
select datediff(year,'12/03/2000',getdate())
```

## 14. LIKE (para buscar patrones en cadenas de caracteres)

% -> cualquier tamaño
_ -> un solo carácter
  
```sql
select Campo1, Campo2
from Tabla
where Campo1 like '%N%' /*busca cualquier palabra que tenga una N en medio*/

/*otra opción*/
where Campo1 like '___N%' /*busca cualquier palabra que tengan tres caracteres, una N y el resto da igual*/
go
```

## 15. FUNCIONES AGRUPADORAS

### Count

```sql
select count(*) AS NumReg, count(isla), count(distinct isla)
from nombredelatabla
where fecha='01/01/2013'
go
```

### Max, min, avg, stdev

```sql
select max(padron) as Máximo, min(padron) as Mínimo, AVG(padron) as Media, STDEV(padron) as DesvTípica
from nombredelatabla
go
```

## 16. TOP y ORDER BY

```sql
select top 10 Municipio, Padron
from nombredelatabla
where ca='Canarias'
order by padron desc
go
```

## 17. GROUP BY

```sql
select ca, count(*), sum(padron)
from DatosCompletosTabla
group by ca, provincia
order by ca
go
```

## 18. GRANT Y REVOKE

```sql
GRANT ALL ON grant_rights TO unauthorized_user
go
```

## 19. ALTER TABLE

```sql
ALTER TABLE nombre_tabla ADD nombre_campo datatype;
```

## 20. UNION

Coge dos consultas y las concatena una detrás de otra. Sustituye el ; cuando la base de datos no permite concatenar consultas (utilizado frecuentemente para realizar SQL Injections. Debe tener el mismo número de campos. 

```sql
SELECT first_name FROM user_system_data UNION SELECT login_count FROM user_data;
```

Se pueden añadir columnas vacías para sortear este problema:

```sql
SELECT t1.*, NULL, NULL, NULL FROM t2;
```

sa'; '1'='1' UNION SELECT  user_system_data.*, NULL, NULL, NULL FROM user_system_data  --

