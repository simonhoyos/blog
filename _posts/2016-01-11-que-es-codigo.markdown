---
layout: post
title:  "¿Qué es código?"
date:   2016-01-11 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/code.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

Semáforos, automóviles, aviones, aeropuertos, satélites, el sistema financiero, gran parte de nuestras vidas depende del código que varias generaciones de programadores han escrito. <!-- more -->Pero ¿qué es código? ¿quién lo ejecuta y cómo? En este post vamos a hacer un recorrido histórico para entender cómo es que la electricidad se convierte en código y cómo surgieron los lenguajes de programación.

Empecemos.

Código son una "serie de instrucciones" que son ejecutadas automáticamente por un computador, por un procesador para ser más exactos. Pero, para realmente entender qué es código debemos primero entender de dónde surgen y cómo funcionan los computadores.

Los computadores existen porque en el siglo diecinueve descubrimos un fenómeno que ha cambiado nuestras vidas completamente: **el electromagnetismo**.

El electromagnetismo es la unión de dos fenómenos que se creían independientes: la electricidad y el magnetismo. Lo interesante del electromagnetismo es que nos permite mover componentes mecánicos utilizando electricidad. Un electroíman no es más que un cable enrollado en una barra metálica; cuando se pasa corriente sobre el cable, la barra se convierte en un imán. Puede que eso no parezca muy emocionante al principio, pero es la base de los ventiladores, licuadoras, lavadoras, timbres, y en general, todo lo que necesita un motor eléctrico para funcionar.

<img src="/assets/images/electromagnet.gif" alt="Electroimán" class="photo">

<p class="photo-description">El electroimán es un tipo de imán que se activa con una corriente eléctrica.</p>

Una de las primeras aplicaciones del electromagnetismo fue el telégrafo, inventado por <a href="https://es.wikipedia.org/wiki/Samuel_Morse" target="_blank">Samuel F. B. Morse</a> en 1836, que permitía enviar señales a larga distancia. Cuando se oprime un interruptor en uno de los extremos, se genera una corriente eléctrica a través de un cable que activa un electroimán al otro extremo[^1].

<img src="/assets/images/telegraph.jpg" alt="Telégrafo" class="photo">

<p class="photo-description">Un telégrafo.</p>

Pero enviar una señal no es suficiente para establecer una comunicación, se necesita también poder representar un mensaje. Y para eso Samuel Morse inventó lo que se conoce hoy como el código Morse.

<img src="/assets/images/morse-code.jpg" alt="Código Morse" class="photo">

<p class="photo-description">El código Morse. No sobra aprenderse el código de ayuda SOS.</p>

El código Morse es binario (solo tiene dos estados): punto o raya, o sonido largo y sonido corto. A cada letra y dígito se le asigna un código único (una combinación de puntos y rayas) y así podemos representar cualquier mensaje.

Paralelamente al descubrimiento y aplicación del electromagnetismo se estaba desarrollando un tema más teórico y abstracto: el <a href="https://es.wikipedia.org/wiki/%C3%81lgebra_de_Boole" target="_blank">algebra booleana</a>, que es una rama del algebra convencional pero en donde los valores de las variables son verdadero y falso únicamente. (No te preocupes si no te acuerdas del algebra convencional, no la necesitas para el resto de este post)

El <a href="https://es.wikipedia.org/wiki/%C3%81lgebra_de_Boole" target="_blank">algebra booleana</a> es lo que nos permite hacer operaciones lógicas (Y, O, negación, etc.). Y **con algunos trucos con operaciones lógicas es posible hacer operaciones aritméticas y almacenar información**, que es realmente lo único que sabe hacer un computador[^2].

Eventualmente el electromagnetismo y el algebra booleana se encontraron en lo que hoy conocemos como <a href="https://es.wikipedia.org/wiki/Puerta_l%C3%B3gica" target="_blank">compuertas lógicas</a>, que es un dispositivo físico que implementa alguna función del algebra booleana (p.e. Y, O, o negación).

