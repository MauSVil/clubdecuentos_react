## Mini API mostrando lista de cuento en página de inicio

Este es un ejemplo de una mini API para el proyecto de Cuentos usando el
micro framework Boottle con Python.

A continuación se describe el contenido de la carpeta:

- `bottle.py` El módulo del micro framework Bottle
- `cuentos.json` Archivo en formato JSON con la lista de los cuentos, se
  ha modificado levemente para cumplir con el estándar JSON.
- `cuentos.py` Es la API en sí creada con Python y atiende la siguiente
  peticiones:
   - __GET /__ Regresa la página de inicio mostrando la lista de cuentos
     construida a través de una llamada al API usando Javascript.
   - __API: GET /cuentos__ Regresa en formato JSON la lista de todos los
     cuentos disponibles.
   - __API: GET /cuento/id__ Regresa los datos del cuento con
     identificación __id__.
- `index.html` Es el archivo html regresado por la petición __GET /__ y
  que además se puede usar por separado, mientras el servidor esté
funcionando la tabla de cuentos será mostrada.
 
