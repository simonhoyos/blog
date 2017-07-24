# Make it Real's Blog

Este repositorio contiene el código fuente del [blog de Make it Real](http://blog.makeitreal.camp/). Está creado con [Jekyll](https://jekyllrb.com/), que es un generador de contenido estático.

## Instalación

Para correr este proyecto localmente necesitas tener instalado Ruby. Si no es así, sigue las instrucciones en [este enlace](https://github.com/makeitrealcamp/ruby-installation) para instalarlo.

Una vez tengas Ruby instalado haz lo siguiente:

1. Clona el proyecto.
2. Ejecuta `bundle install` para instalar las dependencias.
3. Ejecuta `jekyll serve` para prender el servidor.
4. Ingresa a http://localhost:4000/ desde tu navegador, deberías ver la página de inicio del blog.

## Contribución

Para publicar un post o contribuir algún cambio al código fuente de este blog sigue estos pasos:

1. Hazle fork al proyecto.
2. Clona el fork y córrelo siguiendo las instrucciones en la sección **Instalación** arriba.
3. Si vas a escribir un post sigue las instrucciones de la sección **Escribiendo un post** más abajo.
4. Publica los cambios a tu fork.
4. Abre un Pull Request desde tu repositorio a este repositorio.

Intentaremos revisar e integrar los Pull Requests lo más rápido posible pero ten paciencia, es posible que nos demoremos algunos días en contestar.

### Escribiendo un post

[Jekyll](https://jekyllrb.com/) utiliza un formato llamado Markdown para escribir los posts. Si no conoces Markdown te recomendamos [este recurso](https://guides.github.com/features/mastering-markdown/) para que aprendas lo básico, no es difícil.

Para empezar crea un archivo en la carpeta `_posts` con el siguiente formato:

```
yyyy-mm-dd-titulo-del-post.markdown
```

El archivo debe tener un encabezado como el siguiente:

```
---
layout: post
title:  "Mi super post"
date:   2017-07-12 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/concurrency.jpeg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---
```

Cambia el `title`, `date`, `author`, `image` y `gravatar`. Puedes encontrar buenas imágenes en http://pexels.com/ y en http://unsplash.com/. Asegúrate de que la imagen no pese más de 200Kb. Guarda las imágenes de fondo en la carpeta `/assets/images/bg-images`.

Crea un **commit** con el mensaje:

```
Create post "El título de tu post".
```

Si el título es muy largo utiliza algo más corto pero descriptivo en el mensaje de commit.

**Nota:** Para no tener que reinciar el servidor cada vez que haces un cambio inícialo con la opción `--watch`:

```
$ jekyll serve --watch
```
