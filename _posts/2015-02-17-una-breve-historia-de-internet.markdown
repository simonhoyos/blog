---
layout: post
title:  "Una muy breve historia de Internet"
date:   2015-02-17 17:40:58
author: Germán Escobar
---

A principios de los años 60’s, en Estados Unidos, varias universidades tenían computadores de tiempo compartido: enormes máquinas, con una fracción de la capacidad de tu teléfono móvil actual, que se accedían a través de terminales sin pantalla, permitiendo a varios compartir los recursos de la enrome máquina.

<img src="/images/mainframe3.jpg" alt="Screenshots" class="photo">

<p class="photo-description">Imagen de un PDP-10 tomada de http://cds.cern.ch/record/916840</p>

Muchos creían que los computadores habían llegado a una cúspide evolutiva y no había mucho por desarrollar en ese campo. Así que la atención se centró en pensar cómo podrían comunicarse estos computadores de forma remota. Las aplicaciones serían infinitas: chat, juegos, transferencia de archivos, publicación de documentos, etc.

La idea fue desarrollada paralelamente por Paul Baran en Estados Unidos y Donald Davies en Inglaterra. Consistía de **una red parecida a la telefónica** pero con dos cambios importantes. El primero era construir la red a partir de muchos nodos interconectados entre sí (la red telefónica es centralizada o descentralizada con unos cuantos nodos principales).

<img src="/images/topologies.jpg" alt="Screenshots" class="photo">

<p class="photo-description">La nueva red tendría la topología distribuída. Imagen tomada de http://www2.cffn.ca/usha/part-iii-article-by-pramod-dhakal/129-the-law-of-rule-centralized-decentralized-and-distributed-systems</p>

El segundo cambio era mucho más revolucionario: **partir la información en paquetes que volverían a ser reensamblados por el receptor**. Cuando descuelgas el teléfono y haces una llamada, ocupas un canal por la duración de la llamada. La red soporta un número limitado de canales simultáneos por lo que se satura rápidamente. Pero lo verdaderamente problemático es que el uso del canal es mínimo (piensa en las pausas para respirar, los incómodos silencios, o cuando dejas descolgado el teléfono para abrir la puerta). Al dividir la información en paquetes se puede hacer un mejor uso del medio, porque solo se usa cuando se está enviando información. Otra ventaja es que los paquetes pueden tomar diferentes rutas de ser necesario.

Pero para lograr una red basada en enrutamiento de paquetes (packet switching), los computadores tendrían que implementar algoritmos de enrutamiento, detección de errores, reensamblado de paquetes, etc. La solución parecía viable en un principio, al fin y al cabo los computadores son muy buenos para ese tipo de tareas. Desafortunadamente a AT&T, en Estados Unidos, no le interesó la idea en 1965 y el tema se congeló.

Dos años después, en 1967, se inició un proyecto en una pequeña agencia del gobierno de Estados Unidos llamada **ARPA (Advanced Research Projects Agency)** que había nacido en 1958 como respuesta al lanzamiento del <a href="http://en.wikipedia.org/wiki/Sputnik_1" target="_blank">Sputnik 1</a>, pero que se había reducido a financiar proyectos exploratorios en universidades después del nacimiento de la NASA.

El proyecto consistía en crear una red que conectara a varias universidades a través de líneas telefónicas. Sin embargo, a ninguna universidad le interesaba asignar recursos de su computador para ejecutar las tareas que requería la red (implementación de algoritmos de enrutamiento, detección de errores, reensamblado de paquetes, etc.) La solución fue crear e instalar una máquina adicional en cada universidad entre el computador y la línea telefónica que se encargaría de las tareas propias de la red. **A esta máquina se le dio el nombre de IMP (Interface Message Processor) y es lo que hoy en día conocemos como routers (enrutadores)**.

<img src="/images/imp.jpg" alt="Screenshots" class="photo">

<p class="photo-description">Un IMP, los primeros enrutadores de Internet. Imágen tomada de http://galleryhip.com/interface-message-processor.html</p>

La idea era muy simple. Cuando un computador (host) se quería comunicar con otro, enviaba un mensaje a través del IMP. El IMP partía el mensaje en paquetes (cada paquete tenía un encabezado y parte del mensaje) y los redireccionaba al IMP destino que reensamblaba el mensaje y se lo pasaba al computador (host). **El contenido del mensaje y la forma en la que se interpretaba era responsabilidad de los computadores (hosts), no del IMP**.

En 1968 un grupo de jóvenes se empezó a reunir y a definir los primeros protocolos. Para evitar ofender a los creadores del IMP y de la red, llamaron los documentos “petición para comentarios”. El 7 de Abril de 1969 lanzaron el primer RFC (Request For Comments), el <a href="https://tools.ietf.org/html/rfc1" target="_blank">RFC 1</a>, que define la comunicación entre el host y el IMP. El grupo se empezó a llamar a sí mismo el Network Working Group (NWG) y en los siguientes años definieron otros protocolos como el FTP - File Transfer Protocol (RFC 114) e Email (RFC 196).

