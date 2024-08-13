import { css, html } from '../lit-element.js';
import Component from '../base/Component.js';

export default class PageSection extends Component {
  static get properties() {
    return {
      text: { type: String },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          width: 100%;
          margin: 0 auto;
          height: 100%;
          scroll-snap-align: start;
          display: grid;
          place-items: center;
          padding: 20px;
          box-sizing: border-box;
        }

        div {
          width: 100%;
          max-width: 800px;
          display: grid;
        }

        :host(:nth-child(odd)) {
          background: var(--maroon);
          color: white;
        }
      `,
    ];
  }

  render() {
    return html`
      <div>
        <h2>${this.text}</h2>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('page-section', PageSection);
