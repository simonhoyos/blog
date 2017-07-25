---
layout: post
title:  "HackerRank Challenge - Día 2"
date:   2016-07-08 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/city-night.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

En esta serie de posts estoy documentando mi experiencia intentando entrar entre los mil mejores programadores de <a href="https://www.hackerrank.com" target="_blank">HackerRank</a>, un sitio para practicar ejercicios de programación.<!-- more -->

**Nota:** Si aún no lo has hecho, te recomiendo leer el <a href="/hackerrank-challenge-dia-1/">día 1</a> primero.

Ayer terminé en el ranking 9,945. Veamos en qué lugar termino (si logro solucionar el ejercicio de hoy).

El ejercicio se llama <a href="https://www.hackerrank.com/challenges/ncr-table" target="_blank">nCr table</a>. También es de combinaciones como el anterior. Nos piden calcular el <a href="https://es.wikipedia.org/wiki/Coeficiente_binomial" target="_blank">coeficiente binomial</a> (n k), pero `k` va desde `0` hasta `n`, es decir, `(n 0) (n 1) ... (n n)` e imprimir los resultados en una línea. Veamos algunos ejemplos.

* Para `n = 2` la respuesta es `1 2 1`
* Para `n = 4` la respuesta es `1 4 6 4 1`
* Para `n = 5` la respuesta es `1 5 10 10 5 1`

Que bonita simetría ¿no? Lo primero que se me ocurrió fue calcular cada combinación en un ciclo de `0` hasta `k` adaptando el código del ejericio anterior:

<pre><code class="language-ruby">def fact(i)
  i == 0 ? 1 : (1..i).inject(:*)
end

def choose(n, k)
  numerator = fact(n)
  denominator = fact(n - k) * fact(k)
  numerator / denominator
end

n = gets.chomp.to_i # así se obtienen los valores de entrada en HackerRank
(0..n).each do |k|
   print "#{choose(n, k)} "
end</code></pre>

El problema es que cuando `n` es muy grande se genera timeout y la prueba falla.

<a href="https://www.hackerrank.com" target="_blank">HackerRank</a> tiene un área de discusión para cada uno de los ejercicios. Ahí encontré que uno puede calcular `(n k)` recursivamente: `(n k) = (n-1 k-1) + (n-1 k)`. De esa forma no es necesario hacer el factorial y es mucho más rápido. Sin embargo, otros comentarios decían que es mejor precalcular todos los coeficientes de 1 hasta 10,000 y generar una tabla con los resultados que después uno pueda consultar.

Decidí intentar hacerlo recursivamente y al principio no me funcionó, así que utilicé una técnica llamada <a href="https://en.wikipedia.org/wiki/Memoization" target="_blank">memoization</a> que almacena los resultados anteriores para no tener que volverlos a calcular. El resultado fue el siguiente:

<pre><code class="language-ruby">@memo = {} # acá vamos a ir almacenando cada coeficiente que calculemos

def choose(n, k)
  if @memo["#{n} #{k}"]
    @memo["#{n} #{k}"]
  elsif k == 0 || n == k
    1
  elsif k == 1
    n
  else
    @memo["#{n} #{k}"] = choose(n-1, k-1) + choose(n-1, k)
  end
end

n = gets.chomp.to_i
(0..n).each do |k|
    print "#{choose(n, k) % 1000000000} "
end</code></pre>

Y eso fue todo. Sin la ayuda de la discusión creo que no lo hubiese podido resolver!

Mi nuevo ranking en <a href="https://www.hackerrank.com" target="_blank">HackerRank</a> después de terminar este ejercicio es **7,467**, ánimo!
