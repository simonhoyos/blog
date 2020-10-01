---
layout: post
title:  "Creando una Web API con Node.js y Express"
date:   2020-09-30 02:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/nodejs.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

Una Web API nos permite exponer funcionalidad de una aplicación a través del protocolo HTTP. En este tutorial vamos a crear una Web API utilizando [Node.js](https://nodejs.org/en/){:target="\_blank"} y una librería llamada [Express](https://expressjs.com/){:target="\_blank"}. <!-- more -->

Para seguir este tutorial vas a necesitar lo siguiente:

* Estar familiarizado con JavaScript y [Node.js](https://nodejs.org/en/){:target="\_blank"}. Si no lo estás te recomiendo el siguiente post: [Introducción a Node.js](/introduccion-a-nodejs/){:target="\_blank"}.
* Estar familiarizado con la línea de comandos. Si no lo estás te recomiendo el siguiente post: [La línea de comandos](/la-linea-de-comandos/){:target="\_blank"}.
* Tener instalado [Node.js](https://nodejs.org/en/){:target="\_blank"} en tu computador. Si no lo tienes puedes seguir [estas instrucciones](https://github.com/makeitrealcamp/node-installation){:target="\_blank"}.
* Tener instalado un editor de texto como [VSCode](https://code.visualstudio.com/){:target="\_blank"}, [Atom](https://atom.io/){:target="\_blank"} o uno similar.
* Estar familiarizado con el protocolo HTTP. Si no lo estás te recomiendo el siguiente post: [El protocolo HTTP](/el-protocolo-http/){:target="\_blank"}.

---

Un API (por sus siglas en Ingles Application Programming Interface) es, en general, una forma en que un software interactúa con otro software. Una **Web API** es un tipo de API que utiliza el protocolo HTTP como forma de comunicación utilizando algún formato de intercambio de información como XML o JSON.

El servicio que vamos a crear le va a permitir a otras aplicaciones publicar, editar, eliminar y listar **frases célebres**. Cada frase célebre va a estar compuesta de un texto y un autor. Por ejemplo:

* **Texto:** No hay caminos para la paz; la paz es el camino.
* **Autor:** Mahatma Gandhi

## JSON (JavaScript Object Notation)

Para nuestra API vamos a utilizar JSON como formato de intercambio de información. JSON es un formato que es fácil de interpretar por una aplicación y al mismo tiempo legible por un humano.

Veamos un ejemplo de JSON en el que estamos representando un vuelo:

```json
{
  "airline": "Oceanic",
  "status": "crashed",
  "departure": {
    "iata": "SYD",
    "time": "2004-09-22 14:55"
  }
}
```

JSON es parecido a un objeto de JavaScript pero con algunas diferencias importantes:

1. Los nombres de las propiedades **deben** estar entre comillas.
2. Los valores pueden ser de los siguientes tipos únicamente: String, Number, Boolean, Array, JSON Object.

## Configurando el proyecto

Abre una línea de comandos y crea una carpeta para el proyecto:

```shell
mkdir quotes
```

Ingresa a la carpeta e inicializa el proyecto ejecutando los siguientes comandos:

```shell
cd quotes
npm init -y
```

Ahora instala [Express](https://expressjs.com/){:target="\_blank"} con el siguiente comando:

```shell
npm install express
```

## Creando la primera ruta

Abre la carpeta del proyecto en tu editor de texto preferido ([VSCode](https://code.visualstudio.com/){:target="\_blank"}, [Atom](https://atom.io/){:target="\_blank"}, etc.) y crea el archivo `index.js` con el siguiente contenido:

```javascript
const express = require("express")
const app = express()

// nuestra primera ruta
app.get('/quotes', (req, res) => {
  res.json([
    { text: "Quote 1", author: "Author 1" },
    { text: "Quote 2", author: "Author 2"}
  ])
})

app.listen(3000, () => console.log("Servidor listo ..."))
```

Guarda el archivo y ejecútalo con el siguiente comando:

```shell
node index.js
```

Deberías ver el texto “Servidor listo …“. Abre un navegador en la dirección http://localhost:3000/quotes, deberías ver el JSON que estamos retornando de la ruta:

```json
[{"text":"Quote 1","author":"Author 1"},{"text":"Quote 2","author":"Author 2"}]
```

Para detener el servidor oprime `Ctrl + C`.

## Almacenando las frases

Aunque no vamos a guardar las frases en una base de datos, sí vamos a crear un módulo que nos almacene las frases en memoria. Crea un archivo `quotes.js` con el siguiente contenido:

```javascript
const quotes = []
let nextId = 0

function list() {
  return quotes
}

function create(text, author) {
  const quote = { id: nextId, text, author }
  quotes.push(quote)
  nextId++

  return quote
}

module.exports = { list, create }
```

Ahora vamos a importarlo y utilizarlo desde `index.js`, que debería quedar de la siguiente forma:

```javascript
const express = require("express")
const quotes = require("./quotes")

const app = express()

// nuestra primera ruta
app.get('/quotes', (req, res) => {
  res.json(quotes.list())
})

app.listen(3000, () => console.log("Servidor listo ..."))
```

Reinicia el servidor (lo detienes oprimiendo `Ctrl + C` y lo inicias con el comando `node index.js`) y refresca el navegador, deberías ver un arreglo vacío:

```json
[]
```

## La ruta para crear frases

Vamos ahora a crear la ruta que nos va a permitir crear las frases. Para eso debemos decirle a [Express](https://expressjs.com/){:target="\_blank"} que vamos a recibir JSON de los clientes. Eso se hace con la siguiente línea:

```javascript
app.use(express.json())
```

Y la ruta sería la siguiente. Fíjate que la ruta es la misma que la anterior, `/quotes`, pero cambia el método, ahora vamos a utilizar POST:

```javascript
app.post('/quotes', (req, res) => {
  const { text, author } = req.body
  const quote = quotes.create(text, author)
  res.json(quote)
})
```

Unido con lo anterior el archivo `index.js` debería quedar de la siguiente forma:

```javascript
const express = require("express")
const quotes = require("./quotes")

const app = express()
app.use(express.json())

// nuestra primera ruta
app.get('/quotes', (req, res) => {
  res.json(quotes.list())
})

// ruta para crear frases
app.post('/quotes', (req, res) => {
  const { text, author } = req.body
  const quote = quotes.create(text, author)
  res.json(quote)
})

app.listen(3000, () => console.log("Servidor listo ..."))
```

El método POST no se puede probar desde un navegador como hicimos con la ruta de listar, así que vamos a utilizar una herramienta llamada curl en la línea de comandos.

Inicia el servidor y abre otra pestaña en la línea de comandos para probar la nueva ruta:

```shell
curl -X POST -d '{ "text": "Quote 1", "author": "Author 1" }' http://localhost:3000/quotes
```

Crea varias rutas y revisa que la ruta de listar las muestre, puedes utilizar el siguiente comando:

```shell
curl http://localhost:3000/quotes
```

**Nota:** En vez de curl puedes utilizar una herramienta gráfica como [Postman](https://www.postman.com/).

## Las rutas para editar y eliminar

Para crear las rutas de editar y eliminar primero tenemos que modificar el archivo `quotes.js` para agregar los métodos de editar y eliminar:

```javascript
const quotes = []
const nextId = 0

function list() {
  return quotes
}

function create(text, author) {
  // ...
}

// nuevas funciones
function edit(id, text, author) {
  const idx = quotes.findIndex(q => q.id === id)
  if (idx >= 0) {
    quotes[idx].text = text
    quotes[idx].author = author
  }
}

function destroy(id) {
  const idx = quotes.findIndex(q => q.id === id)
  if (idx >= 0) {
    arry.splice(idx, 1)
  }
}

module.exports = { list, create, edit, destroy }
```

Y ahora creamos las nuevas rutas en `index.js`:

```javascript
// ...

app.patch('/quotes/:id', (req, res) => {
  const { text, author } = req.body
  quotes.edit(req.params.id, text, author)
  res.status(204).send()
})

app.delete('/quotes/:id', (req, res) => {
  quotes.destroy(req.params.id)
  res.status(204).send()
})

app.listen(3000, () => console.log("Servidor listo ..."))
```

Reinicia el servidor. Puedes utilizar los siguientes comandos para probar la ruta de crear, editar y eliminar frases respectivamente:

```shell
curl -X POST -H "Content-Type: application/json" -d '{ "text": "Quote 1", "author": "Author 1" }' http://localhost:3000/quotes
curl -X PATCH -H "Content-Type: application/json" -d '{ "text": "Quote 2", "author": "Author 2" }' http://localhost:3000/quotes/0
curl -X DELETE http://localhost:3000/quotes/0
```

Felicitaciones, has creado tu primera Web API! Puedes encontrar el código completo en [este enlace](https://github.com/makeitrealcamp/quotes-app).

## ¿Por qué RESTful API?

REST es una arquitectura que se utiliza para las Web API en donde se hace uso de la semántica del protocolo HTTP, es decir, los métodos, los códigos de respuesta y encabezados HTTP, entre otros. Además, las rutas se definen con un patrón muy estándar. Para nuestro ejemplo de frases (quotes) sería el siguiente:

* `GET /quotes` para listar.
* `POST /quotes` para crear.
* `PATCH /quotes/:id` para editar.
* `DELETE /quotes/:id` para eliminar.
* `GET /quotes/:id` para mostrar una frase específica.

En vez de `quotes` podría ser cualquier otro recurso como productos, facturas, empleados, etc.

## Conclusión

En este tutorial vimos cómo crear y probar una RESTful API con [Node.js](https://nodejs.org/en/){:target="\_blank"} y [Express](https://expressjs.com/){:target="\_blank"}, que le permite a una aplicación exponer funcionalidad a otros clientes o aplicaciones. Los siguientes pasos serían:

* Agregar validaciones.
* Utilizar una base de datos como [MongoDB](https://www.mongodb.com/){:target="\_blank"} en vez de guardar las frases en memoria.
* Implementar algún mecanismo de autenticación.
* Publicar el Web API en Internet utilizando un servicio como [Heroku](https://heroku.com/){:target="\_blank"}.
* Crear un front-end que consuma nuestro Web API y permita a las personas administrar las frases célebres a través de un navegador.

Si deseas aprender esto y mucho más de la mano de mentores experimentados te invito a que conozcas nuestro programa [Full Stack JavaScript Web Developer](https://makeitreal.camp/full-stack-online?utm_source=blog&utm_medium=web&utm_campaign=inbound&utm_content=post).
