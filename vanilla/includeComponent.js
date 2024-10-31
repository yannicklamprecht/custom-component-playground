export function define() {
    window.customElements.define("include-fragment", class extends HTMLElement {
        connectedCallback() {
            const src = this.getAttribute("src");
            fetch(src)
                .then(response => response.text())
                .then(text => {
                    const template = document.createElement("v-container");
                    template.innerHTML = text;
                    this.replaceWith(template)
                });
        }
    });
}