<img src="/assets/images/logic-gate.png" alt="Compuerta lógica" class="photo">

<p class="photo-description">Diagrama de una compuerta lógica.</p>

Las primeras compuertas lógicas se fabricaron a partir de <a href="https://es.wikipedia.org/wiki/Electroim%C3%A1n" target="_blank">electroimanes</a>, pero después fueron reemplazados por <a href="https://es.wikipedia.org/wiki/V%C3%A1lvula_termoi%C3%B3nica" target="_blank">tubos de vacío</a> porque los electroimanes son muy ruidosos. El problema de los tubos de vacío es que ocupan mucho espacio y a mitad de los años 50's se empezaron a reemplazar con <a href="https://es.wikipedia.org/wiki/Transistor" target="_blank">transistores</a>.

<img src="/assets/images/transistor.jpg" alt="Transistor" class="photo">

<p class="photo-description">Un transistor. Tu computador tiene varios billones (miles de millones) de estos en forma diminuta (generalmente empaquetados en un chip).</p>

Los transistores (al igual que los tubos de vacío y electroimanes previamente) se cablean de tal forma en que es posible ejecutar algunas operaciones básicas: AND, OR, XOR, etc. Con eso se construyen circuitos más complejos, y con esos circuitos se construyen dispositivos electrónicos.

Uno de esos dispositivos es la **memoria** del computador, que no es más que un arreglo de compuertas lógicas cableadas de tal forma que nos permiten almacenar información (no confundas la memoria con el disco duro, la memoria guarda la información de forma temporal, lo que se conoce como memoria RAM). Para que te des una idea, para construir una memoria de 64Kb (64,000 bytes o 512,000 bits) se necesitan aproximadamente un par de millones de transistores. Para una memoria de 1GB (un smartphone moderno) se necesitan aproximadamente mil millones.

Otro dispositivo que se construye cableando compuertas lógicas es el **procesador**, que nos permite realizar operaciones básicas como guardar un valor en alguna posición del la **memoria**, saltar a otra posición de memoria, hacer un AND o un OR entre posiciones de memoria, sumar los valores de dos posiciones de memoria, entre otras. Las operaciones exactas las define el fabricante del procesador y a cada una le asigna un **código binario** (p.e. 10011). Un procesador moderno se construye a partir de algunos billones de transistores.

Pero un computador no está hecho solo de un procesador y una memoria. A un computador se le puede conectar un teclado, disco duro, tarjeta de red, micrófono, parlantes, impresora, etc. Lo interesante es que el procesador trata todos estos dispositivos por igual, es decir, el procesador envía y recibe información del dispositivo como si fuera una memoria. Es responsabilidad del software (del que vamos a hablar en un momento) enviar la información correcta e interpretar la información que recibe del dispositivo.

Es por eso que a la memoria y a cualquier otro dispositivo que se pueda conectar con un computador se le conoce como un **dispositivo de E/S (Entrada/Salida)**.

Es un diseño muy simple e ingenioso. El procesador es literalmente el computador. Pero el procesador sin (al menos) una memoria y algún otro dispositivo de E/S es inútil. Precisamente el objetivo de los computadores es que puedan interactuar con el mundo real para hacer cosas interesantes como transmitir video, calcular rutas, adivinar qué canción está sonando, cambiar el termostato según la hora del día, etc.

## Software

En la memoria podemos cargar alguna combinación de operaciones del procesador (utilizando los códigos binarios) y luego pedirle al procesador que las ejecute secuencialmente. Eso es lo que llamamos **software**. Veamos un ejemplo.

El Altair 8800 fue el primer computador de escritorio. Tenía un dispositivo de **entrada** (los interruptores) y uno de **salida** (los bombillos).

<img src="/assets/images/altair8800.jpg" alt="Altair" class="photo">

<p class="photo-description">Altair 8800. Uno de los primeros computadores de escritorio.</p>

