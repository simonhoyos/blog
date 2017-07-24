---
layout: post
title:  "Desarrollo ágil con Scrum"
date:   2015-10-08 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/athletics-scrum.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

Scrum es una metodología de desarrollo ágil que ayuda a equipos pequeños a construir productos complejos de software. En este post te explicamos de dónde surge, conceptos, ventajas y desventajas.<!-- more -->

Antes de intentar explicar Scrum, empecemos por la metodología que se utilizaba para desarrollar software en los años 70’s, 80’s y parte de los 90’s.

En ese entonces se creía que desarrollar software era como construir un puente o un edificio[^1]. Que era posible definir desde un principio todos los requerimientos de la aplicación y hacer una especificación detallada de lo que se quería construir. Escribir el código era el equivalente a pegar ladrillos con cemento. A esto se le conoce como el <a href="https://es.wikipedia.org/wiki/Desarrollo_en_cascada" target="_blank">modelo en cascada</a>.

<img src="/assets/images/waterfall.png" alt="Modelo en cascada" class="photo">

<p class="photo-description">El modelo en cascada.</p>

Pero el desarrollo de software pocas veces sigue ese proceso lineal. A diferencia del puente o del edificio en donde generalmente se conoce el resultado final, en el desarrollo de software los requerimientos cambian frecuentemente y el resultado final puede ser muy diferente a lo que se había planteado en un principio.

A finales de los 90’s empezaron a surgir alternativas como	Lean Software Development, Extreme Programming y Scrum. Lo que caracteriza a estas nuevas metodologías es que tienen en cuenta los cambios en los requerimientos a medida que los proyectos avanzan. Eventualmente, los líderes de las diferentes iniciativas ágiles redactaron lo que hoy conocemos como <a href="http://agilemanifesto.org/iso/es/principles.html" target="_blank">los 12 principios del Manifiesto Ágil</a>.

En vez de definir un proceso lineal como el modelo en cascada, las metodologías ágiles utilizan un proceso iterativo. En cada iteración se revisan los requerimientos, se establecen las tareas que se van a realizar en esa iteración, se ejecutan esas tareas, se escriben pruebas, se hace refactorización del código[^2] y se entrega parte del producto.

<img src="/assets/images/agile.png" alt="Modelo ágil" class="photo">

<p class="photo-description">El modelo ágil se basa en iteraciones.</p>

<div class="well">Antes de entrar en los detalles de Scrum es importante recordar que una metodología por si sola no va a garantizar el éxito o el fracaso de un proyecto. El equipo, el liderazgo y el apoyo (o la falta de apoyo) de los ejecutivos de la compañía tienen igual o mayor impacto. La metodología simplemente define el proceso que se debe seguir para que todos estén sincronizados.</div>

Hoy Scrum es la metodología ágil más utilizada en la industria. El principal objetivo de Scrum es balancear las necesidades del negocio (retorno de la inversión) con las necesidades del equipo (crear un producto de la mejor calidad).

El problema es el siguiente. El principal interés de los usuarios **no técnicos** es que el producto funcione, no la calidad del código. Pero un código desorganizado y sin pruebas automatizadas tiene un costo a mediano y largo plazo. A medida que evoluciona el proyecto, agregar nuevas funcionalidades y hacer cambios se vuelve más difícil, lento y sujeto a errores. Eventualmente mantener el código se vuelve engorroso y muy costoso.

Cualquier programador experimentado sabe que un código claro, con buena documentación y pruebas automatizadas permiten mantener la productividad a largo plazo.

Los conceptos detrás de Scrum son muy simples, aunque con nombres sofisticados que intimidan a aquellos que no los conocen. Pero empecemos describiendo los roles de un equipo basado en la metodología Scrum.

## Los tres roles del equipo Scrum

Por lo general, un equipo Scrum está compuesto de 5 a 9 participantes. Cada participante puede tener alguno de los siguientes roles: product owner (dueño del producto), scrum master (maestro scrum) o team member (miembro del equipo). Veamos cada uno de estos roles en más detalle.

### Product Owner

El dueño del producto es el responsable de definir y priorizar los requerimientos del producto que se está construyendo. Es la persona que tiene la visión del producto y representa los intereses del negocio.

La forma en que se definen los requerimientos en Scrum es a través de historias de usuario, que tienen la siguiente forma: *Como &lt;rol X en la aplicación&gt;, deseo la &lt;funcionalidad Y&gt;, de modo que pueda lograr &lt;Z&gt;*. Por ejemplo, para un sistema de nómina, una historia puede ser la siguiente: *Como administrador de la compañía, deseo poder generar la nómina, para poderle pagar a los empleados a tiempo*.

Adicionalmente, una vez que el equipo está de acuerdo con una historia de usuario (es estimable, valiosa, independiente, etc.) se deben definir los criterios de aceptación y se prioriza en el backlog del producto, que explicaremos más adelante.

### Scrum Master

El Scrum master es el encargado de garantizar que la metodología se siga de la forma adecuada y remover cualquier impedimento que se presente en el camino.

### Team Member

Los miembros del equipo son los que definen las estimaciones y deciden qué herramientas y tecnologías utilizar para ejecutar el trabajo (completar las historias de usuario).

---

Ahora veamos los conceptos que debes conocer de Scrum:

## El backlog de producto

Es una lista organizada por prioridad con todos los items de trabajo que se deben implementar (nuevas funcionalidades, errores, etc.). El dueño del producto (product owner) es el encargado de definir la prioridad moviendo los items con mayor prioridad a la parte superior de la lista.

