---
layout: post
title:  "Turbolinks"
date:   2017-06-12 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/turbolinks.jpeg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

En este post vamos a ver qué es **Turbolinks** y lo que debes tener en cuenta para sacar el mayor provecho de esta increíble herramienta sin frustrate en el proceso.<!-- more -->

## ¿Qué es Turbolinks?

**Turbolinks** es una gema incluida en [Ruby on Rails](http://rubyonrails.org/) que evita tener que recargar los archivos CSS y JavaScript cada vez que oprimes un link en tu aplicación, haciendo que las aplicaciones se sientan más rápidas y ágiles en el navegador.

La forma en que funciona es la siguiente: en vez de recargar la página cuando se oprime un link, **Turbolinks** intercepta el click, hace un llamado AJAX al servidor y reemplaza el cuerpo (body) de la página con la respuesta.

Ingenioso ¿no? Con **Turbolinks** tus aplicaciones se van a sentir casi como si estuviesen hechas con un framework JavaScript como Angular o React, pero sin la complejidad que eso implica.

Además, **Turbolinks** mantiene un caché de las últimas páginas visitadas y eso permite que esas páginas se puedan mostrar de forma inmediata sin hacer un llamado al servidor.

## Los retos de Turbolinks

Eso no significa que puedes ignorar **Turbolinks** y todo va a funcionar correctamente. Al contrario, debido a que los archivos JavaScript no se recargan cuando navegas por la aplicación, existen varios retos que debes conocer y enfrentar.

### El evento ready

El primero reto tiene que ver con el evento `$(document).ready`, que normalmente se dispara cuando se ha terminado de cargar cada página.

El problema es que **Turbolinks** no dispara ese evento `ready` cuando navegas por las páginas de la aplicación.

Por ejemplo, si estás usando **Turbolinks**, la siguiente alerta se mostraría sólo la primera vez que se carga una página, pero no en los demás cambios de página:

```js
$(document).ready(function() {
  alert("Hola Mundo");
});
```

Esta es quizá la principal queja de las personas que no conocen **Turbolinks**: que su código JavaScript no se está ejecutando al pasar de una página a otra.

La solución es utilizar el evento `turbolinks:load` que se dispara también en los cambios de página:

```js
$(document).on("turbolinks:load", function() {
  alert("Hola");
});
```

De esta forma la alerta se mostraría la primera vez que se carga una página, pero también en los siguientes cambios de página.


### El contexto global

El segundo reto al utilizar **Turbolinks** es que todas las variables que almacenes en el contexto global de JavaScript van a permanecer entre páginas. Esto puede ser un problema o no dependiendo de la complejidad de tu código, pero es algo que debes tener en cuenta.

Por ejemplo, si en una página definiste una variable llamada `miVariable` en el contexto global, en las siguientes páginas esa variable va a seguir existiendo.

La forma de evitar eso es con un poco de cuidado y organización, evitando al máximo contaminar el contexto global.

Por ejemplo, un patrón que sigo en mis aplicaciones es el siguiente. En el archivo **CoffeeScript** creo una clase con el código que necesito para la vista:

<pre><code class="language-coffeescript">class EntriesView
  constructor: (options) ->
    # acá enlazo los eventos

window.EntriesView = EntriesView
</code></pre>

Y en la vista, al final, creo el objeto y le paso la información necesaria por el argumento del constructor:

<pre><code class="language-html">&lt;script&gt;
  new EntriesView({});
&lt;/script&gt;</code></pre>

De esa forma evito contaminar al máximo el contexto global y el código queda bien organizado.

### Entendiendo el caché

**Turbolinks** mantiene un caché de las páginas visitadas recientemente.

Antes de navegar a una nueva página **Turbolinks** guarda una copia de la página actual en caché. Esa copia no incluye los eventos o datos asociados a los elementos.

El reto acá es el siguiente:

Tu código JavaScript puede modificar la página cuando carga, y **esa página modificada es la que se almacena en caché**.

Luego, cuando se obtiene nuevamente del caché, el código JavaScript vuelve a correr y **vuelve a modificar la página**. Eso puede ser lo que buscas o no, pero igual es algo que debes tener en cuenta.

Siempre que escribas **JavaScript** (o **CoffeeScript**) piensa que esa página pudo haber sido recuperada del caché.

## Conclusión

Es sorprendente que **Turbolinks** venga activado por defecto en las aplicaciones de Rails. Sería preferible que uno lo activara después de conocer cómo funciona y qué cosas tener en cuenta. Pero ahora ya lo sabes!

¿En qué casos **no** recomendaría **Turbolinks**? Si tu aplicación requiere mucha interacción en el navegador mi recomendación sería utilizar un framework de JavaScript como React para el front.

Si quieres más información de **Turbolinks** mi recomendación es leer <a href="https://github.com/turbolinks/turbolinks" target="_blank">la documentación de la gema</a>, se aprende bastante!
