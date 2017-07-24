---
layout: post
title:  "Análisis encuesta desarrolladores en Colombia 2016"
date:   2016-02-21 12:00:00 -0500
author: Germán Escobar
image: /assets/images/bg-images/colombia-jardin.jpg
gravatar: //www.gravatar.com/avatar/12270acfe9b6842e1a5b6e594382f149.jpg?s=80
---

La comunidad de ColombiaDev ha publicado <a href="https://github.com/colombia-dev/data/tree/master/salaries/2016" target="_blank">los datos de la encuesta a desarrolladores en Colombia</a> realizada a principios del 2016. Este es nuestro analisis **no oficial**.<!-- more -->

Si encuentras algún error o alguna forma en que podamos mejorar la presentación de los datos, no dudes en avisarnos para corregirlo.

**1297** personas respondieron la encuesta. Sin embargo, no podemos asumir que la encuesta representa a la población en general porque fue voluntaria y su difusión fue, en su mayoría, por redes sociales, que tiene un alcance limitado.

Algunos salarios están en dólares así que, para efectos de este análisis, los convertimos a pesos con una TRM de $3000 pesos. También excluímos 212 observaciones del análisis de ingresos que parecen ser errores en la información--nuestra teoría es que muchos pensaron que debían reportar sus ingresos mensuales, no anuales.

Este post está dividido en tres partes. Primero, vamos a resumir los hallazgos más interesantes que encontramos. Después mostramos la información de la encuesta en gráficos. Y, por último, el detalle de nuestro análisis con sus respectivos gráficos.

## Hallazgos interesantes

El salario medio de los desarrolladores en Colombia es de **39 millones al año**, es decir, **$3,250,000 al mes**. Sin embargo, los que reciben salario en dólares ganan **4 veces más** que los que reciben salarios en pesos!

Las empresas extranjeras pagan **55%** más que las empresas colombianas.

El lenguaje de programación mejor pago es por mucho **Ruby ($71M)**, seguido por Objective-C/Swift ($54.6M). Los que menos pagan son PHP ($30M) y HTML/CSS ($24M).

Una persona con título universitario gana **14%** más que una persona sin título y **56%** más que una persona con un título técnico! En otras palabras, tener un título técnico **no paga**, es mejor no tener ningún título.

Tener maestría paga. Las personas con un pregrado ganan solo **5%** más que las que son bachilleres, pero las personas con una maestría ganan un **64%** más que las que tienen pregrado.

Saber inglés paga, especialmente los que tienen nivel avanzado que ganan **45%** más que los tienen un nivel intermedio. La diferencia entre intermedio y básico es de **13%**.

Esto son los hallazgos que encontramos más interesantes en los resultados. En general, corresponden a nuestra experiencia en la industria.

Sigue leyendo para conocer los detalles de estos hallazgos y otros que no mencionamos en esta sección.

## Información Demográfica

<div id="genre" style="height: 140px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

Como siempre, una lástima el bajo porcentaje de mujeres.

<div id="age" style="height: 250px; width: 100%; margin-top: 40px; margin-bottom: 20px;"></div>

El 85% de los que respondieron está entre los 20 y 35 años.

<div id="city" style="height: 380px; width: 100%; margin-top: 40px; margin-bottom: 20px;"></div>

Más del 70% de los desarrolladores está en esas las tres ciudades principales: Bogotá, Medellín y Cali.

<div id="minority" style="height: 170px; width: 100%; margin-top: 40px; margin-bottom: 20px;"></div>

## Información Educativa

<div id="education-1" style="height: 170px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

<div id="education-2" style="height: 170px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

<div id="education-3" style="height: 170px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

<div id="education-4" style="height: 170px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

<div id="education-5" style="height: 270px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

<div id="education-6" style="height: 270px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

## Información Laboral

<div id="work-1" style="height: 270px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

<div id="work-2" style="height: 270px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

<div id="work-3" style="height: 270px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

<div id="work-4" style="height: 170px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

Bien, la mayoría dedica más de 50% a desarrollo.

<div id="work-5" style="height: 170px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

