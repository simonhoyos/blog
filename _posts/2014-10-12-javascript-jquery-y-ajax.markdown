---
layout: post
title:  "JavaScript, jQuery y Ajax"
date:   2014-10-12 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/jquery.jpeg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
redirect_from: "/2014/10/12/javascript-jquery-y-ajax/"
---

A mediados de los 90’s, la mayoría de sitios Web consistían de páginas estáticas sin ninguna interactividad. Algunos sitios ya generaban páginas dinámicas en el servidor, pero toda acción del usuario requería refrescar la página completamente para ver los cambios. Se necesitaba un lenguaje de programación que corriera en el navegador.<!-- more -->

## JavaScript

A finales del 1995 surge <a href="http://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>, un lenguaje creado por <a href="http://en.wikipedia.org/wiki/Brendan_Eich" target="_blank">Brendan Eich</a>, trabajando en ese entonces para <a href="http://en.wikipedia.org/wiki/Netscape" target="_blank">Netscape</a>. (**No confundas <a href="http://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a> con <a href="http://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank">Java</a>**, son lenguajes muy diferentes; simplemente fue una movida de mercadeo porque Java era muy popular en ese momento). **JavaScript permitía manipular HTML** y agregar interactividad en Netscape, que era el navegador más popular en ese momento.

Microsoft lanzó un lenguaje muy similar llamado <a href="http://en.wikipedia.org/wiki/JScript" target="_blank">Jscript</a> para Internet Explorer, y aunque hubo intentos de unificar el lenguaje, nunca hubo consenso. Para el momento en que Internet Explorer se convirtió en el navegador más popular, JavaScript ya era el estándar para escribir código interactivo en el navegador.

Pero había un problema. Aunque el lenguaje era muy similar en los dos navegadores, **la forma de manipular HTML era muy diferente**. A medida que más navegadores aparecían en el mercado, el problema se hacía cada vez más inmanejable. Cada navegador lo hacía a su manera.

## jQuery

En 2006 surge una librería de <a href="http://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a> llamada <a href="http://jquery.com/" target="_blank">jQuery</a>, escrita por <a href="http://en.wikipedia.org/wiki/John_Resig" target="_blank">John Resig</a>, para solucionar las diferencias al manipular HTML y escuchar eventos en los navegadores. Aunque ya existían intentos similares en JavaScript, **una de las genialidades de <a href="http://jquery.com/" target="_blank">jQuery</a> era que utilizaba los mismo selectores CSS para ubicar y manipular los diferentes elementos del DOM**.

<div class="well">
<h3>¿Qué es el DOM?</h3>

EL DOM (Document Object Model) es una representación de un documento HTML que nos permite interactuar con los elementos (etiquetas) del documento HTML. La estructura es en forma de árbol similar a como se organizan los directorios y archivos en un sistema operativo. Puedes encontrar más información del DOM <a href="http://javascript.info/tutorial/dom-nodes" target="_blank">acá</a>.
</div>

Veamos un ejemplo que cambia el color de un `div` al hacer click:

<div class="square" style="height: 100px; width: 100px; background: blue; margin: 0 auto 20px;"></div>

<pre><code class="language-javascript">jQuery('.square').click(function() {
  jQuery(this).css('background', 'yellow');
});</code></pre>

En este ejemplo estamos escuchando el evento `click` sobre el `div` con clase `square` y cambiando el color a amarillo cuando el evento es disparado. (Recuerda descargar jQuery en <a href="http://jquery.com/">jquery.com</a> e incluirlo en tu página para que el ejemplo funcione).

Podemos simplificar un poco más el ejemplo reemplazando la palabra `jQuery` por `$`, que ahorra algunos caracteres y es la forma más conocida:

<pre><code class="language-javascript">$('.square').click(function() {
  $(this).css('background', 'yellow');
});</code></pre>

jQuery se encarga de las diferencias de los navegadores exponiendo una interfaz clara y fácil de usar que le permite a los desarrolladores concentrarse en la funcionalidad de la aplicación, y no en los detalles de cada navegador.

