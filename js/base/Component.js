import { LitElement, css } from '../lit-element.js';

class Component extends LitElement {
  static get styles() {
    return css`
      :host {
        font-family: var(--font);
      }
    `;
  }

  fire(name, detail) {
    this.dispatchEvent(new CustomEvent(name, {
      bubbles: true,
      composed: true,
      detail,
    }));
  }
}

export default Component;
