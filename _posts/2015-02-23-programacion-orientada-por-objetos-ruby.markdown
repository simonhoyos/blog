---
layout: post
title:  "Programación Orientada por Objetos en Ruby"
date:   2015-02-23 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/object-oriented-programming.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
redirect_from: "/2015/02/23/programacion-orientada-por-objetos-ruby/"
---

La Programación Orientada por Objetos, también conocida por las siglas **OOP (Object Oriented Programming)**, surgió a principios de los años 80’s como respuesta a la dificultad que estaban experimentando los programadores manteniendo aplicaciones de tamaño y complejidad considerables.<!-- more --> Cualquier cambio desencadenaba una reacción en cadena de errores ocasionados por las dependencias que existían en la aplicación. Hasta ese entonces se usaba un paradigma llamado <a href="http://es.wikipedia.org/wiki/Programaci%C3%B3n_por_procedimientos" target="_blank">Programación Procedimental</a>.

<blockquote>Las aplicaciones evolucionan. Los requerimientos y la tecnología cambian. Pero una aplicación bien diseñada es fácil de mantener y actualizar en el tiempo.</blockquote>

La <a href="http://es.wikipedia.org/wiki/Programaci%C3%B3n_por_procedimientos" target="_blank">Programación Procedimental</a> hace uso de ciclos, condicionales, y procedimientos para crear aplicaciones. **La Programación Orientada por Objetos introduce varios conceptos que permiten mejorar la organización y la reutilización del código, haciendo más fácil el mantenimiento de la aplicación a mediano y largo plazo**. Entre esos conceptos se encuentran: objetos, clases, encapsulamiento, polimorfismo, herencia, y mixins (o módulos), entre otros.

Es importante entender que la Programación Orientada por Objetos no reemplaza la Programación Procedimental, la extiende para hacer el código más mantenible y reutilizable. En la OOP se siguen usando ciclos, condicionales, y procedimientos (métodos). Tus actividades del día a día, por ejemplo, ocurren de forma secuencial (tomas decisiones y realizas actividades, algunas de ellas repetitivas). Eso es procedimental. Pero, al mismo tiempo, el mundo está compuesto de objetos que hacen parte activa o pasiva de esas actividades (humanos, carros, edificios, etc.). Podemos decir, entonces, que **nuestra realidad es procedimental y orientada a objetos al mismo tiempo.**

<br>
<img src="/assets/images/proc-vs-oo.png" alt="Screenshots" class="photo">

<p class="photo-description">La Programación Procedimental se encarga de la secuencia de eventos, la Programación Orientada por Objetos de la organización y visibilidad del código.</p>

Pero explicar y entender la Programación Orientada por Objetos no es fácil. Por un lado, los beneficios no son evidentes en aplicaciones simples, hechas por una única persona, que no cambian en el tiempo. Por otro lado, no hay una forma “correcta” de usar OOP, solo “mejores prácticas”, sugerencias sobre cómo diseñar las aplicaciones. **Es el tiempo el que decide si una aplicación está bien diseñada o no. Y es la experiencia creando y manteniendo varias aplicaciones la que desarrolla esa intuición en el programador**.

Por ejemplo, en Ruby on Rails es posible hacer una aplicación Web relativamente compleja sin saber \-prácticamente nada\- de Programación Orientada por Objetos. Eso es una ventaja si el objetivo es hacer un prototipo de una aplicación Web lo más rápido posible, pero una desventaja a la hora de trabajar en aplicaciones más complejas, escritas por múltiples personas, y que deben ser mantenidas por varios años.

**Conocer y aplicar correctamente la Programación Orientada por Objetos es uno de los tres aspectos fundamentales que separan a los desarrolladores Junior de los Senior. Los otros dos siendo el código limpio y las pruebas automatizadas.**

## Clases y Objetos

Las clases y los objetos son los conceptos más importantes de la Programación Orientada por Objetos, y están fuertemente relacionados. **Los objetos se crean a partir de clases, y las clases definen los atributos y el comportamiento que tendrán los objetos**. A los objetos también se les llama *instancias de clase*.

Veamos cómo definir una clase y crear objetos en Ruby:

<pre><code class="language-ruby">class Humano
end

juan = Humano.new
pedro = Humano.new
ana = Humano.new</code></pre>