Nada mal ese porcentaje de fundadores!

<div id="work-6" style="height: 250px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

Esperaba más gente con más de 15 años de experiencia. ¿Dónde están?

<div id="work-7" style="height: 350px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

El país del Java, PHP y .NET. Y ahora JavaScript. Solo incluí los lenguajes con más de 10 respuestas. Pero hay muchos más.

<div id="work-8" style="height: 170px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

<div id="work-9" style="height: 170px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

<div id="work-10" style="height: 300px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

**La mediana de ingresos anuales es de 39M. El 50% de las personas que respondieron ganan entre 25M y 52M al año**. Excluímos 212 personas que reportaron ganar menos de 10M al año (es muy probable que pensaran que la pregunta era mensual).

<div id="work-11" style="height: 170px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

Casi el 60% de los que respondieron sienten que su salario es injusto.


## Análisis

Bien, entremos en la parte más emocionante del post. Vamos a comparar algunas variables con el salario anual.

La distribución de ingresos está muy sesgada y por lo tanto decidimos utilizar **la mediana** (línea roja) en vez del promedio. Las cajas verdes nos permiten entender qué tan esparcida está la información y representan el rango en donde se encuentra el 50% de los datos.

<div id="genre-2" style="height: 300px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

<div id="city-2" style="height: 300px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

Se evidencia una marcada diferencia entre Bogotá y Medellín con respecto a las demás ciudades.

<div id="experience" style="height: 300px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

Las personas con menos de un año de experiencia ganan en promedio $18M al año (aprox 40% menos que los estudiantes que terminan Make it Real).

<div id="company-type" style="height: 300px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

La información que está entre paréntesis corresponde al mercado de las empresas colombianas.

<div id="company-focus" style="height: 300px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

Esta gráfica tiene mucho sentido. Las empresas con un servicio tecnológico valoran más a sus desarrolladores.

<div id="education-level" style="height: 300px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

No existe mucha diferencia entre bachiller y pregrado. La maestría si hace una gran diferencia.

<div id="english-level" style="height: 300px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

Aunque el salario va aumentando con el nivel de inglés, el mayor incremento ocurre de intermedio a avanzado.

<div id="degree-type" style="height: 300px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

Esta es quizá la gráfica que más nos impresionó. La gente que no tiene título gana más que los que tienen un título técnico. Ahora, después de un análisis más profundo descubrimos que los que tienen un título técnico tienden a trabajar con lenguajes más tradicionales como Java, C# y PHP (60%),   mientras que 40% de los que que no tienen título trabajan con JavaScript.

<div id="lang" style="height: 300px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

Los peores lenguajes para trabajar son HTML/CSS y PHP. Me descepcionó Scala. Ruby es el claro ganador, pero ten cuidado, 18 de los 52 Rubistas que respondieron la encuesta ganan en dólares y tienen una mediana de $178.5M, mientras que la mediana de los que ganan en pesos es de $52M (3.5 veces menos, pero igual encima de la mayoría de lenguajes).

<div id="currency" style="height: 300px; width: 100%; margin-top: 40px; margin-bottom: 20px"></div>

Recuerda que estoy utilizando una TRM de $3000, así que la diferencia puede ser mayor (la TRM está llegando a $3500 para la fecha en que estoy escribiendo esto). La diferencia es simplemente asombrosa.


## Sugerencias para la próxima encuesta

De nuevo, felicitaciones y gracias a la comunidad de ColombiaDev por realizar esta encuesta. Las siguientes son algunas sugerencias y recomendaciones para seguir mejorando:

