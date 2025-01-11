## Sobre esta guía 

Esta guía ha sido desarrollada para facilitar mi aprendizaje y entendimiento de la herramienta Volatility 2.

## Creación de un alias para agilizar la ejecución de comandos

```bash
alias vol2="python2.7 volatility/vol.py
```


## Ayuda

| Comando | Ejemplo       | Uso                                                                                                        |
|:------- |:------------- |:---------------------------------------------------------------------------------------------------------- |
| `help`  | `vol2 --help` | Muestra los parámetros de uso así como un listado de plugins o tareas básicas                              |
| `info`  | `vol2 --info` | Devuelve un listado de los perfiles, espacios de memoria y plugins disponibles. No existe en Volatility 3. |


## Comandos sobre perfiles de memoria

| Comando     | Ejemplo                              | Uso                                     |
|:----------- |:------------------------------------ |:--------------------------------------- |
| `imageinfo` | `vol2 -f <fichero_imagen> imageinfo` | Obtiene perfiles sugeridos              |
| `kdbgscan`  | `vol2 -f <fichero_imagen> kdbgscan`  | Obtiene perfiles sugeridos a bajo nivel |


## Comandos sobre procesos

### Escaneo y descarga de ejecutable

| Comando    | Ejemplo                                              | Uso                                          |
|:---------- |:---------------------------------------------------- |:-------------------------------------------- |
| `pslist`   | `vol2 -f <fichero_imagen> --profile=<perfil> pslist`   | Muestra los procesos en lista                |
| `pstree`   | `vol2 -f <fichero_imagen> --profile=<perfil> pstree`   | Muestra los procesos con estructura de árbol |
| `psxview`  | `vol2 -f <fichero_imagen> --profile=<perfil> psxview`  | Muestra los procesos ocultos                 |
| `psscan`   | `vol2 -f <fichero_imagen> --profile=<perfil> psscan`   | Muestra los procesos escaneando el pool      |
| `cmdline`  | `vol2 -f <fichero_imagen> --profile=<perfil> cmdline`  | Comandos ejcutados en cmd                    |
| `cmdscan`  | `vol2 -f <fichero_imagen> --profile=<perfil> cmdscan`  | Búsqueda en el COMMAND_HISTORY               |
| `consoles` | `vol2 -f <fichero_imagen> --profile=<perfil> consoles` | Búsqueda en CONSOLE_INFORMATION              |
| `procdum` | `vol2 -f <fichero_imagen> --profile=<perfil> procdum -p <PID> -D <directorio>` | Descarga el ejecutable de un proceso |


### Librerías

| Comando   | Ejemplo                                                                        | Uso                                                                |
|:--------- |:------------------------------------------------------------------------------ |:------------------------------------------------------------------ |
| `dlllist` | `vol2 -f <fichero_imagen> --profile=<perfil> dlllist -p <PID>`                 | Lista las librerías de carga dinámica DLL de uno o varios procesos |
| `dlldump` | `vol2 -f <fichero_imagen> --profile=<perfil> dlldump -p <PID> -D <directorio>` | Descarga las librerías de un proceso                               |

*Opciones de dlldump:*

- `-p PID o --pid=PID`: Un proceso en específico.
- `--offset=OFFSET`: las DLL de un proceso oculto o desenlazado 
- `--base=BASEADDR`: Bajar un PE de cualquier lugar en memoria de procesos. Útil para extraer librerías DLL ocultas. 
- `--regex=REGEX`: Bajar DLL que hagan match con una expresión regular. 
- `--ignore-case`: Sensible o no a mayúsculas


### SID y Privilegios

| Comando   | Ejemplo                                                                        | Uso                                                                                           |
|:--------- |:------------------------------------------------------------------------------ |:--------------------------------------------------------------------------------------------- |
| `getsids` | `vol2 -f <fichero_imagen> --profile=<perfil> getsids`                          | Obtiene los Identificadores de seguridad de los usuarios                                      |
| `privs`   | `vol2 -f <fichero_imagen> --profile=<perfil> privs` | Obtiene qué privilegios del usuario están presentes, habilitados, y/o habilitados por defecto |

