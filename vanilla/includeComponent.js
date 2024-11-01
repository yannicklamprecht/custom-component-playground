export function define() {
    const parser = new DOMParser();
    window.customElements.define("include-fragment", class extends HTMLElement {
        connectedCallback() {
            const src = this.getAttribute("src");
            const tag = this.getAttribute("tag");
            fetch(src)
                .then(response => response.text())
                .then(text => parser.parseFromString(text, "text/html"))
                .then(htmlUnsafe => {
                    const template = document.createElement(tag ?? "div");
                    this._copyScript(htmlUnsafe);
                    template.innerHTML = htmlUnsafe.body.innerHTML;
                    this.replaceWith(template)
                });
        }

        _copyScript(htmlUnsafe) {
            htmlUnsafe.querySelectorAll("script")
                .forEach((oldScript) => {
                    const newScript = document.createElement("script");
                    Array.from(oldScript.attributes).forEach((attr) => {
                        newScript.setAttribute(attr.name, attr.value);
                    });
                    if (oldScript.textContent) {
                        newScript.textContent = oldScript.textContent;
                    }
                    document.body.appendChild(newScript);
                });
        }
    });
}
