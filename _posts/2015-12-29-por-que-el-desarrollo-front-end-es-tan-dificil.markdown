---
layout: post
title:  "¿Por qué el desarrollo front-end es tan difícil ahora?"
date:   2015-12-29 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/creative-apple-desk-office.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

Solía ser mucho más fácil. Antes, el desarrollador Web escribía tanto el front-end como el back-end. Hoy el desarrollador front-end debe ser un experto en JavaScript. <!-- more -->Debe conocer conceptos de arquitectura de software, patrones de diseño, API’s, debe adaptarse rápidamente a las diferentes librerías y a los bruscos cambios que están ocurriendo. ¿Por qué se volvió tan difícil? ¿Cómo nos metimos en este enredo?  

Piensa por un momento en el desarrollador Web de hace 10 o 12 años, el que escribía HTML, CSS y PHP. Sabía algo de JavaScript, pero era algo mínimo, quizá lo utilizaba para validar un formulario o configurar un plugin de jQuery, pero nada más difícil que eso.

## La experiencia de usuario

La complejidad estaba al lado del servidor. Allí se generaba el HTML de forma dinámica con algún lenguaje como PHP o Java. Pero cualquier modificación al HTML requería volver a cargar la página del servidor, que se convertía en una mala experiencia para el usuario, especialmente con las lentas conexiones de la época.

Pero desde el 2005 eso empezó a cambiar con la llegada de AJAX, que permitía hacer llamados al servidor sin recargar la página.

Eso nos llevó al otro extremo: duplicamos toda la lógica del servidor en el cliente en lo que hoy llamamos SPA's (single page applications) o aplicaciones de una página, y eso implicaba escribir cada vez más JavaScript, que es un lenguaje complejo, difícil de estructurar y difícil de mantener.

Pero no solo eso, el diseño y la usabilidad empezaron a tomar cada vez más importancia. Entre dos aplicaciones similares, la que tenga el mejor diseño y usabilidad gana (así sea un poco inferior en funcionalidad).

Eso se traduce en mayor carga para el front-end, que no solo debe ser bueno técnicamente, también debe aprender de usabilidad y de diseño.

## Son demasiadas herramientas

La segunda razón por la que hoy en día el desarrollo front-end es tan complejo es que en un punto se decidió separar el front del back en proyectos diferentes para que los equipos pudieran trabajar independientemente. De esa forma los desarrolladores front-end se podían especializar en HTML, CSS y JavaScript, y los desarrolladores back-end en la comunicación con la base de datos y servicios externos.

Tiene sentido. El problema es que eso requiere nuevas herramientas, nuevas formas de estructurar los proyectos en el front-end. Y eso todavía no lo hemos terminado de inventar. Tenemos demasiadas opciones en este momento: <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a>, <a href="https://www.google.com/design/spec/material-design/introduction.html" target="_blank">Material Design</a>, <a href="http://semantic-ui.com/" target="_blank">Semantic UI</a>, <a href="http://sass-lang.com/" target="_blank">Sass</a>, <a href="http://lesscss.org/" target="_blank">Less</a>, <a href="http://gruntjs.com/" target="_blank">Grunt</a>, <a href="http://gulpjs.com/" target="_blank">Gulp</a>, <a href="https://webpack.github.io/" target="_blank">WebPack</a>, <a href="http://browserify.org/" target="_blank">Browserify</a>, <a href="https://www.npmjs.com/" target="_blank">NPM</a>, <a href="http://bower.io/">Bower</a>, <a href="https://angularjs.org/" target="_blank">AngularJS (1 y 2)</a>, <a href="http://emberjs.com/" target="_blank">Ember</a>, <a href="https://facebook.github.io/react/" target="_blank">React</a>, etc. Y cada una de esas opciones sigue evolucionando y cambiando rápidamente. Solo entender qué hace cada una de esas herramientas es todo un reto.

Aunque en el back-end también existe esa diversidad, las tecnologías son mucho más estables.

## Navegadores antiguos

Hacer aplicaciones que soporten Internet Explorer 9 y versiones anteriores es un verdadero martirio. Desafortunadamente siguen siendo muy populares y en muchas empresas exigen que se les siga dando soporte. Eso hace mucho más complejo el trabajo para los desarrolladores front-end.

## Nuevos clientes

El desarrollo de aplicaciones móviles y de escritorio se parece cada vez más al desarrollo Web front end. Eso es bueno, pero agrega más herramientas a la mezcla: <a href="http://ionicframework.com/" target="_blank">Ionic</a> y <a href="https://facebook.github.io/react-native/" target="_blank">React Native</a> (para desarrollo móvil), y <a href="http://electron.atom.io/" target="_blank">Electron</a> (para desarrollo de aplicaciones de escritorio) son algunos ejemplos.

## Reto y oportunidad

El desarrollo front-end está en un momento muy emocionante. Es un reto aprender tantas tecnologías, pero la oportunidad para los que se animen es enorme. La demanda por desarrolladores front-end seguirá aumentando en los próximos años, al igual que los salarios. Prepárate, es posible que en cada nuevo proyecto tengas que aprender una tecnología completamente diferente.

## ¿Cómo manejar la complejidad?

Mi sugerencia es aprender muy bien JavaScript, que es la base de las nuevas librerías y frameworks que están surgiendo. Existen muy buenos libros que profundizan en temas complejos como scope, closures, programación funcional, el funcionamiento de this y lo nuevo de ES6. Entre mis recomendaciones están:

* [Secrets of the JavaScript Ninja](https://www.manning.com/books/secrets-of-the-javascript-ninja).
* [You don't know JS](https://github.com/getify/You-Dont-Know-JS).
* [Understanding ECMAScript 6](https://leanpub.com/understandinges6/).

Pero si puedes tomar una decisión sobre la arquitectura de la aplicación, revisa muy bien los requerimientos. Quizá usar un framework en el cliente no sea necesario. De hecho, yo trato de evitarlos al máximo. Eso disminuye la complejidad de la aplicación, acelera el desarrollo y mejora la mantenibilidad.