### Variables de entorno

| Comando  | Ejemplo                                              | Uso                                          |
|:-------- |:---------------------------------------------------- |:-------------------------------------------- |
| `envars` | `vol2 -f <fichero_imagen> --profile=<perfil> envars` | Obtiene las variables de entorno del proceso (--pid=PID)|

- Nº de CPUs instaladas y arquitectura hardware (plugin kdbgscan es mucho más fiable para esto)
- Directorio actual
- Directorio temporal 
- Nombre de la sesión 
- Nombre de equipo (Comprobar siempre con los registros. Riesgo de manipulación)
- Nombre de usuario 

### Info de versión

| Comando   | Ejemplo                                               | Uso                                                 |
|:--------- |:----------------------------------------------------- |:--------------------------------------------------- |
| `verinfo` | `vol2 -f <fichero_imagen> --profile=<perfil> verinfo` | Obtiene las versiones de ejecutables y ficheros DLL |

## Comandos sobre espacios de memoria

### Volcado de memoria y mapa de memoria de un proceso 

| Comando   | Ejemplo                                                                       | Uso                                                        |
|:--------- |:----------------------------------------------------------------------------- |:---------------------------------------------------------- |
| `memdump` | `vol2 -f <fichero_imagen> --profile=<perfil> memdump -p <PID> -D <dirección>` | Descarga el espacio de memoria de un proceso en un fichero |
| `memmap`  | `vol2 -f <fichero_imagen> --profile=<perfil> memmap -p <PID>`                 | Muestra qué páginas están residentes en memoria            |

### Nodos VAD

Un nodo VAD es una representación interna de una región de memoria asignada a un proceso. Cada nodo contiene información sobre un rango específico de direcciones virtuales, como su tamaño, tipo, permisos de acceso y estado

| Comando   | Ejemplo                                                                       | Uso                                                          |
|:--------- |:----------------------------------------------------------------------------- |:------------------------------------------------------------ |
| `vadinfo` | `vol2 -f <fichero_imagen> --profile=<perfil> vadinfo -p <PID>`                | Muestra información de los nodos VAD de un proceso           |
| `vadwalk` | `vol2 -f <fichero_imagen> --profile=<perfil> vadwalk -p <PID>`                | Inspeccionar nodos VAD de un proceso en forma de lista       |
| `vadtree` | `vol2 -f <fichero_imagen> --profile=<perfil> vadtree -p <PID>`                | Inspeccionar nodos VAD de un proceso en forma de árbol       |
| `vaddump` | `vol2 -f <fichero_imagen> --profile=<perfil> vaddump -p <PID> -D <dirección>` | Permite extraer el rango de páginas descrito por un nodo VAD |

### Logs de eventos

| Comando   | Ejemplo                                                              | Uso                           |
|:--------- |:-------------------------------------------------------------------- |:----------------------------- |
| `evtlogs` | `vol2 -f <fichero_imagen> --profile=<perfil> evtlogs -D <dirección>` | Saca logs de eventos binarios |

- Sólo en Windows XP y 2003 
- `--save-evt`: Extrae logs de eventos raw para parsear con herramientas externas
- `--verbose`: Los SIDs se evalúan y salen en la salida parseada en lugar del SID raw (más lento) 
- Los campos se separan por pipes (“|”) para poder analizar con Excel o similar
- Los mensajes se separan por punto y coma (“;”)

### Historial Internet Explorer

| Comando     | Ejemplo                                                 | Uso                        |
|:----------- |:------------------------------------------------------- |:-------------------------- |
| `iehistory` | `vol2 -f <fichero_imagen> --profile=<perfil> iehistory` | Obtiene el historial de IE |


## Comandos sobre conexiones de red

