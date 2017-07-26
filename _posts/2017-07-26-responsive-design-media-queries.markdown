---
layout: post
title:  "Responsive design: media queries"
date:   2017-07-26 06:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/responsive-design.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

En este post hablaremos sobre media queries, una característica de CSS3 que nos permite crear sitios y aplicaciones Web que se adaptan a diferentes tipos de pantallas.<!-- more -->

A través de **media queries** podemos definir **reglas CSS** (estilos) que se activan cuando ciertas condiciones se cumplen, por ejemplo cuando el ancho de la pantalla sea mayor a cierto tamaño.

Un **media query** se declara utilizando la palabra clave `@media` seguido de una expresión entre paréntesis y un bloque de **reglas CSS** como se muestra a continuación:

```css
@media (min-width: 992px) {
  /* acá van las reglas CSS que aplican para este media query */
}
```

Las **reglas CSS** se activan únicamente cuando se cumple la expresión que está entre paréntesis. En este caso la expresión es `min-width: 992px`, es decir, cuando la pantalla tiene un ancho igual o superior a 992 pixeles.

Además de `min-width` también existe `max-width` para definir el ancho máximo de la pantalla para el que aplica el **media query**.

Por ejemplo, si queremos que el color de fondo sea rojo cuando el ancho de la pantalla sea de máximo 700 pixeles podemos hacer lo siguiente:

```css
@media (max-width: 700px) {
  body { background-color: red; }
}
```

Ingresa a <a href="https://codepen.io/germanescobar/pen/qXEgJj?editors=0100" target="_blank">este enlace</a> para ver y jugar con este ejemplo. Cambia el ancho del área donde se muestra el resultado para ver en qué punto cambia el color de fondo.

## Puntos de quiebre (breakpoints)

Los puntos de quiebre (o breakpoints) son los anchos (en pixeles) en los que ocurren cambios en nuestra página para que se adapte a diferentes pantallas.

En vez de utilizar los valores que se nos ocurran para los anchos de diferentes pantallas, se han definido ciertos valores para determinar el tipo de pantalla que se está usando:

* Hasta `575px` son teléfonos móviles en modo vertical.
* De `576px` a `767px` son teléfonos móviles en modo horizontal.
* De `768px` a `991px` son tabletas.
* De `992px` a `1199px` son pantallas de escritorio normales.
* `1200px` o más son pantallas grandes como televisores.

Sin embargo, cuando hablamos de **puntos de quiebre** nos referimos a un ancho específico, por ejemplo `768px`, que es el momento en el que cambia la pantalla de teléfono móvil a tableta.

Estos valores son sólo una referencia. El ancho de la mayoría de pantallas de escritorio hoy en día, por ejemplo, es de más de `1200px`.

A continuación veremos cómo utilizar estos puntos de quiebre para crear aplicaciones que se adaptan a diferentes pantallas.

## Mobile first

¿Dónde ubicamos y cómo organizamos los **media quieries** en nuestros archivos CSS? Lo que se recomienda es utilizar una estrategia llamada **mobile first** en donde primero se definen las reglas dirigidas a teléfonos móviles y con **media queries** ajustamos el contenido para pantallas más anchas.

Veamos un ejemplo. Imagina que queremos ir incrementando el tamaño de la letra de acuerdo al ancho de la pantalla:

* `14px` en teléfonos móviles.
* `15px` para tabletas.
* `16px` para pantallas de escritorio normales.
* `17px` para pantallas grandes.

Lo primero que vamos a definir es el estilo para telefonos móviles y después utilizamos **media queries** para los demás:

```css
/* mobile first */
body { font-size: 14px; }

/* tabletas */
@media (min-width: 768px) {
  body { font-size: 15px; }
}

/* escritorio normales */
@media (min-width: 992px) {
  body { font-size: 16px; }
}

/* pantallas grandes */
@media (min-width: 1200px) {
  body { font-size: 17px; }
}
```

Primero estamos definiendo el tamaño por defecto de `14px`. Después utilizamos un **media query** con expresión `min-width: 768px` que cambia el tamaño a `15px`, sobrescribiendo el valor anterior. Lo mismo ocurre con los otros dos **media queries**: si se activan sobrescriben el valor anterior.

Por ejemplo, si el ancho de la pantalla es de `1000px` esto es lo que ocurre:

* El navegador encuentra el tamaño por defecto de `14px` y lo aplica.
* Encuentra el primer **media query** con expresión `min-width: 768px` y, como la pantalla supera los `768px`, sobrescribe el tamaño de la letra que queda con un valor de `15px`.
* Continúa con el segundo **media query** con expresión `min-width: 992px` y de nuevo sobrescribe el tamaño de la letra que queda con un valor de `16px`.
* Por último, evalúa el último **media query** con expresión `min-width: 1200px`, pero esta condición no se cumple, así que lo ignora.

Al final el tamaño de la letra que se va a utilizar es `16px`.

Ten mucho cuidado con el orden. Si por ejemplo, movieramos el valor por defecto al final, después de todos los otros **media queries**, la letra siempre quedaría de `14px`. ¿Puedes explicar por qué?

---

Espero que esta introducción te haya ayudado a entender qué son y cómo funcionan los **media queries**. Aunque existen otras características que puedes utilizar para describir las pantallas (como el alto y la orientación), las opciones que vimos en este post (`min-width` y `max-width`) son las más comunes y un excelente punto de partida.

Los **media queries** son el componente fundamental de **responsive design**, pero para que una página sea completamente adaptable debes verificar también que las imágenes, videos, tablas, etc. se vean bien en todos los dispositivos.

Por último, si quieres ver ejemplos de responsive design te recomiendo estos dos sitios:

* [https://mediaqueri.es/](https://mediaqueri.es/)
* [https://responsivedesign.is/examples/](https://responsivedesign.is/examples/)
