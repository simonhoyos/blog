---
layout: post
title:  "Manejo de dependencias en Ruby con Bundler"
date:   2016-10-17 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/bundler.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

<a href="http://bundler.io/" target="_blank">Bundler</a> es una manejador de dependencias para Ruby. Aunque viene incluido con Rails, <a href="http://bundler.io/" target="_blank">Bundler</a> no es exclusivo de Rails, lo puedes usar para manejar las dependencias de cualquier proyecto de Ruby.<!-- more -->

La mayoría de los proyectos en los que vas a trabajar van a utilizar una o más librerías. Una librería no es más que código empaquetado que alguien publica y que puedes utilizar en tus proyectos. Todos los lenguajes de programación tienen alguna forma de crear, distribur y usar librerías. En Ruby, a las librerías se les conoce con el nombre de **gemas**. Cualquier persona puede crear y publicar una gema.

Instalar una gema en tu máquina es muy fácil, solo debes ejectuar el comando <code>gem install</code> seguido del nombre de la gema. Por ejemplo, para instalar Ruby on Rails puedes ejecutar:

<pre><code class="language-none">$ gem install rails</code></pre>

Este comando instalaría la versión más reciente de Rails, pero si deseas instalar otra versión lo puedes hacer con la opción <code>-v</code>. Por ejemplo:

<pre><code class="language-none">$ gem install rails -v 4.2.7</code></pre>

## Bundler

Instalar individualmente cada una de las gemas de las que depende un proyecto puede ser muy engorroso, además de que sería necesario mantener una documentación actualizada con la lista de gemas y la versión de cada una por si cambiamos de máquina o entra un nuevo integrante a nuestro equipo.

El segundo problema es que puedes tener varias versiones de la misma gema instalada. Por defecto Ruby utiliza la última versión de la gema, pero es posible que esa no sea la que tu proyecto necesite.

Veamos cómo <a href="http://bundler.io/" target="_blank">Bundler</a> nos ayuda a solucionar estos problemas.

<a href="http://bundler.io/" target="_blank">Bundler</a> es una gema, así que el primero paso es instalarlo con el siguiente comando:

<pre><code class="language-none">$ gem install bundler</code></pre>

Para definir las dependencias de nuestro proyecto creamos un archivo de texto llamado <code>Gemfile</code> (sin extensión) en el que vamos a listar las gemas de las que depende nuestro proyecto:

<pre><code class="language-ruby">source 'https://rubygems.org'

gem 'nokogiri'
gem 'rack', '~>1.1'
gem 'sinatra', '1.4.7'</code></pre>

La primera línea le dice a Bundler la URL del servidor desde donde se deben instalar las gemas. <a href="https://rubygems.org/" target="_blank">RubyGems</a> es el servicio de Ruby en donde están almacenadas todas gemas públicas.

Las demás líneas definen las gemas de las que depende nuestro proyecto. Si omites la versión \-como en el caso de nokogiri arriba\- <a href="http://bundler.io/" target="_blank">Bundler</a> asume que deseas utilizar la última versión disponible. Existen varias formas de especificar la versión, veamos algunos ejemplos:

<pre><code class="language-ruby">gem 'rails', '4.2.7' # la versión 4.2.7 exactamente</code></pre>
<pre><code class="language-ruby">gem 'rails', '>=4.2.7' # cualquier versión igual o mayor que 4.2.7</code></pre>
<pre><code class="language-ruby">gem 'rails', '>=4.2.7', '<5.0.0' # igual o mayor que 4.2.7, pero menor que 5.0.0</code></pre>

Los siguientes dos son casos especiales pero muy comunes, de hecho es una muy buena práctica defnir las versiones de esta forma:

<pre><code class="language-ruby">gem 'rails', '~>4.2.7' # igual o mayor que 4.2.7, pero menor que 4.3.0</code></pre>
<pre><code class="language-ruby">gem 'rails', '~>4.2' # igual o mayor que 4.2.0, pero menor que 5.0.0</code></pre>