| Comando       | Ejemplo                                                   | Uso                                                                        |
|:------------- |:--------------------------------------------------------- |:-------------------------------------------------------------------------- |
| `netscan`     | `vol2 -f <fichero_imagen> --profile=<perfil> netscan`     | Windows Vista, 2008, 7, 8, 10, 11. Detecta listeners y endpoints TCP y UDP |
| `connections` | `vol2 -f <fichero_imagen> --profile=<perfil> connections` | Windows XP y 2003. Muestra las conexiones TCP activas                      |
| `connscan`    | `vol2 -f <fichero_imagen> --profile=<perfil> connscan`    | Windows XP y 2003. Conexiones activas y terminadas                         |
| `sockets`     | `vol2 -f <fichero_imagen> --profile=<perfil> sockets`     | Windows XP y 2003. Detectar sockets TCP, UDP, RAW, etc.                    |
| `sockscan`    | `vol2 -f <fichero_imagen> --profile=<perfil> sockscan`    | Windows XP y 2003. Detectar sockets TCP, UDP, RAW, etc.                    |

## Comandos para objetos y kernel

### Drivers del kernel

| Comando           | Ejemplo                                                              | Uso                                                                                                |
|:----------------- |:-------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------- |
| `modules`         | `vol2 -f <fichero_imagen> --profile=<perfil> modules`                | Lista los drivers del kernel cargados en el sistema (por orden de carga)                           |
| `unloadedmodules` | `vol2 -f <fichero_imagen> --profile=<perfil> unloadedmodules`        | Muestra los módulos descargados                                                                    |
| `modscan`         | `vol2 -f <fichero_imagen> --profile=<perfil> modscan`                | Lista los drivers del kernel cargados en el sistema, incluidos los ocultos (ignora orden de carga) |
| `moddump`         | `vol2 -f <fichero_imagen> --profile=<perfil> moddump -D <dirección>` | Guarda drivers del kernel en ficheros                                                              |

### Tabla descriptores servicios del sistema

| Comando | Ejemplo                                            | Uso                                            |
|:------- |:-------------------------------------------------- |:---------------------------------------------- |
| `ssdt`  | `vol2 -f <fichero_imagen> --profile=<perfil> ssdt` | Obtiene las funciones en las SSDT nativa y GUI |

### Búsqueda de drivers

| Comando      | Ejemplo                                                  | Uso                                                  |
|:------------ |:-------------------------------------------------------- |:---------------------------------------------------- |
| `driverscan` | `vol2 -f <fichero_imagen> --profile=<perfil> driverscan` | Busca objetos DRIVER_OBJECT escaneando tags del pool |

### Búsqueda de ficheros abiertos

| Comando       | Ejemplo                                                            | Uso                                                     |
|:------------- |:------------------------------------------------------------------ |:------------------------------------------------------- |
| `filescan`    | `vol2 -f <fichero_imagen> --profile=<perfil> filescan`             | Busca objetos FILE_OBJECT escaneando tags del pool      |
| `mutantscan`  | `vol2 -f <fichero_imagen> --profile=<perfil> mutantscan --silent`  | Busca objetos KMUTANT escaneando tags del pool          |
| `symlinkscan` | `vol2 -f <fichero_imagen> --profile=<perfil> symlinkscan --silent` | Busca objetos de enlace simbólico y saca su información |
| `thrdscan`    | `vol2 -f <fichero_imagen> --profile=<perfil> thrdscan --silent`    | Busca objetos ETHREAD escaneando los tags del pool      |

Encuentra archivos abiertos incluso si un rootkit los oculta en disco y oculta los handles

### Extracción de ficheros cacheados

| Comando     | Ejemplo                                                                       | Uso                                                                                             |
|:----------- |:----------------------------------------------------------------------------- |:----------------------------------------------------------------------------------------------- |
| `dumpfiles` | `vol2 -f <fichero_imagen> --profile=<perfil> dumpfiles -D <dirección_salida>` | Extrae ficheros cacheados de DataSectionObject, ImageSectionObject o SharedCacheMap de los VADs |

