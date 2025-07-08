export class CarbonLiteElement extends HTMLElement {
    configure(message: string) {
        this.innerHTML = `
          <div>
            ${message}
          </div>
        `;
    }
}
customElements.define('carbon-lite', CarbonLiteElement);