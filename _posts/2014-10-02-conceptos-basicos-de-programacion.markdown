---
layout: post
title:  "Conceptos básicos de programación"
date:   2014-10-02 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/traffic-car-vehicle-black.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
redirect_from: "/2014/10/02/conceptos-basicos-de-programacion/"
---

Todos los lenguajes de programación comparten algunos elementos básicos que funcionan y se usan de forma diferente en cada lenguaje, pero que cumplen el mismo objetivo. Esos elementos son:<!-- more -->

* Tipos de datos
* Variables
* Control de flujo
* Ciclos
* Estructuras de datos
* Funciones

Acepto que entender cómo funcionan estos elementos no es diversión pura, pero es la base de la programación. Recuerda que la programación no es más que una herramienta, un medio para lograr algún fin: ¿escribir un juego? ¿hacer una aplicación web? ¿una aplicación móvil?.

## Tipos de datos

Algunos lenguajes de programación tienen más tipos de datos que otros, pero, en general, todos incluyen al menos los siguientes: **caracteres** (char), **cadenas de caracteres** (string), **enteros** (integer), **decimales** (decimal, float), y **booleanos** (true y false). Por ejemplo:

**En JavaScript:**

<pre><code class="language-javascript">“Hola Mundo”
34
23.45
false</code></pre>

**En Ruby:**

<pre><code class="language-ruby">“Hola Mundo”
34
23.45
false</code></pre>

## Variables

Las variables nos permiten almacenar información temporalmente. Por ejemplo, podemos almacenar la cadena “Hola Mundo” en una variable.

**En JavaScript:**

<pre><code class="language-javascript">var miPrimeraVariable = “Hola Mundo”</code></pre>

**En Ruby:**

<pre><code class="language-ruby">mi_primera_variable = “Hola Mundo”</code></pre>

Acá se empiezan a notar algunas diferencias entre los lenguajes. En <strong>JavaScript</strong>, una variable se define empezando con la palabra <code>var</code> (es posible omitirla pero eso se considera una mala práctica). En **Ruby** se empieza con el nombre de la variable.

En **JavaScript**, si el nombre de una variable se compone de varias palabras, las palabras inician con mayúscula excepto la primera (a eso se le conoce como CamelCase ... porqueTieneFormaDeCamello). En **Ruby** las palabras se separan con underscore (a esto se le conoce como snake_case … porque_parece_una_culebra). (Esto es solo una notación y no hay nada que impida utilizar snake_case en **JavaScript**, o CamelCase en **Ruby**. En los tutorials más básicos de cada lenguaje generalmente le dicen a uno qué notación utilizar).

## Un mecanismo para tomar de decisiones

Un elemento muy importante en todo lenguaje de programación es cómo tomar una decisión según la información que se tenga en las variables. Por ejemplo:

**En JavaScript:**

<pre><code class="language-javascript">var puntos = 20;
if (puntos > 15) {
  console.log("Felicitaciones, tienes más de 15 puntos!");
} else {
  console.log("Muy Regular, tienes menos de 15 puntos");
}</code></pre>

**En Ruby:**

<pre><code class="language-ruby">puntos = 5
if puntos > 15
  puts "Felicitaciones, tienes más de 15 puntos!"
else
  puts "Muy Regular, tienes menos de 15 puntos"
end</code></pre>

De nuevo, la sintaxis cambia de lenguaje a lenguaje, pero el principio es el mismo.

A esto se le llama **control de flujo** porque cuando el programa está corriendo, los `if` deciden qué código se ejecuta.

## Un mecanismo para iterar (ciclos)

Por ejemplo, cuando queremos imprimir los números de 0 hasta 9.

**En JavaScript:**

<pre><code class="language-javascript">for (var i = 0; i <  10; i++) {
  console.log(i);
}</code></pre>

**En Ruby:**

<pre><code class="language-ruby">9.times do |i|
  puts i
end</code></pre>

## Estructuras de datos

Si vieron programación en la universidad el título los puede asustar. Pero las estructuras de datos existen porque programar únicamente con los tipos básicos (char, integer, boolean, etc) sería muy difícil. A veces necesitamos almacenar colecciones de datos e información más estructurada.

Los arreglos son los más conocidos, nos permiten almacenar varios datos *en una sola variable*.

**En Javascript:**

<pre><code class="language-javascript">var arreglo = [1, 2, 3, 4, 5]
console.log(arreglo[2]); // 3 - el primer elemento está en la posición 0</code></pre>

**En Ruby:**

<pre><code class="language-ruby">arreglo = [1, 2, 3, 4, 5]
puts arreglo[2] # 3 - el primer elemento está en la posición 0</code></pre>

A veces se necesita guardar información más estructurada. Por ejemplo, los datos de una persona.

**En JavaScript:**

<pre><code class="language-javascript">var german = {
  name: “German Escobar”,
  gender: ‘male’,
  age: 32
};

console.log(german.gender); // male</code></pre>

**En Ruby:**

<pre><code class="language-ruby">class Person
  attr_accessor :name, :gender, :age
end

german = Person.new
german.name = “German Escobar”
german.gender = “male”
german.age = 32

puts german.gender # male</code></pre>

## Funciones

Las funciones, también llamadas procedimientos o métodos, encapsulan algunas instrucciones y se pueden llamar utilizando el nombre de la función.

**En JavaScript:**

<pre><code class="language-javascript">function rockear(lenguaje) {
  console.log(lenguaje + " rocks!");
}

rockear("JavaScript");</code></pre>

**En Ruby:**

<pre><code class="language-ruby">def rockear(lenguaje)
  puts lenguaje + " rocks!"
end

rockear("Ruby")</code></pre>

Existen muchos más elementos de cada lenguaje de programación, pero con estos podemos empezar a leer código y jugar con el lenguaje.

## Preguntas básicas sobre un lenguaje de programación

* ¿Qué tipos de datos existen?
* ¿Cómo se define y se asigna un valor a una variable?
* ¿Cómo se itera sobre un rango de números?
* ¿Cómo se define un arreglo?
* ¿Cómo se itera sobre un arreglo?
* ¿Cómo se define una función?
* ¿Cómo se comenta el código?
* ¿En qué se usa principalmente el lenguaje?

## Más recursos

* Nuestros amigos de <a href="http://mejorando.la/" target="_blank">mejorando.la</a> han creado un <a href="https://cursos.mejorando.la/programacion-basica/" target="_blank">curso gratis</a> para aprender programación básica.
* En Codecademy existe un curso de <a href="http://www.codecademy.com/en/tracks/javascript" target="_blank">JavaScript</a> y otro de <a href="http://www.codecademy.com/tracks/ruby" target="_blank">Ruby</a>.
* Treehouse también tiene cursos básicos de programación. Uno de <a href="http://teamtreehouse.com/library/introduction-to-programming" target="_blank">JavaScript</a> y el otro de <a href="http://teamtreehouse.com/library/ruby-foundations" target="_blank">Ruby</a>.
