import { LitElement, html, css } from 'lit';

export class MyElement extends LitElement {
  static properties = {
    name: { type: String },
    count: { type: Number }
  };

  static styles = css`
    :host {
      display: block;
      padding: 16px;
      font-family: Arial, sans-serif;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      border: 2px solid #0066cc;
      border-radius: 8px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    h1 {
      margin-top: 0;
      font-size: 2em;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #0066cc;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #0052a3;
    }

    .count-display {
      font-size: 1.5em;
      margin: 20px 0;
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
    }
  `;

  constructor() {
    super();
    this.name = 'World';
    this.count = 0;
  }

  render() {
    return html`
      <div class="container">
        <h1>Hello, ${this.name}!</h1>
        <p>Welcome to Lit Element - A simple, fast, and powerful web component library.</p>
        
        <div class="count-display">
          Count: ${this.count}
        </div>
        
        <button @click=${this._onClick}>
          Click me!
        </button>
      </div>
    `;
  }

  _onClick() {
    this.count++;
  }
}

customElements.define('my-element', MyElement);
