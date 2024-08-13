import { css, html } from '../lit-element.js';
import Component from '../base/Component.js';

export default class LandingPage extends Component {
  static get properties() {
    return {
      text: { type: String },
      isMenuOpen: { type: Boolean }
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: grid;
          gap: 10px;
          grid-template-rows: auto 1fr;
          height: 100%;
        }
        main {
          grid-row: 2;
          grid-column: 1;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
          scroll-behavior: smooth;
        }

        nav-menu {
          grid-row: 2;
          grid-column: 1;
        }

        header, h1 {
          margin: 0;
        }

        header {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 20px;
          padding: 20px;
        }

        #logo {
          display: grid;
          grid-template-rows: auto auto;
          grid-template-columns: auto auto;
          column-gap: 5px;
        }

        #icon {
          grid-column: 1;
          grid-row: 1 / 3;
          font-size: 24px;
        }

        #title {
          grid-column: 2;
          grid-row: 1;
          font-size: 24px;
          letter-spacing: 2px;
          word-spacing: 5px;
          align-self: end;
        }

        #slogan {
          grid-column: 2;
          grid-row: 2;
          font-size: 10px;
        }

        menu-button {
          grid-column: 3;
        }

        #lamps {
          container-type: inline-size;
          position: relative;
          width: 100%;
          width: 362px;
          height: 302px;
        }

        #lamps hover-card {
          position: absolute;
        }

        #lamps hover-card {
          --s: 120px;
          --gap: 1px;
          width: var(--s);
          height: var(--s);
        }

        #lamps hover-card:nth-child(1) {
          top: 0;
          left: calc(var(--s)/2);;
        }

        #lamps hover-card:nth-child(2) {
          top: 0;
          left: calc(1.5 * var(--s) + var(--gap));
        }

        #lamps hover-card:nth-child(3) {
          top: calc(0.75 * var(--s) + var(--gap));
          left: 0;
        }

        #lamps hover-card:nth-child(4) {
          top: calc(0.75 * var(--s) + var(--gap));
          left: 121px;
        }

        #lamps hover-card:nth-child(5) {
          top: calc(0.75 * var(--s) + var(--gap));
          left: calc(2 * (var(--s) + var(--gap)));
        }

        #lamps hover-card:nth-child(6) {
          top: calc(1.5 * var(--s) + 2 * var(--gap));
          left: calc(var(--s)/2);;
        }

        #lamps hover-card:nth-child(7) {
          top: calc(1.5 * var(--s) + 2 * var(--gap));
          left: calc(1.5 * var(--s) + var(--gap));
        }


        #practiceAreas {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr) ) ;
          gap: 10px;
          width: 100%;
        }

        #practiceAreas hover-card {
          --accent: var(--white);
          color: var(--maroon);
        }

        address {
          display: grid;
          gap: 10px;
        }

        address a {
          display: grid;
          align-items: center;
          grid-template-rows: auto;
          grid-template-columns: auto 1fr;
          gap: 10px;
        }
      `,
    ];
  }

  _handleMenuButtonClick(e) {
    this.isMenuOpen = !this.isMenuOpen;
  }

  _handleMenuNavigate(e) {
    this.isMenuOpen = false;
    this.shadowRoot.querySelector(`[text="${e.detail.item}"]`).scrollIntoView({ smooth: true });
  }

  render() {
    return html`
      <header>
        <div id="logo">
          <img id="icon" src="images/gavel.svg">
          <div id="title">KALPA LAW</div>
          <div id="slogan">Advocates & Advisors</div>
        </div>
        <menu-button .open=${this.isMenuOpen} @click=${this._handleMenuButtonClick}></menu-button>
      </header>
      <main>
        <page-section text="About Us">
          <p>We at Kalpa law are committed to excellence and are driven by client satisfaction. Our team of seasoned legal experts possess a proven track record in diverse legal fields, with a sharp focus on delivering swift and effective solutions. Our firm embodies the core values of integrity, transparency, and dedication, striving to exceed expectations in every case.</p>
        </page-section>
        <page-section text="Why Choose Us">
          <div id="lamps">
            <hover-card shape="hexagon" text="Honesty" description="Truthful & transparent with clients and the law"></hover-card>
            <hover-card shape="hexagon" text="Courage" description="Stand up in court without fear to uphold a client's interests"></hover-card>
            <hover-card shape="hexagon" text="Industry" description="Diligence, hard work, and updated with latest laws"></hover-card>
            <hover-card shape="hexagon" text="Wit" description="When not to say and what not to say"></hover-card>
            <hover-card shape="hexagon" text="Eloquence" description="Effective communication and persuasive speaking skills"></hover-card>
            <hover-card shape="hexagon" text="Judgment" description="Strategic choices and Sound decisions"></hover-card>
            <hover-card shape="hexagon" text="Tact" description="Professional conduct and advocacy skills"></hover-card>
          </div>
        </page-section>
        <page-section text="Practice Areas">
          <div id="practiceAreas">
            <hover-card text="Civil" description="Commercial Disputes, Arbitration, Family, Property & Real Estate, Intellectual Property, Labour, Environmental, Consumer"></hover-card>
            <hover-card text="Corporate" description="Insolvency and Bankruptcy, Mergers, Acquisitions, IPO, Transaction Advisory, Corporate Governance, Securities"></hover-card>
            <hover-card text="Criminal" description="Economic Offences, White Collar Offences, Cyber offences, IPC/BNS"></hover-card>
          </div>
        </page-section>
        <page-section text="Contact Us">
          <address>
            <a id="call" href="tel:+919891758831"><img src="images/call.svg"> +91-9891758831</a>
            <a id="mail" href="mailto:mail@kalpalaw.in"><img src="images/mail.svg"> mail@kalpalaw.in</a>
            <a href="https://google.com/maps/place/Delhi+High+Court,+India+Gate,+New+Delhi,+Delhi/@28.6094759,77.233851,18z/data=!3m1!4b1!4m6!3m5!1s0x390ce2d966d5a0db:0x651b19f1d812463!8m2!3d28.6086036!4d77.2354859!16s%2Fg%2F12hl0nkf4?entry=ttu"><img src="images/location.svg">259, Lawyers Chambers, Block 1, Delhi High Court, New Delhi – 110003</a>
            <a href="https://www.google.com/maps/place/28%C2%B033'34.6%22N+77%C2%B014'33.0%22E/@28.5596141,77.2418576,19z/data=!3m1!4b1!4m7!1m2!10m1!1e2!3m3!8m2!3d28.5596129!4d77.2425013?entry=ttu"><img src="images/location.svg">E-141, 1st Floor, Amar Colony, New Delhi – 110024 </a>
          </address>
        </page-section>
      </main>
      <nav-menu @navigate=${this._handleMenuNavigate} .open=${this.isMenuOpen} .items=${['About Us', 'Why Choose Us', 'Practice Areas', 'Contact Us']}></nav-menu>
    `;
  }
}

customElements.define('landing-page', LandingPage);
