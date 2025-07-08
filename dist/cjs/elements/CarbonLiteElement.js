'use strict';

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

exports.CarbonLiteElement = CarbonLiteElement;
//# sourceMappingURL=CarbonLiteElement.js.map