A través de los interruptores se ingresaban las instrucciones en representación binaria. Un interruptor representaba un bit (arriba 1, abajo 0). Cada instrucción ocupaba 3 direcciones de memoria y cada dirección ocupa un byte (ocho bits). Ingresar las instrucciones era un proceso bastante engorroso, pero aún así se lograban hacer <a href="https://www.youtube.com/watch?v=ZKeiQ8e18QY" target="_blank">cosas interesantes</a>.

A las instrucciones en forma binaria (1's y 0's) se les llama **código de máquina** y es lo único que entiende el procesador.

<div class="well">La realidad es que los procesadores utilizan rangos de voltajes para diferenciar entre los dos estados (1 y 0).</div>

Programar en ese entonces consistía de tres pasos:

1. El programa se escribía en papel utilizando las operaciones del procesador (p.e. Move, Store, Add, etc.).
2. Las operaciones se traducían a código binario (utilizando el manual del procesador) y se introducían utilizando los interruptores.
3. Se ejecutaba el programa.

Un programa solo funcionaba para un tipo de procesador específico porque las operaciones (con sus respectivos código) eran diferentes entre los tipos de procesadores (así fueran del mismo fabricante).

Los primeros procesadores ofrecían muy pocas operaciones, por ejemplo no permitían multiplicar dos números directamente. Pero **todo lo que no hace el procesador por hardware, se puede hacer con software**. A medida que los procesadores evolucionaban, incluían más operaciones por hardware, que se ejecutan mucho más rápido que por software.

Eventualmente los interruptores fueron reemplazados por teclados y los bombillos por impresoras y pantallas (aunque puedes pensar en una pantalla como la unión de muchos bombillos).

## El lenguaje ensamblador

Con la llegada de los teclados ya no era necesario ingresar el **código de máquina** directamente. Se podía crear un archivo de texto con el nombre de las instrucciones como se hacía en papel. A esto se le llama el **código fuente**. Un programa luego convierte el código fuente a **código de máquina** (a 1's y 0's).

De esa forma se inventó el primer lenguaje de programación, que era simplemente una representación uno a uno de las operaciones que podía hacer el procesador. Se le llamó **lenguaje ensamblador** (assembly language) y al programa que lo convertía a código de máquina se le llamó el **ensamblador** (assembler).

<img src="/assets/images/assembler.gif" alt="Lenguaje ensamblador" class="photo">

<p class="photo-description">Lenguaje ensamblador. <a href="http://csecitsurepasses.weebly.com/distinguish-between-low-level-and-highlevel-programming-languages.html" target="_blank">Crédito</a>.</p>

Pero para poder escribir archivos de texto con código (programas), primero fue necesario que pudieramos representar texto y crear un sistema operativo.

## Representando texto

Para representar texto se necesitaba desarrollar un sistema en donde cada carácter (letra, signo de puntuación y dígito) correspondiera a un código único, como el código Morse.

El primer problema era definir un número de bits para representar cada carácter.

Desafortunadamente al principio solo se tuvo en cuenta el idioma Inglés, que no tiene acentos, y se decidió que con 7 bits era suficiente. 7 bits nos permite representar 128 caracteres. Se desarrolló un estándar llamado <a href="https://es.wikipedia.org/wiki/ASCII" target="_blank">ASCII</a> (American Standard Code for Information Interchange), y es quizá uno de los estándares más importantes en la historia de la computación.

Algunos caracteres del estándar ASCII son los siguientes:

<table class="table">
  <thead>
    <tr>
      <th class="text-center">Carácter ASCII</th>
      <th class="text-center">Binario</th>
      <th class="text-center">Decimal</th>
      <th class="text-center">Hexadecimal</th>
    </tr>
  </thead>
  <tbody>
  	<tr>
      <td class="text-center">Espacio</td>
      <td class="text-center">0100000</td>
      <td class="text-center">32</td>
      <td class="text-center">20</td>
    </tr>
    <tr>
      <td class="text-center">1</td>
      <td class="text-center">0110001</td>
      <td class="text-center">49</td>
      <td class="text-center">31</td>
    </tr>
    <tr>
      <td class="text-center">A</td>
      <td class="text-center">1000001</td>
      <td class="text-center">65</td>
      <td class="text-center">41</td>
    </tr>
    <tr>
      <td class="text-center">a</td>
      <td class="text-center">1100001</td>
      <td class="text-center">97</td>
      <td class="text-center">61</td>
    </tr>
  </tbody>
