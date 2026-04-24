# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a:** <!-- Tu nombre completo -->
**Fecha:** <!-- Fecha del examen, ej: 21/04/2026 -->

---

> **Instrucciones:** Documentar los 2 prompts más importantes que usaste durante el examen.
> Completar **todas** las secciones con criterio propio. No se trata de copiar lo que generó la IA — se evalúa tu capacidad de analizar, detectar errores y tomar decisiones técnicas fundamentadas.
>
> **Mínimo por sección de análisis: 3 oraciones.** Respuestas de una línea no se consideran válidas.

---

> **Ejemplo de análisis insuficiente** ❌
> _"La IA generó el código y funcionó bien."_
>
> **Ejemplo de análisis aceptable** ✅
> _"La IA reemplazó los `<div>` por etiquetas semánticas, pero usó `<section>` para la navegación en lugar de `<nav>`. Lo detecté al revisar la estructura en DevTools. Técnicamente es incorrecto porque `<nav>` tiene un rol ARIA implícito que `<section>` no tiene, así que lo corregí manualmente."_

---

## Prompt 1

### Momento del proceso

```
<!--
  Indicá en qué punto del examen usaste este prompt.
  No es sobre la hora exacta — es sobre el contexto: ¿qué estabas intentando resolver cuando recurriste a la IA?
  Ej: "Cuando no sabía cómo estructurar el layout con Grid."
  Ej: "Al terminar el HTML, para verificar si me faltaba algo de accesibilidad."
  Ej: "Al principio del ejercicio de JS, para entender cómo arrancar."
--> Utilicé la IA cuando vi que había muchisímos divs y me di cuenta que si me ponía a hacer a mano cada uno iba a tardar una eternidad. Entonces

decidi utilizarla para cambiar los divs por estructuras semanticas
```

### Lo que le pedí a la IA

```
<!-- Pegá aquí el prompt exacto que escribiste. Debe ser el texto que vos escribiste, no la respuesta. --> Reemplaza todos los <div> y <span> estructurales por etiquetas semánticas: <header>, <nav>, <main>, <section>, <article>, <footer>, etc. No te olvides

que si no tiene etiqueta semantica correspondiente dejarlo como esta.
```

### Análisis del resultado obtenido

```
<!--
  Describí con tus propias palabras qué generó la IA. No copies el código ni la respuesta — analizála.
  Mínimo 3 oraciones. Respondé:
  - ¿Qué enfoque tomó la IA para resolver el problema?
  - ¿El resultado era lo que esperabas? ¿Por qué sí o por qué no?
  - ¿Qué parte te resultó útil como punto de partida?
--> Estoy muy conforme con el resultado de la IA porque fueron leves errores que no eran tediosos

de corregir a mano. Me resulto util porque si bien omitio algunas cosas, era un html bastante largo como

para cambiar div por div
```

### Qué debí corregir manualmente y por qué

```
<!--
  Esta sección es la más importante. Sé específico/a. Mínimo 3 oraciones.
  Respondé:
  - ¿Qué error concreto tenía el resultado? (semántico, de accesibilidad, lógico, de estilo, etc.)
  - ¿Cómo lo detectaste? (al probarlo en el browser, al leer el código, al ver la consola...)
  - ¿Por qué estaba técnicamente incorrecto o insuficiente?
  - ¿Qué cambiaste exactamente para que funcionara bien?
  Si no corregiste nada, explicá por qué el resultado era correcto tal como estaba.
--> tenia errores a nivel estructura,me eliminaba algunas correcciones que habia hecho a mano

, me desequilibraba toda la pagina (me di cuenta despues que era porque le habia cambiado el 

nombre al archivo css entonces no encontraba el archivo para ejecutarse). y me di cuenta cuando lo abri en el navegador y estaba horrible.

fue incorrecto pero levemente
```

---

## Prompt 2

### Momento del proceso

```
<!--
  Indicá en qué punto del examen usaste este prompt.
  No es sobre la hora exacta — es sobre el contexto: ¿qué estabas intentando resolver cuando recurriste a la IA?
  Ej: "Cuando no sabía cómo estructurar el layout con Grid."
  Ej: "Al terminar el HTML, para verificar si me faltaba algo de accesibilidad."
  Ej: "Al principio del ejercicio de JS, para entender cómo arrancar."
--> al tener el HTML semántico listo, para atacar el CSS y los estilos inline
```

### Lo que le pedí a la IA

```
<!-- Pegá aquí el prompt exacto que escribiste. Debe ser el texto que vos escribiste, no la respuesta. --> considerando que esta es su hoja de estilos css,

modifica los mismos para darle a la pagina un estilo mas moderno(reemplaza float por GRID),

corrigiendo la paleta de colores para cumplir WCAG AA (contraste mínimo 4.5:1 para texto normal)
```

### Análisis del resultado obtenido

```
<!--
  Describí con tus propias palabras qué generó la IA. No copies el código ni la respuesta — analizála.
  Mínimo 3 oraciones. Respondé:
  - ¿Qué enfoque tomó la IA para resolver el problema?
  - ¿El resultado era lo que esperabas? ¿Por qué sí o por qué no?
  - ¿Qué parte te resultó útil como punto de partida?
--> el enfoque de design system con variables CSS documentadas fue más completo de lo esperado.

que haya reemplazado el float por Grid(esto mejoro muchisimo el layout) como pedia la consigna

luego agrego de focus-visible fueron una salvacion.
```

### Qué debí corregir manualmente y por qué

```
<!--
  Esta sección es la más importante. Sé específico/a. Mínimo 3 oraciones.
  Respondé:
  - ¿Qué error concreto tenía el resultado? (semántico, de accesibilidad, lógico, de estilo, etc.)
  - ¿Cómo lo detectaste? (al probarlo en el browser, al leer el código, al ver la consola...)
  - ¿Por qué estaba técnicamente incorrecto o insuficiente?
  - ¿Qué cambiaste exactamente para que funcionara bien?
  Si no corregiste nada, explicá por qué el resultado era correcto tal como estaba.
--> el text-muted se uso en placeholders cuando solo cumple AA Large.
despues appearance:none lo aplico innecesariamente a inputs de texto. 
```

---

## Reflexión final

```
<!--
  Mínimo 3 oraciones. Respondé:
  - ¿Qué tipo de errores repitió la IA que tuviste que corregir?
  - ¿Hubo algo que la IA resolvió bien a la primera sin que necesitaras tocarlo?
  - ¿Cambiarías la forma en que le pedís cosas a la IA la próxima vez? ¿Por qué?
--> el patrón de error de la IA fue aplicar reglas de accesibilidad
mecánicamente sin entender el contexto exacto, lo cual puedo corregir para futuros promts. fue un error de principiante, debi ser mas especifica.
```
