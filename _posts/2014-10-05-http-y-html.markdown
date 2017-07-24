---
layout: post
title:  "HTTP y HTML"
date:   2014-10-05 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/http.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
redirect_from: "/2014/10/05/http-y-html/"
---

¿Qué es HTTP? ¿Qué es HTML? ¿Qué relación tienen? En este post vamos a intentar responder estas preguntas. Pero antes un poco de historia.<!-- more -->


Aunque Internet fue desarrollado a finales de los 60's y principios de los 70's, no fue sino hasta 1989 que <a href="http://en.wikipedia.org/wiki/Tim_Berners-Lee" target="_blank">Tim Berners-Lee</a> propuso el proyecto World Wide Web (WWW) trabajando para <a href="http://en.wikipedia.org/wiki/CERN" target="_blank">CERN</a>, que era en su momento el nodo de Internet más grande en Europa.

<blockquote>
  <p>“Solo tuve que tomar la idea del HyperText y conectarla con TCP y DNS, y ta-da! Surgió el World Wide Web …"</p>
  <div class="quote-author">-- Tim Berners Lee</div>
</blockquote>

En ese momento empezó el desarrollo de **HTML (Hyper Text Markup Language)** para definir la estructura de documentos con vínculos a otros documentos, y **HTTP (Hyper Text Transfer Protocolo)** como el protocolo por el que se transmitiría HTML.

