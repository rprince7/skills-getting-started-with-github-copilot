# skills-getting-started-with-github-copilot
Exercise: Get started using GitHub Copilot

## Modal Window Web Component

Este proyecto incluye un componente web básico de ventana modal creado con Lit Element.

### Características

- 🎨 Diseño moderno y responsive
- ✨ Animaciones suaves
- ⌨️ Cierre con tecla ESC
- 🖱️ Cierre al hacer clic fuera del modal
- 🔧 Fácil de personalizar
- 📦 Component web reutilizable

### Instalación

```bash
npm install
```

### Uso

1. Ejecutar el servidor de desarrollo:
```bash
npm run dev
```

2. Abrir el navegador en `http://localhost:5173`

### Uso del Componente

```html
<!-- Importar el componente -->
<script type="module" src="./modal-window.js"></script>

<!-- Usar el componente -->
<modal-window id="myModal" title="Mi Modal">
  <p>Contenido del modal aquí</p>
</modal-window>

<!-- Abrir el modal con JavaScript -->
<script>
  document.getElementById('myModal').open = true;
</script>
```

### Propiedades

- `open` (Boolean): Controla si el modal está visible
- `title` (String): El título mostrado en el encabezado del modal

### Eventos

- `modal-closed`: Se dispara cuando el modal se cierra

### Ejemplo

Ver `index.html` para un ejemplo completo de uso.
