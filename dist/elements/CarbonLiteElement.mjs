class CarbonLiteElement extends HTMLElement {
    configure(message) {
        this.innerHTML = `
          <div>
            ${message}
          </div>
        `;
    }
}
customElements.define('carbon-lite', CarbonLiteElement);

export { CarbonLiteElement };
//# sourceMappingURL=CarbonLiteElement.mjs.map
