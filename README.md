# Lit Element Basic Template

A basic template using the Lit Element library for building fast, lightweight web components.

## About Lit Element

Lit is a simple library for building fast, lightweight web components that work in any framework or with no framework at all.

## Features

- ✨ Simple and intuitive API
- 🚀 Fast and lightweight
- 🎨 Scoped CSS with shadow DOM
- 🔄 Reactive properties
- 📦 Built with modern web standards

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## Installation

1. Clone this repository or use it as a template
2. Install dependencies:

```bash
npm install
```

## Usage

### Development

Start the development server:

```bash
npm run dev
```

This will start a local development server and open your browser automatically.

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
.
├── index.html          # Main HTML file
├── my-element.js       # Basic Lit Element component
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## Creating Your Own Components

To create a new Lit Element component:

```javascript
import { LitElement, html, css } from 'lit';

export class YourComponent extends LitElement {
  static properties = {
    // Define reactive properties
    myProp: { type: String }
  };

  static styles = css`
    /* Add your styles here */
  `;

  render() {
    return html`
      <!-- Your template here -->
    `;
  }
}

customElements.define('your-component', YourComponent);
```

## Learn More

- [Lit Documentation](https://lit.dev)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Vite Documentation](https://vitejs.dev)

## License

MIT
