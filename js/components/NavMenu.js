import { css, html } from '../lit-element.js';
import Component from '../base/Component.js';

export default class NavMenu extends Component {
  static get properties() {
    return {
      items: { type: Array },
      open: { type: Boolean, reflect: true }
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: none;
          color: var(--maroon);
          background: var(--white);
          cursor: pointer;
          padding: 20px;
          z-index: 1;
        }

        :host([open]) {
          display: block;
        }

        #items {
          display: grid;
          gap: 20px;
        }
      `,
    ];
  }

  _handleClick(e) {
    this.fire('navigate', { item: e.target.textContent});
  }

  render() {
    return html`
      <div id="items" @click=${this._handleClick}>
        ${this.items.map((item) => html`<div>${item}</div>`)}
      </div>
    `;
  }
}

customElements.define('nav-menu', NavMenu);
