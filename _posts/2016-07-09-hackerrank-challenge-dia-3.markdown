---
layout: post
title:  "HackerRank Challenge - Día 3"
date:   2016-07-09 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/landscape-mountains.jpeg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

En esta serie de posts estoy documentando mi experiencia intentando entrar entre los mil mejores programadores de <a href="https://www.hackerrank.com" target="_blank">HackerRank</a>, un sitio para practicar ejercicios de programación.<!-- more -->

**Nota:** Si aún no lo has hecho, te recomiendo leer el <a href="/hackerrank-challenge-dia-1/">día 1</a> primero.

Ayer terminé en el ranking 7,467.

El ejercicio de hoy se llama <a href="https://www.hackerrank.com/challenges/matrix-tracing" target="_blank">Matrix Tracing</a>. Este es el que más me ha tomado tiempo (aproximadamente 3 horas) y esperaba que fuera un ejercicio completamente diferente a los anteriores, pero no fue así.

Lo que nos piden es encontrar todas las formas en que podemos trazar una matriz de `M` filas y `N` columnas desde la esquina superior izquierda hasta la esquina inferior derecha, únicamente avanzando hacia abajo o hacia la derecha. Por ejemplo, en una matriz de 2 x 3 (2 filas, 3 columnas) existen tres formas:

<pre><code class="overflow" style="line-height: 1">• • •   •-• •   •-•-•
|         |         |
•-•-•   • •-•   • • •</code></pre>

Los puntos representan las posiciones de la matriz y las líneas las diferentes rutas que podemos tomar desde la esquina superior izquierda a la inferior derecha (hice varios dibujos de estos para intentar entender el problema y pensar cómo iba a atacarlo).

Mi primer intento fue hacerlo recursivo. Como solo existen dos posibles caminos (abajo o derecha), podemos hacer lo siguiente:

<pre><code class="language-ruby">@paths = 0
def search(rows, cols, y, x)
  if x == cols - 1 && y == rows - 1
    @paths += 1
  else
    search(rows, cols, y, x + 1) if x < cols
    search(rows, cols, y + 1, x) if y < rows
  end
end</code></pre>

Primero definimos una variable global `@paths` que va a almacenar el número de caminos existentes. Después definimos una función `search` que verifica si llegamos a la esquina inferior derecha, y si es así incrementa la variable `@paths`; de lo contrario, se llama recursivamente aumentando la fila o la columna siempre y cuando no se salga de los límites.

Esta solución funcionó al principio pero con los casos de prueba real era muy lenta y sacaba timeout (los casos reales tienen matrices de 500.000 filas x 500.000 columnas).

En la discusión del ejercicio encontré que esta es una permutación de `M - 1` movimientos hacia abajo y `N - 1` hacia la derecha, y que la fórmula es `(M + N - 2)! / (M - 1)! * (N - 1)!`. El problema es que el factorial con números muy grandes se vuelve lento. Este punto fue el más demorado y mi código final fue el siguiente:

<pre><code class="language-ruby">def extended_gcd(a, b)
  last_remainder, remainder = a.abs, b.abs
  x, last_x, y, last_y = 0, 1, 1, 0
  while remainder != 0
    last_remainder, (quotient, remainder) = remainder, last_remainder.divmod(remainder)
    x, last_x = last_x - quotient*x, x
    y, last_y = last_y - quotient*y, y
  end

  return last_x * (a < 0 ? -1 : 1)
end

MOD = 1000000007
@memo = {}
last = 1
3000000.times do |i|
   @memo[i] = last = (i * last) % MOD if i != 0
end

def fact(i)
    if @memo[i]
        @memo[i]
    elsif i == 0 || i == 1
        1
    else
        @memo[i] = (i * fact(i - 1)) % MOD
    end
end

def perm(n, m)
    numerator = fact(n + m)
    denominator = (fact(n) * fact(m)) % MOD
    numerator * extended_gcd(denominator, MOD)
end

rows, cols = gets.chomp.split(" ").map(&:to_i)
puts perm(rows - 1, cols - 1) % MOD</code></pre>

El problema es que como los números son tan grandes, es necesario trabajar con el módulo de los números, pero eso también complica la división (por eso esa función `extended_gcd` que todavía no entiendo muy bien). Otra optimización es precalcular los factoriales de los números del 1 a 3'000.000.

Fue un ejercicio complicado, pero bueno, mi nuevo ranking es **5,894**!