En este ejemplo, hemos definido una clase llamada `Humano` y creamos tres objetos usando `Humano.new`, que almacenamos en las variables `juan`, `pedro`, y `ana`. La clase aún no tiene atributos ni comportamiento.

Ahora modifiquemos la clase **Humano** para definir algunos atributos (nombre, edad y género), y un comportamiento (saludar):

<pre><code class="language-ruby">class Humano
  attr_accessor :name, :age, :genre

  def greet
    puts "Hola, me llamo #{@name}"
  end
end</code></pre>

`attr_accessor` determina que los atributos se van a poder leer y escribir desde cualquier parte de la aplicación. Otras opciones son `attr_reader` (solo lectura) y `attr_writer` (solo escritura). A esto se le llama **la visibilidad** del atributo y corresponde al concepto de **encapsulamiento** que veremos más adelante.

La clase define un comportamiento, `greet` (saludar), que no es más que una función dentro de la clase. **A las funciones que están definidias en clases se les llama métodos**. Los métodos pueden usar los atributos del objeto usando el prefijo `@` como lo hace el método `greet`.

Para leer y escribir los atributos de un objeto, o llamar sus métodos, se usa la notación `objeto.atributo` u `objeto.método` como se muestra en el siguiente ejemplo:

<pre><code class="language-ruby">juan = Humano.new
juan.name = "Juan Perez"
juan.age = 12
juan.genre = "M"

puts juan.name # imprime Juan Perez
puts juan.age # imprime 12
puts juan.genre # imprime M

puts juan.greet # imprime Hola, me llamo Juan Perez</code></pre>

## Inicializando un objeto

Al ejecutar la línea `Humano.new`, Ruby busca un método llamado `initialize` que, si existe, se invoca automáticamente. A este método se le llama **el constructor**.

<pre><code class="language-ruby">class Humano
  attr_accessor :name, :age, :genre

  def initialize
    puts "Inicializando humano ..."
  end
 end</code></pre>

En este ejemplo, cada vez que invoquemos `Humano.new`, se imprimirá la cadena “Inicializando Humano”.

El método `initialize` puede recibir argumentos, que nos pueden servir para inicializar los atributos del objeto.

<pre><code class="language-ruby">class Humano
  attr_accessor :name, :age, :genre

  def initialize(name, age, genre)
    @name = name
    @age = age
    @genre = genre
  end
end</code></pre>

El constructor ahora recibe tres argumentos que se utilizan para inicializar los atributos del objeto:

<pre><code class="language-ruby">juan = Humano.new("Juan Perez", 12, "M")</code></pre>

## En Ruby (casi) todo es un objeto

Por ejemplo, la clase `String` de la que se crean las cadenas (strings), tienen comportamiento (métodos) que podemos llamar con la notación `objeto.método`:

<pre><code class="language-ruby">puts "hola".capitalize # HOLA
puts "hola".reverse # aloh</code></pre>

En este caso, la clase `String` define los métodos `capitalize` y `reverse`. Puedes encontrar todos los métodos que se pueden llamar sobre las cadenas (strings) en la <a href="http://ruby-doc.org/core-2.2.0/String.html" target="_blank">documentación de Ruby</a>.

Los enteros también tienen comportamiento:

<pre><code class="language-ruby">puts 2.even? # true
puts 1.next # 2</code></pre>

Todos los objetos tienen un método llamado `class` que nos devuelve la clase de la cuál fue creada el objeto:

<pre><code class="language-ruby">puts juan.class # Humano
puts "hola".class # String
puts 1.class # Fixnum</code></pre>

## Encapsulamiento

Uno de los mayores problemas de la Programación Procedimental (el paradigma previo a OOP) es que no existía una forma de ocultar información y procedimientos del resto de la aplicación. A medida que la aplicación cambiaba, se empezaban a crear dependencias a partes del código que podían ser muy inestables, y que no estaban diseñadas para que el resto de la aplicación las usara directamente. Esas dependencias hacían muy difícil mantener el código, cualquier cambio dispara varios errores en cadena.

**La Programación Orientada por Objetos no soluciona el problema automáticamente, pero nos da herramientas para solucionarlo.** Veamos un ejemplo:

<pre><code class="language-ruby">class CustomerStore
  def initialize
    @customers = {} # los clientes se van a almacenar en un hash
    @next_id = 1 # un consecutivo para asignarle a cada cliente
  end

  def all
    ...
  end

  def create(customer)
    ...
  end

  def delete(customer)
    ...
  end

  private
    def next_customer_id
      @next_id += 1
    end
