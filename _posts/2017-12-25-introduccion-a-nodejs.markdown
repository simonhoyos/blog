---
layout: post
title:  "Introducción a Node.js"
date:   2017-12-25 02:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/nodejs.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

<a href="https://nodejs.org/en/" target="_blank">Node.js</a> es una plataforma que nos permite ejecutar código JavaScript fuera del navegador. En este post explicaremos cómo empezar con <a href="https://nodejs.org/en/" target="_blank">Node.js</a>, qué tipo de aplicaciones puedes construir y una introducción a su poderoso manejador de paquetes.<!-- more -->

En <a href="https://nodejs.org/en/" target="_blank">Node.js</a> conceptos como variables, condicionales, ciclos, arreglos, objetos, funciones, etc. de JavaScript funcionan igual que en el navegador.

Lo que cambia entre el navegador y <a href="https://nodejs.org/en/" target="_blank">Node.js</a> son los objetos a los que tenemos acceso. Por ejemplo, en el navegador podemos utilizar objetos como `window` y `document`,  que no están disponibles en <a href="https://nodejs.org/en/" target="_blank">Node.js</a>.

Por otro lado, en <a href="https://nodejs.org/en/" target="_blank">Node.js</a> podemos hacer cosas que no podemos hacer en el navegador como leer y escribir archivos, crear un servidor Web, crear aplicaciones de escritorio, o crear aplicaciones para la línea de comandos, entre otros.

## Primeros pasos

Para empezar con <a href="https://nodejs.org/en/" target="_blank">Node.js</a> debes primero descargarlo e instalarlo en tu maquina. Abre <a href="https://github.com/makeitrealcamp/node-installation" target="_blank">este enlace</a> y sigue las instrucciones para tu sistema operativo.

Asegúrate que haya sido correctamente instalado abriendo una línea de comandos y ejecutando `node -v`:

```shell
$ node -v
v9.2.0
```

Aunque la versión puede ser diferente, asegúrate que sea una reciente, preferiblemente mayor a 9.0.0.

<a href="https://nodejs.org/en/" target="_blank">Node.js</a> viene con una consola que te permite ejecutar código rápidamente. Para abrirla ejecuta `node` en la línea de comandos:

```shell
$ node
>
```

Si escribes una expresión como `1 + 2` y oprimes `Enter` deberías ver el resultado debajo. Después puedes escribir otra expresión válida en JavaScript, oprimir Enter y ver el nuevo resultado, y así sucesivamente.

Para salir de la consola de <a href="https://nodejs.org/en/" target="_blank">Node.js</a> oprime `Ctrl + C` dos veces.

La otra forma de ejecutar código en <a href="https://nodejs.org/en/" target="_blank">Node.js</a> es creando un archivo y ejecutándolo. Por ejemplo, crea un archivo llamado `app.js` y escribe lo siguiente:

```js
console.log("Mi primer programa en Node.js");
```

Guárdalo y ejecutalo con el siguiente comando:

```shell
$ node app.js
Mi primer programa en Node.js
```

Felicitaciones, has escrito tu primer programa en <a href="https://nodejs.org/en/" target="_blank">Node.js</a>!

## Algo más interesante

Veamos el siguiente ejemplo que va a crear un archivo en nuestra máquina. Empieza transcribiendo el siguiente programa en un archivo llamado `generarArchivo.js`:

```js
const fs = require('fs');

fs.writeFile("nuevo.txt", "Primera línea\nSegunda línea", (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("El archivo fue creado correctamente");
});
```

Este ejemplo es interesante porque estamos usando el API de <a href="https://nodejs.org/en/" target="_blank">Node.js</a>, es decir, los objetos que nos ofrece <a href="https://nodejs.org/en/" target="_blank">Node.js</a> para realizar diferentes tareas. Fíjate en la primera línea en donde estamos requiriendo el módulo `fs` que nos permite manipular archivos. Puedes encontrar el API completo <a href="https://nodejs.org/api/" target="_blank">de Node.js en este enlace</a>.

Para ejecutar este programa ingresa el comando `node generarArchivo.js` en la consola, deberías ver el mensaje "El archivo fue creado correctamente":

