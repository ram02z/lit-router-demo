import { html, css, LitElement } from 'lit';

class MainLayout extends LitElement {
  render() {
    return html`
      <h1>Vaadin Router demo</h1>

      <nav>
        <a href="/">Home</a>
        <a href="/gibberish/not/name">404 page</a>
      </nav>

      <!-- nested routes content is placed into this slot -->
      <slot></slot>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }
}

customElements.define("main-layout", MainLayout)