En Octubre de 1969 se hizo la primera comunicación entre dos hosts, uno en UCLA (University of California) y el otro en SRI (Stanford Research Institute), cada uno con su respectivo IMP. **A la red se le dio el nombre de ARPANET** y rápidamente se agregaron más nodos (universidades) a la red.

Algunas personas empezaron a pensar cómo implementar una red de packet-switching sobre medios distintos a las costosas líneas telefónicas que usaba ARPANET. La ALOHANET, en Hawaii, fue una de las primeras y utilizaba pequeños radios, idénticos a los que utilizaban los taxis hace algunos años, para intercambiar los mensajes. Muchas otras redes surgieron utilizando otros medios, pero estas redes no estaban interconectadas entre sí. **¿Cómo conectar redes que utilizaban diferentes medios, diferentes tamaños y encabezados de paquetes?**

La solución, propuesta en Mayo de 1974, fue usar routers que conectaran las diferentes redes que existían en el momento. El router entendería los paquetes de las dos redes a las que estaba conectada. Pero el principal problema del esquema era que el router necesitaría recibir el mensaje completo de una red antes de redireccionarlo a la otra. Se divisó una solución que se convirtió en lo que hoy conocemos como los protocolos TCP/IP.

La idea es que las redes sirvieran de transporte para otros paquetes (llamados datagramas para mayor claridad). A esto se le llamó <a href="http://en.wikipedia.org/wiki/Transmission_Control_Protocol" target="_blank"><strong>TCP (Transmission Control Protocol)</strong></a> y funciona de la misma forma en que hoy funciona el transporte de carga. **Los datagramas TCP son equivalentes a los contenedores, que pueden ser transportados por diferentes medios (tierra, aire, o mar), sin importar su contenido**. TCP también se encargaría de establecer la conexión, y garantizar la confiabilidad de la comunicación.

<img src="/images/container-ship.jpg" alt="Screenshots" class="photo">

<p class="photo-description">Los datagramas TCP son equivalentes a los contenedores de carga, no importa por qué red están siendo transportados, ni su contenido. Imagen tomada de http://www.shippingherald.com/NEWS/Containers/tabid/72/currentpage/2/Default.aspx</p>

Los datagramas TCP se encapsulan en otro paquete con encabezados que definen hacia dónde se dirige el mensaje. Esto se definió en el <a href="http://en.wikipedia.org/wiki/Internet_Protocol" target="_blank"><strong>IP (Internet Protocol)</strong></a>.

<img src="/images/tcp-ip.gif" alt="Screenshots" class="photo">

<p class="photo-description">Las capas TCP/IP. Paquetes viajando dentro de otros paquetes de la misma forma en que las cajas viajan en los contenedores de carga. Imagen tomada de http://www.technologyuk.net/the_internet/internet/tcp_ip_stack.shtml</p>

Las ventajas para las aplicaciones son enormes porque solo necesitan definir el contenido y el destino de los mensajes. TCP/IP se encarga de dividir el contenido, envolverlo y redireccionarlo sin importar el medio que se esté utilizando. **Gracias a TCP/IP es que hoy en día podemos navegar por Internet a través de una red Wifi, una red celular, o a través de un cable conectado al router de tu hogar**.

A mediados de los años 80's nuevas redes proliferaron gracias a la posibilidad de conectarlas a otras redes. En 1983 ARPANET hizo la migración a TCP/IP, pero los costos del mantenimiento de la red seguían creciendo, mientras otras redes, más rápidas, eran más fáciles de mantener. En 1998 la ARPANET fue dada de baja. Ese año, la Universidad de California patrocinó un simposio para conmemorar la ARPANET. En su discurso, David Cohen dijo las siguientes palabras:

<blockquote>In the beginning ARPA created ARPANET.<br>
	And the ARPANET was without form and void.<br>
	And the darkness was upon the deep.<br>
	And the spirit of the ARPA moved upon the face of the network and ARPA said, 'Let there be a protocol', and there was a protocol. And ARPA saw that it was good. <br>
	And ARPA said, 'Let there be more protocols' and it was so. And ARPA saw that it was good.<br>
	And ARPA said, 'Let there be more networks' and it was so.</blockquote>

En 1989 <a href="http://en.wikipedia.org/wiki/Tim_Berners-Lee" target="_blank">Tim Berners-Lee</a> propuso el proyecto World Wide Web (WWW) trabajando para <a href="http://en.wikipedia.org/wiki/CERN" target="_blank">CERN</a>, que era en su momento el nodo de Internet más grande en Europa. Fue el inicio de la verdadera masificación de Internet.

*La historia en detalle la encuentras en el libro <a href="http://www.amazon.com/Where-Wizards-Stay-Up-Late-ebook/dp/B000FC0WP6/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1424226000&sr=1-1&keywords=where+wizards+stay+up+late" target="_blank">Where Wizards Stay Up Late: The Origins of the Internet</a>.*

***

Si tienes un verdadero interés por la programación y quieres aprender a diseñar e implementar tus propias aplicaciones Web no dudes en [aplicar a Make it Real](/apply)!