import { LitElement, html, css } from 'lit';

export class CardElement extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String },
    imageUrl: { type: String }
  };

  static styles = css`
    :host {
      display: block;
    }

    .card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: transform 0.2s, box-shadow 0.2s;
      margin: 10px;
    }

    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .card-image {
      width: 100%;
      height: 200px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3em;
    }

    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .card-content {
      padding: 20px;
    }

    .card-title {
      margin: 0 0 10px 0;
      color: #333;
      font-size: 1.5em;
    }

    .card-description {
      margin: 0;
      color: #666;
      line-height: 1.6;
    }
  `;

  constructor() {
    super();
    this.title = 'Card Title';
    this.description = 'Card description goes here.';
    this.imageUrl = '';
  }

  render() {
    return html`
      <div class="card">
        <div class="card-image">
          ${this.imageUrl ? html`<img src="${this.imageUrl}" alt="${this.title}" loading="lazy">` : html`🎨`}
        </div>
        <div class="card-content">
          <h2 class="card-title">${this.title}</h2>
          <p class="card-description">${this.description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('card-element', CardElement);