- Pondrá .dat, .img o .vacb en el nombre respectivamente para indicar dónde los encontró 
- Como pueden no estar enteros, rellenará con 0’s aquellas partes no disponibles

*Opciones:*

- `-r REGEX, --regex=REGEX`: Busca por expresión regular 
- `-i, --ignore-case`: Insensible a mayúsculas
- `-o OFFSET, --offset=OFFSET`: Saca los ficheros del proceso con dirección física OFFSET 
- `-Q PHYSOFFSET, --physoffset=PHYSOFFSET`: Saca el fichero que estén en la dirección física PHYSOFFSET
- `-D DUMP_DIR, --dump-dir=DUMP_DIR`: Directorio donde se extraerán los ficheros
- `-S SUMMARY_FILE, --summary-file=SUMMARY_FILE`: Fichero donde se guardará un resumen de la operación (JSON, se puede parsear con parsesummary.py)
- `-p PID, --pid=PID`: Sacar sólo los ficheros de los procesos con estos PIDs (separados por comas) 
- `-n, --name`: Incluir el nombre del fichero en la ruta de salida
- `-u, --unsafe`: No hacer comprobaciones de seguridad para sacar más datos 
- `-F FILTER, --filter=FILTER`: Aplicar los filtros (separados por comas)


## Comandos sobre el registro de Windows

| Comando          | Ejemplo                                                                          | Uso                                                                                                                                         |
|:---------------- |:-------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------- |
| `hivescan`       | `vol2 -f <fichero_imagen> --profile=<perfil> hivescan`                           | Encuentra la dirección física de las estructuras CMHIVE, que representan los hives (colmenas) de registros en memoria.                      |
| `hivelist`       | `vol2 -f <fichero_imagen> --profile=<perfil> hivelist`                           | Coge la dirección física de un CMHIVE y devuelve la dirección virtual y el nombre de todos los hives                                        |
| `hivedump`       | `vol2 -f <fichero_imagen> --profile=<perfil> hivedump -o <OFFSET>`               | Dada la dirección virtual de un hive, lista recursivamente las subclaves                                                                    |
| `printkey`       | `vol2 -f <fichero_imagen> --profile=<perfil> printkey`                           | Toma la dirección virtual de un hive y un nombre de clave y muestra su valor, su timestamp y sus subclaves. Con -K se especifica la clave   |
| `hashdump`       | `vol2 -f <fichero_imagen> --profile=<perfil> hashdump`                           | Obtiene los hashes LanMan y NT del registro (deofuscados)                                                                                   |
| `lsadump`        | `vol2 -f <fichero_imagen> --profile=<perfil> lsadump`                            | Obtiene los secretos LSA (desencriptados)                                                                                                   |
| `cachedump`      | `vol2 -f <fichero_imagen> --profile=<perfil> cachedump`                          | Obtiene hashes de passwords de dominios cacheados del registro. Sólo funciona si la memoria viene de una máquina que es parte de un dominio |
| `shellbags`      | `vol2 -f <fichero_imagen> --profile=<perfil> shellbags`                          | Obtiene las shellbags del registro. Preferencias de uso y visuales, que pueden dar información del comportamiento del usuario               |
| `userassist`     | `vol2 -f <fichero_imagen> --profile=<perfil> userassist`                         | Obtiene las claves de userassist                                                                                                            |
| `shimcache`      | `vol2 -f <fichero_imagen> --profile=<perfil> shimcache`                          | Parsea la clave de registro de Application Compatibility Shim Cache                                                                         |
| `getservicesids` | `vol2 -f <fichero_imagen> --profile=<perfil> getservicesids`                     | Calcula los SIDs de los servicios de una máquina y los saca en formato de diccionario de Python                                             |
| `dumpregistry`   | `vol2 -f <fichero_imagen> --profile=<perfil> dumpregistry -D <dirección_salida>` | Hace el volcado de un hive del registro al disco                                                                                            |


