---
layout: post
title:  "Manejadores de versiones para Ruby"
date:   2016-10-16 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/ruby-version-management.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

Un manejador de versiones para Ruby te permite instalar varias versiones de Ruby en tu máquina y cambiar entre versiones fácilmente.<!-- more -->

Pero ¿para qué quisiéramos tener instaladas varias versiones de Ruby?

Existen dos razones. La primera es que, si tienes proyectos en producción, es una buena práctica utilizar la misma versión de Ruby en tu ambiente local. Por ejemplo, si uno de tus proyectos utiliza la versión <code>2.2.1</code> en producción y otro proyecto la <code>2.3.1</code>, deberías poder cambiar entre esas dos versiones fácilmente en tu ambiente local dependiendo del proyecto en el que vayas a trabajar.

La segunda razón es poder probar diferentes versiones de Ruby sin necesidad de estar desinstalando y reinstalando versiones, por ejemplo para probar tus proyectos con otras versiones, o simplemente para jugar con las nuevas características de la última versión.

Existen dos manejadores de versiones que son muy populares y en los que nos vamos a enfocar en este post: <a href="https://rvm.io/" target="_blank">RVM</a> (Ruby Version Manager) y <a href="https://github.com/rbenv/rbenv" target="_blank">rbenv</a>.

## RVM

<a href="https://rvm.io/" target="_blank">RVM</a> fue el primer manejador de versiones de Ruby y es el que personalmente uso. Para instalarlo en Linux y MacOS sigue <a href="https://rvm.io/rvm/install" target="_blank">estas instrucciones</a> (para Windows utiliza <a href="http://blog.developwithpassion.com/2012/03/30/installing-rvm-with-cygwin-on-windows/" target="_blank">este otro enlace</a>).

Los comandos principales de <a href="https://rvm.io/" target="_blank">RVM</a> son:

* <code>rvm list</code>: lista todas las versiones de Ruby instaladas en tu máquina.
* <code>rvm install [version_de_ruby]</code>: instala una nueva versión de Ruby. Por ejemplo:
  <pre><code class="language-none">$ rvm install 2.3.1</code></pre>
* <code>rvm use [version_de_ruby]</code>: utiliza la versión que especifiques de Ruby. Por ejemplo:
  <pre><code class="language-none">$ rvm use 2.3.1</code></pre>

Para definir la versión por defecto que se carga cuando abres la línea de comandos ejecuta <code>rvm use --default [version_de_ruby]</code>. Por ejemplo, para usar y definir por defecto la versión <code>2.3.1</code> utiliza el siguiente comando:

<pre><code class="language-none">$ rvm use --default 2.3.1</code></pre>

Veamos algunos de estos comandos en acción. Empecemos por <code>rvm list</code> que lista las versiones que están instaladas en nuestro sistema:

<pre><code class="language-none">$ rvm list

   ruby-2.2.0 [ x86_64 ]
   ruby-2.2.1 [ x86_64 ]
 * ruby-2.3.0 [ x86_64 ]
=> ruby-2.3.1 [ x86_64 ]

# => - current
# =* - current && default
#  * - default</code></pre>

En este caso tenemos 4 versiones de Ruby instaladas. La que estamos usando actualmente se identifica por el prefijo <code>=></code>, en este caso la <code>2.3.1</code>, y la que se utiliza por defecto se identifica por el prefijo <code>*</code>, en este caso la <code>2.3.0</code>. Podemos verificar que la versión que estamos usando es efectivamente la <code>2.3.1</code>:

<pre><code class="language-none">$ ruby -v
ruby 2.3.1p112 (2016-04-26 revision 54768) [x86_64-darwin15]</code></pre>

Cambiemos ahora a la versión <code>2.2.1</code>:

<pre><code class="language-none">$ rvm use 2.2.1
Using /Users/germanescobar/.rvm/gems/ruby-2.2.1

$ ruby -v
ruby 2.2.1p85 (2015-02-26 revision 49769) [x86_64-darwin14]</code></pre>

<br>
La ventaja de <a href="https://rvm.io/" target="_blank">RVM</a> es que trae todo incluido cuando lo instalas: el manejador de versiones, el instalador de nuevas versiones de Ruby y el administrador para grupos de gemas (un tema que veremos más adelante). Sin embargo, muchos argumentan que eso va en contra de la filosofía Unix, en donde cada programa debería hacer una sola cosa bien[^1].

## rbenv

<a href="https://github.com/rbenv/rbenv" target="_blank">rbenv</a> es otro manejador de versiones de Ruby y hoy es mucho más popular que <a href="https://rvm.io/" target="_blank">RVM</a> según <a href="https://www.ruby-toolbox.com/categories/ruby_version_management" target="_blank">The Ruby Toolbox</a>.

<a href="https://github.com/rbenv/rbenv" target="_blank">rbenv</a> es solo un manejador de versiones y utiliza una arquitectura basada en plugins para agregar más funcionalidad. Eso quiere decir que si quieres instalar una nueva versión de Ruby debes hacerlo manualmente o instalar primero un plugin de <a href="https://github.com/rbenv/rbenv" target="_blank">rbenv</a> llamado <a href="https://github.com/rbenv/ruby-build" target="_blank">ruby-build</a> (solo debes instalarlo una única vez).

<a href="https://github.com/rbenv/rbenv" target="_blank">rbenv</a> solo soporta Linux y MacOS y lo puedes instalar siguiendo las instrucciones en <a href="https://github.com/rbenv/rbenv#installation" target="_blank">este enlace</a>. Existe una <a href="https://github.com/nak1114/rbenv-win" target="_blank">versión para Windows</a> pero realmente no sé qué tan fácil sea de instalar.

