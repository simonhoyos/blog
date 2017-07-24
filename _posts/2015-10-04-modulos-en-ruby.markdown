---
layout: post
title:  "Módulos en Ruby"
date:   2015-10-04 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/modules.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

Los módulos en Ruby cumplen una doble función: evitan colisiones de nombres y nos ayudan a reutilizar código. En este post te explicamos qué son, cómo se definen y cómo se utilizan.<!-- more -->

Un módulo es un contenedor que agrupa constantes, clases y métodos. Los módulos se definen utilizando la palabra clave `module`:

<pre><code class="language-ruby">module MyModule
  MAX_CONNECTIONS = 5

  def method_one
  end

  def method_two
  end

  class ThingOne
  end

  class ThingTwo
  end
end</code></pre>

En este ejemplo hemos definiendo un módulo llamado `MyModule` que contiene una constante `MAX_CONNECTIONS`, los métodos `method_one` y `method_two`, y las clases `ThingOne` y `ThingTwo`.

Vamos a empezar explicando cómo los módulos nos ayudan a evitar colisiones de nombres y después hablaremos de las diferentes formas en que nos permiten reutilizar código.

## Los módulos evitan colisiones de nombres

Los módulos nos permiten definir clases con el mismo nombre pero que se encuentren en módulos diferentes. Al crear un módulo, estás creando un espacio de nombramiento (namespace) que minimiza la probabilidad de encontrar dos clases que se llamen igual (el módulo se vuelve parte del nombre de la clase). Por ejemplo:

<pre><code class="language-ruby">module ActiveRecord
  class Base
  end
end

module ActionView
  class Base
  end
end</code></pre>

Fíjate que las dos clases se llaman `Base` pero se encuentran en diferentes módulos.

Para referirse a una clase dentro de un módulo se debe especificar tanto el nombre del módulo como el nombre la clase separándolos con `::`. En el ejemplo anterior nos referiríamos a `ActiveRecord::Base` y `ActionView::Base`, por ejemplo.

También es posible anidar módulos:

<pre><code class="language-ruby">module System
  module Currency
    class Dollar
    end
  end
end</code></pre>

Dentro del módulo `System` estamos definiendo otro módulo llamado `Currency`, que a su vez define una clase llamada `Dollar`. En este caso, la forma de referirnos a la clase `Dollar` sería `System::Currency::Dollar`.

### ¿Qué pasa si hay una colisión de nombres?

En Ruby, si dos módulos se llaman igual, su contenido se mezcla en uno solo (lo mismo pasa con las clases). Esto nos permite extender y sobrescribir funcionalidad de librerías (gemas) o hasta del mismo lenguaje Ruby en nuestras aplicaciones. A esto se le conoce como **monkey patching**, y en general no se considera una buena práctica.

Por ejemplo, supongamos que queremos incluir un método `palindrome?` dentro de la clase `String` que devuelva si una cadena es un palíndrome[^1]:

<pre><code class="language-ruby">class String
  def palindrome?
    letters = self.downcase.scan(/\w/)
    letters == letters.reverse
  end
end

"anita lava la tina".palindrome? # => true
"hora de irse".palindrome? # => false</code></pre>

Ten mucho cuidado al **abrir módulos o clases** como lo acabamos de hacer en este ejemplo, podrías dañar alguna funcionalidad importante de alguna librería o del mismo lenguaje.

Ruby on Rails aprovecha el **monkey patching** para extender las clases estándar de Ruby. Por ejemplo, en <a href="https://github.com/rails/rails/blob/master/activesupport/lib/active_support/core_ext/string/inflections.rb">este archivo</a>, Rails extiende la clase `String` con métodos como `pluralize`, `singularize` y `humanize`.

## Los módulos nos permiten reutilizar código

La segunda función de los módulos es definir métodos que se pueden incluir en otras clases. Por ejemplo:

<pre><code class="language-ruby">module Dancer
  def dance
    puts "I'm dancing"
  end
end

class Human
  include Dancer # incluye los métodos del módulo Dancer
end

class Dog
  include Dancer # incluye los métodos del módulo Dancer
end

# ahora Humano y Perro pueden bailar
pedro = Human.new
pedro.dance # "I'm dancing"

max = Perro.new
max.dance # "I'm dancing"
</code></pre>

El módulo `Dancer` está definiendo un método llamado `dance`. Las clases `Human` y `Dog` incluyen el módulo `Dancer` y por lo tanto "reciben" el método `dance`. De nuevo, es una buena forma de reutilizar código.

Los módulos pueden llamar los métodos de la clase que los incluye. Sin embargo, es importante documentar estos requerimientos dentro del módulo.

<pre><code class="language-ruby"># To use this module, the class must provide a method +favorite_music+
module Dancer
  def dance
    puts "I'm dancing #{favorite_music}"
  end
end

class Dog
  include Dancer

  def favorite_music
    "Rock & Roll"
  end
end

max = Dog.new
max.dance # "I'm dancing Rock & Roll"
</code></pre>

Como te puedes dar cuenta, el método `dance` ahora utiliza el método `favorite_music`, que debe estar definido en las clases que incluyan el módulo `Dancer`.

También es posible definir variables de instancia dentro de un módulo. Esas variables van a quedar almacenadas en las instancias de las clases que incluyan el módulo:

<pre><code class="language-ruby">module Dancer
  def dance
    @dancing = true # definimos la variable de instancia
  end

  def stop_dance
    @dancing = false # definimos la variable de instancia
  end

  def is_dancing?
    @dancing || false # si @dancing no está definida, retorna false
  end
end

class Humano
  include Dancer
end

pedro = Humano.new
pedro.dance
pedro.is_dancing? #=> true
pedro.stop_dance
pedro.is_dancing? #=> false</code></pre>

