---
layout: post
title:  "Modales de Bootstrap en Ruby on Rails"
date:   2015-09-13 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/modals-ruby-on-rails.png
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
redirect_from: "/2015/09/13/modales-bootstrap-ruby-on-rails/"
---

Un requerimiento muy frecuente en las aplicaciones Web que usan [Bootstrap](http://getbootstrap.com/) es que los formularios de crear y editar se abran en [ventanas modales](http://getbootstrap.com/javascript/#modals), y no en otra página, como se muestra en la siguiente animación:<!-- more -->

<img src="/assets/images/products-modals.gif" alt="Products" class="photo">

<p class="photo-description">Los formularios de crear y editar usando vistas de JavaScript. Una ventaja es que las vistas se renderizan en el servidor lo que nos permite hacer uso de los helpers de Rails.</p>


Existen varias formas de hacerlo. Sin embargo, Rails incluye una funcionalidad para trabajar con AJAX y JavaScript sin necesidad de utilizar un framework como Angular, Ember, Backbone, etc., que muchas veces agregan complejidad innecesaria a los proyectos.

El truco está en utilizar vistas de JavaScript. Así como generamos vistas de HTML, es posible generar vistas con **código JavaScript que se ejecuta en el navegador**.

Las vistas de JavaScript son archivos con código JavaScript que tienen la extensión `.js`, por ejemplo `new.js.erb` que, en este caso, abre el modal con el formulario:

<pre><code class="language-erb">$('<%= j render "form", title: "Publicar Producto" %>').modal();</code></pre>

Dentro de esta vista, estamos incluyendo una vista parcial que es la que contiene el modal y el formulario. El prefijo `j` sirve para escapar el código HTML y que sea una cadena de JavaScript válida.

La vista parcial con el modal y el formulario se encuentra en el archivo `_form.html.erb` dentro de la misma carpeta:

<pre><code class="language-erb">&lt;div id=&quot;product-modal&quot; class=&quot;modal fade&quot;&gt;
  &lt;div class=&quot;modal-dialog&quot;&gt;
    &lt;div class=&quot;modal-content&quot;&gt;
      &lt;div class=&quot;modal-header&quot;&gt;
        &lt;button type=&quot;button&quot; class=&quot;close&quot; data-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;&lt;span aria-hidden=&quot;true&quot;&gt;&amp;times;&lt;/span&gt;&lt;/button&gt;
        &lt;h4 class=&quot;modal-title&quot;&gt;&lt;%= title %&gt;&lt;/h4&gt;
      &lt;/div&gt;
      &lt;%= form_for @product, remote: true do |f| %&gt;
        &lt;div class=&quot;modal-body&quot;&gt;
          &lt;div class=&quot;form-group&quot;&gt;
            &lt;%= f.text_field :name, class: &quot;form-control input-lg&quot;, placeholder: &quot;Nombre del producto&quot; %&gt;
          &lt;/div&gt;
          &lt;div class=&quot;form-group&quot;&gt;
            &lt;%= f.text_field :price, class: &quot;form-control input-lg&quot;, placeholder: &quot;Precio del producto&quot; %&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class=&quot;modal-footer&quot;&gt;
          &lt;%= f.submit class: &quot;btn btn-primary btn-lg btn-block&quot; %&gt;
        &lt;/div&gt;
      &lt;% end %&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

En el controlador inicializamos la variable `@product`:

<pre><code class="language-ruby">def new
  @product = Product.new
end</code></pre>

Por último, al enlace que abre el modal en la lista de productos debemos agregarle `remote: true` para indicarle a Rails que haga un llamado AJAX en vez de una petición normal:

<pre><code class="language-erb">&lt;%= link_to &quot;Nuevo Producto&quot;, new_product_path, remote: true, class: &quot;btn btn-primary&quot; %&gt;</code></pre>

## Enviar el formulario con AJAX

Si revisas el código de `_form.html.erb` (arriba) te vas a dar cuenta que la definición del formulario incluye `remote: true`:

<pre><code class="language-erb">&lt;%= form_for @product, remote: true do |f| %&gt;
   ...
 &lt;% end %&gt;</code></pre>

De nuevo, `remote: true` le indica a Rails que haga un llamado AJAX en vez de una petición normal. En el controlador, el método `create` crea el producto en la Base de Datos:

<pre><code class="language-ruby">def create
  @product = Product.create(product_params)
end</code></pre>

Para cerrar el modal o mostrar los errores usamos una vista JavaScript llamada `create.js.erb`:

<pre><code class="language-erb">&lt;% if @product.errors.empty? %&gt;
  // add the row to the table, show alert and hide modal
  $(&#39;table tbody&#39;).append(&#39; &lt;%= j render &quot;row&quot;, product: @product %&gt;&#39;);
  $(&#39;.alert-success&#39;).html(&quot;El producto ha sido creado con &#233;xito&quot;).show();
  $(&#39;#product-modal&#39;).modal(&#39;hide&#39;);
&lt;% else %&gt;
  // show first error
  alert(&#39;&lt;%= @product.errors.full_messages[0] %&gt;&#39;);
&lt;% end %&gt;</code></pre>

Esta vista verifica que el producto no tenga errores, agrega la fila a la tabla, muestra el mensaje de alerta y oculta el modal. Para mostrar la fila utiliza una vista parcial que se encuentra en `row.html.erb`:

<pre><code class="language-erb">&lt;tr id=&quot;&lt;%= product.id %&gt;&quot;&gt;
  &lt;td&gt;&lt;%= product.name %&gt;&lt;/td&gt;
  &lt;td&gt;&lt;%= number_to_currency(product.price, precision: 2) %&gt;&lt;/td&gt;
  &lt;td&gt;
    &lt;%= link_to &quot;Editar&quot;, edit_product_path(product), remote: true %&gt;
  &lt;/td&gt;
&lt;/tr&gt;</code></pre>

Lo interesante de esta estrategia es que la página nunca se refresca y el código HTML del modal solo se descarga si el usuario abre el modal. La desventaja es que si la red está lenta, la modal se puede demorar en ser desplegado.

---

Aunque actualmente existe una moda por frameworks como Angular, Ember, etc., la realidad es que la mayoría de aplicaciones no necesitan ese nivel de complejidad. Es increíble lo que se puede lograr usando Rails "puro" y vistas de JavaScript.

Las ventanas modales son solo una muestra de lo que es posible, pero cualquier tipo de interacción se puede mejorar con vistas de JavaScript. Lo importante es no exagerar. Si ves que tu aplicación tiene muchas interacciones que necesitan llamados AJAX y muchas vistas de JavaScript, es mejor utilizar un framework front-end como Angular, Ember, React, etc.

**Nota:** El código de este post lo puedes encontrar en [este repositorio de Github](https://github.com/germanescobar/rails-bootstrap-modals).
