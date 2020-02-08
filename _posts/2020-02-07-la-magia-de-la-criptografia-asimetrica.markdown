---
layout: post
title:  "La magia de la criptografía asimétrica"
date:   2020-02-07 02:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/gold-padlock.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

En este post vamos a ver cómo funciona el cifrado de mensajes usando llaves públicas y privadas, y cómo puedes intercambiar mensaje cifrados con otras personas escribiendo un poco de código JavaScript.<!-- more -->

Cuando se cifra un mensaje se utiliza una llave (o clave) para sustituir cada letra por una letra diferente (o un símbolo) con el fin de ocultar el contenido.

Imagina que **Pedro** le quiere enviar a **María** un mensaje cifrado. Una forma de hacerlo con llaves públicas y privadas sería la siguiente:

1. **María** crea una llave pública y una privada (si no tiene unas ya creadas).
2. **María** envía su llave pública a **Pedro**.
3. **Pedro** cifra el mensaje utilizando la llave pública de **María**.
4. **Pedro** le envía el mensaje cifrado a **María**.
5. **María** utiliza su llave privada para descifrar el mensaje.

A esta técnica se le conoce como **criptografía asimétrica** porque la llave para cifrar la información (la llave pública) es diferente a la llave para descifrarla (llave privada).

Antes del desarrollo de la criptografía asimétrica, la única forma de cifrar información era utilizando la misma llave para cifrar y descifrar la información (criptografía simétrica).

El problema de la **criptografía simétrica** (que utiliza la misma llave para cifrar y descifrar) es la distribución de la llave a todos los interesados. La **criptografía asimétrica** soluciona este problema porque cada persona puede compartir su llave pública para que otros le envién mensajes cifrados, y utilizar su llave privada para descifrar esos mensajes.

