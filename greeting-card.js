/**
 * GreetingCard - A custom web component that displays a greeting card
 * 
 * Usage:
 *   <greeting-card name="John" message="Welcome!"></greeting-card>
 */
class GreetingCard extends HTMLElement {
  constructor() {
    super();
    // Attach a shadow DOM for encapsulation
    this.attachShadow({ mode: 'open' });
  }

  // Observe these attributes for changes
  static get observedAttributes() {
    return ['name', 'message'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const name = this.getAttribute('name') || 'Guest';
    const message = this.getAttribute('message') || 'Hello!';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          color: white;
          max-width: 400px;
          margin: 20px auto;
          transition: transform 0.3s ease;
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }
        
        .message {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 15px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .name {
          font-size: 32px;
          font-weight: 900;
          margin-bottom: 10px;
          text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
        }
        
        .decoration {
          text-align: center;
          font-size: 40px;
          margin-top: 15px;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      </style>
      <div class="card">
        <div class="message">${message}</div>
        <div class="name">${name}</div>
        <div class="decoration">✨🎉✨</div>
      </div>
    `;
  }
}

// Define the custom element
customElements.define('greeting-card', GreetingCard);