end</code></pre>

La clase `CustomerStore` se encarga de almacenar los clientes (customers) y tiene:

* Dos atributos privados llamados `customers` y `next_id`.
* Tres métodos públicos llamados `all`, `create` y `delete`.
* Un método privado llamado `next_customer_id`.

En este momento la clase está almacenando los clientes en un hash, pero es posible que en un futuro usemos una base de datos como MySQL o PostgreSQL. **Si la aplicación usara directamente al hash para crear y eliminar los clientes, el cambio sería mucho más difícil**. Lo que estamos haciendo es encapsulando la información y permitiendo que los clientes se creen y se eliminen solo a través de los métodos `create` y `delete`. De esta forma será más fácil cambiar el tipo de almacenamiento en un futuro.

**Por defecto, los atributos de un objeto en Ruby son privados**, es decir, solo pueden ser accedidos por métodos de la misma clase. Para darles visibilidad desde otras partes de la aplicación se usa `attr_accessor` (lectura y escritura), `attr_reader` (lectura), y `attr_writer` (escritura).

Los métodos pueden ser `públicos`, `privados`, o `protegidos`, y se definen de la siguiente forma:

<pre><code class="language-ruby">class MyClass
  # acá van los métodos públicos

  protected
    # acá van los métodos protegidos

  private
    # acá van los métodos privados
end</code></pre>

Los métodos **públicos** pueden ser accedidos desde cualquier parte de la aplicación. Los métodos **privados** y **protegidos** pueden ser accedidos desde la misma clase o desde alguna de sus subclases (la diferencia exacta es sutil y no muy relevante para nuestra discusión). Las subclases son el tema de la siguiente sección.

## Herencia

La herencia es un mecanismo de reutilización de código en la Programación Orientada por Objetos. A través de la herencia, **una clase hereda de otra sus atributos y métodos**. Técnicamente, los atributos no son heredados, se heredan los métodos que permiten leerlos o escribirlos (que se crean usando `attr_accessor`, `attr_reader`, y `attr_writer`).

Supongamos que estamos diseñando un sistema que permite a las empresas llevar un control de sus facturas, ingresos y gastos. Podríamos crear tres clases independientes que representen una factura, un ingreso, y un gasto respectivamente. Pero hay información que se duplicaría en las tres clases: el usuario, la fecha, el concepto, y el valor.

La solución es crear una **clase padre** llamada `Transaction` y tres **clases** (subclases) llamadas `Invoice`, `Income`, y `Expense` que heredan de `Transaction`. La herencia se define usando la notación `<`:

<pre><code class="language-ruby">class Transaction
  attr_accessor :user, :date, :concept, :amount
end

class Invoice &lt; Transaction
  attr_accesor :number
end

class Income &lt; Transaction
end

class Expense &lt; Transaction
end</code></pre>

`Transaction` define cuatro atributos: `user`, `date`, `concept`, y `amount`. `Invoice` define un atributo adicional llamado `number`.

Los atributos y métodos definidos en la clase padre se acceden de la misma forma en que se acceden los atributos y métodos definidos en la clase que hereda:

<pre><code class="language-ruby">invoice = Invoice.new
invoice.user = "German Escobar" # definido en la clase padre
invoice.amount = 12000 # definido en la clase padre
invoice.number = 1

puts invoice.amount # definido en la clase padre
puts invoice.number</code></pre>

Es posible que una clase sea clase padre y subclase a la vez como se muestra en el siguiente diagrama:

<img src="/assets/images/class-diagram.png" alt="Screenshots" class="photo">

**Nota**: En Ruby una subclase solo puede tener una clase padre.

### Sobrescribiendo métodos

¿Qué pasa si una clase define un método con el mismo nombre (y los mismos argumentos) de un método en la clase padre? A esto se le llama sobrescritura de métodos y es una práctica muy común para cambiar el comportamiento de la clase padre.

Supongamos que estamos implementando una aplicación que calcula el salario de los empleados de una empresa. A todos los empleados se les calcula el salario de la misma forma, exceptuando a los directores, que reciben un bono adicional:

<pre><code class="language-ruby">class Employee
  attr_accessor :name, :salary

  def net_salary
    salary - (salary * 0.12)
  end
end

class Manager &lt; Employee
  attr_accessor :bonus

  def net_salary
    salary - (salary * 0.12) + bonus
  end