</table>

En <a href="http://www.ascii-code.com/" target="_blank">este enlace</a> puedes encontrar la tabla completa. En un momento te darás cuenta por qué incluí el código hexadecimal[^4] para cada carácter.

Aunque ASCII solo necesitaba 7 bits, la mayoría de computadores almacenan la información en bytes (grupos de 8 bits). Eso permitió que se definieran una multitud de extensiones a ASCII, unas bien diseñadas, otras no tanto.

La consecuencia es que hoy la mayor�a de programadores han experimentado en alg�n momento problemas con la codificaci�n debido a esta fragmentaci�n.

En 1988 un grupo de compañías se reunieron y desarrollaron una alternativa a ASCII llamada <a href="https://es.wikipedia.org/wiki/Unicode" target="_blank">Unicode</a>, que permite representar texto en la mayoría de sistemas escritos, incluyendo <a href="https://es.wikipedia.org/wiki/Idioma_klingon" target="_blank">Klingon</a> y los caracteres <a href="https://es.wikipedia.org/wiki/Emoji" target="_blank">Emoji</a>. Cada carácter en Unicode tiene un código llamado code point y actualmente hay más de 120,000 caracteres codificados (con espacio para extenderse a más de un millón). Un code point se escribe en formato hexadecimal con el prefijo `U+`. Por ejemplo, el code point para el carácter A es `U+0041` (recuerda que en ASCII es 41), de modo que Unicode es compatible con ASCII.

Lo interesante de Unicode es que puede ser implementado en diferentes <a href="https://es.wikipedia.org/wiki/Codificaci%C3%B3n_de_caracteres" target="_blank">codificaciones de caracteres</a>, siendo <a href="" target="_blank">UTF-8</a> el más popular actualmente, que usa un byte para los caracteres ASCII, y hasta 4 bytes para los demás (es de longitud variable).

## Sistemas operativos

Cuando un procesador se enciende o se reinicia, empieza a ejecutar código de máquina en una dirección particular de la memoria, generalmente en la primera posición 0000h (la h es de hexadecimal)[^5].

**Un sistema operativo no es más que un programa que nos facilita la vida desde el punto de vista de usuarios y programadores**. La memoria, por ejemplo, no es más que información secuencial en forma binaria. Pero el sistema operativo se encarga de manejar esa información y de exponerla como un sistema de archivos. Esa es la razón por la cuál hoy no manipulas la memoria directamente, manipulas carpetas y archivos.

La segunda tarea del sistema operativo es dividir las aplicaciones en procesos y decidir cuándo un proceso tiene "permiso" de utilizar el procesador. A cada proceso también le asigna cierta memoria.

La tercera tarea del sistema operativo es actuar como intermediario entre el hardware y los procesos.

Por último, el sistema operativo expone una funcionalidad para que los procesos puedan interactuar con él.

El sistema operativo más importante de la antiguedad (mediados de los 70's y principios de los 80's) entre los computadores personales fue CP/M. En los 80's fue modificado para usarse en un IBM PC, pero poco a poco fue desapareciendo debido a que IBM eligió Microsoft DOS, que después evolucionó en lo que hoy conocemos como Microsoft Windows.

Al principio, los sistemas operativos únicamente permitían que se interactuara con ellos a través de un lenguaje de programación o a través de la línea de comandos (un programa que permitía al usuario ingresar comandos para realizar diferentes tareas como manipular archivos y correr programas). Después surgieron las interfaces gráficas que es lo que la mayoría de personas conoce hoy en día.

## Lenguajes de alto nivel

Escribir código en lenguaje ensamblador es como almorzar con un palillo. Es extremadamente lento, repetitivo y sujeto a errores. Al lenguaje ensamblador se le llama **de bajo nivel** por su cercanía al código de máquina.

