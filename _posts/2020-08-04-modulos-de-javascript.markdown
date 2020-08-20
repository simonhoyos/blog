---
layout: post
title:  "Módulos de JavaScript"
date:   2020-08-04 02:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/javascript-modules.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

En este post explicaremos qué son los módulos de JavaScript, cuándo utilizarlos y cómo se comparan con otras soluciones como **CommonJS**.<!-- more -->

Aunque la mayoría de lenguajes ofrecen alguna forma de importar código de otros archivos y librerías, JavaScript se pensó para scripts muy cortos en el navegador y al principio no se creía que fuera necesario algo similar.

Con la transición a SPA'a (Single Page Applications) y con la llegada de [Node.js](https://nodejs.org/){:target="\_blank"}, se hizo necesario una solución. Surgieron algunas propuestas como CommonJS (lo que utiliza [Node.js](https://nodejs.org/){:target="\_blank"} por defecto) y [RequireJS](https://requirejs.org/){:target="\_blank"}, pero ninguna de estas soluciones hacen parte del lenguaje.

Finalmente **ECMAScript 2015 (ES6)** introdujo una solución integrada al lenguaje: los módulos de ECMAScript (también conocidos como ESM, módulos de JavaScript, o simplemente módulos). Su adopción ha sido lenta pero gracias a herramientas como [Babel](https://babeljs.io/){:target="\_blank"} o [Webpack](https://webpack.js.org/){:target="\_blank"} hoy podemos hacer uso de ellos.

Antes de entrar a ver la sintaxis de los módulos, veamos qué problema solucionan.

## El problema

Supongamos que tenemos dos archivos, donde uno depende de una variable definida en el otro:

```javascript
// hello.js
const hello = "Hola Mundo"
```

```javascript
// print.js
console.log(hello) // dependemos de la variable hello
```

En JavaScript todas las variables por fuera de una función son globales, así que podemos importar los dos archivos desde nuestro archivo HTML:

```html
<script src="hello.js"></script>
<script src="print.js"></script>
```

Esto funcionaría y veríamos “Hola Mundo” en la consola del navegador. Lo único que debemos tener en cuenta es el orden: no podemos importar `print.js` antes de `hello.js`.

**El principal problema de esta solución es que la variable `hello` es una variable global que se puede utilizar o reescribir por error en otro archivo**.

Necesitamos una mejor forma de compartir código entre archivos.

## CommonJS

Aunque han surgido varias propuestas para solucionar este problema, la más importante es CommonJS, que es la que utiliza [Node.js](https://nodejs.org/){:target="\_blank"}  por defecto.

CommonJS utiliza la palabra `require` para importar código y `module.exports` para exportarlo.

Reescribamos el ejemplo anterior utilizando CommonJS:

```javascript
// hello.js
const hello = "Hello World"
module.exports = hello
```

```javascript
// print.js
const hello = require("./hello")
console.log(hello)
```

Nota el uso de `module.exports` para exportar la variable en `hello.js` y de `require` para importarla en `print.js`.

Esto soluciona el problema de las variables globales compartidas por todos los archivos. Ahora podemos decidir explícitamente qué variables exportar e importar en cada archivo.

Sin embargo, recuerda que CommonJS (y las demás alternativas) no son parte del estándar de ECMAScript.

**Nota:** para utilizar CommonJS en el navegador necesitas alguna herramienta como [Browserify](http://browserify.org/){:target="\_blank"} o [Webpack](https://webpack.js.org/){:target="\_blank"} que convierta tu código.

## ECMAScript Modules

ECMAScript 2015 (ES6) introdujo los módulos como parte del estándar.

A diferencia de CommonJS, que utiliza `module.exports` para exportar variables, con módulos se utiliza sólo la palabra `export`:

```javascript
// hello.js
export const hello = "Hello World"
```

Para importar código en CommonJS utilizamos `require`, pero con los módulos de ES utilizamos `import ... from`:

```javascript
// print.js
import { hello } from './hello'
console.log(hello)
```

También podemos exportar una variable por defecto, que nos permite importarla directamente, sin los corchetes.

```javascript
// hello.js
const hello = "Hello World"
export default hello // utilizamos default
```

```javascript
// print.js
import hello from './hello' // no necesitamos los corchetes
console.log(hello)
```

Ahora que ya conoces la sintaxis, veamos cómo utilizar los módulos en el navegador y en [Node.js](https://nodejs.org/){:target="\_blank"}.

### Módulos en el navegador

La mayoría de navegadores ya soporta módulos directamente (exceptuando Internet Explorer, claro). Para usarlos debes agregarle `type="module"` a la etiqueta `script`:

```html
<script type="module" src="print.js"></script>
```

Fíjate que no es necesario agregar la referencia a `hello.js` porque `print.js` lo importa:

```javascript
// print.js
import hello from './hello.js' // es necesario la extensión .js
console.log(hello)
```

Si vas a probar este código localmente, asegúrate de estar utilizando un servidor Web, de lo contrario vas a ver un error de CORS en la consola. Una solución es utilizar el paquete [http-server](https://www.npmjs.com/package/http-server){:target="\_blank"}. Desde la raíz de la carpeta puedes ejecutar los siguientes comandos:

```shell
$ npm install http-server -g
$ http-server
```

La pregunta ahora es ls siguiente: si ya es posible utilizar módulos directamente en el navegador ¿para qué usar herramientas como [Webpack](https://webpack.js.org/){:target="\_blank"}?

La respuesta es que, por un lado, seguramente necesitas [Webpack](https://webpack.js.org/){:target="\_blank"} (o alguna herramienta similar) para otras tareas como minimizar tu código, convertirlo a ES5, etc. Por otro lado, puede ser mejor empaquetar todo tu código JavaScript en un archivo, en vez de tener que cargar módulos independientes desde el navegador.

La verdad no conozco ningún proyecto grande que utilice los módulos directamente como explicamos en esta sección, pero es posible que eso empiece a cambiar en un futuro cercano.

### Módulos en Node.js

[Node.js](https://nodejs.org/){:target="\_blank"} soporta los módulos de forma experimental. Hay dos formas de activarlos.

La primera forma es renombrar tus archivos de `.js` a `.mjs`. Lo único que debes tener en cuenta es que al importar el archivo debes incluir la extensión `.mjs`

```javascript
// print.js
import hello from './hello.mjs' // es necesario la extensión .mjs
console.log(hello)
```

La segunda forma es agregar la propiedad `type` con valor `module` en el `package.json`:

```json
// package.json
{
  "type": "module"
}
```

Con esta forma ya no es necesario renombrar los archivos a `.mjs`.

## Conclusión

Los módulos cumplen una función muy natural en el desarrollo de software: escribir código modular. La mayoría de lenguajes tienen alguna forma de manejar las dependencias entre archivos, pero eso no existía en el estándar de ECMAScript (y por lo tanto en JavaScript).

Sin embargo, eso no impidió que surgieran soluciones. En este post explicamos CommonJS, que es lo que utiliza por defecto [Node.js](https://nodejs.org/){:target="\_blank"} para ese manejo de dependencias, pero eso no significa que no existieran otras.

La llegada de los módulos es importante porque agrega esta funcionalidad directamente al lenguaje, pero seguramente ha causado mucha confusión: ¿cuándo uso `require` y cuándo uso `import`?

Espero que este post te haya aclarado esa confusión. Recuerda, en [Node.js](https://nodejs.org/){:target="\_blank"} usas `require` (CommonJS) a menos de que hayas activado los módulos. Con [Webpack](https://webpack.js.org/){:target="\_blank"} puedes usar siempre `import` (módulos).
