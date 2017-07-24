---
layout: post
title:  "Git y Github"
date:   2014-10-18 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/github-logo.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
redirect_from: "/2014/10/18/git-y-github/"
---

Git es un **sistema de control de versiones distribuido**, diseñado y desarrollado inicialmente por <a href="http://en.wikipedia.org/wiki/Linus_Torvalds" target="_blank">Linus Torvalds</a> en el 2005 cuando <a href="http://en.wikipedia.org/wiki/BitKeeper" target="_blank">BitKeeper</a>, el sistema de control de versiones que utilizaban para el desarrollo de Linux, cambiara su licencia y no permitiera su uso libre.<!-- more --> En este post vamos a explicar qué es **Git** y cómo se relaciona con **<a href="http://github.com/" target="_blank">Github</a>**.

**Git**, y en general un sistema de control de versiones, tiene dos objetivos principales:

* Guardar el historial de cambios sobre el código de un proyecto.
* Permitir a varias personas contribuir simultáneamente sobre un mismo proyecto.

Para guardar el historial de cambios podríamos crear una nueva carpeta en nuestro computador y copiar todo el proyecto cada vez que quisiéramos hacer un cambio. Eso no es muy diferente a lo que hace **Git** por debajo cada vez que se hace un commit.

<div class="well">
  <h3>¿Qué es un commit?</h3>
  Un commit es una fotografía (snapshot) de tu proyecto en un momento determinado. Un commit tiene una fecha y hora, un mensaje que describe los cambios que se hicieron desde el último commit, y un autor.
</div>

**Git es una aplicación de consola con varios subcomandos** que nos permiten, entre otras cosas, hacer commits, ver los cambios a los que no les hemos hecho commit, listar los commits, y ver la diferencia entre commits.

Después de que <a href="http://git-scm.com/book/en/Getting-Started-Installing-Git" target="_blank">has instalado Git</a>, puedes abrir una consola y ejecutar el comando `git` sin parámetros. Verás el uso general del comando y algunos de los subcomandos más utilizados:

<pre><code class="language-none">germanescobar ~$ git
usage: git [--version] [--help] [-C &lt;path&gt;] [-c name=value]
           [--exec-path[=&lt;path&gt;]] [--html-path] [--man-path] [--info-path]
           [-p|--paginate|--no-pager] [--no-replace-objects] [--bare]
           [--git-dir=&lt;path&gt;] [--work-tree=&lt;path&gt;] [--namespace=&lt;name&gt;]
           &lt;command&gt; [&lt;args&gt;]

The most commonly used git commands are:
   add        Add file contents to the index
   bisect     Find by binary search the change that introduced a bug
   branch     List, create, or delete branches
   ...

&#39;git help -a&#39; and &#39;git help -g&#39; lists available subcommands and some
concept guides. See &#39;git help &lt;command&gt;&#39; or &#39;git help &lt;concept&gt;&#39;
to read about a specific subcommand or concept.</code></pre>

## ¿Cómo utilizar Git?

El flujo más simple de trabajo con **Git** es el siguiente:

**1\.** Inicializa el repositorio (esto va a crear una carpeta oculta `.git` dentro del proyecto):
<pre><code class="language-none">$ git init</code></pre>
**2\.** Trabaja en el código: crea, modifica y elimina archivos.

**3\.** Selecciona los cambios que vas a incluir en el siguiente commit:
<pre><code class="language-none">$ git add index.html
$ git add style.css</code></pre>
Puedes incluir todos los cambios con el siguiente comando:
<pre><code class="language-none">$ git add -A</code></pre>
**4\.** Haz commit:
<pre><code class="language-none">$ git commit -m "El mensaje del commit"</code></pre>
**5\.** Repite los pasos 2, 3, y 4.

<div class="well">
  <h3>¿Cada cuánto hacer commit?</h3>
  Puedes hacer commit tan seguido como quieras. No hay una regla de oro. Mi sugerencia es agrupar un número de cambios que puedas describir en una línea y que tengan sentido en el historial del código. Puede ser un único cambio en un archivo, o múltiples cambios en varios archivos.
