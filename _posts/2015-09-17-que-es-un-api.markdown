---
layout: post
title:  "¿Qué es un API?"
date:   2015-09-17 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/api-controls.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
redirect_from: "/2015/09/17/que-es-un-api/"
---

Un **API** (Application Programming Interface) **es la interfaz que un software utiliza para interactuar con otro software**. Empecemos con una analogía. Observa la siguiente lavadora:<!-- more -->

<img src="/assets/images/washing-machine.png" alt="Lavadora" class="photo">

<p class="photo-description">Los botones, las perillas, el tambor y el dispensador <strong>exponen</strong> la funcionalidad que nos permite lavar la ropa.</p>

Genial ¿no? Esta máquina soluciona un problema específico: lavar la ropa. Pero para poder usarla necesitas saber dónde ubicar la ropa, dónde echar el jabón y qué secuencia de botones oprimir para que lave.  

Los botones, las perillas, el tambor y el dispensador son la **interfaz del usuario**, que es lo que te permite interactuar con la máquina.  Estoy seguro que sabes cómo oprimir un botón o girar una perilla, pero igual necesitas aprender a utilizar la lavadora.

Piensa ahora en un automóvil. ¿Cuáles es su interfaz? ¿Qué necesitas aprender para manejar?

Lo realmente importante de estas interfaces es que nos permiten usar la lavadora o el automóvil sin conocer los detalles internos. Es lo que en computación llamamos una **abstracción**. Aunque es necesario aprender algo muy específico para lavar o conducir, es preferible a lavar la ropa a mano o caminar hasta el destino.

Los **API’s** son lo que hacen a la programación interesante. Por ejemplo, <a href="https://www.android.com/" target="_blank">Android</a> tiene un **API** que permite crear aplicaciones móviles con <a href="https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)" target="_blank">Java</a>. Y a pesar de que he programado en <a href="https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)" target="_blank">Java</a> por muchos años, tendría que estudiar el **API** de <a href="https://www.android.com/" target="_blank">Android</a> para construir algo interesante. ¿Cómo mostrar un botón en la pantalla? ¿Cómo prender la cámara y capturar video? ¿Cómo obtener la posición con el GPS?[^1]

Eso significa que aprender a programar no es solo aprender a crear variables, condicionales, ciclos, etc. Esas son las bases que te van a permitir utilizar **API’s** para construir algo interesante.

Todos los lenguajes de programación traen un **API** que nos permite manipular archivos, crear aplicaciones concurrentes, utilizar la red y trabajar con colecciones (arreglos, mapas, conjuntos, etc.), entre otros. Busca el API de <a href="https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=ruby%20api" target="_blank">Ruby</a> o el de <a href="https://www.google.com/search?q=java+api&oq=java+api&aqs=chrome.0.69i59j69i60l4j0.1575j0j9&sourceid=chrome&es_sm=119&ie=UTF-8" target="">Java</a> para que te des una idea.

Los navegadores también tienen su propio **API** para <a href="https://es.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a> que nos permite <a href="#" id="manipulate">manipular el código HTML/CSS</a>, <a href="#" id="show-alerts">mostrar alertas</a>, escuchar eventos (del mouse, teclado, etc.) y hacer llamados <a href="https://es.wikipedia.org/wiki/AJAX" target="_blank">AJAX</a>, entre otros. Hoy el API de los navegadores está casi estandarizado pero antes existían muchas diferencias entre navegadores, y por eso surgió <a href="https://es.wikipedia.org/wiki/JQuery" target="_blank">jQuery</a>, una librería con un **API** unificado y simple que "normaliza" esas diferencias.

## Web API’s

Cuando estaba construyendo mi primera empresa, <a href="http://elibom.com/" target="_blank">elibom.com</a>, creía que lo más importante era la interfaz Web que le permitiría a los usuarios enviar mensajes de texto SMS desde el navegador. Pero rápidamente nos dimos cuenta que el potencial estaba en permitir **que otras aplicaciones se conectaran a nuestro servicio** para enviar, por ejemplo, alertas bancarias de forma automatizada sin necesidad de conocer cómo funciona la conexión y el enrutamiento de los mensajes a los operadores móviles.

Así aprendí la importancia y el potencial que tienen los API’s, pero en especial los **Web API’s**.

Un **Web API** es un **API** que se invoca a través del protocolo <a href="https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol" target="_blank">HTTP</a>. La ventaja de usar <a href="https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol" target="_blank">HTTP</a> es que es posible hacer peticiones desde cualquier lenguaje de programación, lo que hace a la Web un medio ideal para conectar aplicaciones.

