---
layout: post
title:  "Lenguajes compilados e interpretados"
date:   2017-11-06 02:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/lights-exposure.jpeg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

C, C++ y Go son lenguajes de programación **compilados**. JavaScript, Python y Ruby son lenguajes **interpretados**. ¿Cuál es la diferencia y las ventajas/desventajas de un lenguaje compilado versus uno interpretado? En este post lo vamos a explicar.<!-- more -->

Tanto **compiladores** como **interpretadores** son programas que convierten el código que escribes a **lenguaje de máquina**.

**Lenguaje de máquina** son las instrucciones que entiende el computador (el procesador para ser más exactos) en código binario (unos y ceros).

<img src="/assets/images/code-to-machine.png" alt="Lenguaje de alto nivel a lenguaje de máquina" class="photo">

La principal diferencia entre un lenguaje compilado y uno interpretado es que el **lenguaje compilado** requiere un paso adicional antes de ser ejecutado, la compilación, que convierte el código que escribes a **lenguaje de máquina**. Un **lenguaje interpretado**, por otro lado, es convertido a **lenguaje de máquina** a medida que es ejecutado.

Ejemplos de **lenguajes compilados** incluyen C, C++, Java, Go y Rust, entre muchos otros. Ejemplos de **lenguajes interpretados** incluyen Ruby, Python y JavaScript, entre muchos otros. A todos estos lenguajes se les conoce como **lenguajes de alto nivel**.

Veamos un ejemplo de cada uno.

## Un ejemplo de lenguaje interpretado

Ruby es un lenguaje interpretado, así que podemos crear un archivo llamado `hola.rb` con el siguiente código, o cualquier código válido en Ruby (a esto se le conoce como el **código fuente**):

```ruby
puts "Hola Mundo"
```

Y ejecutarlo directamente ingresando el siguiente comando en la consola:

```shell
$ ruby hello.rb
```

Te debería aparecer debajo la cadena “Hola Mundo“.  Si quieres puedes cambiar el código fuente y volverlo a ejecutar.

## Un ejemplo de lenguaje compilado

Un lenguaje compilado tiene un paso adicional. Si tienes un compilador de C como <a href="https://gcc.gnu.org/" target="_blank">gcc</a> puedes crear un archivo llamado `hello.c`  con el siguiente contenido, o cualquier código válido en C:

```c
#include <stdio.h>

int main()
{
    printf("Hola Mundo");
    return 0;
}
```

Antes de ejecutarlo debes compilarlo con el siguiente comando:

```shell
$ gcc hello.c -o hello
```

Eso crea un archivo llamado `hello` (sin extensión) con el código de máquina (llamado el ejecutable) que puedes correr en la consola con el siguiente comando:

```shell
$ ./hello
```

Te debería aparecer la cadena de texto “Hola Mundo” debajo. Si necesitas cambiar el código fuente debes volverlo a compilar y ejecutarlo nuevamente.

## Ventajas y desventajas

En general, **el ciclo de desarrollo (el tiempo entre el momento en que escribes el código y lo pruebas) es más rápido en un lenguaje interpretado**. Eso se debe a que en lenguajes compilados es necesario realizar el proceso de compilación cada vez que cambias el código fuente, aunque con herramientas adicionales se puede automatizar.

Otra desventaja de un lenguaje compilado es que cuando compilas un programa debes crear ejecutables para cada uno de los sistemas operativos en los que lo vayas a utilizar. Un ejecutable creado para Linux no va a servir en Windows por ejemplo.

Sin embargo, **un lenguaje compilado es mucho más rápido que uno interpretado**. Esto se debe a que cuando es ejecutado ya se encuentra en código de máquina y eso también le permite hacer algunas optimizaciones que no son posibles con un lenguaje interpretado.

Además de la velocidad, otra desventaja de un lenguaje interpretado es que, para ser ejecutado, debes tener instalado el interpretador. Esto no es necesario en un lenguaje compilado que es convertido a lenguaje de máquina[^1].

En general, **un lenguaje compilado está optimizado para el momento de la ejecución**, aunque esto signifique una carga adicional para el programador. Por otro lado, **un lenguaje interpretado está optimizado para hacerle la vida más fácil al programador**, aunque eso signifique una carga adicional para la máquina.

## El caso de Java

Java es un lenguaje particular porque es compilado, pero es compilado a un lenguaje intermedio llamado <a href="https://en.wikipedia.org/wiki/Java_bytecode" target="_blank">bytecode</a>, que después es interpretado. Los creadores de Java querían crear un lenguaje compilado, pero que se pudiera ejecutar en cualquier sistema operativo y procesador sin necesidad de crear varios ejecutables.

Es por eso que si quieres ejecutar código Java debes instalar el <a href="https://java.com/es/download/" target="_blank">JRE (Java Runtime Environment)</a>, que es el programa que se encarga de interpretar el <a href="https://en.wikipedia.org/wiki/Java_bytecode" target="_blank">bytecode</a> al que son compilados los programas de Java.

Si deseas compilar código Java no es suficiente instalar el JRE, necesitas el <a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html" target="_blank">JDK (Java Development Kit)</a> que incluye el compilador, entre otras herramientas de desarrollo.

Otros lenguajes que están siguiendo este mismo modelo incluyen Elixir y C#, entre otros.

## Conclusión

Se puede decir que los lenguajes de alto nivel se pueden dividir en tres ramas: puramente compilados (C++, Go, etc.), parcialmente compilados  (Java, Elixir, etc.)  e interpretados (Ruby, JavaScript, etc.).

Sin embargo, la brecha entre estas ramas cada vez es menor. Hoy existen lenguajes compilados a lenguaje de máquina como Go y Rust que se inclinan cada vez más en la productividad y felicidad del programador mientras que los lenguajes interpretados son cada vez más rápidos en ejecución.

---

[^1]: Como vamos a ver adelante existen lenguajes compilados que no son convertidos directamente a lenguaje de máquina sino a un lenguaje intermedio.
