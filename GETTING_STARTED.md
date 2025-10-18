# Getting Started Guide

This guide will help you get started with this Lit Element template.

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   This will open your browser at `http://localhost:5173/`

3. **View examples**:
   Navigate to `http://localhost:5173/examples.html` to see all components

## Project Files

- **`my-element.js`** - An interactive counter component that demonstrates:
  - Reactive properties (`name`, `count`)
  - Event handling (`@click`)
  - Scoped CSS styling
  - Template rendering with `html` tagged template

- **`card-element.js`** - A reusable card component that shows:
  - Component composition
  - Conditional rendering
  - Hover effects
  - Image handling with accessibility

- **`index.html`** - Basic demo page
- **`examples.html`** - Comprehensive examples page

## Creating Your First Component

1. Create a new file (e.g., `my-component.js`)
2. Import Lit and define your component:

```javascript
import { LitElement, html, css } from 'lit';

export class MyComponent extends LitElement {
  static properties = {
    message: { type: String }
  };

  static styles = css`
    /* Your styles here */
  `;

  constructor() {
    super();
    this.message = 'Hello!';
  }

  render() {
    return html`<div>${this.message}</div>`;
  }
}

customElements.define('my-component', MyComponent);
```

3. Use it in your HTML:
```html
<my-component message="Welcome!"></my-component>
<script type="module" src="/my-component.js"></script>
```

## Building for Production

```bash
npm run build
```

This creates optimized files in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Next Steps

- Read the [Lit Documentation](https://lit.dev)
- Explore [Lit Examples](https://lit.dev/examples/)
- Learn about [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

## Tips

- Use the dev server's hot reload for instant feedback
- Components are automatically isolated with Shadow DOM
- Properties defined in `static properties` are reactive
- Use `css` tagged template for scoped styles
- Use `html` tagged template for templates
