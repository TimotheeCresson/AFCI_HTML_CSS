"use strict"
export default class SuperCard extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
        const template = document.querySelector('#card');
        this.shadow.append(template.content.cloneNode(true)); // on met true pour qu'il cherche dans toute la totalité de l'élément
    }
}
customElements.define("super-card", SuperCard)