---
layout: post
title:  "HackerRank Challenge - Día 5"
date:   2016-07-11 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/nature-sky-sunset-man.jpeg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

En esta serie de posts estoy documentando mi experiencia intentando entrar entre los mil mejores programadores de <a href="https://www.hackerrank.com" target="_blank">HackerRank</a>, un sitio para practicar ejercicios de programación.<!-- more -->

**Nota:** Si aún no lo has hecho, te recomiendo leer el <a href="/hackerrank-challenge-dia-1/">día 1</a> primero.

Ayer terminé en el ranking 4,813.

Me di cuenta que el ranking es por tema, así que este reto solo aplica para el área de matemáticas de <a href="https://www.hackerrank.com" target="_blank">HackerRank</a>. Disculpas por la confusión!

El ejercicio de hoy se llama <a href="https://www.hackerrank.com/challenges/die-hard-3" target="_blank">Die Hard 3</a>. El nombre se debe a que es tomado de una escena de la película que lleva ese nombre. En la escena Samuel L. Jackson y Bruce Willis deben solucionar un acertijo. A lado de una fuente encuentran dos jarros (o jarrones), uno de 5 galones y el otro de 3. Los jarros no tienen marcas y deben llenar uno de los jarros con 4 galones.

La solución al acertijo es primero llenar el jarro de 5 galones y pasar 3 galones al otro. Se desocupa el de 3 y se le pasan los 2 galones que quedaron en el de 5. Luego se vuelve a llenar el de 5 y se pasa 1 galón al de 3 para llenarlo. En el jarro de 5 galones quedaran los 4 galones de la solución.

Lo que nos piden en el ejercicio es generalizar este acertijo y decidir si es solucionable para dos jarros de `a` y `b` capacidad, y un llenado `c`.

Este ejericio estuvo por encima de mis capacidades matemáticas. Pensé hacerlo recursivo al principio, pero no encontre una forma. Finalmente decidí ver la discusión y noté que hablaban del GCD (Greatest Common Divisor) y un módulo. Y de pura suerte di con la solución:

<pre><code class="language-ruby">a, b, c = gets.chomp.split(" ").map(&:to_i)
max = [a, b].max
if max < c
  puts "NO"
else
  d = a.gcd(b)
  if c % d == 0
    puts "YES"
  else
    puts "NO"
  end
end</code></pre>

Mi nuevo ranking es **3,984**!
