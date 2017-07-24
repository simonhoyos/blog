---
layout: post
title:  Herramientas de desarrollador o developer tools
date:   2015-05-29 12:00:00 -0500
author: Simón Soriano
image: /assets/images/bg-images/developer-tools.png
gravatar: //www.gravatar.com/avatar/0a5c5ad25ae54bd2be9c5091cf5eb1d1.jpg?s=80
redirect_from: "/2015/05/29/herramientas-de-desarrollador-o-developer-tools/"
---


Las herramientas de desarrollador, o en inglés *developer tools*, son un conjunto de herramientas integradas en el navegador, diseñadas para facilitar el desarrollo de aplicaciones web. <!-- more -->La mayoría de navegadores cuentan con un kit de herramientas de desarrollador, sin embargo en este artículo vamos a hablar de [Chrome Developer Tools](https://developer.chrome.com/devtools) ya que es el conjunto de herramientas más completo y más popular.

Si usas otro navegador no te preocupes, la mayoría de funcionalidades son muy parecidas y vas a poder encontrar el homólogo en el navegador que estés usando.

## Activando las herramientas de desarrollador

Lo primero que debes saber es cómo activar las herramientas de desarrollador. Chrome nos permite abrir las herramientas de desarrollador utilizando un shortcut que depende del sistema operativo:

- Mac: `Cmd+Opt+I`
- Otros: `Ctrl+Shift+I`

Debes ver un panel blanco en la parte inferior de la pantalla así:


![chrome developer tools](https://s3.amazonaws.com/makeitreal/blog/dev-tools/dev-tools)


Aunque hay varias pestañas, en este artículo vamos a hablar de 3 en particular:

- **Elementos o *Elements*:** En esta pestaña vas a poder inspeccionar el [DOM](http://html.conclase.net/w3c/dom1-es/introduction.html) y cada uno de los elementos. Puedes utilizar `Cmd + F` o `Ctrl + F` para buscar y puedes editar el contenido de la página haciendo doble click en cualquier elemento.

- **Consola o *Console*:** En esta pestaña vas a poder ejecutar código Javascript utilizando las librerías y scripts que hayan disponibles en la página.

- **Red o *Network*:** En esta pestaña vas a poder analizar las peticiones que se realizan desde la página, su respectiva respuesta y detalles específicos de cada petición como encabezados, código de respuesta y tiempo de carga.

Ahora que conoces la existencia de estas 3 herramientas vamos a ver su utilidad.


## Experimentar con el DOM

Las herramientas de desarrollador te van a permitir experimentar con la estructura de las páginas web rápidamente como en los siguientes ejemplos:

###Cambiar el color de fondo:

1. Haz click en la lupa en la parte superior izquierda de las herramientas de desarrollador.
2. Selecciona el elemento que quieres inspeccionar en el DOM.
3. Modifica la propiedad `background-color` en la parte derecha de las herramientas de desarrollador.

![change color animation](https://s3.amazonaws.com/makeitreal/blog/dev-tools/change-color.gif)


### Agregar o quitar clases:

1. Haz click en la lupa en la parte superior izquierda de las herramientas de desarrollador.
2. Selecciona el elemento que quieres inspeccionar en el DOM.
3. En la parte izquierda, en la pestaña *elements* vas a encontrar el código HTML de la página, y vas a encontrar resaltado el código del elemento que estás inspeccionando.
4. Haz doble click en el código HTML que deseas modificar y realiza los cambios que deseas.
5. Oprime `CMD + ENTER` o `CTRL + ENTER`  para hacer que los cambios se efectúen.

![change classes animation](https://s3.amazonaws.com/makeitreal/blog/dev-tools/change-classes.gif)



### Jugar con Javascript

Una de las herramientas más poderosas es la Consola de Javascript. En ella tienes acceso al Javascript de la página que estás inspeccionando y por ende puedes ejecutar las funciones y usar las librerías que estén disponibles.

Por ejemplo, abre las herramientas de desarrollador en esta página y en la consola ejecuta la siguiente línea de código:

```
$("#super-mega-secret-modal").modal("show");
```

<div class="modal fade" id="super-mega-secret-modal" tabindex="-1" role="dialog" style="display: none;">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header text-center">
        <button type="button" class="close" data-dismiss="modal" ><span>×</span></button>
        <h2 class="modal-title" id="super-mega-secret-modal-title">¡Has descubierto un modal secreto!</h2>
      </div>
      <div class="modal-body">
        ¡Eres genial!
        Comparte con tus amigos este post para que también aprendan a utilizar las herramientas de desarrollador.
        <div class="text-center">

          <div class="fb-share-button" data-href="http://blog.makeitreal.camp/2015/05/29/herramientas-de-desarrollador-o-developer-tools" data-layout="button"></div>
        </div>

      </div>
    </div>
  </div>
</div>


### Análisis de peticiones HTTP

Como explicamos en el artículo [HTTP y HTML](http://blog.makeitreal.camp/2014/10/05/http-y-html/), las aplicaciones web, y en general todo internet, funcionan con el protocolo HTTP que consiste de peticiones y respuestas. Algunas veces debemos detenernos a analizar si estamos enviando los datos correctos en un formulario o si estamos recibiendo la respuesta esperada por parte del servidor; Para ello, dentro de las herramientas de desarrollador se encuentra una pestaña llamada red o *network* en la que vamos a poder analizar cada una de las peticiones que salen de la página que estamos inspeccionando y así mismo las respuestas que esas peticiones reciben.

En las herramientas de desarrollador selecciona la pestaña red o *network*.
Vas a ver una tabla parecida a la siguiente:
![network tab](https://s3.amazonaws.com/makeitreal/blog/dev-tools/network)


En la parte superior se va a ver una línea de tiempo en la que se muestran los tiempos de respuesta de cada petición. Puedes utilizar esta información para optimizar los tiempo de carga de tu página.

En la parte inferior se va a ver una tabla con los detalles de cada petición. Estos detalles incluyen:

- **Path**: URL a la que se hace la petición.

- **Method**: Método o verbo que se utiliza para enviar la petición.

- **Status**: Código de respuesta.

- **Type**: Tipo de la respuesta.

- **Size**: Tamaño en bytes de la respuesta.

- **Time**: Tiempo que le tomó al navegador recibir la respuesta.


Si haces click en una petición vas a poder ver más detalles de esa petición.

![HTTP requet detail](https://s3.amazonaws.com/makeitreal/blog/dev-tools/request-detail)




## Conclusión

Ahora conoces 3 herramientas básicas que todo desarrollador web debe tener en su arsenal. Inspecciona código HTML, modifícalo, experimenta, ejecuta código Javascript y optimiza tu página analizando las peticiones HTTP.

Puedes aprender más sobre las herramientas de desarrollo en la página oficial de [Chrome developer](https://developer.chrome.com/devtools) tools o en el [curso gratis de Codeschool](http://discover-devtools.codeschool.com/).

Y recuerda, si quieres seguir aprendiendo sobre desarrollo de aplicaciones web, inscríbete a nuestro programa en línea [Make it Real](http://makeitreal.camp).
