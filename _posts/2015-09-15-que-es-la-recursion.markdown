---
layout: post
title:  "¿Qué es recursión?"
date:   2015-09-15 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/recursion.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
redirect_from: "/2015/09/15/que-es-la-recursion/"
---

Uno de los conceptos más poderosos de la programación es la **recursión**. Es un concepto simple pero confuso al mismo tiempo porque no es la forma en que estamos acostumbrados a pensar.<!-- more -->

La película <a href="http://www.imdb.com/title/tt1375666/" target="_blank">Inception</a> muestra un ejemplo de recursión cuando un grupo de espías corporativos intentan plantar una idea en un sujeto con una tecnología de sueño compartido. A medida que el grupo ingresa a diferentes niveles de sueño de forma recursiva (un sueño dentro de otro sueño) experimentas la confusión que puede generar la recursión.

En la programación, la recursión es una herramienta que nos permite solucionar problemas basados en casos más simples.

El truco es que en todos los lenguajes de programación una función se puede llamar a sí misma como en el siguiente ejemplo de JavaScript:

<pre><code class="language-javascript">function hola() {
  hola();
}
hola();</code></pre>

¿Qué problema tiene este código? Que nunca terminaría. La función `hola` se llama a si misma una y otra vez. Podríamos hacer lo mismo con un ciclo (iterando):

<pre><code class="language-javascript">while (true) {}</code></pre>

En realidad un lenguaje no necesita ciclos (iteraciones), con recursión sería suficiente. El problema, como decíamos antes, es que es más fácil pensar en iteraciones[^1].

Veamos otro ejemplo. Imprimamos los números del `1` al `10` de forma recursiva:

<pre><code class="language-javascript">function printNumber(x) {
  console.log(x); // imprime el número
  if (x < 10) { printNumber(x + 1); }
}
printNumber(1); // inicia la recursión</code></pre>

La última línea llama `printNumber` pasándole como parámetro el número `1` para iniciar la recursión. Lo primero que hace la función es imprimir el número. Luego, si el parámetro `x` es menor a `10`, se vuelve a llamar a sí misma pero incrementando `x`. Cuando `x` llega a `10`, la función ya no se vuelve a llamar a sí misma y termina.

El ejemplo anterior sería mucho más fácil con un ciclo normal:

<pre><code class="language-javascript">for (var i=1; i <= 10; i++) {
  console.log(x);
}</code></pre>

¿Es siempre la solución recursiva más compleja que la iterativa? ¡Claro que no! Si fuera así, nunca utilizaríamos la recursión. Hay algunos problemas que son más fáciles solucionarlos con recursión. Veamos un ejemplo.

El factorial de un número es la multiplicación de los números (positivos) menores o iguales a ese número. Por ejemplo, el factorial de 5 es 120:

<pre><code class="language-none">5! = 5 * 4 * 3 * 2 * 1 = 120</code></pre>

Intentemos solucionarlo con iteraciones normales:

<pre><code class="language-javascript">var num = 5;
var fact = 1;
for (var i=1; i <= num; i++) {
  fact *= i;
}
console.log(fact)</code></pre>

Ahora con recursión:

<pre><code class="language-javascript">function factorial(n) {
  if (n === 0) {  return 1; }
  return n * factorial(n - 1);
}
factorial(5);</code></pre>

Aunque el número de líneas es muy similar, podemos argumentar que la solución recursiva es más clara: `factorial(5)` es `5 * factorial(4)`, o para generalizarlo: `factorial(n)` es `n * factorial(n - 1)`.

Lo que debes tener en cuenta al crear una función recursiva es lo siguiente:

1. Definir los casos triviales, es decir, los casos en los que **no** se debe volver a invocar la función (esto es equivalente a la condición de terminación de un ciclo).
2. Definir los casos generales, es decir, los casos en los que **sí** se debe volver a invocar la función.
3. Verificar que los valores de los argumentos que se le pasan a la función cambien cada vez que se invoca (se deben acercar a los casos triviales).

Por ejemplo, para la función `factorial`:

1. Casos triviales: cuando `n` sea igual a `0`, la función retorna `1`.
2. Casos generales: `factorial(n)` es igual a `n * factorial(n-1)`.
3. Siempre que volvemos a llamar la función recursiva estamos restando `1` a `n` (se está acercando al caso trivial).

<div class="well">
  <h3>Tu turno</h3>

  <p>La <a href="https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci" target="_blank">sucesión Fibonacci</a> es una secuencia infinita de números naturales. Los primeros son: <code>1 1 2 3 5 8 13 21 34 55 89 ...</code>. La secuencia comienza con <code>1</code> y <code>1</code>. De ahí en adelante cada número se calcula con la suma de los dos anteriores.</p>

  <p>Escribe una función recurrente que calcule el número <code>n</code> de la secuencia (basado en 0). Por ejemplo:</p>

  <ul>
    <li><code>fibonacci(0) = 1</code></li>
    <li><code>fibonacci(1) = 1</code></li>
    <li><code>fibonacci(4) = 5</code></li>
    <li><code>fibonacci(5) = 8</code></li>
  </ul>

  <p>¡También intenta hacer la versión iterativa para comparar!</p>
</div>

## Más información

* [¿Cuál es la mejor foto que explica la recursión?](https://www.quora.com/What-is-the-best-photo-that-explains-recursion)
* [Busca "recursion" en Google](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=recursion) Muy inteligente ¿no?
* [Algunas analogías de recursión en Quora](https://www.quora.com/What-are-some-of-the-best-analogies-you-came-across-that-explains-the-recursion-in-Computer-Science)
* [Recursión en Wikipedia](https://es.wikipedia.org/wiki/Algoritmo_recursivo)

### Notas

[^1]: Realmente hay otros problemas de rendimiento y memoria.