En este caso los métodos `dance` y `stop_dance` están definiendo una variable de instancia llamada `@dancing`. El método `is_dancing?` utiliza la variable para saber si está bailando o no.

Cuando una clase tiene muchos métodos, una buena práctica es agruparlos en módulos:

<pre><code class="language-ruby">module Needs
  # métodos relacionados con necesidades humanas
end

module Feelings
  # métodos relacionados con sentimientos humanos
end

class Human
  include Needs
  include Feelings
end</code></pre>

Si revisas las clases <a href="https://github.com/rails/rails/blob/v4.2.4/activejob/lib/active_job/base.rb">ActiveJob::Base</a> y <a href="https://github.com/rails/rails/blob/v4.2.4/activerecord/lib/active_record/base.rb">ActiveRecord::Base</a> de Ruby on Rails te darás cuenta que siguen el mismo patrón.

Los módulos nos permiten definir constantes que necesitamos en nuestra aplicación:

<pre><code class="language-ruby">module HttpHeaders
  CONTENT_TYPE = "Content-Type"
  AUTHORIZATION = "X-Token"
  ...
end</code></pre>

La forma de acceder a las constantes es muy parecido a la forma que se hace con las clases: separando los módulos y la constante con `::`. En el ejemplo anterior tendríamos que escribir `HttpHeaders::AUTHORIZATION` para acceder a la constante `AUTHORIZATION`.

Sin embargo, si incluyes el módulo dentro de una clase, ya no es necesario especificar el módulo para acceder a la constante:

<pre><code class="language-ruby">class WebServer
  include HttpHeaders

  def authenticate
    auth_header = headers[AUTHORIZATION] # no es necesario especificar el módulo
    ...
  end
end</code></pre>

Por último, los módulos son ideales para incluir los métodos utilitarios de tu aplicación, esos métodos que no parecen encajar en ninguna clase:

<pre><code class="language-ruby">module Utilities
  def self.utility_one
    ...
  end

  def self.utility_two(param1, param2)
    ..
  end
end

# llamemos nuestros métodos utilitarios
Utilities.utility_one
Utilities.utility_two("Hola", 1)</code></pre>

Fíjate que los métodos tiene un prefijo `self.` antes del nombre. De esa forma podemos llamarlos directamente sobre el módulo, sin necesidad de incluirlos en una clase.

### ¿Incluir un módulo vs extender una clase?

Los módulos, al igual que la herencia, nos permiten reutilizar código. En vez de duplicar el método `dance` en las clases `Human` y `Dog`, lo definimos en un módulo que podemos incluir en las clases que tengan ese comportamiento.

Es posible hacer lo mismo con herencia. En vez de definir un módulo, vamos a definir una clase `Dancer` con un método `dance`:

<pre><code class="language-ruby">class Dancer
  def dance
    puts "Estoy bailando"
  end
end

class Human &lt; Dancer # extiende Dancer
end

class Dog &lt; Dancer # extiende Dancer
end</code></pre>

El resultado es el mismo: `Human` y `Dog` "reciben" el método `dance` y se pueden utilizar igual que lo hicimos en un ejemplo anterior:

<pre><code class="language-ruby">pedro = Human.new
pedro.dance # "I'm dancing"

max = Perro.new
max.dance # "I'm dancing"</code></pre>

Para saber cuándo incluir un módulo o extender de una clase te puedes hacer la siguiente pregunta: ¿La `ClaseHija` especializa a la `ClasePadre`? o mejor ¿`ClaseHija` **es un** `ClasePadre?` Si la respuesta es **si**, entonces es mejor crear una relación de herencia (extender una clase). De lo contrario, es mejor utilizar un módulo.

Por ejemplo, supongamos que necesitamos definir la relación entre un `Bus` y un `Auto`. ¿`Bus` **es un** `Auto`? La respuesta es **si** y por lo tanto esta es una relación de herencia, `Bus` extiende `Auto`.

En nuestro ejemplo de los humanos y perros bailadores, la pregunta es ¿`Human` **es un** `Dancer`? La respuesta es **no**. Ser un "bailador" es más una cualidad de los humanos (o de los perros), y por lo tanto es mejor utilizar un módulo.

Hay ocasiones en que no tenemos opción sino utilizar un módulo. **Ruby no permite múltiple herencia**, es decir, una clase no puede extender varias clases a la vez, y si una clase ya extiende otra[^2] a veces la única opción es crear un módulo e incluirlo así la relación sea de herencia.

---

Los módulos son una herramienta muy particular de Ruby, especialmente porque cumplen la doble función de evitar colisiones de nombres y reutilizar código[^3].

La mayoría de lenguajes Orientados a Objetos tienen algún mecanismo para evitar colisiones entre Clases. En Java se utilizan <a href="https://en.wikipedia.org/wiki/Java_package" target="_blank">paquetes</a>, en JavaScript se emula con <a href="http://stackoverflow.com/questions/1841916/how-to-avoid-global-variables-in-javascript" target="_blank">closures</a>, en C++ <a href="https://msdn.microsoft.com/en-us/library/5cb46ksf.aspx" target="_blank">namespaces</a>, etc.

A los módulos como mecanismo de reutilización de código también se les llama <a href="https://en.wikipedia.org/wiki/Mixin" target="_blank">Mixins</a> en otros lenguajes. Otros, como Java, C++ y JavaScript, no incluyen esa funcionalidad, aunque generalmente existen formas de emularla.

---

### Notas

[^1]: Un palíndrome es una palabra o frase que se lee igual hacia adelante que hacia atrás.
[^2]: En algunas ocasiones es posible redefinir la jerarquía de clases para lograr la relación deseada.
[^3]: Python funciona de forma similar aunque no es necesario definir el módulo, el mismo archivo actúa como un módulo.
