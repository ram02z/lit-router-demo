import { html, LitElement } from 'lit';

class HomeView extends LitElement {
  render() {
    return html`
      <h2>Home</h2>
      <p>There is no place like home!</p>
    `;
  }
}

customElements.define("home-view", HomeView);