Y es que parece magia cuando abrimos un navegador e ingresamos a algún sitio como [http://www.makeitreal.camp/](http://www.makeitreal.camp/). ¿Qué ocurre por debajo? El navegador realiza varios pasos que son invisibles para nosotros y que vamos a describir a continuación:

1. Traducir el dominio a la dirección IP del servidor.
2. Abrir una conexión con el servidor.
3. Enviar un mensaje HTTP solicitando el recurso.
4. Interpretar el mensaje HTTP de respuesta.

## Traducción del dominio

Todo dispositivo conectado a Internet (computador, tablet, smarphone, etc.) está identificado por una **dirección IP** única (p.e. 31.13.69.160). **Los dominios** (p.e. www.google.com, www.facebook.com) no son más que un nombre de fácil recordación para los humanos.

Cuando ingresamos el nombre de un dominio en el navegador, se hace un llamado a un **DNS (Domain Name Server)** que hace la traducción del dominio a la **dirección IP**. Un **DNS** es un servicio con una gran base de datos que contiene la **dirección IP** a la que está asociada cada **dominio** en Internet. Cuando alguien registra un nuevo **dominio**, el registrador debe avisar a todos los **DNS's** (públicos y privados) que actualicen sus bases de datos. Puedes configurar el **DNS** en las propiedades de red de tu computador. Muchas personas cambian la configuración para usar el <a href="https://developers.google.com/speed/public-dns/" target="_blank">DNS público de Google</a>, por ejemplo.

## Abrir la conexión

Una vez que el navegador tiene **la dirección IP** del servidor, el siguiente paso es abrir una conexión a **un puerto** específico en el servidor. Generalmente omitimos **el puerto** cuando escribimos una dirección en el navegador; en ese caso se asume **el puerto 80**. Es posible especificar explícitamente **el puerto** de la siguiente forma: [http://www.google.com:80/](http://www.google.com:80/).

<div class="well">
<h3>¿Qué es un puerto?</h3>

Es la forma de identificar, en un servidor, la aplicación a la que se le deben enrutar los datos que envían los clientes. Por ejemplo, los servidores de Google, Facebook, etc., tienen una aplicación (llamada servidor Web) que recibe conexiones y peticiones HTTP a través del puerto 80.
</div>

## Enviar el mensaje HTTP

Una vez que la conexión con el servidor está abierta, el navegador envía un mensaje de acuerdo al protocolo HTTP.

<div class="well">
<h3>¿Qué es un protocolo?</h3>

<p>Es un conjunto de reglas de conversación que se establecen para que las máquinas entiendan un intercambio de mensajes. La especificación del protocolo HTTP versión 1.1 se puede encontrar <a href="http://tools.ietf.org/html/rfc2616" target="_blank">acá</a>. Si tienes un tiempo libre no dudes en ojearla, aprender sobre el protocolo HTTP es una muy buena inversión de tiempo.</p>

<p><strong>HTTP (Hyper Text Transfer Protocol) es un protocolo de petición/respuesta</strong>. Un cliente, por ejemplo un navegador, envía un mensaje al servidor en el que especifíca <a href="http://www.w3schools.com/tags/ref_httpmethods.asp" target="_blank">el método</a>, URI (la ruta del recurso que estamos solicitando), la versión del protocolo, y, opcionalmente, el cuerpo con el contenido del mensaje. El servidor responde con otro mensaje que incluye <a href="http://www.w3schools.com/tags/ref_httpmessages.asp" target="_blank">el código de estado de la respuesta</a>, algunos encabezados, y el cuerpo con el contenido de la respuesta.</p>
</div>

Veamos un ejemplo de un mensaje de petición HTTP (asumiendo que ya tenemos una conexión abierta al servidor de Google):

<pre><code class="language-none">GET /doc.html HTTP/1.1
Host: www.google.com</code></pre>

En la primera línea del mensaje estamos solicitando el recurso `/doc.html`. La segunda línea es un encabezado. Este mensaje no lleva cuerpo.

## Recibir el mensaje de respuesta HTTP

Después de que el navegador ha enviado una petición, el servidor retorna una respuesta de regreso. Por ejemplo, la respuesta de la petición anterior es la siguiente:

<pre><code class="language-none">HTTP/1.1 404 Not Found
Content-Type: text/html; charset=UTF-8
X-Content-Type-Options: nosniff
Date: Sun, 05 Oct 2014 17:49:34 GMT
Server: sffe
Content-Length: 1433
X-XSS-Protection: 1; mode=block
Alternate-Protocol: 80:quic,p=0.002

&lt;!DOCTYPE html&gt;
&lt;html lang=en&gt;
  &lt;meta charset=utf-8&gt;
  &lt;meta name=viewport content=&quot;initial-scale=1, minimum-scale=1, width=device-width&quot;&gt;
  &lt;title&gt;Error 404 (Not Found)!!1&lt;/title&gt;
  &lt;style&gt;
    ...
  &lt;/style&gt;
  &lt;a href=//www.google.com/&gt;&lt;span id=logo aria-label=Google&gt;&lt;/span&gt;&lt;/a&gt;
  &lt;p&gt;&lt;b&gt;404.&lt;/b&gt; &lt;ins&gt;That’s an error.&lt;/ins&gt;
  &lt;p&gt;The requested URL &lt;code&gt;/doc.html&lt;/code&gt; was not found on this server.  &lt;ins&gt;That’s all we know.&lt;/ins&gt;</code></pre>

La línea más importante es la primera, que nos dice que el código de la respuesta es 404 No Encontrado. Después tenemos algunos encabezados. El primero nos dice que en el cuerpo del mensaje vamos a encontrar código HTML. Por último, después de la línea en blanco viene el cuerpo del mensaje.

El navegador interpreta la respuesta, identifica que en el cuerpo del mensaje viene código HTML (podría venir una imágen, audio, archivo PDF, etc.) y lo muestra en la pantalla.

<div class="well">
  <h3>Developer Tools</h3>

  Puedes ver las peticiones y respuestas HTTP que envía y recibe el navegador a través del Developer Tools de tu navegador. Mira <a href="https://www.youtube.com/watch?v=z1TkfcC53G0" target="_blank">este video</a> para aprender cómo hacerlo.
</div>

## HTML

**HTML** es un lenguaje que nos permite definir la estructura de un documento que los navegadores interpretan y muestran en la pantalla. Por ejemplo:

<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
	&lt;title&gt;Este t&#237;tulo va en la pestaña del navegador&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  	&lt;h1&gt;Hola Mundo&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

**HTML** está compuesto de dos grandes secciones: `<head>` y `<body>`. En el `<head>` especificamos información que no es visible en la pantalla como el título del documento, referencia a otros archivos, etc. En el `<body>` van las etiquetas con la estructura del documento: encabezados (`<h1>`, `<h2>`, etc.), párrafos (`<p>`), links (`<a>`), listas (`<ul>` y `<ol>`), tablas (`<table>`), formularios (`<form>`), etc.

Generalmente, el código **HTML (Hyper Text Markup Language)** viaja a través de **HTTP (Hyper Text Transfer Protocol)**. Pero es posible crear un archivo con extensión `.html` y abrirlo en un navegador directamente.

<div class="well">
  <h3>¡Inténtalo!</h3>

  <p>Abre un editor de texto (p.e. Bloc de Notas, TextEdit, etc.) y pega el código HTML anterior. Guárdalo como index.html en el escritorio. Arrástralo desde el escritorio al navegador (Internet Explorer, Chrome, Firefox, etc.) para abrirlo.</p>
</div>

## Más recursos:

* Escucha a David Malan explicar cómo funciona Internet en <a href="http://cs50.tv/2012/fall/shorts/http/http-720p.mp4" target="_blank">este corto video de 3 minutos</a>.
* <a href="https://dash.generalassemb.ly/" target="_blank">Dash - General Assembly</a>
* <a href="http://www.codecademy.com/tracks/web" target="_blank">HTML - Codecademy</a>
* <a href="http://www.w3schools.com/html/default.asp" target="_blank">HTML Tutorial - W3Schools</a>
* <a href="http://eloquentjavascript.net/17_http.html" target="_blank">HTTP - Eloquent Javascript</a>
* Aprende a usar el Developer Tools de tu navegador en <a href="https://www.youtube.com/watch?v=z1TkfcC53G0" target="_blank">este video de 10 minutos</a>
