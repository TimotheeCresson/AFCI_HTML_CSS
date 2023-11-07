export default class SuperBalise extends HTMLElement {
    constructor() {
        super(); // fonction qui apelle le constructor parent, on l'utilise quand un élément est hérité d'un parent (HTMLELement ici parent de tous les éléments)
        this.info = document.createElement("div");
        this.info.textContent = this.getAttribute("text")|| "rien à dire";  // si j'ai un attribut text sinon je met rien
        this.append(this.info);
        this.initStyle();
        this.addEventListener("mouseenter", this.toggle);
        this.addEventListener("mouseleave", this.toggle);
    }
    initStyle() {
        this.style.fontWeight = 900;        // change ma balise
        this.style.color = "red";
        this.style.position = "relative";

        this.info.style.position = "absolute";      // cela sur la div lorsque l'on survole notre balise super-balise "coucou tout le monde" celle-ci apparaît
        this.info.style.bottom = "-2rem";
        this.info.style.right = "-1rem";
        this.info.style.border = "2px solid blue";
        this.info.style.borderRadius = "5px";
        this.info.style.backgroundColor = "rgba(0, 0, 255, 0.7)";
        this.info.style.color = "yellow";
        this.info.style.display = "none";
    }
    toggle() {
        if(this.info.style.display === "none")
            this.info.style.display = "";
        else 
        this.info.style.display = "none";

    }
}
customElements.define("super-balise", SuperBalise)