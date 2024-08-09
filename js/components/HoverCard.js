import { css, html } from '../lit-element.js';
import Component from '../base/Component.js';

export default class HoverCard extends Component {
  static get properties() {
    return {
      text: { type: String },
      description: { type: String },
      shape: {type: String, reflect: true}
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          position: relative;
          background: var(--accent);
          color: var(--white);
          border-radius: 10px;
          box-sizing: border-box;
          aspect-ratio: 1;
          text-align: center;
          max-width: 200px;
        }

        :host([shape="hexagon"]) {
          clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
          width: 120px;
          height: 120px;
        }

        .face {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .face1 {
          box-sizing: border-box;
          font-size: 11px;
          padding: 10px;
          padding-top: 30px;
        }

        .face2 {
          transition: 0.5s;
          background: var(--accent);
          border-radius: 15px;
          box-sizing: border-box;
          font-weight: bold;

          div {
            transition: 0.5s;
          }
        }

        :host(:hover) .face2, :host(:focus) .face2 {
          height: 30px;
          padding-top: 30px;
        }
      `,
    ];
  }

  firstUpdated() {
    this.tabIndex = 0;
  }

  render() {
    return html`
      <div class="face face1">
          ${this.description}
      </div>
      <div class="face face2">
        <div>${this.text}</div>
      </div>
    `;
  }
}

customElements.define('hover-card', HoverCard);
