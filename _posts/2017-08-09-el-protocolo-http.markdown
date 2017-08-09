---
layout: post
title:  "El protocolo HTTP"
date:   2017-08-09 06:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/lights.jpeg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

El protocolo **HTTP** (HyperText Transfer Protocol) es quizá el protocolo más importante que debemos conocer como desarrolladores Web y la razón por la que muchos tenemos hoy un empleo ;)<!-- more -->

Fue diseñado para transmitir **HTML** (HyperText Markup Language) pero hoy en día se utiliza para transmitir todo tipo de documentos (imágenes, audio, video, PDF, etc.) y para crear aplicaciones Web.

<div class="well">
<p>Un <strong>protocolo</strong> es un documento que define las reglas y la estructura de los mensajes que se van a intercambiar entre máquinas.</p>

<p>Además de <strong>HTTP</strong>, ejemplos de protocolos incluyen <strong>SMTP</strong> (Simple Mail Transfer Protocol) para transmitir mensajes de correo electrónico y <strong>FTP</strong> (File Transfer Protocolo) para transmitir archivos.</p>

<p>Sin embargo, cualquier persona puede crear un protocolo. <a href="https://skype.com/" target="_blank">Skype</a>, por ejemplo, desarrolló su <a href="https://en.wikipedia.org/wiki/Skype_protocol" target="_blank">propio protocolo</a> de comunicación peer-to-peer.</p>

<p>El documento completo del protocolo HTTP lo puedes encontrar en <a href="https://www.ietf.org/rfc/rfc2068.txt" target="_blank">este enlace</a>.</p>
</div>

**HTTP** es un protocolo **cliente-servidor**, lo que significa que el cliente envía una petición al servidor y espera un mensaje de respuesta del servidor. Es un protocolo **sin estado**, lo que significa que el servidor no guarda información del cliente, cada petición es independiente de las demás.

## Mensajes HTTP

Un mensaje **HTTP** (no importa si es de petición o respuesta) se compone de 3 partes:

* La primera línea (que es diferente para la petición y la respuesta).
* Los encabezados.
* El cuerpo (opcional)

Veamos un ejemplo de un mensaje de petición (sin cuerpo):

```html
GET /index.html HTTP/1.1
Host: wikipedia.org
Accept: text/html

```

En este ejemplo estamos solicitando el recurso `/index.html` de <a href="https://wikipedia.org" target="_blank">wikipedia.org</a>. La primera línea del mensaje de petición se compone de:

* El verbo (en este caso `GET`)
* El recurso (en este caso `/index`)
* La versión de HTTP (en este caso `HTTP/1.1`)

Ahora veamos un ejemplo de un mensaje de respuesta:

```html
HTTP/1.1 200 OK
Server: wikipedia.org
Content-Type: text/html
Content-Lenght: 2026

<html>
  …
</html>
```

La primera línea del mensaje de respuesta se compone de:

* La versión de HTTP (`HTTP/1.1`)
* El código de respuesta (`200 OK`)

La siguiente imagen muestra mejor las partes de cada mensaje:

<img src="/assets/images/http-messages.jpg" alt="Concurrencia basada en eventos" class="photo border">

### El verbo HTTP

La primera línea de un mensaje de petición empieza con un **verbo** (también se le conoce como **método**). Los **verbos** definen la acción que se quiere realizar sobre el recurso. Los verbos más comunes son:

* **GET**: se utiliza para solicitar un recurso.
* **POST**: se utiliza para publicar un recurso.
* **PUT**: se utiliza para reemplazar un recurso.
* **DELETE**: se utiliza para eliminar un recurso.

Existen otros pero estos son los más comunes.

Cuando ingresas a una página desde un navegador, por debajo el navegador envía un mensaje `GET`, lo mismo cuando oprimes un vínculo a otra página.

## El código de respuesta

La primera línea de un mensaje de respuesta tiene un código de 3 dígitos que le indica al cliente cómo interpretar la respuesta.

Los códigos de respuesta se dividen en cinco categorías dependiendo del dígito con el que inician:

* **1XX**: Información
* **2XX**: Éxito
* **3XX**: Redirección
* **4XX**: Error en el cliente
* **5XX**: Error en el servidor

Seguramente estás familiarizado(a) con el famoso error **404** que retornan los servidores cuando el recurso no fue encontrado. O con el error **500** cuando ocurre un error en el servidor. Pero existen muchos más.

## Los encabezados

Los encabezados brindan información adicional sobre la petición o la respuesta. Los encabezados tienen la siguiente sintaxis:

```none
[nombre del encabezado]: [valor del encabezado]
```

Encabezados comunes incluyen:

* `Content-Type`: el tipo de contenido que se está enviando en el cuerpo de un mensaje de petición, por ejemplo `text/html`.
* `Accept`: el tipo de contenido que el cliente está esperando.
* `User-Agent`: el tipo de navegador que está haciendo la petición

La siguiente imagen muestra, en las <a href="/herramientas-de-desarrollador-o-developer-tools" target="_blank">herramientas de desarrollo de Chrome</a>, el mensaje de petición y respuesta cuando hacemos una petición a `http://google.com.co/lsdifs`. Fíjate que el código de respuesta es `404 Not Found`:

<img src="/assets/images/http-request.jpg" class="photo border">

## URL

Un **URL** (Uniform Resource Locator) se utiliza para ubicar un recurso en Internet. Los **URLs** no solo se pueden utilizar para el protocolo HTTP, se utilizan en muchos otros protocolos.

La siguiente imagen muestra las partes de un **URL** utilizando dos ejemplos:

![URL](https://s3.amazonaws.com/makeitreal/images/full-stack-curriculum/url.jpg)

* **Esquema:** El esquema define el protocolo a utilizar, para HTTP puede ser `http` o `https` (el protocolo seguro de HTTP).

* **Host:** La IP o el nombre del servidor que se quiere acceder (p.e. 127.0.0.1, localhost, google.com, www.google.com.co, etc.)

* **Puerto:** El puerto en el que está escuchando el servidor HTTP. Si se omite se asume que es el 80.

* **Path:** La ruta al recurso que se quiere acceder.

* **Query String:** Contiene información adicional para el servidor en forma de propiedades (`atributo=valor`). Las propiedades se separan por `&`.

* **Fragmento:** La referencia a una ubicación interna del documento.