Una llave (pública o privada) no es más que una cadena de caracteres. Por ejemplo, la siguiente es una llave pública que tengo configurada en [Github](https://github.com/):

```shell
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC3ftr8QCuN1AIcdPOYXjYfKl2gABIv7zspBaSUySy83i9Se9a11mybifFOtVXR6DESaHu8GYC1ThNLSkC8LAOVTCrh/TBfjKXpTr4C22jvSwPUMdFF7QbpqWNrjLlfIzBfWZqTh+xOAhuGtWZZqIq3lx9BKQeSFWY7kDSDKluTp5GezSZKq64L8YL0gROXd+8dFWY2CbGLQKoadzTJd69VB5P+QgN/Q1NpSvZPNE6aEJD4bHBOgyUqr9yh/zBQakT7RNzc4ga3b/tAo630CE5ZsHuz5IIvLDTi9jSV/ICO182cZWHYn5aGYSkBxSnZZOjzYwO6jEXyzOuf/Dxrsawt
```

Puedes consultar las llaves públicas de cualquier usuario en [Github](https://github.com/) ingresando a la URL `https://github.com/<nombre-de-usuario>.keys` (reemplaza `<nombre-de-usuario>` por el usuario correspondiente). Por eso se llaman **llaves públicas**, porque pueden ser compartidas públicamente.

Por ejemplo, puedes ver mis llaves públicas si ingresas a [https://github.com/germanescobar.keys](https://github.com/germanescobar.keys).

**Nota:** Si no te aparecen llaves públicas bajo tu usuario es porque aún no has creado ninguna. Sigue las instrucciones en [este link de Github](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) para crearlas.

Cualquier persona podría enviarme un mensaje cifrado utilizando mi llave pública y sólo yo voy a poder descifrar el mensaje porque tengo la llave privada almacenada en un archivo de mi computador.

Lo importante es mantener la llave privada en un sitio seguro y bajo contraseña (al crear la llave privada es posible asegurarla con un `passphrase`, que no es más que una contraseña).

## Cifrando y descifrando mensajes

Veamos entonces cómo cifrar mensajes con una llave pública y descifrarlos con una llave privada utilizando [Node.js](https://nodejs.org/en/).

[Github](https://github.com/) almacena las llaves públicas utilizando un formato que no es compatible con lo que vamos a hacer, así que el primer paso es transformar la llave a un formato compatible.

Crea un archivo llamado `public.key`con el contenido de la llave pública y ejecuta el siguiente comando desde una consola:

```shell
ssh-keygen -f public.key -e -m PKCS8 > public.key.pem
```

Ahora crea un archivo llamado `encrypt.js` con el siguiente contenido:

```javascript
const crypto = require('crypto')
const path = require('path')
const fs = require('fs')

const encrypt = (text, pkPath) => {
  return new Promise((resolve, reject) => {
    const absPkPath = path.resolve(pkPath)
    fs.readFile(absPkPath, 'utf8', (err, pk) => {
      if (err) {
        return reject(err)
      }

      const buffer = Buffer.from(text, 'utf8')
      const encrypted = crypto.publicEncrypt(pk, buffer)
      resolve(encrypted.toString('base64'))
    })
  })
}


encrypt("Hola Mundo", "public.key.pem")
  .then(str => console.log(str))
  .catch(err => console.log(err))
```

Cambia el texto `"Hola Mundo"` por el texto que quieras cifrar. Ejecuta el archivo con el siguiente comando:

```shell
node encrypt.js
```

Deberías ver el texto cifrado que puedes enviar a la persona que tenga la llave privada correspondiente a esa llave pública.

Para descifrar un mensaje crea un archivo llamado `decrypt.js` con el siguiente contenido:

```javascript
const crypto = require('crypto')
const path = require('path')
const fs = require('fs')

const decrypt = (text, privateKeyPath, passphrase) => {
  return new Promise((resolve, reject) => {
    const p = path.resolve(privateKeyPath)
    fs.readFile(p, 'utf8', (err, pk) => {
      if (err) {
        return reject(err)
      }

      const buffer = Buffer.from(text, 'base64')
      const decrypted = crypto.privateDecrypt({
        key: pk.toString(),
        passphrase
      }, buffer)

      resolve(decrypted.toString('utf8'))
    })
  })
}

decrypt("texto cifrado", "/ruta/llave/privada", "passphrase")
  .then(str => console.log(str))
  .catch(err => console.log(err))
````

Debes cambiar los primeros tres argumentos por el texto cifrado, la ruta de la llave privada y el `passphrase` respectivamente.

Ejecuta el programa con el siguiente comando:

```shell
node decrypt.js
```

Deberías ver el mensaje original.

## ¿Qué clase de brujería es esta?

Lo que me parece increíble de la **criptografía asímétrica** es, primero, que no sea necesario ponerse de acuerdo en una llave secreta con otras personas y, segundo, que la llave pública se pueda compartir con cualquiera sin peligro, incluso con nuestros peores enemigos.

La llave pública se crea a partir de la llave privada, así que las dos están estrechamente relacionadas. Sin embargo, si de alguna forma pudieramos obtener la llave privada a partir de una llave pública el sistema dejaría de funcionar. Entonces ¿cómo evitan que esto suceda?

No vamos a ahondar mucho en los detalles matemáticos pero la idea principal está basada en el uso de números primos, es decir, números que sólo son divisibles por 1 y ellos mismos. Ejemplos de números primos son 5, 7, 11, 13, etc.

Multiplicar dos números primos es trivial, por ejemplo `13 x 17 = 221`, pero hacer el ejercicio contrario, encontrar dos números primos (los factores) cuya multiplicación da un determinado resultado es muy difícil cuando los números son muy grandes, cuando el número tiene cientos de cifras.

Para crear una llave privada se seleccionan dos números primos (muy grandes) y el resultado de la multiplicación se va a convertir en la llave pública.

Ahora, hay más matemática involucrada, pero si alguien encuentra una forma fácil y rápida de factorizar los números primos de cualquier número (sin importar su tamaño), todo el sistema de criptografía sobre el que depende nuestra civilización se derrumbaría por completo.

Afortunadamente hoy están surgiendo otras alternativas a la multiplicación de números primos como la [criptografía de curva elíptica](https://es.wikipedia.org/wiki/Criptograf%C3%ADa_de_curva_el%C3%ADptica), pero la idea es la misma, generar la llave pública a partir de la privada es muy fácil, pero lo contrario es muy difícil.

## Otras aplicaciones

Hasta ahora hemos hablado de cifrar un mensaje con la llave pública y descifrarlo con la llave privada. Pero ¿será útil cifrar un mensaje con la llave privada sabiendo que cualquier persona lo va a poder descifrar con la llave pública?

¡Claro que es útil! No tanto para cifrar información sino para garantizar la autenticidad de un mensaje, es decir, saber que viene de la persona o la organización indicada.

Ejemplos de aplicaciones que utilizan esta técnica incluyen las [firmas digitales](https://es.wikipedia.org/wiki/Firma_digital) (que permiten determinar la autenticidad de un mensaje), [certificados digitales](https://es.wikipedia.org/wiki/Certificado_digital) (p.e. los que utilizan los sitios seguros con HTTPS) y las [criptomonedas](https://es.wikipedia.org/wiki/Criptomoneda) (p.e. Bitcoin, Ethereum, etc.), entre muchas otras.

----

Este post fue inspirado en un libro llamado [The Code Book, de Simon Singh](https://www.amazon.com/Code-Book-Science-Secrecy-Cryptography-ebook/dp/B004IK8PLE/ref=sr_1_2?crid=2VSNWLV86EPND&keywords=the+code+book&qid=1581102348&s=digital-text&sprefix=the+code+book%2Caps%2C206&sr=1-2) que estoy terminando de leer. En él aprendí también cómo funcionaba la [máquina Enigma](https://es.wikipedia.org/wiki/Enigma_(m%C3%A1quina)) utilizada por los alemanes en la segunda guerra mundial para cifrar sus comunicaciones, pero que los ingleses lograron "quebrar" como lo dramatizan en la película [The Imitation Game (El Código Enigma)](https://es.wikipedia.org/wiki/The_Imitation_Game) basada en la vida de [Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing).