1. Intentar aclarar de forma más explícita que el ingreso es anual y no mensual. Revisando los datos se evidencia que más de 200 personas se equivocaron.
2. Utilizar una variable categórica para el género (Masculino, Femenino, Prefiero no revelar, Otro). Es más práctico y más claro que un campo abierto, y al mismo tiempo incluyente.
3. Eliminar las preguntas: "¿Qué porcentaje de su tiempo laboral se ocupa en gerencia de proyectos?", "¿Qué porcentaje de su tiempo laboral se ocupa en liderazgo técnico?" y "¿Qué porcentaje de su tiempo laboral se ocupa en gerencia de ingenieria?". Es suficiente con la pregunta del porcentaje que ocupa en desarrollo de Software y, como vimos en la información, el 82% dedica más de 50% a desarrollo.
4. En la pregunta de experiencia, simplificar las primeras opciones por: "menos de 2 años" y "2 - 5 años".
5. La encuesta excluye a los desempleados.
6. Una pregunta interesante es qué porcentaje de los empleados trabajan de forma remota.

---

<a href="http://www.makeitreal.camp/" target="_blank">Make it Real</a> ofrece programas para entrenar desarrolladores Web en nuevas tecnologías, ya sea para que encuentren un mejor empleo o construyan sus propios productos digitales. Conoce nuestros programas haciendo <a href="http://www.makeitreal.camp/" target="_blank">click acá</a>.

---

La imagen del encabezado fue tomada por Pedro Szekely: <a href="https://flic.kr/p/CB2WeA" target="_blank">https://flic.kr/p/CB2WeA</a>.


