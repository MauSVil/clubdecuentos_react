#!/usr/bin/env python
# -*- coding: utf-8 -*-

from bottle import route, run, response
import json

HOST = "localhost"
PORT = 9000


# API: GET /cuentos
@route("/cuentos")
def cuentos():
    # Regresa la lista de todos los cuentos
    with open("cuentos.json") as da:
        cuentos = json.load(da)

    response.headers["Content-Type"] = "application/json"
    response.headers["Cache-Control"] = "no-cache"
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, OPTIONS"

    return json.dumps(cuentos, indent=4)

# API: GET /cuento/id
@route("/cuento/<id:int>")
def cuento(id):
    # Regresa el detalle de un sólo cuento 
    with open("cuentos.json") as da:
        cuentos = json.load(da)

    response.headers["Content-Type"] = "application/json"
    response.headers["Cache-Control"] = "no-cache"

    return json.dumps(cuentos[id], indent=4)


# Página de inicio
@route("/")
def inicio():
    """ Muestra la página de inicio """
    with open("index.html") as da:
        html = da.read()

    return html

if __name__ == "__main__":
    # Inicializa el servidor de la aplicación web
    run(host=HOST, port=PORT, debug=True, reloader=True)
