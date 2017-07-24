---
layout: post
title:  "¿Qué es un stack overflow (no el sitio)?"
date:   2015-09-21 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/stackoverflow.png
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
redirect_from: "/2015/09/21/que-es-un-stack-overflow-desbordamiento-de-pila/"
---

Sí, el sitio más popular de preguntas y respuestas de programación es, por mucho, <a href="http://stackoverflow.com/" target="_blank">StackOverflow</a>. Pero ¿qué es realmente un stack overflow (en español desbordamiento de pila)? En este post te lo explicamos en detalle.<!-- more -->

Todo lenguaje de programación tiene algún mecanismo para definir procedimientos, subrutinas, funciones o métodos, que son diferentes nombres que se refieren a lo mismo: secuencias de instrucciones empaquetadas en una unidad que se pueden llamar desde otras partes del programa (de ahora en adelante las llamaremos subrutinas).

Una subrutina puede llamar a su vez a otra subrutina que a su vez puede llamar otra subrutina que a su vez puede llamar otra subrutina, y así sucesivamente. Cuando esta cadena se vuelve muy profunda, se genera un stack overflow.

La forma más fácil de generar un stack overflow en un lenguaje de programación es crear una subrutina que se llama a sí misma como en el siguiente ejemplo en Ruby:

<pre><code class="language-ruby">def hola
  hola
end

hola</code></pre>

Si ejecutamos ese código eventualmente aparece un error que dice: `stack level too deep (SystemStackError)`. Eso es un stack overflow.

Pero ¿por qué ocurre un stack overflow? Cada vez que se llama una subrutina se almacena en memoria una referencia a la subrutina que la llamó[^1], los argumentos que recibió la subrutina y cualquier variable local que se cree en esa subrutina. A la ubicación donde se almacena esta información se le conoce como el **call stack**, el **execution stack** o simplemente el **stack**.

<img src="/assets/images/book-stack.png" alt="Pila de libros" class="photo">

<p class="photo-description">El <strong>stack</strong> funciona como una pila de libros. Cada uno de estos libros representa una subrutina.</p>

La forma en que funciona el **stack** es similar a como funciona una pila de libros[^2]. Cada vez que una subrutina llama a otra es como si ubicáramos un nuevo libro encima de la pila. Imagina que cada libro almacena la información de la subrutina y una referencia a la subrutina que la llamó.

Cuando termina una subrutina se remueve del **stack** (como si tomáramos el libro de la parte superior de la pila) y se le devuelve al control a la subrutina que la llamó para que continúe su ejecución.

Un stack overflow, en español **desbordamiento de pila**, es un error que ocurre cuando se llena el **stack** y por lo tanto no se pueden crear más subrutinas anidadas (imagina que la pila de libros llegó al techo y no hay forma de ubicar más libros sobre esa pila).

La cantidad de memoria que se le asigna al **stack** depende de múltiples factores, pero lo más importante es entender que es una cantidad limitada.

## El stack trace

Otro concepto relacionado a la pila de ejecución (el **stack**) es el stack trace o, en español, la **traza de pila** (de nuevo, nadie la llama así).

Cuando ocurre un error en nuestra aplicación, generalmente en la consola aparece el problema en la primera línea y una gran lista como la siguiente:

<pre><code class="language-none">$ ruby myprogram.rb
no implicit conversion of nil into String
/Users/germanescobar/.rvm/gems/ruby-2.1.5/gems/signature-0.1.8/lib/signature.rb:173:in `hexdigest'
/Users/germanescobar/.rvm/gems/ruby-2.1.5/gems/signature-0.1.8/lib/signature.rb:173:in `signature'
/Users/germanescobar/.rvm/gems/ruby-2.1.5/gems/signature-0.1.8/lib/signature.rb:53:in `sign'
/Users/germanescobar/.rvm/gems/ruby-2.1.5/gems/pusher-0.14.5/lib/pusher/request.rb:20:in `initialize'
/Users/germanescobar/.rvm/gems/ruby-2.1.5/gems/pusher-0.14.5/lib/pusher/resource.rb:29:in `new'
/Users/germanescobar/.rvm/gems/ruby-2.1.5/gems/pusher-0.14.5/lib/pusher/resource.rb:29:in `create_request'
...</code></pre>

Ese es el **stack trace**: la lista de las subrutinas que existen en ese momento en el **stack**. La primera línea muestra el archivo y la línea en la que ocurrió el error. La siguiente línea muestra el archivo y la línea que llamó a la primera, y así sucesivamente.

---

### Notas

[^1]: Realmente se almacena una referencia a la línea que llamó la subrutina actual. Para ser más exactos, se almacena la dirección de memoria a la que debe retornar una vez termine esta subrutina.
[^2]: De hecho, **stack** traduce a **pila** en español.
