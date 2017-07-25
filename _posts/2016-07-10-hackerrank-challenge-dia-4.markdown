---
layout: post
title:  "HackerRank Challenge - Día 4"
date:   2016-07-10 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/landscape-toy-car.jpeg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

En esta serie de posts estoy documentando mi experiencia intentando entrar entre los mil mejores programadores de <a href="https://www.hackerrank.com" target="_blank">HackerRank</a>, un sitio para practicar ejercicios de programación.<!-- more -->

**Nota:** Si aún no lo has hecho, te recomiendo leer el <a href="/hackerrank-challenge-dia-1/">día 1</a> primero.

Ayer terminé en el ranking 5,894.

El ejercicio de hoy se llama <a href="https://www.hackerrank.com/challenges/special-multiple" target="_blank">Special Multiple</a>. Lo que nos piden es encontrar el menor número `X` compuesto de 9's y 0's únicamente, tal que `X` sea un múltiplo de un número `N`.

Por ejemplo, si `N` es 5, la respuesta es **90**, porque 90 es el menor número compuesto de 9's y 0's que es múltiplo de 5.

La clave de este ejercicio era entender la forma en que debíamos probar los números: 9, 90, 99, 900, etc., y darse cuenta que es la misma forma en que se incrementan los números binarios: 1, 10, 11, 100, etc.

El código que pasó la prueba es el siguiente:

<pre><code class="language-ruby">def test(digits, n)
  num = "9#{'0' * (digits - 1)}".to_i
  max = ("1" * (digits - 1)).to_i(2)
  i = 0
  while i <= max
    sum = i.to_s(2).rjust(digits - 1, "0").chars.map { |k| k.to_i * 9 }.join("").to_i
    if (num + sum) % n == 0
      return num + sum
    end
    i += 1
  end
end

n = gets.chomp.to_i
found = false
digits = 1
until found
  if result = test(digits, n)
    puts result
    found = true
  end
  digits += 1
end</code></pre>

Todavía se puede simplificar más, pero esto fue suficiente para pasar. Mi nuevo ranking es **4,813**!
