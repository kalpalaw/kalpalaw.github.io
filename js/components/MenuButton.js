import { css, html } from '../lit-element.js';
import Component from '../base/Component.js';

export default class MenuButton extends Component {
  static get properties() {
    return {
      open: { type: Boolean, reflect: true }
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          width: 60px;
          height: 45px;
          position: relative;
          transition: .5s ease-in-out;
          cursor: pointer;
          transform: scale(0.6);
        }

        div {
          display: block;
          position: absolute;
          height: 3px;
          width: 100%;
          background: var(--accent);
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: .25s ease-in-out;
          transform-origin: left center;
        }

        div:nth-child(1) {
          top: 0px;
        }

        div:nth-child(2) {
          top: 18px;
        }

        div:nth-child(3) {
          top: 36px;
        }

        :host([open]) div {
          &:nth-child(1) {
            transform: rotate(45deg);
            top: -3px;
            left: 8px;
          }

          &:nth-child(2) {
            width: 0%;
            opacity: 0;
          }

          &:nth-child(3) {
            transform: rotate(-45deg);
            top: 39px;
            left: 8px;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <div></div>
      <div></div>
      <div></div>
    `;
  }
}

customElements.define('menu-button', MenuButton);
