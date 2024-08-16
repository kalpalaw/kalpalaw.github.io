import { css, html } from '../lit-element.js';
import Component from '../base/Component.js';

export default class ScrollCarousel extends Component {
  static get properties() {
    return {
      items: { type: Array },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: grid;
          grid-auto-flow: column;
          grid-template-columns: 400px;
          grid-auto-columns: 400px;
          overflow: auto;
          scroll-snap-type: x mandatory;
          width: 400px;
        }

        div {
          scroll-snap-align: start;
        }
      `,
    ];
  }

  render() {
    return html`
      ${this.items.map((item) => html`<div>${item}</div>`)}
    `;
  }
}

customElements.define('scroll-carousel', ScrollCarousel);
