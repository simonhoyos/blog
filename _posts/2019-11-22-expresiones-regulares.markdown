---
layout: post
title:  "Expresiones regulares"
date:   2019-11-22 02:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/pillars.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

Las expresiones regulares son una poderosa herramienta que todo programador debería conocer. En este post vamos a ver qué son, para qué sirven y cómo utilizarlas.<!-- more -->

## ¿Qué son las expresiones regulares?

Imagina que recibes un archivo de texto muy largo y te piden escribir un programa que encuentre todos los números telefónicos que existan en el archivo con el formato `(XXX) XXX-XXXX`. ¿Cómo lo harías?

Una **expresión regular** (en inglés regular expression, regex ó regexp) es una secuencia de caracteres que define un patrón de búsqueda. Por ejemplo, con la siguiente expresión regular podríamos encontrar los números telefónicos con el formato que pedían:

```shell
\(\d{3}\) \d{3}-\d{4}
```

La principal crítica a las expresiones regulares es que son difíciles de leer y entender. Es una crítica válida. Sin embargo, las expresiones regulares también nos ofrecen muchas ventajas: pueden ahorrarnos muchas líneas de código, la gran mayoría son relativamente simples de construir o se encuentran fácilmente haciendo una **búsqueda en Internet**, y se pueden utilizar en diferentes contextos como veremos a continuación.

## Utilizando expresiones regulares

