---
layout: post
title:  "HackerRank Challenge - Día 6"
date:   2016-07-13 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/landscape-mountains-nature-rocks.jpeg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

En esta serie de posts estoy documentando mi experiencia intentando entrar entre los mil mejores programadores de <a href="https://www.hackerrank.com" target="_blank">HackerRank</a>, un sitio para practicar ejercicios de programación.<!-- more -->

**Nota:** Si aún no lo has hecho, te recomiendo leer el <a href="/hackerrank-challenge-dia-1/">día 1</a> primero.

Ayer terminé en el ranking 3,984.

El ejercicio de hoy se llama <a href="https://www.hackerrank.com/challenges/jim-and-the-jokes" target="_blank">Jim and the Jokes</a>. El objetivo era encontrar parejas que correspondieran al mismo número en diferentes bases. Entonces `25 base 10` (25 en decimal) es el mismo número que `31 base 8` (31 en octal).

Este ejercicio casi me saca canas. Me tomó mucho tiempo solucionarlo, pero hubo un momento en que se convirtió en un reto personal. Hubo dos problemas que me atrasaron bastante. El primero es que si hay dos números iguales con la misma base también se cuentan como una pareja. El segundo es que el método `to_i` de Ruby, que convierte de un string a un integer en cualquier base, se comporta de una manera particular. Si el string no se puede convertir debería lanzar una excepción (o eso es lo que yo esperaría). Sin embargo, lo que realmente hace es retornar los números que haya podido convertir. Por ejemplo, `29 base 4` es un número inválido proque el `9` no puede convertirse a base 4, pero `"29.to_i(4)"` retorna `2` :S.

El código final fue el siguiente:

<pre><code class="language-ruby">def is_valid(num, base)
  base.to_i > 1 && num.chars.all? { |c| c.to_i < base.to_i }
end

@memo = {}
cases = gets.chomp.to_i
cases.times do
  base, num = gets.chomp.split(" ")
  if is_valid(num, base)
    num_base_10 = num.to_i(base.to_i)
    if @memo[num_base_10]
      @memo[num_base_10][:acc] += @memo[num_base_10][:length]
      @memo[num_base_10][:length] += 1
    else
      @memo[num_base_10] = { acc: 0, length: 1 }
    end
  end
end

puts @memo.values.inject(0) { |sum, v| sum += v[:acc] }</code></pre>

Mi nuevo ranking es **3361**!, aunque cada vez es más difícil mejorarlo :S.