<div class="well">
  <p>La mayoría de gemas utilizan el siguiente esquema de versionamiento: dada una version <code>X.Y.Z</code>, <code>X</code> se incrementa cuando hay <strong>cambios mayores</strong> que son incompatibles con versiones anteriores, <code>Y</code> se incrementa cuando hay <strong>nuevas funcionalidades</strong> que son compatibles con versiones anteriores, <code>Z</code> se incrementa cuando se <strong>solucionan bugs</strong> y sigue siendo compatible con versiones anteriores. </p>

  <p>A esto se le conoce como <a href="http://semver.org/" target="_blank">versionamiento semántico</a>.</p>
</div>

## Cargar gemas de Github directamente

También es posible cargar una gema de su repositorio de Github directamente:

<pre><code class="language-ruby">gem 'papertrail', github: 'germanescobar/papertrail'</code></pre>

En este caso se asumiría que quieres cargar el último commit de la rama <code>master</code>, pero puedes especificar cualquier rama:

<pre><code class="language-ruby">gem 'papertrail', github: 'germanescobar/papertrail' branch: 'my-branch'</code></pre>

Esto es muy útil cuando necesitas funcionalidad que aún no está en la última versión de la gema, o cuando necesitas hacer cambios propios a la gema (p.e. para solucionar algún bug).

## Instalar las gemas

Una vez que tienes las gemas definidas en el <code>Gemfile</code>, puedes instalarlas en tu máquina local con el siguiente comando:

<pre><code class="language-none">$ bundle install</code></pre>

Este comando crea un archivo <code>Gemfile.lock</code> con las versiones de las gemas que se van a utilizar en el proyecto. Es buena práctica agregar este archivo al sistema de control de versiones. Recuerda volver a ejecutar este comando cada vez que hagas cambios al archivo <code>Gemfile</code>.

## Configurar la aplicación

**Nota:** Esto solo es necesario cuando **no** estás utilizando Ruby on Rails.

El último paso es agregar la siguiente línea al punto de entrada de tu aplicación para asegurar que todas las gemas sean encontradas:

<pre><code class="language-ruby">require 'bundler/setup'
# requiere las gemas que necesites normalmente

# el resto de tu aplicación ...</code></pre>

Si tu aplicación necesita muchos <code>require</code> puedes utilizar la siguiente línea para que <a href="http://bundler.io/" target="_blank">Bundler</a> lo haga por ti:

<pre><code class="language-ruby">require 'bundler/setup'
Bundler.require(:default)

# el resto de tu aplicación ...</code></pre>

## Usando grupos

Con <a href="http://bundler.io/" target="_blank">Bundler</a> puedes agrupar tus dependencias y de esa forma realizar operaciones sobre un grupo entero. Veamos el siguiente <code>Gemfile</code> de ejemplo:

<pre><code class="language-ruby"># Estas gemas están en el grupo :default
gem 'nokogiri'
gem 'sinatra'

gem 'wirble', :group => :development

group :test do
  gem 'faker'
  gem 'rspec'
end

group :test, :development do
  gem 'capybara'
  gem 'rspec-rails'
end

gem 'cucumber', :group => [:cucumber, :test]</code></pre>

Ruby on Rails utiliza la agrupación de dependencias de <a href="http://bundler.io/" target="_blank">Bundler</a> para definir diferentes ambientes de la aplicación (desarrollo, producción y pruebas). Puedes hacer lo mismo en otros proyectos que no sean de Rails.

Por ejemplo, para requerir todas las gemas que están en el grupo <code>:default</code> y <code>:development</code> puedes hacer lo siguiente:

<pre><code class="language-ruby">require 'bundler/setup'
Bundler.require(:default, :development)

# el resto de tu aplicación ...</code></pre>

## Conclusión

<a href="http://bundler.io/" target="_blank">Bundler</a> es quizá una de las herramientas más importantes del ecosistema de Ruby, y de la programación en general porque inspiró otros sistemas de manejo de dependencias como <a href="https://www.npmjs.com/" target="_blank">npm</a> (en Node JS) y <a href="https://pypi.python.org/pypi/pip" target="_blank">pip</a> (en Python).

Espero que este post te haya ayudado a aclarar qué es <a href="http://bundler.io/" target="_blank">Bundler</a> y su rol en Ruby on Rails; y que de esta forma puedas aprovechar todo su potencial!
