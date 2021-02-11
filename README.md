# Data Lovers

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Objetivos de aprendizaje](#2-objetivos-de-aprendizaje)
* [3. Investigación UX de Pokémon Go](#3-investigacion-ux-de-pokemon-go)
* [4. Pistas, tips y lecturas complementarias](#4-pistas-tips-y-lecturas-complementarias)
* [5. Checklist](#5-checklist)

***

## 1. Resumen del proyecto

En este proyecto **construirás una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúe a lo que descubras que tu usuario
necesita.

Como entregable final tendrás una página web que permita **visualizar la data,
filtrarla, ordenarla y hacer algún cálculo agregado**. Con cálculo agregado
nos referimos a distintos cálculos que puedes hacer con la data para mostrar
información aún más relevante para los usuarios (promedio, el valor máximo
o mínimo, etc).

Esta vez te proponemos una serie de datos de diferentes _temáticas_ para que
explores y decidas con qué temática te interesa trabajar. Hemos elegido
específicamente estos sets de datos porque creemos que se adecúan bien a esta
etapa de tu aprendizaje.

Una vez que definas tu área de interés, buscar entender quién es tu usuario
y qué necesita saber o ver exactamente; luego podrás construir la interfaz que
le ayude a interactuar y entender mejor esos datos.

Estos son datos que te proponemos:

* [Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 251 Pokémon de la región de Kanto
  y Johto, junto con sus respectivas estadísticas usadas en el juego
  [Pokémon GO](http://pokemongolive.com).
  - [Investigación con jugadores de Pokémon Go](src/data/pokemon/README.md)

## 2. Objetivos de aprendizaje

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

### HTML y CSS

* [x] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [x] [Uso de selectores de CSS.](https://css-tricks.com/almanac/selectors/)
* [x] Construir tu aplicación respetando el diseño realizado (maquetación).
* [x] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

* [x] [Uso de selectores del DOM](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Localizando_elementos_DOM_usando_selectores).
* [x] [Manejo de eventos del DOM.](https://www.w3schools.com/js/js_events.asp)
* [x] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [x] Uso de condicionales (if-else | switch | operador ternario)
* [x] [Uso de bucles (for | for..in | for..of | while)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n)
* [x] [Uso de funciones (parámetros | argumentos | valor de retorno)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones)
* [x] [Manipular arrays (filter | map | sort | reduce)](https://code.tutsplus.com/es/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209)
* [x] [Manipular objects (key | value)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object)
* [x] [Uso ES modules](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/M%C3%B3dulos) ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [x] [Diferenciar entre expression y statements.](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [x] [Diferenciar entre tipos de datos atómicos y estructurados.](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)

### Testing

* [x] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [x] [Organizar y dividir el código en módulos (Modularización)](https://medium.com/@sebastianpaduano/modularizaci%C3%B3n-en-javascript-538bd6c75fa)
* [x] Uso de identificadores descriptivos ([Nomenclatura](http://snowdream.github.io/javascript-style-guide/javascript-style-guide/es/naming-conventions.html) | [Semántica](https://geekytheory.com/semantica-coder))
* [x] Uso de linter (ESLINT)

### Git y GitHub

* [x] [Uso de comandos de git (add | commit | pull | status | push)](https://github.com/jlord/git-it-electron)
* [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [x] Colaboración en Github (branches | pull requests | |[tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging))

### UX

* [x] Diseñar la aplicación pensando y entendiendo al usuario.
* [x] Crear prototipos para obtener feedback e iterar.
* [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [x] Planear y ejecutar tests de usabilidad.

## 3. Investigación UX de Pokémon Go

Los criterios para considerar que has completado este proyecto son:

### ¿Quiénes son los principales usuarios de producto?

El Proyecto de Pokémon is love está dirigido a hombres y mujeres entre los 20 a 35 años de edad que ya son jugadores/as con experiencia y 
conocen el mundo de pokémonGO.

### ¿Cuáles son los objetivos de estos usuarios en relación con el producto?

Pokemon is Love es una aplicación, que tiene como objetivo principal ser un catálogo virtual, que brinda variedad de información acerca de los pokémon para que puedas ser un gran maestro pokémon. Nuestros usuarios podrán conocer los tipos de pokémon existentes, su línea de evolución y muchos datos más que le servirá si desea participar en una batalla pokémon; además es una web de muy fácil manejo y es responsive, es decir puede visualizarse tanto en web como en mobile.

### ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?

Información del los movimientos, ataques y poder de combate de los pokémon , porque eso les permite conocer todas las fortalezas y debilidades de sus pokémon para poder ganar las batallas y ser los mejores entrenadores pokémon.Con base en uno o varios criterios útiles:

- Los Pokémon tienen características únicas que determinan las decisiones que toma el usuario como su Tipo de elemento,CP,caramelos,poder,etc.
- Visualizar el top 10 de los pokemones con mayor frecuencia en aparición para tomar decisiones sobre qué pokémon son mejores para atrapar.
- Poder realizar un calculo de los caramelos que le faltan para evolucionar a su pokemon.

### ¿Cuándo utilizarían el producto?

El aplicativo Pokemon is Love puede ser utilizado cualquier momento día ya que al ser una web informativa podran acceder a ella cuando deseen capturar a un pokémon o antes de enfrentarse a una batalla.

### Historias de Usuario

<h4>Historia de Usuario 01 </h4>

```
Yo como: Jugador Pokémon.
Quiero: Ver todas las características (evoluciones, peso, altura, elemento y ataques) del Pokémon que seleccione.
Para: Saber que Pokémon es mejor para mis batallas Pokémon.
```
_Criterios de Aceptación:_

*  [x] El usuario puede ver la información detallada del Pokémon al hacer clic en el área que ocupa este.
*  [x] El usuario podrá ver la información detallada en una caja emergente (modal o popup)
*  [x] El usuario puede volver a visualizar todos los pokemones al cerrar la caja emergente.

_Definicion de Terminado:_

*  [x] Todos los criterios de aceptación son cumplidos.
*  [x] Todas las pruebas unitarias son correctas.
*  [x]  La HU debe estar desplegado en GitHub.
*  [x]  El evento para mostrar información detallada de cada Pokémon debe funcionar correctamente.


<h4>Historia de Usuario 02</h4>

```
Yo como: Jugador Pokémon.
Quiero: Realizar una búsqueda por nombre de Pokémon .
Para: Facilitarme la búsqueda de información del Pokémon.
```
_Criterios de Aceptación:_

* [x] El usuario debe poder identificar el buscador.
* [x] El usuario debe poder buscar a los pokemones a través de su nombre.
* [x] El usuario podrá ver el card del Pokémon que tenga coincidencia con el inicio de su nombre.

_Definicion de Terminado:_

* [x] Todos los criterios de aceptación son cumplidos.
* [x] El código no tiene errores en Eslint.
* [x] La HU debe estar desplegado en GitPages para que el usuario pueda interactuar.
* [x] El código tiene y pasa los test respectivos (como mínimo el 70 %)

<h4>Historia de Usuario 03</h4>

```
Yo como: Jugador Pokémon
Quiero: que del total de los pokémon pueda filtrar a los pokemones con mayor o menor puntos de combate (CP)
Para:  Saber que Pokémon es mas fuerte o débil para los combates.
```
_Criterios de Aceptación:_

* [x] El usuario puede identificar una lista desplegable de nombre "Puntos de Combate".
* [x] La lista desplegable debe permitir seleccionar una opción para mostrar resultados.
* [x] Se mostrarán de forma ordenada (mayor o menor) los pokemones por CP.

_Definicion de Terminado:_

* [x] Todos los criterios de aceptación son cumplidos.
* [x] El código tiene y pasa los test respectivos.
* [x] La HU debe estar desplegado en GitPages para que el usuario pueda interactuar.
* [x] El código no tiene errores en ESLINT.

<h4>Historia de Usuario 04</h4>

```
Yo como Jugador Pokémon.
Quiero que del total de los Pokémon pueda filtrar a los pokémones por región y poder ordenarlos de forma alfabética.
Para facilitar mi búsqueda de pokémones por región.
```
_Criterios de Aceptación:_

* [x]  El usuario puede identificar una lista desplegable de nombre "Región"
* [x] La lista desplegable debe permitir seleccionar solo una región de Pokémon.
* [x] Debe seleccionar una región para mostrar los resultados.
* [x] Al seleccionar la Región el usuario puede visualizar aquellos Pokémon que pertenecen a la Región seleccionada.

_Definicion de Terminado:_

* [x]  Todos los criterios de aceptación son cumplidos.
* [x]  El código tiene y pasa los test respectivos.
* [x]  La HU debe estar desplegado en GitPages para que el usuario pueda interactuar.
* [x]  El código no tiene errores en ESLINT.

<h4>Historia de Usuario 05</h4>

```
Yo como: Jugador Pokémon.
Quiero: que del total de los Pokémon pueda filtrar a los Pokémon por tipo de elemento (fuego, tierra, agua. etc),
Para saber a que Pokémon enfrentarme según su tipo de elemento. 
```
_Criterios de Aceptación:_

* [x] El usuario puede identificar una lista desplegable de nombre "Tipo".
* [x] El usuario puede visualizar en la lista desplegable todos los tipos de pokémon que hay en la data set.
* [x] Al seleccionar el tipo de pokémon el usuario puede visualizar aquellos pokémon que coinciden al menos con ese tipo.

_Definicion de Terminado:_

* [x]  Todos los criterios de aceptación son cumplidos.
* [x]  El código tiene y pasa los test respectivos.
* [x]  La HU debe estar desplegado en GitPages para que el usuario pueda interactuar.
* [x]  El código no tiene errores en ESLINT.

<h4>Historia de Usuario 06</h4>

```
Yo como: Jugador Pokémon.
Quiero: que del total de los Pokémon pueda ordenar a los Pokémon por nombre de A-Z y Z-A a los 251 pokemones.
Para tener un mayor orden y conocer mejor a los pokemones.
```
_Criterios de Aceptación:_

* [x] El usuario puede identificar una lista desplegable de nombre "Ordenar".
* [x] El usuario puede visualizar en la lista desplegable todos las opciones de A-Z y Z-A.
* [x] Al seleccionar una opción de ordenar podrá visualizar los pokemones ordenados según lo seleccionado.


_Definicion de Terminado:_

* [x]  Todos los criterios de aceptación son cumplidos.
* [x]  El código tiene y pasa los test respectivos.
* [x]  La HU debe estar desplegado en GitPages para que el usuario pueda interactuar.
* [x]  El código no tiene errores en ESLINT.

<h4>Historia de Usuario 07</h4>

```
Yo como: Jugador de Pokémon 
Quiero: Visualizar el TOP 10 en frecuencia de aparición de los Pokemones.
Para: Poder buscarlos antes de salir de casa.
```
_Criterios de Aceptación:_

* [x]  Al dar click en la barra de navegación del top 10 podrá visualizar los pokemones con mayor frecuencia de aparición. 

_Definicion de Terminado:_

* [x]  Todos los criterios de aceptación son cumplidos.
* [x]  El código tiene y pasa los test respectivos.
* [x]  La HU debe estar desplegado en GitPages para que el usuario pueda interactuar.
* [x]  El código no tiene errores en ESLINT.

<h4>Historia de Usuario 08</h4>

```
Yo como: Jugador de Pokémon.
Quiero: Saber cuantos caramelos necesita un Pokémon para evolucionar.
Para: Pasar de nivel a mis pokémones.
```
_Criterios de Aceptación:_

* [x] Usuario deberá ingresar el nombre del Pokémon a consultar.
* [x] Solo podrá ingresar números en cantidad de caramelos.
* [x] No es obligatorio que el usuario indique la cantidad de caramelos para saber la evolución del Pokémon.


_Definicion de Terminado:_

* [x]  Todos los criterios de aceptación son cumplidos.
* [x]  El código tiene y pasa los test respectivos.
* [x]  La HU debe estar desplegado en GitPages para que el usuario pueda interactuar.
* [x]  El código no tiene errores en ESLINT.


### Testeos de usabilidad
- Usuario 01:

- Usuario 02:

- Usuario 03:

- Usuario 04:

### Prototipo de baja fidelidad
[![TEST](https://raw.githubusercontent.com/Eunice17/LIM014-data-lovers/main/src/img/inicio.jpeg "Inicio")](https://raw.githubusercontent.com/Eunice17/LIM014-data-lovers/main/src/img/inicio.jpeg "Inicio")
[![TEST](https://raw.githubusercontent.com/Eunice17/LIM014-data-lovers/main/src/img/menu%20principal.jpeg "MenuPrincipal")](https://raw.githubusercontent.com/Eunice17/LIM014-data-lovers/main/src/img/menu%20principal.jpeg "MenuPrincipal")
[![TEST](https://raw.githubusercontent.com/Eunice17/LIM014-data-lovers/main/src/img/flotante.jpeg "Pop")](https://raw.githubusercontent.com/Eunice17/LIM014-data-lovers/main/src/img/flotante.jpeg "Pop")
[![TEST](https://raw.githubusercontent.com/Eunice17/LIM014-data-lovers/main/src/img/top10.jpeg "Top10")](https://raw.githubusercontent.com/Eunice17/LIM014-data-lovers/main/src/img/top10.jpeg"Top10")
[![TEST](https://raw.githubusercontent.com/Eunice17/LIM014-data-lovers/main/src/img/evoluciones.jpeg "evoluciones")](https://raw.githubusercontent.com/Eunice17/LIM014-data-lovers/main/src/img/evoluciones.jpeg "evoluciones")


### Prototipo en alta fidelidad


### Pruebas unitarias

A continuacion la cobertura de nuestras pruebas unitarias del archivo `src/data.js` con el 100% _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_):

[![TEST](https://raw.githubusercontent.com/Eunice17/LIM014-data-lovers/main/src/img/test.JPG "dasd")](https://raw.githubusercontent.com/Eunice17/LIM014-data-lovers/main/src/img/test.JPG "dasd")

## 4. Pistas, tips y lecturas complementarias

#### Diseño de experiencia de usuario (User Experience Design)

* Investigación con usuarios / entrevistas
* Principios de diseño visual

#### Desarrollo Front-end

* Unidad de testing en curso de JavaScript en LMS.
* Unidad de arreglos en curso de JavaScript en LMS.
* Unidad de objetos en curso de JavaScript en LMS.
* Unidad de funciones en curso de JavaScript en LMS.
* Unidad de DOM en curso de Browser JavaScript en LMS.
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expresión vs sentencia](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [datos atómicos vs datos estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)

#### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

## 5. Checklist

* [x] Usa VanillaJS.
* [x] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [x] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_.