<script src="../js/jquery.canvasjs.min.js"></script>
<script>
  var chart = new CanvasJS.Chart("genre", {
    title: {
      text: "Género",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1297                 
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Femenino",  y: 113, indexLabel: " 8.7%" },
        { label: "Masculino", y: 1183, indexLabel: " 91.3%"  },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  chart.render();

  var ageChart = new CanvasJS.Chart("age", {
    title: {
      text: "Edad",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1296                   
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "< 20",  y: 13, indexLabel: "1%" },
        { label: "20 - 24", y: 249, indexLabel: "19%" },
        { label: "25 - 29", y: 507, indexLabel: "39%" },
        { label: "30 - 34", y: 346, indexLabel: "27%" },
        { label: "35 - 39", y: 127, indexLabel: "9.8%" },
        { label: "> 40", y: 55, indexLabel: "4.2%" }
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  ageChart.render();

  var cityChart = new CanvasJS.Chart("city", {
    title: {
      text: "Ciudad",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1296                   
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Otras", y: 153, indexLabel: "12.7%" },
        { label: "Ibagué", y: 17, indexLabel: "1.3%" },
        { label: "Armenia", y: 20, indexLabel: "1.5%" },
        { label: "Pereira", y: 22, indexLabel: "1.7%" },
        { label: "Cartagena", y: 25, indexLabel: "1.9%" },
        { label: "Manizales", y: 28, indexLabel: "2.2%" },
        { label: "Bucaramanga", y: 28, indexLabel: "2.2%" },
        { label: "Barranquilla", y: 46, indexLabel: "3.5%" },
        { label: "Cali", y: 152, indexLabel: "11.7%" },
        { label: "Medellín", y: 336, indexLabel: "25.9%" },
        { label: "Bogota",  y: 478, indexLabel: "37%" },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  cityChart.render();

  var minorityChart = new CanvasJS.Chart("minority", {
    title: {
      text: "¿Es minoría racial o étnica?",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1297                 
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "No", y: 1255, indexLabel: " 96.8%"  },
        { label: "Si",  y: 42, indexLabel: " 3.2%" },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  minorityChart.render();

  var ed1Chart = new CanvasJS.Chart("education-1", {
    title: {
      text: "Título",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1297                 
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Ninguno",  y: 117, indexLabel: "9%" },
        { label: "Técnico",  y: 134, indexLabel: "10%" },
        { label: "Universitario", y: 1046, indexLabel: "81%"  },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  ed1Chart.render();

  var ed2Chart = new CanvasJS.Chart("education-2", {
    title: {
      text: "¿Estudió algo relacionado a Ing. de Sistemas?",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1297                 
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "No", y: 154, indexLabel: "12%"  },
        { label: "Si",  y: 1143, indexLabel: "88%" },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  ed2Chart.render();

  var ed3Chart = new CanvasJS.Chart("education-3", {
    title: {
      text: "¿Postgrado en algo relacionado a Ingenería de Sistemas?",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1297            
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "No", y: 1010, indexLabel: "78%"  },
        { label: "Si",  y: 287, indexLabel: "22%" },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  ed3Chart.render();

  var ed4Chart = new CanvasJS.Chart("education-4", {
    title: {
      text: "¿Tomó clases de programación o algoritmia en la universidad?",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1297            
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "No", y: 119, indexLabel: "9%"  },
        { label: "Si",  y: 1178, indexLabel: "91%" },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  ed4Chart.render();

  var ed5Chart = new CanvasJS.Chart("education-5", {
    title: {
      text: "¿Cuál es su máximo título alcanzado (graduado)?",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1297            
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Ninguno",  y: 10, indexLabel: "0.07%" },
        { label: "Bachiller",  y: 168, indexLabel: "13%" },
        { label: "Pregrado",  y: 980, indexLabel: "75.6%" },
        { label: "Maestria",  y: 133, indexLabel: "10.3%" },
        { label: "Doctorado",  y: 2, indexLabel: "0.15%" },
        { label: "Post-doctorado", y: 4, indexLabel: "0.3%" },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  ed5Chart.render();

  var ed6Chart = new CanvasJS.Chart("education-6", {
    title: {
      text: "Nivel de Inglés",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1297            
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Ninguno",  y: 38, indexLabel: "2.9%" },
        { label: "Básico",  y: 360, indexLabel: "27.8%" },
        { label: "Intermedio",  y: 527, indexLabel: "40.6%" },
        { label: "Avanzado",  y: 353, indexLabel: "27.2%" },
        { label: "Nativo",  y: 19, indexLabel: "1.5%" },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  ed6Chart.render();

  var work1Chart = new CanvasJS.Chart("work-1", {
    title: {
      text: "¿Para qué tipo de empresa trabaja?",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1297            
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Soy independiente", y: 121, indexLabel: "9.3%" },
        { label: "Colombiana (mercado EEUU)", y: 105, indexLabel: "8.1%" },
        { label: "Colombiana (mercado Latam)", y: 154, indexLabel: "11.9%" },
        { label: "Colombiana (mercado Global)", y: 173, indexLabel: "13.3%" },
        { label: "Colombiana (mercado local)", y: 486, indexLabel: "37.5%" },
        { label: "Extranjera", y: 258, indexLabel: "19.9%" },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  work1Chart.render();

  var work2Chart = new CanvasJS.Chart("work-2", {
    title: {
      text: "La empresa se dedica principalmente a",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1297            
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Soy independiente", y: 72, indexLabel: "5.5%" },
        { label: "Otro", y: 104, indexLabel: "8%" },
        { label: "Servicio no tech", y: 177, indexLabel: "13.6%" },
        { label: "Servicio tech", y: 125, indexLabel: "9.6%" },
        { label: "Servicio habilitado por tech", y: 149, indexLabel: "11.5%" },
        { label: "Consultoría/servicios desarrollo", y: 670, indexLabel: "52%" },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  work2Chart.render();

  var work3Chart = new CanvasJS.Chart("work-3", {
    title: {
      text: "¿Cuántos años de fundada tiene la empresa?",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1297            
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Soy independiente", y: 76, indexLabel: "5.8%" },
        { label: "< 1 año", y: 39, indexLabel: "3%" },
        { label: "1 año", y: 43, indexLabel: "3.3%" },
        { label: "2 - 5 años", y: 319, indexLabel: "25%" },
        { label: "5 - 10 años", y: 264, indexLabel: "20%" },
        { label: "> 10 años", y: 556, indexLabel: "42.9%" },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  work3Chart.render();

  var work4Chart = new CanvasJS.Chart("work-4", {
    title: {
      text: "¿Qué porcentaje de tiempo ocupa a desarrollo de software?",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1297            
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "< 50%", y: 231, indexLabel: "18%" },
        { label: ">= 50%", y: 1066, indexLabel: "82%" }
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  work4Chart.render();

  var work5Chart = new CanvasJS.Chart("work-5", {
    title: {
      text: "¿Tiene título de fundador en la empresa?",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1297            
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "No", y: 1150, indexLabel: "88.7%" },
        { label: "Si", y: 147, indexLabel: "11.3%" }
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  work5Chart.render();

  var work6Chart = new CanvasJS.Chart("work-6", {
    title: {
      text: "¿Cuantos años de experiencia en desarrollo de software tiene?",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1297            
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "< 1 año", y: 63, indexLabel: "4.9%" },
        { label: "1 año", y: 64, indexLabel: "4.9%" },
        { label: "2 años", y: 174, indexLabel: "13.4%" },
        { label: "3 - 5 años", y: 415, indexLabel: "32%" },
        { label: "5 - 10 años", y: 372, indexLabel: "28.7%" },
        { label: "10 - 15 años", y: 149, indexLabel: "11.5%" },
        { label: "> 15 años", y: 60, indexLabel: "4.6%" }
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  work6Chart.render();

  var work7Chart = new CanvasJS.Chart("work-7", {
    title: {
      text: "Lenguaje de programación principal",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1297            
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Scala", y: 10, indexLabel: "0.7%" },
        { label: "Cobol", y: 11, indexLabel: "0.85%" },
        { label: "Objective-C", y: 18, indexLabel: "1.4%" },
        { label: "Python", y: 36, indexLabel: "2.8%" },
        { label: "Ruby", y: 52, indexLabel: "4%" },
        { label: "HTML/CSS", y: 62, indexLabel: "4.8%" },
        { label: "C#", y: 200, indexLabel: "15.4%" },
        { label: "PHP", y: 220, indexLabel: "17%" },
        { label: "JavaScript", y: 228, indexLabel: "17.6%" },
        { label: "Java", y: 314, indexLabel: "24%" },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  work7Chart.render();

  var work8Chart = new CanvasJS.Chart("work-8", {
    title: {
      text: "Tipo de relación laboral",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1297            
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Freelance", y: 135, indexLabel: "10.4%" },
        { label: "Contratista", y: 189, indexLabel: "14.6%" },
        { label: "Empleado", y: 973, indexLabel: "75%" },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  work8Chart.render();

  var work9Chart = new CanvasJS.Chart("work-9", {
    title: {
      text: "¿Le pagan en dólares o en pesos?",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1297            
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Dólares", y: 97, indexLabel: "7.5%" },
        { label: "Pesos", y: 1200, indexLabel: "92.5%" },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  work9Chart.render();

  var work10Chart = new CanvasJS.Chart("work-10", {
    title: {
      text: "¿Cuál es su salario anual en pesos?",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1297            
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "> 100M", y: 97, indexLabel: "8.9%" },
        { label: "80M - 99M", y: 59, indexLabel: "5.4%" },
        { label: "60M - 79M", y: 115, indexLabel: "10.6%" },
        { label: "50M - 59M", y: 104, indexLabel: "9.6%" },
        { label: "40M - 49M", y: 164, indexLabel: "15.1%" },
        { label: "30M - 39M", y: 200, indexLabel: "18.4%" },
        { label: "20M - 29M", y: 189, indexLabel: "17.4%" },
        { label: "10M - 20M", y: 165, indexLabel: "15.2%" },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  work10Chart.render();

  var work11Chart = new CanvasJS.Chart("work-11", {
    title: {
      text: "¿Siente que su salario es justo?",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        tickThickness: 0,
        lineThickness: 0,
        valueFormatString: " ",
        gridThickness: 0,
        maximum: 1297            
    },
    axisX: {
        tickThickness: 0,
        lineThickness: 0,
        labelFontSize: 18,
        // labelFontColor: "Peru"
    },
    data: [{
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "bar",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "No", y: 769, indexLabel: "59.3%" },
        { label: "Si", y: 528, indexLabel: "40.7%" },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  work11Chart.render();

  var experienceChart = new CanvasJS.Chart("experience", {
    title: {
      text: "Experencia vs salario anual",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        maximum: 101000000
    },
    data: [{
      type: "rangeColumn",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "< 1 año", y: [14500000, 30170000] },
        { label: "1 año", y: [18100000, 30000000] },
        { label: "2 años", y: [16000000, 35000000] },
        { label: "3 - 5 años", y: [25000000, 45600000] },
        { label: "5 - 10 años", y: [36000000, 72000000] },
        { label: "10 - 15 años", y: [41800000, 67160000] },
        { label: "> 15 años", y: [45750000, 100500000] },
      ]
    }, {
      type: "line",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "< 1 año", y: 18000000 },
        { label: "1 año", y: 24000000 },
        { label: "2 años", y: 22800000 },
        { label: "3 - 5 años", y: 34000000 },
        { label: "5 - 10 años", y: 50200000 },
        { label: "10 - 15 años", y: 54800000 },
        { label: "> 15 años", y: 72000000 },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  experienceChart.render();

  var companyTypeChart = new CanvasJS.Chart("company-type", {
    title: {
      text: "Tipo de empresa vs salario anual",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        maximum: 110000000
    },
    data: [{
      type: "rangeColumn",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Extranjera", y: [39600000, 108000000] },
        { label: "Local (local)", y: [21340000, 46900000] },
        { label: "Local (global)", y: [26690000, 60000000] },
        { label: "Local (latam)", y: [26000000, 50850000] },
        { label: "Local (EEUU)", y: [30000000, 58250000] },
        { label: "Independiente", y: [24000000, 72000000] },
      ]
    }, {
      type: "line",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Extranjera", y: 56000000 },
        { label: "Local (local)", y: 30680000 },
        { label: "Local (global)", y: 42120000 },
        { label: "Local (latam)", y: 36000000 },
        { label: "Local (EEUU)", y: 41600000 },
        { label: "Independiente", y: 36000000 },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  companyTypeChart.render();

  var companyFocusChart = new CanvasJS.Chart("company-focus", {
    title: {
      text: "Enfoque de la empresa vs salario anual",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        maximum: 110000000
    },
    data: [{
      type: "rangeColumn",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Desarrollo", y: [25800000, 55000000] },
        { label: "Servicio habilitado por tech", y: [30000000, 84750000] },
        { label: "Servicio tech", y: [29180000, 87500000] },
        { label: "Servicio no tech", y: [24850000, 50000000] },
        { label: "Otro", y: [18500000, 42600000] },
        { label: "Independiente", y: [23100000, 70200000] },
      ]
    }, {
      type: "line",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Desarrollo", y: 39000000 },
        { label: "Servicio habilitado por tech", y: 48000000 },
        { label: "Servicio tech", y: 52000000 },
        { label: "Servicio no tech", y: 38400000 },
        { label: "Otro", y: 30000000 },
        { label: "Independiente", y: 38480000 },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  companyFocusChart.render();

  var englishChart = new CanvasJS.Chart("english-level", {
    title: {
      text: "Nivel de inglés vs salario anual",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        maximum: 110000000
    },
    data: [{
      type: "rangeColumn",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Ninguno", y: [21600000, 36000000] },
        { label: "Básico", y: [21600000, 45000000] },
        { label: "Intermedio", y: [24120000, 53970000] },
        { label: "Avanzado", y: [36000000, 83500000] },
        { label: "Nativo", y: [35020000, 76500000] },
      ]
    }, {
      type: "line",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Ninguno", y: 27000000 },
        { label: "Básico", y: 32000000 },
        { label: "Intermedio", y: 36000000 },
        { label: "Avanzado", y: 52000000 },
        { label: "Nativo", y: 52210000 },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  englishChart.render();

  var langChart = new CanvasJS.Chart("lang", {
    title: {
      text: "Lenguaje (programación) vs salario anual",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        maximum: 150000000
    },
    data: [{
      type: "rangeColumn",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Java", y: [28650000, 60000000] },
        { label: "JavaScript", y: [25000000, 60000000] },
        { label: "PHP", y: [20000000, 44200000] },
        { label: "C#", y: [26000000, 55000000] },
        { label: "HTML/CSS", y: [18000000, 36000000] },
        { label: "Ruby", y: [45380000, 150000000] },
        { label: "Python", y: [18000000, 69750000] },
        { label: "Objective-C/Swift", y: [40620000, 80000000] },
        { label: "Scala", y: [29000000, 52500000] },
      ]
    }, {
      type: "line",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Java", y: 41100000 },
        { label: "JavaScript", y: 38500000 },
        { label: "PHP", y: 30000000 },
        { label: "C#", y: 42000000 },
        { label: "HTML/CSS", y: 24000000 },
        { label: "Ruby", y: 71000000 },
        { label: "Python", y: 30820000 },
        { label: "Objective-C/Swift", y: 54600000 },
        { label: "Scala", y: 33340000 },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  langChart.render();

  var currencyChart = new CanvasJS.Chart("currency", {
    title: {
      text: "Moneda (salario) vs salario anual",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        maximum: 200000000
    },
    data: [{
      type: "rangeColumn",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Pesos", y: [24700000, 53000000] },
        { label: "Dólares", y: [77250000, 196600000] },
      ]
    }, {
      type: "line",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Pesos", y: 36680000 },
        { label: "Dólares", y: 150000000 },      
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  currencyChart.render();

  var genre2Chart = new CanvasJS.Chart("genre-2", {
    title: {
      text: "Género vs salario anual",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        maximum: 70000000
    },
    data: [{
      type: "rangeColumn",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Femenino", y: [23000000, 45000000] },
        { label: "Masculino", y: [26000000, 60000000] },
      ]
    }, {
      type: "line",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Femenino", y: 36680000 },
        { label: "Masculino", y: 40000000 },      
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  genre2Chart.render();

  var city2Chart = new CanvasJS.Chart("city-2", {
    title: {
      text: "Ciudad vs ingresos anuales",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        maximum: 80000000
    },
    data: [{
      type: "rangeColumn",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Bogotá", y: [30000000, 65000000] },
        { label: "Medellín", y: [35350000, 69750000] },
        { label: "Cali", y: [21600000, 41250000] },
        { label: "Barranquilla", y: [19800000, 60000000] },
        { label: "Bucaramanga", y: [14000000, 32000000] },
        { label: "Manizales", y: [24200000, 45250000] },
        { label: "Cartagena", y: [17780000, 38050000] },
      ]
    }, {
      type: "line",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Bogotá", y: 45000000 },
        { label: "Medellín", y: 45650000 },      
        { label: "Cali", y: 30000000 },
        { label: "Barranquilla", y: 30000000 },
        { label: "Bucaramanga", y: 24000000 },
        { label: "Manizales", y: 26000000 },
        { label: "Cartagena", y: 26200000 },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  city2Chart.render();

  var educationLevelChart = new CanvasJS.Chart("education-level", {
    title: {
      text: "Nivel de educación vs salario anual",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        maximum: 80000000
    },
    data: [{
      type: "rangeColumn",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Ninguno", y: [25800000, 34500000] },
        { label: "Bachiller", y: [24000000, 49500000] },
        { label: "Pregrado", y: [24620000, 54000000] },
        { label: "Maestría", y: [42650000, 84250000] },
      ]
    }, {
      type: "line",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Ninguno", y: 30000000 },
        { label: "Bachiller", y: 35000000 },      
        { label: "Pregrado", y: 36740000 },
        { label: "Maestría", y: 60000000 },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  educationLevelChart.render();

  var degreeTypeChart = new CanvasJS.Chart("degree-type", {
    title: {
      text: "Universitario o técnico vs salario anual",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 18,
    },
    axisY: {
        maximum: 80000000
    },
    data: [{
      type: "rangeColumn",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Ninguno", y: [24000000, 54600000] },
        { label: "Técnico", y: [16740000, 37500000] },
        { label: "Universitario", y: [26400000, 60000000] },
      ]
    }, {
      type: "line",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#303030",
      dataPoints: [
        { label: "Ninguno", y: 36000000 },
        { label: "Técnico", y: 26000000 },      
        { label: "Universitario", y: 41000000 },
      ]
    }],
    backgroundColor: "#f5f5f2"
  });
  degreeTypeChart.render();
</script>
