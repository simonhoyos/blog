---
layout: post
title:  "¿Qué es concurrencia?"
date:   2017-07-12 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/concurrency.jpeg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

En este post vamos ver qué es concurrencia, cuáles son los dos modelos más populares que existen actualmente y cómo la concurrencia afecta el código que escribes.<!-- more -->

**Concurrencia** es la habilidad que tiene un computador de realizar varias tareas a la vez.

Gracias a la **concurrencia** es que puedes ver un video en YouTube mientas subes un archivo a Dropbox y hablas con tus amigos en Facebook, todo a la vez.

Sin embargo, eso no significa necesariamente que todo pase **al mismo tiempo**, es decir, en paralelo. Eso depende del número de procesadores (o cores) que tenga tu computador.

Si tu computador sólo tiene un procesador, el sistema operativo **simula** que está haciendo todo al mismo tiempo, pero lo que realmente hace es darle, a las aplicaciones, acceso al procesador por turnos cortos de tiempo.

Existen varios modelos de concurrencia y cada lenguaje de programación implementa alguno de ellos. En este post vamos a explicar dos de ellos: **hilos** (threads en Inglés), que es el modelo más básico y el que utilizan lenguajes como Java, Ruby y PHP, entre otros, y **basado en eventos** (event-driven), que es el que utiliza JavaScript.

## I/O vs Procesamiento

La mayor parte del tiempo los computadores no están ejecutando código, están ocupados en operaciones de **I/O** (**Input/Output**)[^1] como leer un archivo, hacer llamados HTTP, esperar a que el usuario escriba algo en el teclado, etc.

Por ejemplo, imagina que debemos escribir un programa que cuente cuántos links tienen tres páginas Web. Una posible solución sería la siguiente:

<pre><code class="overflow language-ruby">contar_links("http://sitio1.com/")
contar_links("http://sitio2.com/")
contar_links("http://sitio3.com/")</code></pre>

Este código se ejecuta de forma **secuencial**: hasta que no termine de analizar la primera página no continúa con la segunda, y hasta que no termine con la segunda no continúa con la tercera. A esto también se le conoce como **código sincrónico** porque estamos esperando que cada operación termine antes de continuar con la siguiente.

## Threads (hilos)

El problema del **código sincrónico** es que, aunque es fácil de entender, no siempre hace el mejor uso de los recursos del sistema. En el ejemplo anterior sería mejor analizar las tres páginas de forma **concurrente**.

La forma en que la mayoría de lenguajes de programación permiten escribir código concurrente es creando **threads** (hilos).

En vez de intentar definir exactamente qué es un **hilo**, veamos un ejemplo. La sintaxis para crear **hilos** varía dependiendo del lenguaje, en Ruby se crean con `Thread.new`:

<pre><code class="overflow language-ruby">t1 = Thread.new {
  contar_links("http://sitio1.com/")
}
t2 = Thread.new {
  contar_links("http://sitio2.com/")
}
t3 = Thread.new {
  contar_links("http://sitio3.com/")
}

# debemos esperar a que terminen los 3 archivos
t1.join
t2.join
t3.join</code></pre>

El código que está entre los corchetes de cada **hilo** es lo que se va a ejecutar en algún momento en el futuro, no sabemos es en qué momento. Por esa razón al final utilizamos el método `join` sobre cada **hilo**, para esperar a que terminen.

Aunque los **hilos** se ejecutan de forma concurrente, **no podemos decir que se van a ejecutar en paralelo**, eso depende del número de procesadores que tenga la máquina y, para el caso de Ruby, la implementación de Ruby que estemos utilizando[^2].

La siguiente imagen muestra la diferencia entre ejecución secuencial, concurrente y paralela:

<img src="/assets/images/concurrency.png" alt="Concurrencia" class="photo">

Aunque los dos diagramas de la derecha son concurrentes, **los hilos sólo se ejecutan en paralelo cuando tienes dos o más procesadores**.

### Problemas de los hilos

