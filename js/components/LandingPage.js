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
          padding: 10px;
        }

        #logo {
          display: grid;
          grid-template-rows: auto auto;
          grid-template-columns: auto auto;
          column-gap: 10px;
        }

        #icon {
          grid-column: 1;
          grid-row: 1 / 3;
          width: 50px;
          height: 50px;
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
          font-size: 12px;
        }

        menu-button {
          grid-column: 3;
          align-self: end;
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

        @container (min-width: 500px) {
          #lamps, #practiceAreas {
            zoom: 1.4;
          }
        }

        @container (min-width: 800px) {
          #lamps {
            zoom: 2;
          }
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
          font-size: 22px;
          gap: 20px;
        }

        address a {
          display: grid;
          gap: 10px;
          align-items: top;
          grid-template-rows: auto;
          grid-template-columns: auto 1fr;
          color: inherit;
          text-decoration: none;
        }

        #aboutUs {
          font-size: 24px;
          font-weight: lighter;
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

  firstUpdated() {
    let options = {
      root: this.shadowRoot.querySelector("main"),
      rootMargin: "0px",
      threshold: 1.0,
    };

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.shadowRoot.querySelector('scroll-carousel').play();
        } else {
          this.shadowRoot.querySelector('scroll-carousel').pause();
        }
      });
    }, options);

    let target = this.shadowRoot.querySelector('page-section[text="Quotes"]');
    observer.observe(target);
  }

  render() {
    return html`
      <header>
        <div id="logo">
          <img id="icon" src="images/logo.svg">
          <div id="title">KALPA LAW</div>
          <div id="slogan">Advocates & Advisors</div>
        </div>
        <menu-button .open=${this.isMenuOpen} @click=${this._handleMenuButtonClick}></menu-button>
      </header>
      <main>
        <page-section text="About Us">
          <div id="aboutUs">
            <p>We at <b>Kalpa Law</b> are committed to excellence and are driven by client satisfaction.</p>
            <p>Our team of seasoned legal experts possess a proven track record in diverse legal fields, with a sharp focus on delivering swift and effective solutions.</p>
            <p>Our firm embodies the core values of integrity, transparency, and dedication, striving to exceed expectations in every case.</p>
          </div>
        </page-section>
        <page-section text="Quotes">
          <scroll-carousel .items=${["The law is reason free from passion.-Aristotle", "The law cannot make all men equal, but they are all equal before the law.-Frederick Pollock", "The law is reason, that which is not reason is not law.-Sir William Blackstone", "The only thing more expensive than hiring a lawyer is not hiring a lawyer.-Lamar Hunt", "A lawyer’s time and advice are his stock in trade.-Abraham Lincoln", "Questions inspire Curiosity.-Manu"]}></scroll-carousel>
        </page-section>
        <page-section showHeading text="Why Choose Us">
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
        <page-section showHeading text="Practice Areas">
          <div id="practiceAreas">
            <hover-card text="Civil" description="Commercial Disputes, Arbitration, Family, Property & Real Estate, Intellectual Property, Labour, Environmental, Consumer"></hover-card>
            <hover-card text="Corporate" description="Insolvency and Bankruptcy, Mergers, Acquisitions, IPO, Transaction Advisory, Corporate Governance, Securities"></hover-card>
            <hover-card text="Criminal" description="Economic Offences, White Collar Offences, Cyber offences, IPC/BNS"></hover-card>
          </div>
        </page-section>
        <page-section showHeading text="Contact Us">
          <address>
            <a id="call" href="tel:+919891758831"><img src="images/call.svg"> +91-9891758831</a>
            <a id="mail" href="mailto:mail@kalpalaw.in"><img src="images/mail.svg"> mail@kalpalaw.in</a>
            <a href="https://maps.app.goo.gl/1KxU2dvLsrEAVH3o8?g_st=aw"><img src="images/location.svg">259, Lawyers Chambers<br>Block 1, Delhi High Court<br>New Delhi – 110003</a>
            <a href="https://www.google.com/maps/place/28%C2%B033'34.6%22N+77%C2%B014'33.0%22E/@28.5596141,77.2418576,19z/data=!3m1!4b1!4m7!1m2!10m1!1e2!3m3!8m2!3d28.5596129!4d77.2425013?entry=ttu"><img src="images/location.svg">E-141, 1st Floor<br>Amar Colony<br>New Delhi – 110024</a>
          </address>
        </page-section>
      </main>
      <nav-menu @navigate=${this._handleMenuNavigate} .open=${this.isMenuOpen} .items=${['About Us', 'Why Choose Us', 'Practice Areas', 'Contact Us']}></nav-menu>
    `;
  }
}

customElements.define('landing-page', LandingPage);