Las expresiones regulares se pueden utilizar en la mayoría de lenguajes de programación como JavaScript, Ruby, Python, Java, etc., en algunas aplicaciones para la línea de comandos como `grep`  y `find` y en algunos editores de texto como [Atom](https://atom.io/) o [VSCode](https://code.visualstudio.com/) para realizar búsquedas avanzadas, entre muchos otros. Más adelante veremos cómo utilizarlas en JavaScript.

Sin embargo, la forma más fácil de probar y depurar nuestras expresiones regulares es en algún sitio online como [regexr.com](https://regexr.com/).

Generalmente las expresiones regulares se encierran entre dos barras inclinadas (`/.../`) como lo haremos de ahora en adelante en este post.

## Entendiendo expresiones regulares

Empecemos con una expresión regular muy simple:

```shell
/abc/
```

Esta expresión busca una `"a"` seguida de una `"b"` seguida de una `"c"`, todas minúsculas, así que coincidiría con textos que incluyeran `"abc"` únicamente.

¿Qué pasaría si quisiéramos buscar algo un poco más complejo como una `"a"`, seguido de *cualquier caracter*, seguido de una `"b"`, por ejemplo `"anc"`, `"a7c"` o `"ahc"`? La respuesta es que necesitamos unos caracteres especiales llamados **metacaracteres**.

**Los metacaráteres nos permiten escribir expresiones más genéricas, y por lo tanto más útiles.**

El primer metacaráceter que vamos a ver es el punto (`.`), que indica que en esa posición puede ir cualquier caracter. Por ejemplo, para la pregunta previa utilizaríamos la siguiente expresión regular:

```shell
/a.c/
```

Esta expresión encontraría coincidencias para cadenas como `"abc"`, `"ajc"`, `"a8c"` pero no  `"abbc"` (tiene un caracter de más), `"cba"` o `"ac"` (falta un caracter en la mitad).

### Cuantificadores

Los siguientes metacaracteres nos permiten especificar cuántas ocurrencias del caracter anterior estamos esperando:

* `*`: 0 o más ocurrencias del caracter anterior.
* `+`: 1 o más ocurrencias del caracter anterior.
* `?`: 0 o 1 ocurrencia del caracter anterior.
* `{}`: determinadas ocurrencias (exacto `{3}` o un rango `{3,6}`).

Veamos un ejemplo de cada una de estas opciones:

* `/ab*c/`: una `"a"` seguida de cero o más `"b"`s, seguido de una `"c"` (p.e. `"ac"` o `"abbbbbbbbc"`).
* `/ab+c/`: una `"a"` seguida de una o más `"b"`, seguido de una `"c"` (p.e. `"abc"` o `"abbbbbc"`).
* `/ab?c/`: una `"a"` seguida de cero o una `"b"`, seguido de una `"c"` (`"ac"` o `"abc"`).
* `/ab{3}c/`: una `"a"` seguida de tres `"b"`, seguido de una `"c"` (`"abbbc"`).

Algunos metacaracteres se pueden mezclar, así que podemos utilizar el `.` con alguno de los de cantidad que acabamos de ver, por ejemplo:

```shell
/.*/
```

La anterior podría ser la expresión regular más genérica del universo, busca cualquier caracter cero o más veces, y coincidiría con cualquier cadena de texto que le pasemos, incluso la cadena vacía!

### Listas

Los metacaracteres `[` y `]` nos permiten crear una lista de posibles caracteres que pueden ir en una posición.  Por ejemplo, si queremos buscar una `"a"`, una `"b"` o una `"c"` (cualquiera de las tres) podríamos utilizar una lista:

```shell
/[abc]/
```

Utilizando guión (`-`) podemos crear rangos en una lista. Por ejemplo, si queremos buscar cualquier letra minúscula de la `"a"` a la `"z"` podríamos crear un rango:

```shell
/[a-z]/
```

Podemos tener varios rangos en la misma lista, por ejemplo si queremos buscar cualquier letra mayúscula o minúscula, o cualquier número, podemos utilizar la siguiente expresión:

```shell
/[a-zA-Z0-9]/
```

El metacaracter `^` tiene dos funciones. Si está dentro de una lista hace una negación, es decir, coincide con cualquier caracter que esté fuera del grupo. Por ejemplo, la siguiente expresión coincidiría con cualquier caracter excepto `"a"`, `"b"` o `"c"`:

```shell
/^abc/
```

### Inicio o fin de cadena

El metacaracter `^` también puede indicar el inicio de la cadena. Por ejemplo, la siguiente expresión coincidiría con cualquier cadena que empiece con `"abc"`:

```shell
/^abc/
```

También existe un metacaracter para indicar el fin de la cadena, el signo pesos (`$`). Por ejemplo, la expresión `/abc$/` coincidiría con cualquier cadena que termine con `"abc"`.

### Escape

Por último, tenemos el metacaracter `\` que nos permite escapar otros metacaracteres. Por ejemplo, la siguiente expresión regular coincidiría con una `"a"` seguida de un punto, seguida de una `"b"`:

```shell
/a\.c/
```

Si no escapáramos el punto con el `\` coincidiría cualquier caracter en esa posición.

Los paréntesis (`(` y `)`) también son metacaracteres que se utilizan para agrupar y extraer información pero no los vamos a cubrir en este post porque tienen su propia complejidad.

### Atajos

Existen algunos atajos que nos permiten escribir expresiones regulares más compactas:

* `\w`: caracteres de palabras (`[a-zA-Z0-9_]`)
* `\d`: dígitos (`[0-9]`)
* `\s`: espacio en blanco (`[\t\r\n ]`)

También existen atajos de negación para los anteriores:

* `\W`: `[^\w]`
* `\D` -> `[^\d]`
* `\S` -> `[^\s]`

### Banderas (flags)

Las banderas (flags) nos permiten darle más información a la expresión regular, por ejemplo si no queremos distinguir entre mayúsculas y minúsculas (la bandera `i`), o si queremos encontrar todas las coincidencias en vez de la primera únicamente (la bandera `g`).

Las banderas se ubican al final de la expresión regular, después de la última barra inclinada:

```javascript
/abc/ig
```

Las banderas más utilizadas son:

* `i`: no distingue entre mayúsculas y minúsculas.
* `g`: busca todas las coincidencias, no sólo la primera.

## Nuestra expresión inicial

Volvamos a nuestra expresión regular de los números telefónicos con el formato `(XXX) XXX-XXXX` y la analizamos, pero primero agreguémosle las barras inclinadas a los lados y el flag `g`:

```shell
/\(\d{3}\) \d{3}-\d{4}/g
```

* `\(\d{3}\)`:  Con `\` estamos escapando los paréntesis, que también son metacaracteres. `\d` representa un dígito (0 a 9) y el cuantificador `{3}` indica que estamos buscando 3 ocurrencias (3 dígitos en este caso).
* ` \d{3}`: Seguimos con un espacio y otros tres dígitos.
* `-`: No tenemos que escapar el guión porque solo es un metacaracter si está dentro de una lista (entre `[` y `]`).
* `\d{4}`: los 4 dígitos finales.

Por último tenemos la bandera `g` para que busque todas las coincidencias, no solo la primera.

## Expresiones regulares en JavaScript

En JavaScript hay dos formas de definir una expresión regular: encerrando la expresión entre barras inclinadas (`/`) o utilizando la función constructora `RegExp` que recibe la expresión regular como un string (sin las barras) y, opcionalmente, las banderas como segundo argumento:

```javascript
const regex1 = /\(\d{3}\) \d{3}-\d{4}/g;
const regex2 = new RegExp("\(\d{3}\) \d{3}-\d{4}", "g");
```

Como puedes ver en este ejemplo, las expresiones se pueden asignar a variables, pero también las puedes pasar como argumentos de funciones o pueden ser el valor de retorno de una función.

Para validar si una cadena de texto cumple con el patrón de una expresión regular podemos utilizar el método `test`:

```javascript
const regex1 = /\(\d{3}\) \d{3}-\d{4}/;
regex1.test("(123) 123-1234"); // true
regex1.test("123 123 1234"); // false
```

Algunos métodos de los strings reciben expresiones regulares. Veamos algunos de ellos:

El método `match` recibe una expresión regular y retorna las coincidencias en un arreglo. Por ejemplo, si queremos encontrar todas las letras minúsculas de una cadena podríamos hacer lo siguiente:

```javascript
"a3b4c5".match(/[a-z]/g); // ["a", "b", "c"]
```

El método `replace` nos permite reemplazar parte de un string con otro string, muy útil, por ejemplo, cuando queremos ocultar información:

```javascript
"(123) 123-1234".replace(/\(\d{3}\) \d{3}/g, "(XXX) XXX"); // (XXX) XXX-1234
```

El método `search` realiza una búsqueda sobre un string y retorna la posición de la primera coincidencia o -1 si no se encuentra ninguna:

```javascript
"a3b4c5".search(/\d/); // 1
```

El método `split` nos permite dividir una cadena utilizando una expresión regular. Por ejemplo, si queremos separar la cadena por cualquier número:

```javascript
"a3b4c5d".split(/\d/); // ["a", "b", "c", "d"]
```

## Construyendo una expresión regular desde cero

Como ejercicio vamos a intentar construir una expresión regular para encontrar emails válidos.

La característica más obvia de un email es el caracter `@`, así que podemos empezar con una expresión regular que busque cualquier secuencia de caracteres, seguido de `@`, seguido de otra secuencia de caracteres:

```shell
/.+@.+/
```

Utilizamos el cuantificador `+` en vez de `*` porque queremos que exista al menos un caracter a lado y lado de `@`. Pero esta expresión regular permitiría muchos emails inválidos. Para empezar acepta espacios en blanco y no está verificando la terminación del dominio (`.com`, `.camp`, etc.), así que arreglemos eso:

```shell
/[\w.-]+@[\w-]+\.[a-z]{2,6}/
```

Mucho mejor, pero esta expresión está lejos de ser perfecta, por ejemplo, un email no puede empezar con `-` y existen más caracteres válidos.

La verdad es que no hay una expresión regular perfecta en este caso. En [esta página](https://emailregex.com/) puedes encontrar varias alternativas, algunas increíblemente complejas aunque un poco más exactas. Sin embargo, personalmente prefiero sacrificar exactitud por simplicidad.

### Práctica

Si quieres poner a prueba tus conocimientos en expresiones regulares, [esta página](http://play.inginf.units.it/#/) tiene varios ejercicios interesantes para practicar.

## Conclusión

Las expresiones regulares pueden parecer indescifrables (¡algunas lo son!) pero son muy útiles cuando necesitamos encontrar patrones en un texto. Sin embargo, escribir una expresión regular desde cero no es trivial, así que una buena idea es buscar primero algunas opciones en Internet y seleccionar una que sea simple pero que funcione bien en la mayoría de casos.

En este post vimos una introducción a las expresiones regulares. Espero que te haya ayudado a entender qué son, cómo funcionan y cuándo utilizarlas.