En muchos casos utilizar **hilos** es mejor que ejecutar el código de forma secuencial. Sin embargo, eso no quiere decir que sean la solución ideal.

Existen tres problemas principales con la concurrencia basada en **hilos**.

1. Es posible que los nuevos **hilos** ocupen la mayor parte del tiempo en **I/O**, como en nuestro ejemplo anterior.

2. Crear y administrar **hilos** tiene un impacto en memoria y en procesamiento. El impacto de cada **hilo** es bajo pero empieza a ser considerable cuando tienes miles de hilos activos.

3. Sincronizar varios **hilos** es complicado. El problema es que todos pueden acceder a la misma información pero en diferente orden y la aplicación puede terminar en un estado inválido o quedar bloqueada en una <a href="https://es.wikipedia.org/wiki/Condici%C3%B3n_de_carrera" target="_blank">condición de carrera</a>.

## Basado en eventos (event driven)

En un modelo basado en eventos, como el que usa JavaScript, el código de la aplicación se ejecuta en un único **hilo** y las operaciones de **I/O** se delegan a otros **hilos** de apoyo.

La ventaja del modelo basado en eventos es que el **hilo principal sólo ejecuta código y nunca se bloquea por operaciones de I/O**. La desventaja es que el código es más difícil de escribir y entender.

La siguiente imagen ilustra cómo funciona la concurrencia basada en eventos:

<img src="/assets/images/async-io.png" alt="Concurrencia basada en eventos" class="photo">

Cada vez que hacemos operaciones de **I/O**, el **hilo principal** delega la operación a un **hilo** de apoyo. Veamos un ejemplo en <a href="https://nodejs.org/en/" target="_blank">Node.js</a> en el que estamos leyendo el contenido de un archivo:

```javascript
var fs = require('fs');

fs.readFile("archivo_grande.txt", function(err, data) {
  console.log("Terminó de leer el archivo")
})
console.log("Hola");
```

El método `readFile` es **no bloqueante**, así que va a delegar la ejecución a otro **hilo**. Pero ¿cómo sabemos cuándo terminó de leer el archivo?

`readFile` recibe una **función** que es invocada cuando el **hilo de apoyo** termina de leer el archivo. A esta técnica se le llama **código asincrónico**, o **código basado en eventos**, porque la **función** no se ejecuta inmediatamente, sino que va a ser invocada en algún momento en el futuro.

A la función que le pasamos al método `readFile` se le conoce como un **callback**, que en Español significa "devolver la llamada".

Si ejecutamos el código anterior vas a ver en pantalla `"Hola"` antes de `"Terminó de leer el archivo"`.

Utilizar **I/O no bloqueante y eventos** es una forma muy eficiente de utilizar los recursos del sistema pero hace que el código sea más difícil de escribir y entender. Es por eso que la comunidad de <a href="https://nodejs.org/en/" target="_blank">Node.js</a> siempre está buscando formas de que el **código asincrónico** se vea más como **código sincrónico**. Ejemplos incluyen las <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises" target="_blank">Promesas</a> y la más reciente <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" target="_blank">función async</a>.

---

Espero que este post te haya dado una idea sobre qué es concurrencia, qué son y cómo funcionan los hilos, qué es la concurrencia basada en eventos y qué es **I/O no bloqueante**.

No es que un modelo de concurrencia sea superior al otro. Cada uno tiene sus ventajas y desventajas, también depende mucho del tipo de aplicación que estés desarrollando.

Por ejemplo, <a href="https://nodejs.org/en/" target="_blank">Node.js</a> es ideal para aplicaciones que principalmente realizan operaciones de **I/O**, como un sistema de streaming de video, por ejemplo.

Los hilos, por otro lado, pueden ser muy eficientes en aplicaciones que realizan principalmente tareas de procesamiento.

---

[^1]: En Español **E/S** (**Entrada/Salida**).
[^2]: La implementación de referencia de Ruby (MRI), por ejemplo, no soporta la ejecución de varios threads en paralelo, así el computador tenga varios procesadores.
