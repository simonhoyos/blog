---
layout: post
title:  "Entendiendo el método .map de los arreglos"
date:   2020-11-11 02:00:00 -0500
author: Simón Hoyos
image: /assets/images/bg-images/rock-pattern.jpg
gravatar: //www.gravatar.com/avatar/e37afad6dc0bf97b742c2a51e0446ab8.jpg?s=80
---

El método map se utiliza para transformar todos los elementos de un arreglo ejecutando una lógica u operación por cada uno de ellos. Map crea un nuevo arreglo y almacena el resultado de cada operación en este arreglo para no modificar o afectar el arreglo original.<!-- more -->

## Recorreriendo el Arreglo

**Ejemplo** crearemos un nuevo arreglo donde tomemos cada uno de los elementos y le sumamos el valor de su índice. Para lograr esto podemos usar el siguiente código:

```javascript
// tenemos el arreglo original
let origin = [1,2,3,4,5]
// creamos un nuevo arreglo
let res = []

// iteramos sobre el arreglo original
for(let i = 0; i < origin.length; i++) {
  // tomamos el elemento actual y le sumamos el valor del índice
  const op = origin[i] + i
  // agregamos el resultado al nuevo arreglo
  res.push(op)
}

// por último retornamos el nuevo arreglo (en este caso lo mostramos en
// consola)
console.log(res)
```

El problema con esta lógica es que por cada **operación** que queramos ejecutar tenemos que crear un nuevo ciclo `for`. Es decir, si queremos multiplicar cada número por 2 entonces tenemos que crear un nuevo `for` que itere por cada uno de los elementos, lo multiplique por 2, y lo agregue al nuevo arreglo.

## Creando la Función customMap

Para solucionar esto vamos a envolver la lógica del `for` en una **función**, que en este caso llamaremos `customMap`.

```javascript
let origin = [1,2,3,4,5]

// creamos una nueva función
function customMap() {
  let res = []

  for(let i = 0; i < origin.length; i++) {
    const op = origin[i] + i
    res.push(op)
  }

  // retornamos el nuevo arreglo
  return res
}

console.log(customMap())
```

En este caso llegamos al mismo resultado. La función `customMap` solo nos serviría para sumar el elemento y el índice. Al tener la lógica dentro de una función nos va a dar más flexibilidad a la hora de reutilizar el código como veremos más adelante.

## Funciones Callback

Para el siguiente paso debemos entender que en JavaScript las funciones son **ciudadanos de primera clase**. Esto lo que quiere decir es que las funciones no solo se pueden ejecutar, sino que también se pueden almacenar en variables o, para nuestro beneficio, las podemos pasar como **argumentos** de otra función. Cuando pasamos una función como argumento de otra función a esta se le llama **callback**, por esto llamaremos el parámetro `cb`.

Lo que vamos a hacer en el siguiente paso es crear una nueva función `operation`, que va a recibir tres argumentos:
1. Un valor que va a representar el elemento actual.
1. El índice actual.
1. El arreglo original

Por último vamos a pasar la función `operation` como argumento de la función `customMap`

```javascript
let origin = [1,2,3,4,5]

function operation(element, index, array) {
  return element + index
}

function customMap(cb) {
  let res = [];

  for(let i = 0; i < origin.length; i++) {
    // Invocamos la función a la que hace referencia cb, y almacenamos el valor
    // que retorna en la variable op.
    // Al invocar cb le pasamos tres argumentos:
    // 1. origin[i]: el elemento actual.
    // 2. i: el index
    // 3. origin: el arreglo original
    const op = cb(origin[i], i, origin)
    res.push(op)
  }

  return res
}

// al pasar operation solo utilizando el nombre de la función, estamos pasando
// una referencia a la función y no su ejecución
console.log(customMap(operation))
```

En este ejemplo obtenemos el mismo resultado que en el ejemplo anterior.

## Ejecutando customMap sobre Cualquier Arreglo

Ahora, el último paso es hacer que `customMap` se puede ejecutar sobre cualquier arreglo y no solo sobre el arreglo almacenado en la variable `origin`. Para lograr esto lo que vamos a hacer es agregar la función `customMap` como un método del **prototipo Array**.

```javascript
Array.prototype.customMap = function(cb) {
  // Al agregar customMap como método de este prototipo podemos usar "this" para
  // hacer referencia al arreglo sobre el cual estamos corriendo el método
  let res = []

  for(let i = 0; i < this.length; i++) {
    // Pasamos como argumentos del callback el elemento actual, el índice actual
    // y el arreglo sobre el cual se esta corriendo el método
    let op = cb(this[i], i, this)
    res.push(op)
  }

  return res
}

// En este caso solo vamos a hacer uso del elemento, entonces podemos ignorar
// los demás parámetros
function multiplyByTwo(element) {
  return element * 2
}

// En este caso solo vamos a hacer uso del elemento y el índice, entonces solo
// definimos esos parámetros
function sumWithIndex(element, index) {
  return element + index
}

const multiplied = [1,2,3].customMap(multiplyByTwo)
const withIndex = [2,4,6].customMap(sumWithIndex)

console.log(multiplied) // [2,4,6]
console.log(withIndex) // [2,5,8]
```

## Conclusión

Los métodos `map`, `filter`, `every`, `some` funcionan de forma similar. Cada uno recibe un **callback** como argumento, y retorna un nuevo arreglo o valor que depende de la ejecución de dicho **callback**. Si entendemos uno de estos métodos, aprender los demás será más fácil.

Espero que les haya gustado este artículo, nos vemos en uno próximo.
