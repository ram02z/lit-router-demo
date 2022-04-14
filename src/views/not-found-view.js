import { html, LitElement } from 'lit';

class NotFoundView extends LitElement {
  render() {
    return html`
      <h2>404</h2>
      <p>You've tried to open but alas there is nothing there :(</p>
    `;
  }
}

customElements.define("not-found-view", NotFoundView)
