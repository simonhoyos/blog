---
layout: post
title:  "Introducción a Ruby on Rails"
date:   2015-03-22 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/ruby-on-rails.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
redirect_from: "/2015/03/22/introduccion-ruby-on-rails/"
---

**Ruby on Rails** es un framework para crear aplicaciones Web, escrito en el lenguaje de programación **Ruby**, y diseñado para que el desarrollo de aplicaciones Web sea fácil y divertido.<!-- more -->

Asumiendo que ya tienes **Ruby** instalado, crear un nuevo proyecto en **Rails** es tan fácil como ejecutar los siguientes comandos en la consola:

<pre><code class="language-none">$ gem install rails
$ rails new mi_app
$ cd mi_app
$ rails server</code></pre>

El primer comando instala **Rails**. El segundo comando crea una carpeta con los archivos del proyecto. El tercer comando ingresa a la carpeta del proyecto. Y el último inicia el servidor. Eso es todo. Después de ejecutar esos comandos puedes ingresar a `http://localhost:3000/` y ver la pantalla que por defecto crea Rails. **¡Felicitaciones, has creado tu primera aplicación Web!** Aún no está publicada en Internet, pero al menos puedes accederla localmente desde tu computador.

Los 5 componentes más importantes del framework son los siguientes:

* Enrutador.
* Vistas.
* ActiveRecord (la capa de acceso a datos).
* Migraciones.
* Aplicación de consola.

## El enrutador

El objetivo de todos los frameworks de desarrollo Web, incluido **Rails**, es el de **mapear (o relacionar) URL’s** (p.e. `http://localhost:3000/productos`) **al código que va a procesar esas peticiones**.


Por ejemplo, supongamos que queremos crear una ruta para que cuando un usuario ingrese a `http://localhost:3000/productos` desde su navegador (p.e. Chrome, Firefox, Internet Explorer, etc.), vea la lista de productos que existen en ese momento en la base de datos. En **Rails**, las rutas se definen en el archivo `config/routes.rb` como se muestra en el siguiente ejemplo:

<pre><code class="language-ruby">Rails.application.routes.draw do
  get 'products', to: 'products#index'
end</code></pre>

La segunda línea le dice a **Rails** que las peticiones que lleguen a `/products` van a ser procesadas por el método `index` de la clase `ProductsController`.

<div class="well">A los métodos que procesan las peticiones se les llaman <strong>acciones</strong>, y a las clases que contienen esos métodos se les llaman <strong>controladores</strong>. Los <strong>controladores</strong> se encuentran en la carpeta <code>app/controllers</code>).</div>

Generalmente las **acciones** interactuan con la base de datos y renderizan una vista, pero para este ejemplo simplemente vamos a devolver `<h1>Hola Mundo</h1>`:

<pre><code class="language-ruby">class ProductsController < ApplicationController
  def index
    render html: "&lt;h1&gt;Hola Mundo&lt;/h1&gt;".html_safe
  end
end</code></pre>


## Las vistas

Escribir todo el **HTML** directamente en las **acciones** sería bastante engorroso. Las **vistas** son archivos que se encuentran en la carpeta `app/views` y se usan para generar la respuesta que se va a devolver desde las **acciones**. Lo interesante es que en las **vistas** podemos meter (embeber es la palabra correcta) código **Ruby** como en el siguiente ejemplo que imprime `<p>Hola Mundo</p>` 3 veces:

<pre><code class="language-erb">&lt;% 3.times do %&gt;
  &lt;p&gt;Hola Mundo&lt;/p&gt;
&lt;% end %&gt;</code></pre>

Fíjate que el código **Ruby** se debe embeber en las etiquetas `<%` y `%>`.

En los **controladores**, las **acciones** usan el método `render` para renderizar una vista como se muestra en el siguiente ejemplo:

<pre><code class="language-ruby">class ProductsController < ApplicationController
  def index
    render 'products/index'
  end
end</code></pre>

En este caso se renderizaría la **vista** ubicada en `app/views/products/index.html.erb`. Fíjate que no fue necesario especificar la carpeta `app/views/` ni la extensión `.html.erb`, **Rails** se encarga de eso automáticamente. Ahora, lo que confunde a muchos principiantes es que **si hubiésemos omitido la línea** `render 'products/index'` del código anterior (es decir, si el método `index` estuviera vacío), **igual se renderizaría la misma vista**. La razón es que **Rails** asume que, por defecto, quieres renderizar una vista y usa el nombre del controlador y de la acción para construir la ruta.

La regla es no llamar <code>render</code> explícitamente a menos de que necesites renderizar algo diferente a la vista que se renderiza por defecto (es decir, hubiese sido mejor dejar el método `index` vacío en el código anterior).

<div class="well"><strong>Ruby on Rails</strong> usa un concepto llamado <strong><a href="http://es.wikipedia.org/wiki/Convenci%C3%B3n_sobre_Configuraci%C3%B3n" target="_blank">convención sobre configuración</a></strong> para que la estructura de todos los proyectos sea similar y escribamos menos código. La desventaja es que, para los que están aprendiendo, muchas cosas en <strong>Rails</strong> parecen magia mientras entienden la convención y cómo sobrepasarla cuando es necesario.</div>

Las **acciones** pueden pasar información a las vistas a través de variables de instancia (variables que empiezan con `@`) como en se muestra el siguiente ejemplo que mostraría `<h1>Hola Mundo</h1>` en el navegador:

<pre><code class="language-ruby">class ProductsController < ApplicationController
  def index
    @greeting = "Hola Mundo"
  end
end</code></pre>

