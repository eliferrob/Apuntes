## 1. Crear una tabla Paises con la siguiente estructura:

- **idPais**: entero, clave primaria y autogenerado
- **pais**: cadena de caracteres de 50 caracteres máximo, no puede ser nulo
- **codPais**: cadena de 3 caracteres de longitud fija, no puede ser nulo

```sql
create table Paises
(
    idpais integer primary key identity,
    pais varchar(50) not null,
    codpais char(3) not null
);
go
``` 

## 2. Insertar tres registros en la tabla creada.

### a) Dar un valor a idpais junto a los otros dos campos sin que de error.

```sql
set identity_insert paises on;
go

insert into paises (idpais,pais,codpais)
values (1,'Australia','Aus');
go

set identity_insert paises off;
go
``` 

### b) Dar un alta correcta sin especificar idpais

```sql
insert into paises (pais,codpais)
values ('USA','USA');
go
``` 

### c) Dar un alta incorrecta respecto a pais

```sql
insert into paises (pais,codpais)
values (null,'no');
go
``` 

## 3. Modificar registro para sumar 1 mes a las fechas de las puntuaciones de plataforma PC.

```sql
select fecha
from puntuacionbasicas
where plataforma='PC';
go

update puntuacionbasicas
set fecha=dateadd(month,1,fecha)
where plataforma='PC';
go
``` 

## 4. Borrar los paises creados antes, con  idpais mayor que 1.

```sql
select idpais from paises;
delete paises
where idpais>1;
go
``` 

## 5. Mostrar cuántos juegos hay de la plataforma PS3 del tipo Acción.

```sql
select COUNT(*)
from Juegos
where plataforma='PS3' and tipo='Acci�n';
go
``` 

## 6. Mostrar los dos primeros clientes ordenados por fecha de nacimiento de más joven a menos joven que tengan email que finalice con .ca y nacidos en Mayo.

```sql
select top 2 nombre,fechanacimiento,email
from cliente
where (DATEname(month,fechanacimiento)='Mayo') and (email like '%.ca')
order by fechanacimiento desc;
go
``` 

## 7. Mostrar los 3 primeros desarrolladores que tienen más juegos distintos, para desarrolladores que comiencen con B y para juegos que sean del tipo Acción

```sql
select top 3 Desarrollador, COUNT(distinct juego) as njuegos
from Juegos
where (tipo  = 'Acción') and (Desarrollador like 'B%')
group by Desarrollador
order by njuegos desc;
go
``` 

## 8. Mostrar nº de clientes registrados por día de la semana ordenados por el día de la semana.

```sql
select datename(dw,fecharegistro),COUNT(*) as nclientes
from cliente
group by datename(dw,fecharegistro),datepart(dw,fecharegistro)
order by datepart(dw,fecharegistro);
go
``` 

## 9. Cuántas puntuaciones se han realizado, su suma y número de juegos distintos puntuados, todo ello por plataforma, para aquellas plataformas con más de 6 puntuaciones, ordenados por la suma de mayor a menor

```sql
select plataforma,count(*) as npunt, sum(puntuacion) as suma,COUNT(distinct juego) as njuegos
from PuntuacionBasicas
group by plataforma
having count(*)>6
order by suma desc;
go
```

## 10. Mostrar el número de puntuaciones y la  media por cliente, pasando el nombre de cliente en mayúsculas. Para clientes con media de puntos mayor que 5 y nº de puntuaciones mayor que una. Ordenada por la media de mayor a menor.

```sql
select upper(nombrecliente),COUNT(*) as npunt, avg(puntuacion) as media
from puntuacionbasicas
group by upper(nombrecliente)
having avg(puntuacion)>5 and count(*) >1
order by media desc;
go

select count(*) ' N�mero de programas'
from cadena as c
inner join (select top 5 with ties ap.IdCadena, Share
            from Programa as prog
            inner join AudienciaPrograma as ap
            on prog.IdPrograma=ap.IdPrograma
            where day(ap.FechaHora)=8 and month(ap.FechaHora)=5
            order by Share desc) as PC
on c.IdCadena=PC.IdCadena
where c.Cadena like 'TELECINCO'
group by Cadena
go

select a.Valor as Audiencia, Cadena
from Cadena as c
inner join Audiencia as a
on c.idCadena=a.IdCadena
inner join Periodo as p
on a.idPeriodo=p.Id
inner join (select top 1 with ties Programa
            from Programa as pr
            inner join AudienciaPrograma as au
            on pr.IdPrograma=au.IdPrograma
            where day(au.FechaHora)=9 and month(au.FechaHora)=5 and year(au.FechaHora)=2013
            order by Espectadores desc) as PMV
            on PMV.Programa=Programa
where p.Periodo like 'Noche2%'
order by a.Valor desc
go
```