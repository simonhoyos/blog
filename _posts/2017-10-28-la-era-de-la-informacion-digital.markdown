---
layout: post
title:  "La era de la información digital"
date:   2017-10-28 02:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/digital-analog.jpeg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

¿Qué significa digital? ¿qué podemos considerar información? ¿cómo podemos medirla? ¿qué es un bit? En este post explicaremos por qué nos encontramos en la era de la información digital.<!-- more -->

Alrededor del año 3000 AEC, en Mesopotamia, los sumerios implementaron la primera forma de escritura, llamada escritura cuneiforme. Antes de la escritura, la única forma de almacenar y replicar información era utilizando nuestros cerebros, que **no** son particularmente buenos para esa tarea.

La escritura nos permitió almacenar texto, pero más adelante también fue posible almacenar música, imágenes y video en diferentes medios análogos como vinilos, fotografías y cintas magnéticas.

Hoy podemos almacenar toda esa información en nuestros computadores de forma digital. Pero ¿cómo es eso posible?

La respuesta es que en 1948 un personaje llamado <a href="https://es.wikipedia.org/wiki/Claude_Elwood_Shannon" target="_blank">Claude Shannon</a>, en su publicación <a href="https://es.wikipedia.org/wiki/Una_teor%C3%ADa_matem%C3%A1tica_de_la_comunicaci%C3%B3n" target="_blank">Una Teoría Matemática de la Comunicación</a> demostró cómo toda la información puede ser representada en números, sin importar de qué tipo sea (texto, audio, video, etc.). Su principal objetivo era demostrar que cualquier mensaje se puede transmitir utilizando números, pero su teoría también fue aplicada al almacenamiento de información.

Por ejemplo, una forma en que podemos representar texto con números (la palabra correcta es **codificar**) es asignándole a cada letra del alfabeto un número único: 1 para representar la A, 2 para la B, 26 para la Z, 0 para el espacio, etc.

También es posible representar audio, imágenes y video con técnicas similares, aunque un poco más sofisticadas: audio no son más que cambios de frecuencias en el tiempo, que también pueden ser representados con números. Una imagen puede ser separada en pixeles (cuadrados) y utilizar números para expresar el color de cada pixel.

Al proceso de convertir la información en números se le conoce como digitalización, y por eso se habla de información digital (está almacenada en dígitos).

La información digital tiene la ventaja de que es fácilmente replicable (y las réplicas son exactas), pero la desventaja es que se puede perder información en el proceso de digitalización, como cuando la música en vinilo pierde fidelidad al ser digitalizada o cuando una fotografía se ve pixelada por baja resolución.

## Dígitos binarios

El sistema numérico al que estamos acostumbrados es el decimal, que utiliza diez dígitos en cada posición: 0 a 9.

Pero existen otros sistemas numéricos como el binario, compuesto de dos dígitos en cada posición (0 y 1), o el octal, compuesto por 8 dígitos en cada posición (0 a 7), o el hexadecimal, compuesto de 16 dígitos en cada posición (se utilizan las letras A, B, C, D, E y F para representar los números del 10 al 15).

Cualquier número se puede convertir de un sistema a otro. La diferencia es que un sistema puede necesitar más o menos posiciones que otro para representar el mismo número. Por ejemplo, para representar el número doce necesitamos dos posiciones en el sistema decimal (12). En el sistema hexadecimal sólo necesitamos una posición (C) y en el sistema binario necesitamos cuatro posiciones (1100).

Aunque es posible crear un computador utilizando el sistema decimal (de hecho los primeros computadores utilizaban este sistema), es mucho mejor utilizar el sistema binario. La razón es que los computadores utilizan diferentes voltajes eléctricos para representar cada dígito. Entre más voltajes necesitemos, mayor el consumo de energía y mayor la probabilidad de error.

Es por eso que hoy en día almacenamos y transmitimos toda la información utilizando únicamente dos dígitos (0 y 1), más conocidos como **bits**, que es una contracción de las palabras **binary digits**.

## Medir la información

Una consecuencia interesante de representar la información en dígitos es que es posible medirla, sin importar si es texto, imágenes, audio o video.  Por ejemplo,  podemos decir que nuestro disco duro tiene 500 gigabytes ocupados, independiente si es texto, música, o cualquier otro tipo de información.

Por cierto, 8 bits forman un byte, 1000 bytes forman un kilobyte, 1000 kilobytes forman un megabyte, 1000 megabytes forman un gigabyte, y así sucesivamente. Siguen los terabytes, petabytes, exabytes, etc.  Un petabyte, por ejemplo, son 8000000000000000 bits (esos son 15 ceros).

También podemos medir la cantidad de información que estamos produciendo por alguna medida de tiempo, por ejemplo por día, hora, segundo, etc. Según <a href="http://www.new.vcloudnews.com/wp-content/uploads/2015/04/big-data-infographic1.png" target="_blank">esta infografía</a>, en 1992 estábamos generando 100GB de información digital al día, se calcula que para el 2018 estaremos generando 50 terabytes por segundo!

Nuestros descendientes no van a tener el problema que tenemos nosotros encontrando información de nuestros antepasados, al contrario, su problema es que van a tener demasiada información por analizar. Y esa es la razón por la que a esta era la llamamos **la era de la información digital**.

Otros posts relacionados:

* [¿Qué es código?](/que-es-codigo)
* [Aprende a leer en código binario](/aprende-a-leer-en-codigo-binario)