(Fíjate que no llamamos `render` explicitamente, así que la **vista** debe estar ubicada en `app/views/products/index.html.erb`). El contenido de esa vista es el siguiente:

<pre><code class="language-html">&lt;h1&gt;&lt;%= @greeting %&gt;&lt;/h1&gt;</code></pre>

**Nota:** En este caso usamos `<%=` porque queremos imprimir el valor de la variable `@greeting` en la pantalla.

## ActiveRecord

**ActiveRecord** es la capa que nos permite **acceder y manipular la información de la base de datos sin necesidad de escribir <a href="http://es.wikipedia.org/wiki/SQL" target="_blank">SQL (Structured Query Language)</a>**.

El concepto más importante de **ActiveRecord** es el **modelo**. Un **modelo** es una clase de **Ruby** que extiende `ActiveRecord::Base` como se muestra en el siguiente ejemplo:

<pre><code class="language-ruby">class Product < ActiveRecord::Base
end</code></pre>

Un **modelo** representa, generalmente, una tabla de la Base de Datos. **Por convención, el nombre de la tabla es el mismo nombre del modelo pero sin capitalizar y en plural** (`products` en este caso). Fíjate que en el **modelo** no definimos las columnas de la tabla explicitamente, **ActiveRecord** las toma de la tabla directamente (por convención).

Las **acciones** en los **controladores** usan los modelos para acceder a la información de la base de datos como se muestra en el siguiente ejemplo:

<pre><code class="language-ruby">class ProductsController < ApplicationController
  def index
    @products = Product.all
  end
end</code></pre>

Y en la vista podemos mostrar los productos en una tabla **HTML**:

<pre><code class="language-html">&lt;table&gt;
  &lt;% @products.each do |product| %&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;%= product.name %&gt;&lt;/td&gt;
      &lt;td&gt;&lt;%= product.description %&gt;&lt;/td&gt;
      &lt;td&gt;&lt;%= product.price %&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;% end %&gt;
&lt;/table&gt;</code></pre>

Otra forma de interactuar con la base de datos, a través de los modelos, es con la consola de **Rails** que se accede con el comando `rails console`:

<pre><code class="language-none">$ rails console
> Product.all
# muestra todos los productos

> p1 = Product.create(name: "Cerveza", description: "Yeah", price: 1500)
> p1.name
# imprime "Cerveza"

> p1.price = 1800 # subió de precio :(
> p1.save # guardemos el cambio en la base de datos

> p1.destroy # eliminemos el registro de la base de datos</code></pre>

Sin embargo, el verdadero poder de **ActiveRecord** está en las validaciones y las asociaciones, aunque, por espacio, ese será el tema de otro post.

## Migraciones

Las migraciones nos permiten hacer cambios sobre la estructura de la base de datos de forma fácil y consistente, especialmente si multiples personas trabajan sobre el mismo proyecto, o el proyecto ya se encuentra en producción.

Las migraciones son archivos que se encuentran en la carpeta `db/migrate` y contienen instrucciones con cambios a la base de datos (creación de tablas, adición o modificación de columnas, etc.). Veamos un ejemplo de una migración:

<pre><code class="language-ruby">class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.text :description

      t.timestamps null: false
    end
  end
end</code></pre>

Esta migración está creando la tabla productos con dos columnas: `name` y `description`.

Las migraciones se pueden crear manualmente, pero es mejor crearlas con el generador que viene integrado en la aplicación de consola de **Rails** (el tema de la siguiente sección):

<pre><code class="language-none">$ rails generate migration AddPriceToProducts price:decimal</code></pre>

Que generaría la siguiente migración:

<pre><code class="language-ruby">class AddPriceToProducts < ActiveRecord::Migration
  def change
    add_column :products, :price, :decimal
  end
end</code></pre>

**Nota:** Al generar una migración, solo estás creando un archivo con instrucciones para modificar la base de datos. Para ejecutar esos cambios en la base de datos debes correr el comando:

<pre><code class="language-none">$ rake db:migrate</code></pre>

Para ver el estado de las migraciones en un proyecto, usa el comando:

<pre><code class="language-none">$ rake db:migrate:status</code></pre>

## Aplicación de Consola

Una de las razones por las que **Rails** es tan popular es que trae una poderosa aplicación de consola que nos permite, entre otras cosas, generar código a través de comandos.

Por ejemplo, podemos crear la estructura básica de una aplicación con los siguientes comandos:

<pre><code class="language-none">$ rails new mi_app
$ cd mi_app
$ rails g model Product name description price:decimal
$ rails g controller Products
$ rake db:migrate</code></pre>

El tercer comando genera, entre otras cosas:

* Un modelo llamado `Product`.
* Una migración para crear la tabla `products` con tres columnas: `name`, `description`, y `price`.

El cuarto comando genera, entre otras cosas:

* Un controlador llamado `ProductsController`.
* Una carpeta `products` dentro de `app/views`.

El siguiente paso sería crear rutas y vistas que necesitemos para listar, crear, editar y eliminar productos. Existen comandos que nos generarían más código pero no te los recomendamos por ahora para que entiendas cómo funcionan todos los componentes de **Rails**.

## Más recursos

* [Rails for Zombies](http://railsforzombies.org/) - un tutorial interactivo muy interesante.
* [Las guías oficiales de Rails](http://guides.rubyonrails.org/) - un excelente recurso para aprender de Rails (en Inglés).
* [Codecademy](http://www.codecademy.com/en/learn/make-a-rails-app) - un tutorial interactivo para crear una aplicación en Rails.
* [Ruby on Rails Tutorial Book](https://www.railstutorial.org/book) - un libro gratis para que sigas aprendiendo.
