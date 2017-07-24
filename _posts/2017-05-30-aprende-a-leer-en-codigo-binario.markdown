---
layout: post
title:  "Aprende a leer en código binario"
date:   2017-05-30 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/the-matrix.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

En dos años (2019) The Matrix cumplirá 20 años y aún sigue siendo de una de mis películas favoritas.<!-- more -->

En la escena final, el protagonista, Neo, aprende a "ver" el código, lo que le permite derrotar con facilidad a los **agentes**, programas del mundo digital cuidadosamente disfrazados de humanos.

En este post no aprenderás a "ver" en código pero sí a "**leer**" en código, en **código binario**.

Por ejemplo, lo más probable es que en este momento la siguiente cadena de unos y ceros no tenga el más mínimo significado para ti.

<pre><code class="language-none">010011010110000101101011011001010010000001101001011101000010000001010010011001010110000101101100</code></pre>

No te preocupes! Al final de este post habrás aprendido que ahí dice muy claro:

<p style="text-align: center"><strong>Make it Real</strong></p>

A cada uno de esos ceros y unos se les conoce como un **bit**.

El primer paso para aprender a leer en **código binario** es separar esos **bits** en grupos de **ocho**. A cada grupo de ocho **bits** se le conoce como un **byte**.

<pre style="word-break: break-word;"><code style="word-break: break-word;" class="language-none">01001101 01100001 01101011 01100101 00100000 01101001 01110100 00100000 01010010 01100101 01100001 01101100</code></pre>

Si cuentas los **bytes** te darás cuenta hay doce. Doce! El mismo número de letras y espacios que hay en la cadena **Make it Real**.

Cada uno de esos **bytes** representa un número en nuestro sistema decimal entre 0 a 255.

Por ejemplo, el primer **byte**, `01100001`, es el número decimal **77**.

La forma más rápida de convertir un **número binario** a un número decimal es con un <a href="http://www.binaryhexconverter.com/binary-to-decimal-converter" target="_blank">convertidor online</a>. Sin embargo, si quieres saber cómo se hace manualmente espera al final del post, no es difícil.

Si convertimos todos los **bytes** a decimal terminamos con los siguientes números:

<pre><code class="language-none">77 97 107 101 32 105 116 32 82 101 97 108</code></pre>

¿Qué hacemos ahora con esos números? Para eso tenemos que aprender sobre el que yo considero el estándar más importante en toda la historia de la computación.

## ASCII

ASCII (American Standard Code for Information Interchange) es un estándar desarrollado en los años 60's para representar texto utilizando números.

Algunos caracteres del estándar ASCII son los siguientes:

<table class="table">
  <thead>
    <tr>
      <th class="text-center">Carácter ASCII</th>
      <th class="text-center">Decimal</th>
      <th class="text-center">Binario</th>
    </tr>
  </thead>
  <tbody>
  	<tr>
      <td class="text-center">Espacio</td>
      <td class="text-center">32</td>
      <td class="text-center">00100000</td>
    </tr>
    <tr>
      <td class="text-center">1</td>
      <td class="text-center">49</td>
      <td class="text-center">00110001</td>
    </tr>
    <tr>
      <td class="text-center">A</td>
      <td class="text-center">65</td>
      <td class="text-center">01000001</td>
    </tr>
    <tr>
      <td class="text-center">a</td>
      <td class="text-center">97</td>
      <td class="text-center">01100001</td>
    </tr>
  </tbody>
</table>

En <a href="http://www.ascii-code.com/" target="_blank">este enlace</a> puedes encontrar la tabla completa.

Si reemplazamos cada uno de los números en decimal por su respectivo caracter en ASCII, encontraremos el significado del código:

<pre><code class="language-none">77 97 107 101 32 105 116 32 82 101 97 108
M  a  k   e      i   t      R  e   a  l</code></pre>

¡Eso es todo! Si quieres practicar intenta descifrar qué dice el siguiente código binario:

<pre><code class="language-none">01001000011011110110110001100001001000000100110101110101011011100110010001101111</code></pre>

Recuerda:

1. Partir en grupos de ocho (**bytes**).
2. Convertir cada **byte** en decimal.
3. Utilizar la <a href="http://www.ascii-code.com/" target="_blank">tabla ASCII</a> para convertir cada número a su respectivo caracter ASCII.

¿Qué tal esta otra?

<pre><code class="language-none">010101100110010101101110001000000111100100100000011000010111000001110010011001010110111001100100011001010010000001100011011011110110111000100000011011100110111101110011011011110111010001110010011011110111001100100000011001010110111000100000010011010110000101101011011001010010000001101001011101000010000001010010011001010110000101101100001000000011101000101001</code></pre>

## Convertir binario a decimal

Para convertir un número binario de ocho digitos (un **byte**) a decimal sólo tienes que seguir estos pasos.

Toma el número en binario, por ejemplo `00100000`, y escribe los siguientes números debajo de cada dígito:

<pre><code class="language-none">0   0   1   0   0   0   0   0
128 64  32  16  8   4   2   1</code></pre>

Empieza por el 1 a la derecha y vas duplicando siempre el último número.

Suma los números de **la fila de abajo** cuyo dígito encima sea 1. En este caso el único 1 está sobre 32 así que la respuesta es **32**.

Veamos otro ejemplo.

<pre><code class="language-none">0   0   1   0   0   1   1   0
128 64  32  16  8   4   2   1</code></pre>

Los dígitos sobre el 2, 4 y 32 son 1, así que sumamos esos números: 2 + 4 + 32 = **38**.