Los comandos principales de <a href="https://github.com/rbenv/rbenv" target="_blank">rbenv</a> son:

* <code>rbenv versions</code>: lista las versiones de Ruby instaladas en tu máquina.
* <code>rbenv version</code>: muestra la versión de Ruby activa (la que se está usando actualmente).
* <code>rbenv shell [version]</code>: utiliza la versión que especifiques de Ruby. Por ejemplo:
  <pre><code>$ rbenv shell 2.3.1</code></pre>
* <code>rbenv global [version]</code>: define la versión por defecto. Por ejemplo:
    <pre><code>$ rbenv global 2.3.1</code></pre>
* <code>rbenv rehash</code>: este comando se debe ejecutar cuando se instala una nueva versión de Ruby o alguna gema que incluya nuevos comandos para la consola.

**Nota**: Puedes encontrar todos los comandos con ejemplos en <a href="https://github.com/rbenv/rbenv#command-reference" target="_blank">este enlace</a>.

Para instalar una nueva versión de Ruby \-después de haber instalado el plugin <code>ruby-build</code>\- utiliza el comando <code>rbenv install [version_de_ruby]</code>. Por ejemplo:

<pre><code>$ rbenv install 2.2.0</code></pre>

La ventaja de <a href="https://github.com/rbenv/rbenv" target="_blank">rbenv</a> es que es más liviano que <a href="https://rvm.io/" target="_blank">RVM</a> y que utiliza una forma diferente de manejar las versiones que, muchos argumentan, es mejor (aunque seguramente debatible).

## Definir la versión de Ruby por proyecto

Una buena práctica es crear un archivo llamado <code>.ruby-version</code> en la raíz de cada uno de tus proyectos que defina la versión de Ruby que se debe usar para ese proyecto. De esa forma, cuando entres a esa carpeta, tanto <a href="https://rvm.io/" target="_blank">RVM</a> como <a href="https://github.com/rbenv/rbenv" target="_blank">rbenv</a> van a utilizar la versión correcta sin necesidad de que tengas que hacer el cambio explícito.

Aunque el archivo solo contiene la versión que se debe usar y podrías crearlo manualmente, tanto <a href="https://rvm.io/" target="_blank">RVM</a> como <a href="https://github.com/rbenv/rbenv" target="_blank">rbenv</a> tienen comandos que lo crean por ti:

<pre><code>$ rvm --ruby-version use 2.3.1</code></pre>

<pre><code>$ rbenv local 2.3.1</code></pre>

Puedes agregar este archivo a Git y de esa forma todos los integrantes de tu equipo van a utilizar la misma versión en sus ambientes de desarrollo local (si están utilizando algún manejador de versiones).

## Grupos de gemas (gemsets)

Una funcionalidad que incluye <a href="https://rvm.io/" target="_blank">RVM</a>, y que <a href="https://github.com/rbenv/rbenv" target="_blank">rbenv</a> argumenta que no se necesita (aunque se puede incluir <a href="https://github.com/jf/rbenv-gemset" target="_blank">con un plugin</a>), es el manejo de los grupos de gemas (gemsets).

Las gemas son las librerías de Ruby. Una gema se instala con el comando <code>gem install [nombre_de_la_gema]</code>. Por ejemplo:

<pre><code>$ gem install rails</code></pre>

Ese comando instalaría la versión más reciente de Rails, si queremos otra versión lo podemos hacer con la opción <code>-v</code>. Por ejemplo:

<pre><code>$ gem install rails -v 4.2.7</code></pre>

Una buena práctica es aislar las gemas de tu proyecto para que no se generen conflictos con otras versiones de las mismas gemas. Para eso <a href="https://rvm.io/" target="_blank">RVM</a> nos permite crear **gemsets**. Los comandos que necesitas conocer son:

* <code>rvm gemset list</code>: lista los gemsets para cada una de las versiones de Ruby que tengamos instaladas.
* <code>rvm gemset create [nombre_del_gemset]</code>: crea un gemset con el nombre que definamos. Por ejemplo, el siguiente comando crea un gemset llamado <code>rails4</code>:
  <pre><code>$ rvm gemset create rails4</code></pre>
* <code>rvm gemset use [nombre_del_gemset]</code>: utiliza un gemset. Por ejemplo:
  <pre><code>$ rvm gemset use rails4</code></pre>
* <code>rvm gemset delete [nombre_del_gemset]</code>: elimina un gemset. Por ejemplo:
  <pre><code>$ rvm gemset delete rails4</code></pre>

Muchos argumentan, y estoy de acuerdo, en que <a href="http://bundler.io/" target="_blank">Bundler</a> es una mejor forma de aislar (y manejar) las gemas de nuestros proyectos y que ya no son necesarios los gemsets. De hecho Rails viene con <a href="http://bundler.io/" target="_blank">Bundler</a> incluido. Sin embargo, es bueno que sepas que los **gemsets** existen.

## Conclusión

Tanto <a href="https://rvm.io/" target="_blank">RVM</a> como <a href="https://github.com/rbenv/rbenv" target="_blank">rbenv</a> intentan solucionar el mismo problema y los dos ofrecen una funcionalidad muy similar. Sin embargo, si tuviera que elegir alguno de los dos continuaría con <a href="https://rvm.io/" target="_blank">RVM</a> aunque <a href="http://www.rubyinside.com/rbenv-a-simple-new-ruby-version-management-tool-5302.html" target="_blank">la Internets argumente lo contrario</a>.

No importa cuál escojas, lo importante es que instales y comiences a utilizar alguno porque más adelante lo agradecerás.

<hr>

[^1]: Existen otros argumentos en contra de RVM pero no son relevantes para efectos prácticos de este post.