Es posible encontrar **Web API’s** para casi cualquier cosa: conocer el <a href="http://openweathermap.org/api" target="_blank">estado del tiempo</a>, las <a href="http://fixer.io/" target="_blank">tasas de cambio</a>, <a href="http://mandrill.com/" target="_blank">enviar emails</a>, <a href="https://stripe.com/" target="_blank">recibir pagos</a>, entre miles de ejemplos más.

Muchos sitios y aplicaciones Web (Facebook, Twitter, Github, Trello, Google Maps, LinkedIn, Youtube, etc.) **exponen** gran parte de su funcionalidad a través de **API’s** permitiendo extender su funcionalidad en formas que ni los autores originales imaginaban (con el impacto positivo o negativo que eso implique).

Existen empresas exitosas que se dedican a integrar estos servicios como <a href="https://ifttt.com/" target="_blank">IFTTT</a> o <a href="https://zapier.com/" target="_blank">Zapier</a>.

Mi teoría es que gran parte del éxito de <a href="https://slack.com/" target="_blank">Slack</a> es su capacidad de integrarse con otras aplicaciones fácilmente. Nada de eso hubiese sido posible sin **Web API’s**.

## ¿Cómo funciona un Web API?

Cuando ingresas a una dirección Web (URL) desde un navegador, el navegador envía una petición <a href="https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol" target="_blank">HTTP</a> al servidor, que responde con código <a href="https://es.wikipedia.org/wiki/HTML" target="_blank">HTML</a> como se muestra en la siguiente ilustración:

<img src="/assets/images/web-apis-1.png" alt="Una petición HTTP" class="photo">

<p class="photo-description">Una petición HTTP que retorna HTML.</p>

Un **Web API** funciona muy parecido. Se hace una petición <a href="https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol" target="_blank">HTTP</a> (generalmente desde algún lenguaje de programación), pero en vez de retornar una página <a href="https://es.wikipedia.org/wiki/HTML" target="_blank">HTML</a>, el servidor retorna la información en una representación fácil de manipular en un lenguaje de programación.

<img src="/assets/images/web-apis-2.png" alt="Una petición HTTP" class="photo">

<p class="photo-description">Una petición HTTP que retorna JSON.</p>

<div class="well">A las URL's que reciben o retornan información de un Web API se les llama <strong>endpoints</strong> (solo para que conozcas la jerga que utilizan los programadores). En la imagen <code>http://infinanza.com/api/v1/transactions</code> es un <strong>endpoint</strong>.</div>

En la imagen anterior, el servidor está retornando la información en una representación (formato) llamado <a href="https://es.wikipedia.org/wiki/JSON" target="_blank">JSON</a> (JavaScript Object Notation). Hace algunos años el formato preferido entre los programadores para intercambiar información era <a href="https://es.wikipedia.org/wiki/Extensible_Markup_Language" target="_blank">XML</a> (Extensible Markup Language) pero hoy <a href="https://es.wikipedia.org/wiki/JSON" target="_blank">JSON</a> es mucho más popular. En los dos formatos se puede expresar lo mismo, pero <a href="https://es.wikipedia.org/wiki/JSON" target="_blank">JSON</a> es mucho más simple.

Veamos cómo se podría representar la información de un vuelo con <a href="https://es.wikipedia.org/wiki/Extensible_Markup_Language" target="_blank">XML</a>:

<pre><code class="language-xml">&lt;flight&gt;
  &lt;airline&gt;Oceanic&lt;/airline&gt;
  &lt;status&gt;crashed&lt;/status&gt;
  &lt;departure&gt;
    &lt;iata&gt;SYD&lt;/iata&gt;
    &lt;time&gt;2004-09-22 14:55&lt;/time&gt;
  &lt;/departure&gt;
&lt;/flight&gt;</code></pre>

Y ahora con <a href="https://es.wikipedia.org/wiki/JSON" target="_blank">JSON</a>:

<pre><code class="language-json">{
  "airline": "Oceanic",
  "status": "crashed",
  "departure": {
    "iata": "SYD",
    "time": "2004-09-22 14:55"
  }
}</code></pre>

Es la misma información, pero el formato <a href="https://es.wikipedia.org/wiki/JSON" target="_blank">JSON</a> es mucho más simple.

## ¿Web API's, REST API's o Web Services?

Actualmente existe mucha confusión entre estos tres términos. Este es mi intento de explicar la diferencia.

<a href="https://es.wikipedia.org/wiki/Representational_State_Transfer" target="_blank">REST API's</a> y <a href="https://es.wikipedia.org/wiki/Servicio_web" target="_blank">Web Services</a> son dos formas específicas de **Web API's**.

Si este es tu primer acercamiento con este tema, mi recomendación es que te detengas en este punto porque ahora nos volvemos muy técnicos ;)

