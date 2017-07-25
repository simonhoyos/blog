---
layout: post
title:  "HackerRank Challenge - Día 1"
date:   2016-07-07 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/hackerrank.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

En esta serie de posts voy a documentar mi experiencia intentando entrar entre los mil mejores programadores de <a href="https://www.hackerrank.com" target="_blank">HackerRank</a>, un sitio para practicar ejercicios de programación.<!-- more -->

**Julio 11 de 2016**: Me di cuenta que el ranking es por tema, así que este reto solo aplica para el área de matemáticas de <a href="https://www.hackerrank.com" target="_blank">HackerRank</a>. Disculpas por la confusión!

La mayor parte de mi vida como programador he estado enfocado en arquitectura de software y esta es una excelente oportunidad para mejorar en la resolución de problemas de programación específicos. <a href="https://www.hackerrank.com" target="_blank">HackerRank</a> está dividio por temas y he decidido empezar por matemáticas, que es un tema que me interesa y en el que sé que puedo mejorar bastante.

Voy a intentar escribir un post al día describiendo el ejercicio en el que trabaje ese día, pero no es promesa.

El ejercicio de hoy se llama <a href="https://www.hackerrank.com/challenges/sherlock-and-permutations" target="_blank">Sherlock and Permutations</a>. Nos piden calcular el número de permutaciones únicas dado un número determinado de ceros (**N**) y unos (**M**) que comiencen con uno (1).

Por ejemplo, si **N** es 1 y **M** es 1 (un cero y un uno), las posibles permutaciones son `01` y `10`. Solo la segunda permutación satisface la condición que empiece con 1, y por lo tanto la respuesta es **1** (solo existe una permutación que satisface la condición).

Veamos otro ejemplo. Si **N** es 1 y **M** es 2 (un cero y dos unos), las posibles permutaciones son `011`, `101` y `110`. Solo las dos últimas satisfacen la condición, así que la respuesta es **2**.

Una posible solución sería diseñar un algoritmo que realice todas las combinaciones y solo tenga en cuenta las que comienzan con `1`. Sin embargo, estos ejercicios de matemáticas generalmente se pueden resolver con alguna fórmula, así que decidí investigar primero un poco sobre permutaciones. Los videos de <a href="https://www.khanacademy.org/math/precalculus/prob-comb/prob-combinatorics-precalc/v/probability-using-combinations" target="_blank">Khan Academy sobre el tema</a> me llevaron a la solución.

El <a href="https://es.wikipedia.org/wiki/Coeficiente_binomial" target="_blank">coeficiente binomial</a> (n k) es el número de modos en los que se pueden escoger k objetos de un total de n.

Si llevamos esa frase a nuestro ejemplo, es el número de modos en los que se pueden escoger **M** unos (1) de un total **N** + **M** (el número de ceros + el número de unos). Sin embargo, como solo queremos los casos que comienzan en `1`, el total es **N** + **M** - 1 (restamos 1 del número de unos).

La fórmula del coeficiente binomial es `(n k) = n!/(n-k)!*k!` (el `!` significa factorial). Aplicado a nuestro caso el numerador sería `(N + M - 1)!` y el denominador simplificado sería `(M-1)!*N!`. Convirtamos eso a código Ruby:

<pre><code class="language-ruby">def permutations(zeros, ones)
  numerator = fact(zeros + ones - 1)
  denominator = fact(ones - 1) * fact(zeros)
  numerator / denominator
end</code></pre>

También creé una función `fact` para sacar el factorial:

<pre><code class="language-ruby">def fact(i)
  return 1 if i == 0
  (1..i).inject(:*)
end</code></pre>

Lo único es que el camino hacia esta solución fue más complicado de lo que lo hace parecer este post!

Mi nuevo ranking en <a href="https://www.hackerrank.com" target="_blank">HackerRank</a> después de terminar este ejercicio es **9,945**!

Te invito a hacer este reto conmigo. Puedes definir tu propio objetivo. Por ejemplo, si estás en el ranking 50,000, intenta llegar a 10,000. Si ya estás entre los primeros 1,000, intenta llegar a 100. Y así.
