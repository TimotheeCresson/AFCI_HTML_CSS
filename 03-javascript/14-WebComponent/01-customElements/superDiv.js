export default class SuperDiv extends HTMLDivElement{
    constructor() {
        console.log("Ma classe superDiv a été construite");
        super();
        this.#setStyle(); // propriété privée
        this.addEventListener("click", this.hide);
    }
    #setStyle(){
        this.style.display = "block";
        this.style.overflow = "hidden";
        this.style.backgroundColor = this.getAttribute("bg")??"red";  // "??"  Il est utilisé pour définir une valeur par défaut en cas de null ou d'undefined. Dans ce cas, si la valeur obtenue à partir de l'attribut "bg" est null ou undefined, l'opérateur renverra la valeur de droite, qui est "red" plus simple ment dit, par défaut, si bg n'est pas définie il sera de couleur rouge
        this.style.transition = "height 0.3s linear"

        this.size = this.getBoundingClientRect(); // récupére taille et position de l'élément
        this.style.height = this.size.height+"px";                
}
hide() {
    if(this.style.height === '1rem')
        this.style.height = this.size.height+"px";
    else
        this.style.height = "1rem"
}
connectedCallback () {
    console.log("Ma balise est entrée dans le DOM");
}
disconnectedCallback() {
    console.log("La balise est sortie du DOM");    // Ces messages apparaissent dans la console     ce dernier apparait lorsque l'on supprime une div
}
adoptedCallback() {
    console.log("J'ai la flemme de faire afficher ce message");
}
attributeChangedCallback(name, old, now) {
    console.log(`L'attribut ${name} est passé de : 
                ${old}
                à 
                ${now}`); 
}
static get observedAttributes() {  // quels attributs vérifié et observer et que je veux voir changer test.id = 
    return ["style"]   /* ici lorsque l'on clique sur les div on a L'attribut style est passé de : 
    display: block; overflow: hidden; background-color: chartreuse; transition: height 0.3s linear 0s; height: 126px;
    à 
    display: block; overflow: hidden; background-color: chartreuse; transition: height 0.3s linear 0s; height: 1rem; */
}
}
customElements.define("super-div", SuperDiv, {extends: "div"})   // On doit mettre le paramètre de où il extend soit ici de la div, cela fonctionnera comme une div