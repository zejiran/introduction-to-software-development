# Parcial práctico 1 sección 3

## Instrucciones

1. Haga un _fork_ de este repositorio
2. Clone el repositorio bifurcado en su máquina virtual
3. Abra el proyecto en Spring Tools (o en el editor de su preferencia)
4. Lea el enunciado completamente antes de iniciar
5. Respire, de seguro saber hacer esto, no preguntaremos nada que no puedas hacer.
6. Sonría :)

## Contexto

Esta aplicación tiene el propósito de crear un sistema de información para la gestión de un puesto de venta de arepas. Para esta solución se diseño el siguiente modelo.

https://excalidraw.com/#json=6401613795164160,5b78liqCi4m6PDsHTj3VPQ

Haciendo uso de este modelo complete los siguientes puntos.

## Punto 1 (40%). Persistencia

(30%) Cree las entidades en la carpeta correspondiente, respetando las asociaciones y los tipos de asociación.

(10%) Realice la implementación de la persistencia (repositorio) de la entidad Arepa.

Haga commit en este punto, con el nombre "Punto 1"

## Punto 2 (40%). Lógica

(10%) Usted debe crear la lógica de la aplicación; para esto implemente la clase correspondiente de lógica para la entidad Arepa y el método _getArepas_.

(30%) Crear la prueba unitaria para el método _getArepas_, en el cual crea arepas (mínimo 3) con mínimo cuatro ingredientes cada una y su sitio de venta, y valida que todos los datos hayan sido correctamente almacenados. Usted no debe quemar los datos, debe hacer uso de las librerías adecuadas para siempre generar datos aleatorios.

Haga commit en este punto, con el nombre "Punto 2"

## Punto 3 (20%). API

(20%) Cree las clases DTO y DetailDTO necesarias para representar los recursos de nuestra aplicación. 

Haga commit en este punto, con el nombre "Punto 3".

## Entrega

1. Suba su código al repositorio.
2. Cree un release con el nombre "entrega".
3. Suba el link de su repositorio a bloque neón
4. Descanse :D