El nombre <a href="https://es.wikipedia.org/wiki/Servicio_web" target="_blank">Web Services</a> es muy desafortunado porque es muy genérico y crea confusión. La realidad es que <a href="https://es.wikipedia.org/wiki/Servicio_web" target="_blank">Web Services</a> es un grupo de tecnologías muy específicas para integrar aplicaciones utilizando <a href="https://es.wikipedia.org/wiki/Extensible_Markup_Language" target="_blank">XML</a> y <a href="https://es.wikipedia.org/wiki/Simple_Object_Access_Protocol" target="_blank">SOAP</a> (Simple Object Access Protocol).

El siguente ejemplo muestra un llamado <a href="https://es.wikipedia.org/wiki/Simple_Object_Access_Protocol" target="_blank">SOAP</a> utilizando <a href="https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol" target="_blank">HTTP</a> como transporte:

<pre><code class="language-http">POST /usersWS HTTP/1.1
...

&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;soap:Envelope xmlns:soap=&quot;http://www.w3.org/2001/12/soap-envelope&quot; soap:encodingStyle=&quot;http://www.w3.org/2001/12/soap-encoding&quot;&gt;

  &lt;soap:Body xmlns:m=&quot;http://www.example.org/usersWS&quot;&gt;
    &lt;m:deleteUser&gt;
      &lt;m:userId&gt;23&lt;/m:userId&gt;
    &lt;/m:deleteUser&gt;
  &lt;/soap:Body&gt;

&lt;/soap:Envelope&gt;</code></pre>

Ahora veamos un llamado <a href="https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol" target="_blank">HTTP</a> equivalente utilizando un <a href="https://es.wikipedia.org/wiki/Representational_State_Transfer" target="_blank">REST API</a>:

<pre><code class="language-none">DELETE /users/23 HTTP/1.1</code></pre>

Los <a href="https://es.wikipedia.org/wiki/Representational_State_Transfer" target="_blank">REST API's</a> están ligados (**altamente acoplados**) al protocolo <a href="https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol" target="_blank">HTTP</a>. La URL se usa para definir el recurso (en este caso el **usuario con identificador 23**) y el verbo <a href="https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol" target="_blank">HTTP</a> para definir la acción que queremos hacer sobre ese recurso (en este caso eliminarlo). <a href="https://es.wikipedia.org/wiki/Simple_Object_Access_Protocol" target="_blank">SOAP</a>, por el contrario, siempre usa el verbo <a href="https://en.wikipedia.org/wiki/POST_(HTTP)" target="_blank">POST</a> y toda la información viaja dentro del <a href="https://es.wikipedia.org/wiki/Extensible_Markup_Language" target="_blank">XML</a>.

Muchos argumentan que es mejorar desligar (**desacoplar**) el llamado al **API** del protocolo por el que se transporta. Pero al estar ligado (**acoplado**) se simplifican los llamados como se puede ver en el ejemplo anterior.

Actualmente existe una iniciativa llamada <a href="http://jsonapi.org/" target="_blank">JSON API</a>, que es un **Web API** usando <a href="https://es.wikipedia.org/wiki/JSON" target="_blank">JSON</a> pero **desacoplado** del protocolo <a href="https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol" target="_blank">HTTP</a>.

## Conclusión

Un **API** es la interfaz que un software utiliza para interactuar con otro software. Un **Web API** es un tipo especial de **API** que utiliza el protocolo <a href="https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol" target="_blank">HTTP</a> como transporte.

Actualmente <a href="https://es.wikipedia.org/wiki/Representational_State_Transfer" target="_blank">REST API</a> es la forma más popular de **Web API** y está **altamente acoplado** a <a href="https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol" target="_blank">HTTP</a>. Es por eso que es tan importante para un **Web Developer** aprender del protocolo <a href="https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol" target="_blank">HTTP</a>.

## Más información

* <a href="http://www.restapitutorial.com/" target="_blank">REST API Tutorial</a>
* <a href="http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177" target="_blank">HTTP: El protocolo que todo Web Developer debe aprender - Parte 1</a>

---

### Notas

[^1]: Seguramente la forma de empezar sería seguir algunos tutoriales y después consultar el API para crear aplicaciones diferentes.


<script>
  $('#manipulate').on('click', function(e) {
    e.preventDefault();

    $(this).parent().css('color', 'blue');
    setTimeout(function() {
      $('#manipulate').parent().css('color', '#303030')
    }, 3000);
  });

  $('#show-alerts').on('click', function(e) {
    e.preventDefault();

    alert('Si, esto es una alerta');
  });
</script>
