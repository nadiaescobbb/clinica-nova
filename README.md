# Clínica Nova Estética - Premium Landing Page

Una *landing page* de alto rendimiento orientada a la conversión de servicios médicos y estéticos *High-Ticket*. Pensada para posicionar la marca desde la autoridad médica, filtrar consultantes con presupuesto no compatible y acelerar el cierre mediante comunicación directa (WhatsApp).

## 🚀 Características Principales

*   **Triage Embebido (Filtro de Leads):** Implementación de un modal multipaso programado en Vanilla JS que actúa como embudo de pre-calificación. Posee lógica condicional para "descalificar" preventivamente a usuarios que priorizan alternativas *low-cost*, ahorrando tiempo al equipo de recepción.
*   **Performance y Ligereza:** Construcción 100% nativa (Vanilla) sin frameworks ni dependencias externas pesadas, asegurando tiempos de carga ínfimos. 
*   **Optimización CRO (Conversion Rate Optimization):**
    *   Arquitectura de la información pensada para disolver bloqueos psicológicos.
    *   Scroll vertical nativo en mobile en vez de carruseles horizontales para maximizar visibilidad.
    *   Llamados a la acción (CTAs) estratégicos y siempre presentes (Sticky Mobile CTA).
    *   Prevención de vulnerabilidades de tabnabbing (`rel="noopener noreferrer"`).
*   **Diseño Fluido y Animaciones:**
    *   Variables CSS para rápida iteración de *Tokens* de diseño (colores, sombras, radios).
    *   Micro-interacciones al hacer *hover*, animaciones con IntersectionObserver y CSS Keyframes.
    *   Marquee responsivo (Faja de confianza y alianzas con laboratorios).

## 💻 Stack Tecnológico

El proyecto se mantiene ágil y fácil de escalar mediante tecnologías web estándar:
*   **HTML5 Semántico:** Organizado para maximizar SEO *On-page* y accesibilidad estructural.
*   **CSS3 moderno:** Grid, Flexbox, variables declaradas en `:root` y media queries para arquitectura *Mobile First*.
*   **Vanilla JavaScript (ES6):** Manejo del DOM eficiente, listeners de estado para el acordeón FAQ, *Intersection Observer* para revelado y ruteo interno del modal de calificación.

## 📁 Estructura del Proyecto

```text
/
├── assets/          # Recursos gráficos (imágenes, fondos, iconos)
├── index.html       # Estructura principal y contenido
├── script.js        # Lógica del modal, animaciones e interacciones
├── styles.css       # Hoja de estilos principal y responsive design
└── README.md        # Documentación del proyecto
```

## ⚙️ Instalación y Uso

Dado que es un proyecto estático que no requiere transpilación ni servidor Backend, la puesta en marcha es inmediata:

1. Clonar el repositorio localmente.
2. Abrir el archivo `index.html` en cualquier navegador web moderno, o montar los archivos utilizando una extensión como *Live Server* en VSCode.
3. Para el pase a producción, el repositorio está listo para ser insertado de forma transparente en servicios de alojamiento estático (Vercel, GitHub Pages, Netlify, Hostinger, etc.).

## 📝 Notas de Desarrollo

*   **Actualizaciones Pendientes:** Antes del despliegue oficial de producción, se deben proveer los enlaces de WhatsApp finales en todas las instancias y remover la matrícula temporal (`M.N. 123456`).
*   **Ampliabilidad:** Al utilizar un archivo `.gitignore` robusto y una estructura desacoplada, el proyecto queda preparado por si en un futuro se requiere empaquetar con Webpack/Vite o migrarlo hacia ecosistemas como React/Next.js.

---
*Desarrollado para la escalabilidad e integración de servicios médicos profesionales.*