## Ajax

¿Cómo intercambiar información con el servidor sin tener que refrescar la página? Ese es el problema que soluciona <a href="http://en.wikipedia.org/wiki/Ajax_(programming)" target="_blank">Ajax</a>. Recuerdo la primera vez que lo vi en acción en la página del <a href="http://www.ausopen.com/" target="_blank">Australian Open</a> viendo el puntaje en vivo; cada vez que cambiaba el puntaje de un partido, parpadeaba y se actualizaba en tiempo real.

Para entender Ajax, es importante primero entender <a href="/2014/10/05/http-y-html/" target="_blank">cómo funciona el protocolo HTTP</a>. **La idea es que escribiendo un poco de JavaScript sea posible hacer una petición HTTP y recibir una respuesta del servidor con información que podemos utilizar para actualizar la página**.

La forma de utilizar Ajax en los navegadores es engorrosa y no la voy a mostrar acá. En cambio, jQuery ofrece una interfaz mucho más sencilla y unificada para todos los navegadores:

<pre><code class="language-javascript">$.get('/url_to_fetch', function(data) {
  // do something with data
});</code></pre>

En este ejemplo estamos haciendo una petición HTTP a la ruta `/url_to_fetch`. La respuesta la encontraremos en `data`, que puede ser HTML, <a href="http://en.wikipedia.org/wiki/XML" target="_blank">XML</a>, <a href="http://www.json.org/" target="_blank">JSON</a>, o cualquier otra cosa. Últimamente el formato que más se utiliza es <a href="http://www.json.org/" target="_blank">JSON</a> sin embargo.

<div class="well">
<h3>¿Qué es XML y JSON?</h3>

<p>Son formatos de intercambio de información. Hace unos años <a href="http://en.wikipedia.org/wiki/XML" target="_blank">XML (Extensible Markup Language)</a> era muy popular, pero últimamente <a href="http://www.json.org/" target="_blank">JSON (JavaScript Object Notation)</a> es más usado. La razón es que <a href="http://en.wikipedia.org/wiki/XML" target="_blank">XML</a> es muy verboso y más difícil de interpretar.</p>

<p>Por ejemplo, podríamos representar un vuelo en <a href="http://en.wikipedia.org/wiki/XML" target="_blank">XML</a>:</p>

<pre><code class="language-xml">&lt;flight&gt;
    &lt;airline&gt;Oceanic&lt;/airline&gt;
    &lt;number&gt;815&lt;/number&gt;
    &lt;departure&gt;
        &lt;iata&gt;SYD&lt;/iata&gt;
        &lt;time&gt;2004-09-22 14:55&lt;/time&gt;
    &lt;/departure&gt;
    &lt;arrival&gt;
        &lt;iata&gt;LAX&lt;/iata&gt;
        &lt;time&gt;2004-09-23 10:42&lt;/time&gt;
    &lt;/arrival&gt;
&lt;/flight&gt;</code></pre>

<p>O en <a href="http://www.json.org/" target="_blank">JSON</a>:</p>

<pre><code class="language-javascript">{
  "airline": “Oceanic”,
  "number": 815,
  "departure": {
   "iata": “SYD”,
   "time": “2004-09-22 14:55”
  },
  "arrival": {
   "iata": “LAX”,
   "time": “2004-09-23 10:42”
  }
}</code></pre>

Otra ventaja de <a href="http://www.json.org/" target="_blank">JSON</a> es que es muy fácil de manipular en JavaScript.
</div>

## Más recursos

* [http://try.jquery.com/](http://try.jquery.com/)
* [http://javascript.info/tutorial/dom-nodes](http://javascript.info/tutorial/dom-nodes)
* [http://teamtreehouse.com/library/ajax-basics](http://teamtreehouse.com/library/ajax-basics)


<script>
	jQuery('.square').click(function() {
	  jQuery(this).css('background', 'yellow');
	});
</script>