Por otro lado, un **lenguaje de alto nivel** es mucho más fácil de aprender, entender y es mucho más conciso que el lenguaje ensamblador. También permite reutilizar código más fácilmente. Alrededor de los lenguajes de alto nivel se crean comunidades de programadores que comparten código (en forma de librerías), se ayudan y mejoran el lenguaje entre todos.

Algunos lenguajes de alto nivel necesitan un **compilador** para convertir los programas a código de máquina. Un **compilador** es como un ensamblador pero más sofisticado porque generalmente traduce una línea de código de alto nivel a muchas en código de máquina. Escribir un compilador no es fácil y se han escrito innumerables libros sobre el tema.

Otros lenguajes usan **interpretadorers**, programas que van traduciendo el **código fuente** a **código de máquina** a medida que se van ejecutando. Estos lenguajes son más lentos que los lenguajes compilados, pero evitan la compilación cada vez que se hace un cambio en el **código fuente**. La mayoría de lenguajes interpretados también pueden ser compilados cuando se necesita mayor rendimiento, aunque no es muy común que se haga.

Entre los primeros lenguajes de alto nivel se encuentran <a href="https://es.wikipedia.org/wiki/Fortran" target="_blank">FORTRAN</a>, <a href="https://es.wikipedia.org/wiki/COBOL" target="_blank">COBOL</a>, <a href="https://es.wikipedia.org/wiki/ALGOL" target="_blank">ALGOL</a> y <a href="https://es.wikipedia.org/wiki/Pascal_(lenguaje_de_programaci%C3%B3n)" target="_blank">Pascal</a>. Existen muchos más pero estos fueron muy populares en su momento. Y después está <a href="https://es.wikipedia.org/wiki/C_(lenguaje_de_programaci%C3%B3n)" target="_blank">C</a>, que es quizá el lenguaje más popular de todos los tiempos.

<a href="https://es.wikipedia.org/wiki/C_(lenguaje_de_programaci%C3%B3n)" target="_blank">C</a> fue inventado entre 1969 y 1973 por <a href="https://es.wikipedia.org/wiki/Dennis_Ritchie" target="_blank">Dennis Ritchie</a> en <a href="https://en.wikipedia.org/wiki/Bell_Labs" target="_blank">Bell Labs</a> para crear el sistema operativo <a href="https://es.wikipedia.org/wiki/Unix" target="_blank">UNIX</a>, que fue uno de los primeros sistemas operativos portables entre diferentes procesadores (la mayoría de sistemas operativos se escribían para un tipo de procesador específico). <a href="https://es.wikipedia.org/wiki/C_(lenguaje_de_programaci%C3%B3n)" target="_blank">C</a> es catalogado como un lenguaje de ensamblador de alto nivel porque varias de sus instrucciones imitan algunos grupos de operaciones del procesador y es posible manipular la memoria directamente.

Para un programador que ha iniciado su carrera en los últimos 15 años, C es prácticamente un lenguaje de bajo nivel. De hecho  la mayoría de los lenguajes de alto nivel modernos están escritos en C (p.e. Java, PHP, Ruby, Python, etc.).

## La explosión de los lenguajes de programación

Cuando empecé a programar a finales de los 90’s el lenguaje de moda era Java. La razón es que los programas escritos en Java podían correr en diferentes plataformas y sistemas operativos sin necesidad de tener que compilar individualmente para cada una, como se debía hacer con cualquier otro lenguaje.

Para construir aplicaciones Web, PHP era muy popular en ese momento (y lo sigue siendo). Java se fortaleció en el mundo corporativo y sigue siendo muy popular.

Pero desde el 2005 se ha producido una explosión de lenguajes: Ruby, Python, JavaScript, Objective-C, Swift, Go, C#, etc. Algunos de estos lenguajes existían desde hace muchos años atrás pero empezaron a ser usados masivamente. Otros, como JavaScript y Objective-C, se volvieron populares por las plataformas en que trabajan: JavaScript es la única opción si estás creando algo dinámico en el navegador y Objective-C (ahora Swift) para crear aplicaciones para el iPhone.