*Uso común: *

1. Obtener dirección física con `hivescan` 
2. Dirección virtual con `hivelist` 
3. Imprimir con `printkey, hashdump, lsadump, cachedump`


## Comandos sobre el sistema de ficheros

| Comando     | Ejemplo                                                 | Uso                                                                                                                    |
|:----------- |:------------------------------------------------------- |:---------------------------------------------------------------------------------------------------------------------- |
| `mbrparser` | `vol2 -f <fichero_imagen> --profile=<perfil> mbrparser` | Escanea y parsea posibles Master Boot Records (MBRs), y saca info de las particiones |
| `mftparser` | `vol2 -f <fichero_imagen> --profile=<perfil> mftparser` | Busca posibles entradas Master File Table (MFT) e imprime ciertos atributos informativos |


## Miscelánea

| Comando     | Ejemplo                                                 | Uso                                                                              |
|:----------- |:------------------------------------------------------- |:-------------------------------------------------------------------------------- |
| `strings`   | `strings -e l <fichero> \| grep "palabra" -B10 -A10 `   | Saca procesos y direcciones virtuales que contienen una cadena                   |
| `volshell`  | `vol2 -f <fichero_imagen> --profile=<perfil> volshell`  | Provee una consola interactiva para emplear las funciones internas de Volatility |
| `bioskbd`   | `vol2 -f <fichero_imagen> --profile=<perfil> bioskbd`   | Lee pulsaciones de teclado desde el área de la BIOS                              |
| `timeliner` | `vol2 -f <fichero_imagen> --profile=<perfil> timeliner` | Crea una línea temporal a partir de varios artefactos en memoria                 |


## Comandos sobre el GUI de Windows

| Comando      | Ejemplo                                                                  | Uso                                                                                               |
|:------------ |:------------------------------------------------------------------------ |:------------------------------------------------------------------------------------------------- |
| `sessions`   | `vol2 -f <fichero_imagen> --profile=<perfil> sessions`                   | Obtiene los procesos de cada sesión de usuario                                                    |
| `deskscan`   | `vol2 -f <fichero_imagen> --profile=<perfil> deskscan`                   | Lista los escritorios de cada estación de ventanas                                                |
| `clipboard`  | `vol2 -f <fichero_imagen> --profile=<perfil> clipboard`                  | Recupera datos usuario del portapapeles                                                           |
| `screenshot` | `vol2 -f <fichero_imagen> --profile=<perfil> screenshot -D <directorio>` | Saca una captura de pantalla de cada escritorio en el sistema                                     |
| `windows`    | `vol2 -f <fichero_imagen> --profile=<perfil> windows`                    | Obtiene todas las ventanas (visibles o no) en todos los escritorios, de más frontal a más trasera |


## Comandos para búsqueda de malware

| Comando      | Ejemplo                                                                                               | Uso                                                                                                                                                                   |
|:------------ |:----------------------------------------------------------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `malfind`    | `vol2 -f <fichero_imagen> --profile=<perfil> malfind`                                                 | Ayuda a buscar código o DLLs ocultas o inyectadas usando los tags de VAD, permisos de páginas, etc.                                                                   |
| `yarascan`   | `vol2 -f <fichero_imagen> --profile=<perfil> yarascan [--yara-file=RULESFILE \| --yara-rules=REGLAS]` | busca secuencias de bytes (p.ej.: instrucciones en ensamblador con comodines), expresiones regulares, cadenas ANSI o Unicode, etc. en memoria de usuario o del kernel |
| `svcscan`    | `vol2 -f <fichero_imagen> --profile=<perfil> svcscan`                                                 | Lista, sin usar el API de Windows, los servicios registrados en memoria                                                                                               |
| `devicetree` | `vol2 -f <fichero_imagen> --profile=<perfil> devicetree`                                              | Obtiene el árbol de drivers de dispositivos que responden a una IRP                                                                                                   |
