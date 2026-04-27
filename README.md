# harbor_capital

Website Habor capital practice only JS, HTML and CSS

# Harbor Capital Partners

Dos implementaciones del sitio institucional de Harbor Capital Partners, desarrolladas como parte de un reto de diseño y desarrollo.

## 🔗 Links

| Versión             | Live                                                                            | Repositorio                                                              |
| ------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Astro + Tailwind    | [harbor-capital-astro.vercel.app](https://harbor-capital-astro.vercel.app)      | [harbor_capital_astro](https://github.com/Otaker11/harbor_capital_astro) |
| Vanilla HTML/CSS/JS | [otaker11.github.io/harbor_capital](https://otaker11.github.io/harbor_capital/) | [harbor_capital](https://github.com/Otaker11/harbor_capital)             |

🎨 [Figma Design](https://www.figma.com/design/sWth6ye8q1aBgufV423qzI/HCPBPractices-Design?node-id=1-2&t=LD7Mau6AsJmN2vIi-1)

---

##PageSpeed Insights Calificaciones de ambas versiones

<!-- Astro -->
<img width="1600" height="808" alt="astro calificacion" src="https://github.com/user-attachments/assets/704bb0db-2d02-499c-ba78-9a358a5c44e9" />
<!-- Vanilla -->
<img width="1455" height="771" alt="Captura de pantalla 2026-04-27 120003" src="https://github.com/user-attachments/assets/1e4d2f0a-859e-44fc-aa3d-30451ff276c5" />

---

## Framework y enfoque

Se entregaron dos implementaciones: una con **Astro + Tailwind CSS v4**, y otra en **HTML, CSS y JavaScript puro** sin herramientas de compilación. Ambas comparten el mismo resultado visual y comportamiento responsivo.

Opté por desarrollar ambas versiones ya que me gustaría indicar que Astro es el mejor framework para sitios estáticos — e incluso con ciertas características dinámicas — debido a las siguientes ventajas:

1. Mayor velocidad de desarrollo y de rendimiento
2. Implementación sencilla de librerías mediante Node.js
3. Despliegue sencillo en cualquier hosting
4. Muestra los errores antes de cargar la página o componente desarrollado
5. Compatible con componentes de otros frameworks como React, Vue y Svelte, entre otros

---

## Tiempo invertido

| Fase                      | Tiempo        |
| ------------------------- | ------------- |
| Diseño (Figma)            | ~6 horas      |
| Implementación en Astro   | ~8 horas      |
| Implementación en Vanilla | ~6 horas      |
| **Total**                 | **~20 horas** |

---

## Qué mejoraría con más tiempo

- Agregar un formulario de contacto con validación del lado del servidor
- Implementar filtrado real del portafolio con transiciones animadas
- Mejorar la accesibilidad: manejo de foco, enlace "saltar al contenido" y regiones ARIA live en el slider del hero
- Añadir skeleton de carga para las imágenes above-the-fold
- Escribir pruebas a nivel de componente para la versión Astro

---

## Stack

**Astro**

- Astro v4
- Tailwind CSS v4
- GSAP + ScrollTrigger
- Swiper.js
- AOS
- Lenis

**Vanilla**

- HTML5 / CSS3 / JavaScript ES6+
- Sin dependencias de build
- Mismas librerías vía CDN