## El tablero de tareas

Las tareas son en Scrum la unidad más básica de trabajo. Un item del backlog puede comprender varias tareas. El tablero de tareas lista las tareas por hacer, en progreso y completadas para que todo el equipo esté informado.

## Burn charts

Son unas gráfica que nos muestra el trabajo por hacer y el hecho en relación al tiempo. Se utiliza cuando el equipo está usando alguna herramienta para hacer Scrum, que las generan de forma automática. Es muy raro que un equipo las haga manualmente.

## El sprint

A las iteraciones (también conocidos como ciclos de desarrollo) en Scrum se les llama sprints. Un sprint es un periodo de tiempo fijo (generalmente 2 semanas) en el que se completan una serie de items del backlog (historias de usuario, corrección de errores, etc.).

Cada sprint tiene su propio backlog (llamado el sprint backlog) que indica las historias de usuario que se van a implementar en ese sprint.

Durante un sprint se llevan a cabo las siguientes reuniones: la planeación del sprint (sprint planning), el scrum diario (daily scrum), el tiempo de historia (story time), la revisión del sprint (sprint review) y la retrospectiva (retrospective).

### La planeación del sprint

Marca el inicio de un sprint. Generalmente se divide en dos partes. En la primera parte el equipo se compromete con una serie de entregables. En la segunda parte del sprint se identifican las tareas que se deben completar para cumplir con los entregables. Esta reunión puede tomar de una a dos horas. El resultado de esta reunión es el sprint backlog, la lista de todas los items con sus tareas asociadas.

### El scrum diario

También se le conoce como el stand-up meeting (la reunión de pie). Es una reunión muy corta, generalmente al inicio del día, en que cada participante cuenta qué items ha completado, en cuál está trabajando y si ha tenido alguna dificultad.

### Tiempo de historia

Es una reunión que generalmente se programa a la mitad de la semana con el fin de discutir y mejorar las historias de usuario de futuros sprints. Es posible que se dividan algunas historias, se reorganicen y para las que están más arriba se discuten los criterios de aceptación.

### Revisión del sprint

Es la reunión que marca el final del sprint. Se revisan los items que se terminaron y los que no se terminaron. Generalmente están presentes todos los interesados en el proyecto.

### Retrospectiva

Esta es una reunión interna del equipo, generalmente después de la revisión del sprint en donde se identifican uno o dos cambios estratégicos para el siguiente sprint.

## Críticas a Scrum

Tengo que aceptar que nunca he utilizado Scrum. Me parece muy complicado con sus sprints y múltiples reuniones. El backlog del producto es interesante aunque se puede convertir en una bolsa de los deseos (una lista de las ideas que nunca se van a implementar).

Si vamos a la escencia del desarrollo ágil, lo más importante de un proyecto es definir lo que se debe hacer, cuándo se va a hacer (priorizar) y quién lo va a hacer. Pero obligar determinadas reuniones y definir ciclos de desarrollo tan estrictos se puede volver contraproducente para el avance del proyecto. Quizá en algunos casos funcione, especialmente cuando se tienen clientes externos en donde se debe hacer un mayor seguimiento[^4].

En Make it Real utilizamos un tablero de <a href="http://trello.com" target="_blank">Trello</a>, que es una herramienta gratuita que nos permite definir listas con tarjetas. Es parecido al tablero de tareas de Scrum pero la idea es de una metodología muy simple llamada <a href="https://es.wikipedia.org/wiki/Kanban_(desarrollo)" target="_blank">Kanban</a>. En <a href="http://trello.com" target="_blank">Trello</a> tenemos 4 listas: Backlog (realmente es la lista de los deseos), To do (las tareas a completar), Doing (tareas en progreso) y Done (tareas finalizadas). Y nos apoyamos de los <a href="" target="_blank">issues de Github</a> para reportar errores.

Cada vez que terminamos una nueva funcionalidad o solucionamos un error en Make it Real, lo desplegamos a producción. Es un proceso ágil pero simple al mismo tiempo.

Igual, es bueno conocer Scrum. Muchas empresas lo implementan de forma exitosa (al pie de la letra o con algunas variaciones).


## Más información

* [http://scrumreferencecard.com/reference-card-de-scrum/](http://scrumreferencecard.com/reference-card-de-scrum/)
* [http://scrumtrainingseries.com/](http://scrumtrainingseries.com/) - Los conceptos de Scrum con ejemplos.
* [Un corto libro de $0.99 que utilicé como referencia para hacer este post. Vale la pena tenerlo.](http://www.amazon.com/Scrum-Breathtakingly-Brief-Agile-Introduction-ebook/dp/B007P5N8D4/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=)
* [https://medium.com/product-love/the-dark-side-of-scrum-d36657e5bc61](https://medium.com/product-love/the-dark-side-of-scrum-d36657e5bc61) - Una crítica a Scrum.

### Notas

[^1]: No todo el mundo creía lo mismo. Ya existían varios proponentes de alguna forma de desarrollo ágil, pero la mayoría de proyectos seguían el modelo en cascada.

[^2]: Se reescribe el código para hacerlo más legible.

[^2]: Acá me refiero a un producto sin pruebas, con código mal escrito, difícil de entender y ningún tipo de documentación.

[^4]: La verdad es que he tenido la fortuna de construir, mejorar y mantener mis propios productos como es el caso de <a href="http://elibom.com/">elibom.com</a> y Make it Real.
