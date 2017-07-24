---
layout: post
title:  "La línea de comandos"
date:   2015-04-07 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/matrix.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
redirect_from: "/2015/04/07/la-linea-de-comandos/"
---

También llamada "consola" o "terminal", **la línea de comandos** es una de las herramientas más importantes de todo programador. ¿Qué es? ¿Para qué sirve? ¿Por qué los programadores la usamos tanto? Esas son las preguntas que vamos a intentar responder en este post.<!-- more -->

<img src="/assets/images/cli.jpg" alt="Screenshots" class="photo">

<p class="photo-description">La línea de comandos. Los colores y la apariencia pueden variar según el sistema operativo y la personalización.</p>

En pocas palabras, **la línea de comandos** es un aplicación que nos permite escribir y ejecutar comandos sobre el sistema operativo sin necesidad de usar el mouse. (A los comandos también se les llama **aplicaciones de la línea de comandos**).

Algunos ejemplos de comandos que nos permiten navegar y manipular archivos y carpetas del sistema operativo son:

* `cd`: cambia la carpeta en donde estamos ubicados.
  <pre><code class="language-none">$ cd /Users/germanescobar/</code></pre>
* `mkdir`: crea una carpeta.
  <pre><code class="language-none">$ mkdir mi-super-carpeta</code></pre>
* `ls` (`dir` en Windows creo): lista las carpetas y los archivos.
  <pre><code class="language-none">$ ls</code></pre>
* `mv`: mueve una carpeta o archivo a otra ubicación.
  <pre><code class="language-none">$ mv archivo.txt /otra/ruta.txt</code></pre>
* `rm` (`del` en Windows creo): elimina una carpeta o archivo.
  <pre><code class="language-none">$ rm archivo.txt</code></pre>

Además de los comandos que trae por defecto el sistema operativo, también es posible crear nuestros propios comandos, e instalar y usar comandos de terceros.

## Anatomía de un comando

Todos los comandos se componen de:

* Un **nombre** con el que se invoca el comando.
* **Opciones** que modifican el comportamiento del comando. Son opcionales.
* **Argumentos** sobre los que actúa el comando. También opcionales.

<img src="/assets/images/cli-anatomy.jpg" alt="Screenshots" class="photo">

<p class="photo-description">Anatomía del comando <code>ls</code> que lista las carpetas y archivos (en este caso de la carpeta <code>/usr/local</code>). La opción <code>-a</code> muestra los archivos ocultos y <code>-l</code> muestra los detalles de cada carpeta/archivo.</p>

El comando `ls`, sin opciones ni argumentos, lista los contenidos de la carpeta en la que estamos ubicados como se muestra a continuación:

<pre><code class="language-none">$ ls
archivo1.txt archivo2.txt archivo3.txt</code></pre>

Si al comando `ls` le pasamos las opciones `-a` y `-l` podemos ver los archivos ocultos y los detalles de cada archivo. Además, le podemos pasar cualquier carpeta como argumento:

<pre><code class="language-none">$ ls -al /Users/germanescobar/mi-otra-carpeta
drwxr-xr-x    4 germanescobar  staff   136 Apr  5 17:40 .
drwxr-xr-x+ 165 germanescobar  staff  5610 Apr  5 17:40 ..
-rw-r--r--    1 germanescobar  staff     0 Apr  5 17:40 .archivo-oculto
-rw-r--r--    1 germanescobar  staff     0 Apr  5 17:40 archivo4.txt</code></pre>

Para ver las opciones y los argumentos que soporta un comando incluido en el sistema operativo (al menos en Linux/Mac) se usa el comando `man <nombre_del_comando>`. Para comandos hechos por terceros (p.e. `git`, `rails`, etc.), se usa `<nombre_del_comando> --help` o `<nombre_del_comando> -h`.

## Ventajas de usar la línea de comandos

¿Por qué los programadores usamos tanto la línea de comandos? Por tres razones principales:

<strong>1\. Los comandos se pueden anidar.</strong>

Por ejemplo, supongamos que queremos saber cuántos archivos de la carpeta actual fueron modificados en Abril 5. Podemos usar la siguiente secuencia de comandos (en Linux/Mac):

<pre><code class="language-none">$ ls -l | grep "Apr  5" | wc -l</code></pre>

Acepto que este comando es un poco críptico pero podemos desglosarlo en partes:

* `ls` es el comando que, con la opción `-l`, lista los archivos con la fecha de modificación.
* `grep` es el comando que nos permite encontrar las coincidencias.
* `wc` : es el comando que, con la opción `-l`, cuenta el número de líneas.

El caracter `|` (pipe) es el que nos permite **componer** los comandos. La salida de un comando se convierte en la entrada del siguiente. ¡Es muy poderoso!

<strong>2\. Es posible automatizar tareas repetitivas.</strong>

Otra razón por la que los programadores usamos **la línea de comandos** es la posibilidad de crear **scripts**, archivos de texto con secuencias de comandos para automatizar tareas repetitivas.

Por ejemplo, podemos guardar la secuencia de comandos del punto anterior en un archivo llamado `contar-archivos.sh`:

<pre style="margin-bottom: 20px;"><code class="bash">#!/bin/bash
ls -al | grep $1 | wc -l</code></pre>

La primera línea nos dice que este es un **script**. En la segunda línea hemos cambiado la fecha por la variable `$1`, que se refiere al primer argumento recibido. Podemos ejectuar el **script** de la siguiente forma:

<pre><code class="language-none">$ ./contar-archivos.sh "Apr  5"</code></pre>

<strong>3\. Somos más productivos.</strong>

Aprender a usar la **línea de comandos** toma tiempo, pero eventualmente los programadores somos más productivos que con la interfaz gráfica.

Primero, tomar el mouse y moverlo por la pantalla es un proceso lento y dañino para tus muñecas. Nada como mantener las manos sobre el teclado. Navegar y manipular archivos por **la línea de comandos**, por ejemplo, es mucho más rápido que por la interfaz gráfica después de memorizar los comandos y aprender que las rutas se autocompletan con la tecla `tab`.

Segundo, a diferencia de las aplicaciones gráficas, **la línea de comandos** consume muy pocos recursos del computador. Eso se traduce en productividad a la hora de crear y ejecutar comandos en nuestra máquina o en un servidor remoto (una tarea frecuente de los programadores).

Por último, al crear **scripts** o **aplicaciones** para **la línea de comandos**, no es necesario diseñar elementos gráficos como campos de texto, botones, etc. Eso nos permite concentrarnos en el problema, no en la decoración.

Estas razones son el motivo por el cuál hoy los programadores hacemos uso de **la línea de comandos**. No es porque nos <a href="http://hackertyper.net/" target="_blank">queramos ver más hackers</a> ;)

***

Si tienes un verdadero interés por la programación y quieres aprender a diseñar e implementar tus propias aplicaciones Web no dudes en [aplicar a Make it Real](/apply)!
