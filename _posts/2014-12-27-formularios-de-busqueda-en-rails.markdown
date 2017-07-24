---
layout: post
title:  "Formularios de Búsqueda en Rails"
date:   2014-12-27 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/modals-ruby-on-rails.png
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
redirect_from: "/2014/12/27/formularios-de-busqueda-en-rails/"
---

En Ruby on Rails, los formularios generalmente se usan para crear o editar modelos. Sin embargo, un caso de uso muy frecuente es el de buscar o filtrar información usando un formulario. Por ejemplo, imaginemos una aplicación que tiene una lista de gastos que se puede filtrar por los siguientes criterios:<!-- more -->

* El concepto del gasto.
* La categoría a la que pertenece el gasto.

La siguiente imagen muestra la lista de gastos y el formulario de búsqueda que queremos implementar.

![Mis Finanzas](/images/mis-finanzas.png)

Cuando creamos un formulario para crear o editar un modelo, generalmente utilizamos el tag `form_for`. Sin embargo, <strong>existe otro tag llamado `form_tag` que se utiliza para crear formularios con otros fines diferentes al CRUD</strong> y es el que vamos a utilizar para nuestro formulario de búsqueda.

También es importante tener en cuenta que, **en vez de un llamado `POST`, queremos hacer un llamado `GET`. De esta forma podemos compartir la URL con los criterios de búsqueda** por correo o por cualquier otro medio. Por ejemplo, la URL `http://midominio.com/expenses?concept=corral&category=4` listaría los gastos que contengan la cadena “corral” en el concepto, y que pertenezcan a la categoría 4 (a esto se le conoce como Bookmarkable URL’s o RESTful URL's).

Teniendo en cuenta los dos puntos anteriores, el markup del formulario sería el siguiente:

<pre><code class="language-erb">&lt;%= form_tag expenses_path, method: :get do %&gt;
  &lt;div class=&quot;form-group&quot;&gt;
    &lt;%= text_field_tag :concept, params[:concept], class: &quot;form-control&quot;, placeholder: &quot;Concepto&quot; %&gt;
  &lt;/div&gt;
  &lt;div class=&quot;form-group&quot;&gt;
    &lt;%= select_tag :category_id, options_from_collection_for_select(Category.all, &quot;id&quot;, &quot;name&quot;, params[:category_id]), prompt: &quot;Categor&#237;a&quot;, class: &quot;form-control&quot; %&gt;
  &lt;/div&gt;
  &lt;%= submit_tag &quot;Buscar&quot;, name: nil, class: &quot;btn btn-primary btn-md&quot; %&gt;
&lt;% end %&gt;</code></pre>

La primera línea (el `form_tag`) genera el siguiente HTML:

<pre><code class="language-html">&lt;form action=&quot;/expenses&quot; method=&quot;get&quot;&gt;
  ...
&lt;/form&gt;</code></pre>

Fíjate que estamos enviando el formulario a la misma acción que utilizamos para listar los gastos (`/expenses`). Veamos la implementación de esa acción en el controlador:

<pre><code class="language-ruby">class ExpensesController &lt; ApplicationController
  def index
    @expenses = Expense.order("date DESC")
    if params[:concept].present?
      @expenses = @expenses.where("concept ILIKE ?", "%#{params[:concept]}%")
    end
    if params[:category_id].present?
      @expenses = @expenses.where("category_id = ?", params[:category_id])
    end
  end
end</code></pre>

**Nota:** En este trozo de código estoy utilizando `ILIKE` que es una funcionalidad exclusiva de PostgreSQL para ignorar mayúsculas o minúsculas al hacer la comparación.

El hash `params` recibe los datos del formulario que vienen en el URL. Si no recibimos alguno de los parámetros (`concept` o `category_id`), simplemente no tenemos en cuenta ese criterio de búsqueda.

***

Crear un formulario de búsqueda en Ruby on Rails es muy fácil. Solo debes tener en cuenta algunos detalles:

* Utilizar `form_tag` en vez de `form_for`.
* Los tags de los campos también son diferentes a los que se utilizan en `form_for`. La documentación de estos campos se encuentra en [las guías de Rails](http://guides.rubyonrails.org/form_helpers.html).
* Se recomienda utilizar el método `GET` en vez de `POST` para un formulario de búsqueda.
* Generalmente puedes reutilizar el mismo controlador y la misma acción que utilizas para listar.

Espero que este post te ayude a crear tus formularios de búsqueda. Puedes consultar el código fuente de la aplicación en [Github](https://github.com/makeitrealcamp/rails-search-form).

### Más Recursos

* [Railscast #37 - Simple Search Form](http://railscasts.com/episodes/37-simple-search-form)
* [Rails Guides - Form Helpers](http://guides.rubyonrails.org/form_helpers.html)
* [How to build a simple search form with Ruby on Rails](http://www.jorgecoca.com/buils-search-form-ruby-rails/)