end</code></pre>

En este ejemplo `Manager` está sobrescribiendo `net_salary` para agregar el bono. Sin embargo, estamos duplicando código (el cálculo del salario base). Usaremos las herramientas que nos brinda OOP para mejorarlo:

<pre><code class="language-ruby">class Employee
  attr_accessor :name, :salary

  def net_salary
    base_salary
  end

  protected
    def base_salary
      salary - (salary * 0.12)
    end
end

class Manager &lt; Employee
  attr_accessor :bonus

  def net_salary
    base_salary + bonus
  end
end</code></pre>

¿Puedes encontrar la diferencia con el código anterior? Definimos un método protegido `base_salary` (para que solo sea visible en la clase y sus subclases) y lo usamos en las dos clases para solucionar la duplicación de código. Si, son más líneas de código, pero si más adelante cambia la forma en que se calcula el salario base, solo tenemos que hacer el cambio en un único lugar.

## Polimorfismo

Supongamos que necesitamos escribir una función que dibuje figuras en la pantalla. La función debe recibir una figura y unas coordenadas, y dibujar la figura en esas coordenadas. Una posible solución sería la siguiente:

<pre><code class="language-ruby">def draw_figure(figure, x, y)
  set_coordinates(x, y)
  if figure == "circle"
    # draw a circle
  elsif figure == "triangle"
    # draw a triangle
  elsif figure == "square"
    # draw a square
  end
end</code></pre>

Este código tiene dos problemas. El primero es que no está teniendo en cuenta el tamaño de la figura. El segundo, más grave, es que para dibujar una figura diferente tenemos que modificar la función. Usemos OOP para solucionar esos problemas:

<pre><code class="language-ruby">def draw_figure(figure, x, y)
  set_coordinates(x, y)
  figure.draw
end

class Circle
  attr_accessor :radius

  def draw
    ...
  end
end

class Triangle
  attr_accessor :base, :height

  def draw
    ...
  end
end</code></pre>

`draw_figure` ahora acepta cualquier objeto que responda al método `draw` (a esto se le llama **el contrato**). `Circle` y `Triangle` cumplen el contrato y por lo tanto podemos usarlos en `draw_figure`.

A eso se le llama polimorfismo. Formalmente se define como la capacidad de un objeto de tomar otra(s) forma(s). En nuestro caso, cualquier clase que defina un método `draw` se puede usar como argumento de `draw_figure`. En Ruby, a esto se le llama <a href="http://en.wikipedia.org/wiki/Duck_typing" target="_blank">duck typing</a>. Desde que se cumpla con el contrato, no importa qué clase sea o qué otros atributos/métodos defina.

**Nota**: Otros lenguajes de programación como Java y C++ utilizan un concepto llamado interfaces para definir el contrato (o los métodos que debe implementar una clase para cumplir el contrato), pero la idea es la misma.

## Módulos (Mixins)

En Ruby, los módulos cumplen una doble función. Se usan para evitar colisiones en los nombres de las clases (namespaces) y como un mecanismo de reutilización de código (mixins). En esta sección nos vamos a concentrar en esto último, la reutilización de código.

Los mixins son ideales para aquellas situaciones en que es necesario incluir (o mezclar) métodos en diferentes clases que no comparten nada en común. Por ejemplo, imagina que quisieramos almacenar los atributos de diferentes objetos en archivos (en algún formato como JSON o XML). Podemos crear un módulo (llamémoslo `Persistable`) que podemos mezclar en cualquier clase:

<pre><code class="language-ruby">module Persistable
  def store(path)
    ...
  end

  def load(path)
    ...
  end
end</code></pre>

Para mezclar el módulo dentro de una clase usamos la palabra clave `include`:

<pre><code class="language-ruby">class User
  include Persistable
  attr_accessor :id, :name, :email
  ...
end

class Post
  include Persistable
  attr_accessor :id, :date, :content
  ...
end</code></pre>

Ahora `User` y `Post` incluyen dos métodos adicionales `store` y `load` que los podemos usar de la siguiente forma:

<pre><code class="language-ruby">user = User.new
user.load('/users/user-1.xml')

user.name = "Juan Perez"
user.email = "change@gmail.com"

user.save('/users/user-1.xml')</code></pre>

Si necesitamos cambiar la forma en que los objetos son almacenados, el único lugar que necesitamos modificar es el módulo `Persistable`.