```shell
$ node generarArchivo.js
El archivo fue creado correctamente
```

Asegúrate de que se haya creado un archivo llamado `nuevo.txt` en la misma carpeta donde está el programa y que tenga el siguiente contenido:

```txt
Primera línea
Segunda línea
```

## Un servidor Web

Uno de los primeros programas de ejemplo que se muestran cuando se habla de <a href="https://nodejs.org/en/" target="_blank">Node.js</a> es un servidor Web. Quizá esa sea la razón por la que muchos que creen que <a href="https://nodejs.org/en/" target="_blank">Node.js</a> se usa exclusivamente para crear aplicaciones Web.

Para crear un servidor Web necesitamos el módulo `http`. Crea un archivo llamado `server.js` y transcribe el siguiente código:

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.send('<h1>Hello World<h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://localhost:3000/`);
});
```

Para ejecutar esta aplicación utiliza el siguiente comando:

```shell
$ node server.js
Server running at http://localhost:3000/
```

Ahora ingresa desde un navegador a http://localhost:3000/. Debes ver el texto “Hola Mundo”.

Para detener el servidor oprime `Ctrl + C` en la consola.

## Librerías con npm

Hasta ahora hemos usado módulos que vienen incluidos con <a href="https://nodejs.org/en/" target="_blank">Node.js</a> como [fs]([) y [http](https://nodejs.org/api/http.html). Sin embargo, el gran poder de <a href="https://nodejs.org/en/" target="_blank">Node.js</a> viene de las **librerías externas**: código que escriben y publican otros desarrolladores y que podemos utilizar en nuestros proyectos.

Las librerías en <a href="https://nodejs.org/en/" target="_blank">Node.js</a> se conocen con el nombre de **paquetes**. Existen **paquetes** casi para todo lo que te puedas imaginar. Algunos ejemplos incluyen:

* [currency-converter]([https://www.npmjs.com/package/currency-converter) permite realizar conversiones entre monedas.
* [minifier]([minifier]https://www.npmjs.com/package/minifier) permite minificar archivos de JS y CSS.
* [lorem-ipsum]([lorem-ipsum]https://www.npmjs.com/package/lorem-ipsum) permite generar textos de ejemplo.
* [express]([express]https://www.npmjs.com/package/express) permite crear aplicaciones Web.
* [fb](https://www.npmjs.com/package/fb) permite interactuar con el API de Facebook
* Entre cientos de miles más!

<a href="https://nodejs.org/en/" target="_blank">Node.js</a> viene con un manejador de paquetes llamado <a href="https://www.npmjs.org/" target="_blank">npm</a>, que es realmente una aplicación de consola que te va a permitir instalar y manejar los paquetes que se encuentran en el repositorio central de <a href="https://www.npmjs.org/" target="_blank">npm</a>.

Por ejemplo, para instalar <a href="https://github.com/workshopper/learnyounode" target="_blank">learnyounode</a>, un paquete que te enseña <a href="https://nodejs.org/en/" target="_blank">Node.js</a>, ejecuta el siguiente comando:

```shell
$ npm install -g learnyounode
```

Ahora verifica que haya quedado bien instalado ejecutando el comando `learnyounode`:

```shell
$ learnyounode
```

Y sigue aprendiendo <a href="https://nodejs.org/en/" target="_blank">Node.js</a>!

En la siguiente post vamos a hablar en más detalle de <a href="https://www.npmjs.org/" target="_blank">npm</a> y otro manejador de paquetes llamado <a href="https://yarnpkg.com/en/" target="_blank">Yarn</a>.

## Conclusión

* <a href="https://nodejs.org/en/" target="_blank">Node.js</a> **no** es un nuevo lenguaje de programación, es una plataforma que te va a permitir ejecutar código JavaScript por fuera del navegador.

* Con <a href="https://nodejs.org/en/" target="_blank">Node.js</a> puedes crear cualquier programa o aplicación que podrías crear con otro lenguaje de uso general como Java, Ruby, C++ o Python.

* El gran poder de <a href="https://nodejs.org/en/" target="_blank">Node.js</a> se encuentra en las librerías (llamadas **paquetes**) y en la comunidad de programadores que las escriben y las publican sin costo alguno!
