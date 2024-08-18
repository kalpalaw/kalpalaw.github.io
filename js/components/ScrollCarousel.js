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
          display: block;
          overflow: auto;
          scroll-snap-type: x mandatory;
          font-size: 36px;
          white-space: nowrap;
          scroll-behavior: smooth;
        }

        div {
          display: inline-block;
          scroll-snap-align: start;
          width: 100%;
          white-space: normal;
          vertical-align: top;
          padding: 10px;
          box-sizing: border-box;
        }

        p {
          font-size: 24px;
        }
      `,
    ];
  }

  play() {
    let i = 1;
    let items = this.shadowRoot.querySelectorAll('div');
    this._interval = setInterval(() => {
      items[i].scrollIntoView();
      if (i === (items.length - 1)) {
        i = 0;
      } else {
        i += 1;
      }
    }, 4000);
  }

  pause() {
    clearInterval(this._interval);
  }

  render() {
    return html`
      ${this.items.map((item) => html`<div><q>${item.split('-')[0]}</q><p>—${item.split('-')[1]}</div>`)}
    `;
  }
}

customElements.define('scroll-carousel', ScrollCarousel);