Aunque la sintaxis (las reglas del lenguaje) varía entre estos lenguajes, la realidad es que al final todos se deben convertir a lenguaje de máquina de una forma u otra.

¿Por qué no nos ponemos de acuerdo y utilizamos todos el mismo lenguaje? La respuesta es que aún no existe el lenguaje ideal, y quizá nunca vaya a existir. Cada lenguaje tiene sus ventajas y desventajas, y es un campo que sigue en constante evolución: seguimos probando nuevos paradigmas y estilos de programación. Otras veces no tenemos opción--como con JavaScript. Pero una de las razones principales es que ya existe una gran cantidad de código que las empresas necesitan seguir manteniendo y evolucionando. Es un tema complejo.

## ¿Por qué es tan difícil (aprender a) programar?

Definitivamente hoy es más fácil (aprender a) programar que hace 30 años. Hoy es posible encontrar respuesta a la mayoría de problemas de programación en Internet. El problema son las abstracciones y todas las posibilidades que existen.

Cuando escribes una aplicación Web, por ejemplo, no tienes que reinventar el sistema operativo o definir cómo se va a comunicar el navegador con el servidor. Es como manejar un automóvil, no necesitas conocer cómo funciona el sistema de inyección hidráulica o el árbol de levas; lo único que necesitas saber es cómo funcionan los pedales, la transmisión, el volante, etc. Algo muy parecido pasa con la programación.

Cuando escribes y ejecutas un programa (en cualquier lenguaje), varias capas de abstracción estan involucradas en el proceso: las librerías que utilizaste en tu programa, el interpretador (si es un lenguaje interpretado), el sistema operativo, entre otros.

Muchas cosas pueden salir mal. Quizá una de las librerías que utilizaste tiene un problema en el sistema operativo en el que estás ejecutando el programa, o cuando escribiste tu programa esperabas que un archivo estuviese en una ruta determinada pero ese archivo lo cambiaron en la nueva versión.

La programación es caótica, muy caótica. Pensándolo bien, es increíble que algo funcione.

Cualquier persona puede escribir un programa o una librería, y quizá muchos otros lo utilicen sin ninguna garantía. Eso genera un desarrollo increíblemente ágil y exponencial, pero caótico. Es diferente a los automóviles, que es una industria fuertemente regulada.

Pero, para terminar, la analogía con el automóvil es buena. Un automóvil lo puedes utilizar para transportarte de un sitio a otro, o simplemente por diversión. Lo mismo ocurre con la programación. Y al igual que con la conducción, para programar lo único que necesitas es practicar.

---

### Notas


[^1]: Al principio un boligrafo descendía sobre un rollo de papel que estaba en constante movimiento, pero los operadores rápidamente aprendieron a traducir el mensaje a partir del sonido que hacía el boligrafo sobre el papel.

[^2]: No vamos a entrar en los detalles de cómo es que eso es posible, pero si quieres conocerlos te recomiendo el siguiente libro: <a href="http://www.amazon.com/Code-Language-Computer-Developer-Practices-ebook/dp/B00JDMPOK2/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=" target="_blank">Code: The Hidden Language of Computer Hardware and Software</a>

[^4]: El sistema hexadecimal permite representar un byte con dos caracteres en vez de ocho como ocurre en sistema binario. Un byte, en sistema binario, va desde 00000000 a 11111111. El equivalente en hexadecimal es 00 a FF. Las direcciones de memoria y los colores en formato RGB, entre otros, se escriben generalmente en sistema hexadecimal para ahorrar espacio.

[^5]: Estamos asumiendo que la memoria tiene máximo 65,535 direcciones, cada una de un byte, es decir, una memoria de 64k. Recuerda que cada dos posiciones hexadecimales representan un byte (8 bits).

[^6]: Eso sin tener en cuenta el factor del gusto de la persona. A algunos les gustan los lenguajes de programación que permiten expresar un programa en pocas líneas de código, otros prefieren la claridad sobre el número de líneas.
