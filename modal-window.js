import { LitElement, html, css } from 'lit';

/**
 * Modal Window Web Component
 * A basic modal dialog built with Lit Element
 * 
 * @element modal-window
 * 
 * @attr {Boolean} open - Controls whether the modal is visible
 * @attr {String} title - The title displayed in the modal header
 * 
 * @fires modal-closed - Fired when the modal is closed
 * 
 * @slot - Default slot for modal content
 */
export class ModalWindow extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    title: { type: String }
  };

  static styles = css`
    :host {
      display: none;
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    :host([open]) {
      display: block;
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .modal {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      max-width: 500px;
      width: 90%;
      max-height: 80vh;
      display: flex;
      flex-direction: column;
      animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .modal-header {
      padding: 20px;
      border-bottom: 1px solid #e5e7eb;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .modal-title {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2937;
    }

    .close-button {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #6b7280;
      padding: 0;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      transition: background-color 0.2s, color 0.2s;
    }

    .close-button:hover {
      background-color: #f3f4f6;
      color: #1f2937;
    }

    .modal-content {
      padding: 20px;
      overflow-y: auto;
      flex: 1;
    }

    .modal-footer {
      padding: 20px;
      border-top: 1px solid #e5e7eb;
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
  `;

  constructor() {
    super();
    this.open = false;
    this.title = 'Modal';
    this._boundHandleKeyDown = this._handleKeyDown.bind(this);
  }

  close() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('modal-closed', {
      bubbles: true,
      composed: true
    }));
  }

  _handleOverlayClick(e) {
    if (e.target.classList.contains('overlay')) {
      this.close();
    }
  }

  _handleKeyDown(e) {
    if (e.key === 'Escape' && this.open) {
      this.close();
    }
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', this._boundHandleKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this._boundHandleKeyDown);
  }

  render() {
    return html`
      <div class="overlay" @click="${this._handleOverlayClick}">
        <div class="modal">
          <div class="modal-header">
            <h2 class="modal-title">${this.title}</h2>
            <button 
              class="close-button" 
              @click="${this.close}"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
          <div class="modal-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('modal-window', ModalWindow);