</div>

<div class="well">
  <h3>¿Cómo escribir un mensaje de commit?</h3>
  La primera línea debe tener 50 caracteres, o menos, y es obligatoria. La pregunta que debería contestar la primera línea es: ¿qué hace este commit? Ejemplos de respuestas: "Cambia el tamaño de la fuente a #666" o "Crea el modelo User".<br><br>

  Opcionalmente, después de la primera línea, va una línea en blanco y más detalles de los cambios que incluye el commit: efectos secundarios, explicación de por qué se está haciendo el cambio, etc.
</div>

## Github

Los pasos que describimos anteriormente almacenan el historial del código localmente en la carpeta oculta `.git` dentro de la raiz de tu proyecto (repositorio local). **Si pierdes tu computador, pierdes tu código y su historial**.

Podrías hacerle backup, o sincronizarlo en Dropbox (o algún servicio similar), pero si quieres que varias personas trabajen sobre el mismo proyecto, eso no va a funcionar.

<a href="http://github.com/" target="_blank">Github</a> nos brinda la posibilidad de crear un repositorio remoto (una réplica de nuestro repositorio local) en el que varios desarrolladores pueden colaborar, con herramientas que facilitan esa colaboración. <a href="http://github.com/" target="_blank">Github</a> es gratis para proyectos Open Source, pero si quieres tener repositorios privados, debes pagar una mensualidad (los planes empiezan en 7 dólares al mes).

**El primer paso para trabajar con <a href="http://github.com/" target="_blank">Github</a> es registrarte, crear un repositorio y seguir las instrucciones que aparecen en la pantalla**. Puedes empezar con un nuevo repositorio, o subir un repositorio local.

Recuerda que al hacer commit en tu repositorio local, esos cambios no se ven reflejados automáticamente en el repositorio remoto. Debes hacer `git push` para subir tus commits locales al repositorio remoto y `git pull` para traer los commits que otros han subido a tu repositorio local.

Por ejemplo, para actualizar tu repositorio local con los cambios que han hecho otros desarrolladores en el repositorio remoto puedes ejecutar el siguiente comando:

<pre><code class="language-none">$ git pull</code></pre>

Por otro lado, para subir los commits locales que aún no existen en el repositorio remoto puedes ejecutar un comando similar al siguiente (los parámetros pueden variar según el repositorio y la rama que quieras subir):

<pre><code class="language-none">$ git push origin master</code></pre>

## Flujos de trabajo

Una ventaja/desventaja de Git es que es muy flexible y no hay una única forma de usarlo. En la sección **¿Cómo utilizar Git?** describimos el flujo de trabajo más simple, pero no necesariamente el más recomendado. La razón es que **Git es muy estricto en el orden de los commits** y ese flujo de trabajo puede crear conflictos si varios están trabajando sobre el mismo proyecto (al hacer push).

Para eso existen las ramas (branches).

<div class="well">
  <h3>¿Qué es un branch?</h3>
  Las ramas (branches) en Git son una poderosa herramienta que les permite a los miembros de un equipo trabajar en paralelo sobre un mismo proyecto y hacer experimientos que pueden eventualmente integrarse a la rama principal (master).
</div>

Hay varias formas de utilizar branches para el trabajo en equipo y cada empresa lo hace diferente. Si quieres conocer el flujo que utilizamos en <a href="http://www.elibom.com/" target="_blank">elibom.com</a> haz <a href="http://germanescobar.net/2012/12/23/git-workflow-at-elibom/" target="_blank">click acá</a>.

## Más recursos

* Linus Torvalds explica Git <a href="https://www.youtube.com/watch?v=4XpnKHJAok8" target="_blank">en este video del 2007</a>, es largo pero vale la pena verlo.
* Un <a href="https://try.github.io/" target="_blank">tutorial interactivo</a> de Git.
* <a href="http://git-scm.com/book" target="_blank">El libro "oficial" de Git</a> escrito por Scott Chacon.
