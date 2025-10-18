# skills-getting-started-with-github-copilot
Exercise: Get started using GitHub Copilot

## 🎨 Greeting Card Web Component

Este repositorio contiene un ejemplo de Web Component personalizado con una plantilla de demostración.

### 📦 Contenido

- **greeting-card.js**: Componente web personalizado que muestra una tarjeta de saludo animada
- **example-template.html**: Plantilla de ejemplo con múltiples casos de uso del componente

### 🚀 Uso Rápido

1. Abre el archivo `example-template.html` en tu navegador
2. Verás varios ejemplos del componente en acción
3. Prueba el ejemplo interactivo para personalizar tu propia tarjeta

### 💻 Implementación en tu Proyecto

```html
<!-- 1. Incluye el script del componente -->
<script src="greeting-card.js"></script>

<!-- 2. Usa el componente en tu HTML -->
<greeting-card name="Tu Nombre" message="Tu Mensaje"></greeting-card>
```

### 🎯 Características

- ✅ Web Component nativo (sin dependencias)
- ✅ Shadow DOM para encapsulación de estilos
- ✅ Atributos observables y actualizables dinámicamente
- ✅ Animaciones CSS suaves
- ✅ Diseño responsive
- ✅ Fácil de personalizar

### 📚 Atributos

| Atributo | Tipo | Por Defecto | Descripción |
|----------|------|-------------|-------------|
| `name` | String | "Guest" | Nombre que se muestra en la tarjeta |
| `message` | String | "Hello!" | Mensaje de saludo |

### 🔧 Ejemplo con JavaScript

```javascript
// Crear elemento programáticamente
const card = document.createElement('greeting-card');
card.setAttribute('name', 'María');
card.setAttribute('message', '¡Hola!');
document.body.appendChild(card);

// Actualizar atributos dinámicamente
setTimeout(() => {
  card.setAttribute('name', 'Carlos');
  card.setAttribute('message', '¡Bienvenido!');
}, 3000);
```

### 🌐 Compatibilidad

Este componente utiliza la API estándar de Web Components, compatible con todos los navegadores modernos:
- Chrome 54+
- Firefox 63+
- Safari 10.1+
- Edge 79+

### 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.
