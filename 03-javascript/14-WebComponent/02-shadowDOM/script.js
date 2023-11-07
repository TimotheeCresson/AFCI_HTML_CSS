"use strict"
/*
    Le shadow DOM permet de créer un DOM séparé du reste du DOM principal
    Ce DOM fantôme obéit à ses propres régles, ignorant les scripts et styles appliqués au DOM parent.
    De même, les scripts et styles appliqués au DOM fantôme, n'influent pas le DOM parent

    Pour créer un "hôte Fantôme (shadow host)", il suffit d'appeler sur l'élément HTML voulu, la méthode "attachShadow":
        *  ElementHTML.attachShadow({mode:""})
            Le mode peut être "open" ou "closed"

        Le mode "open" rend accessible le shadowDOM depuis n'importe quel script. Alors que le "closed" est innacessible.
*/
const op = document.querySelector(".open")
const cl = document.querySelector(".close")

const shadowOpen = op.attachShadow({mode:"open"});
const shadowClose = cl.attachShadow({mode:"closed"})  // attention closed avec ed

// accessible :
console.log(op.shadowRoot);  // on a plein d'élément, pour chrome on doit mettre console.dir()

// Inaccessible : 
console.log(cl.shadowRoot);  // on obtient null

/*
    Dans l'exemple suivant, chacuns des trois "h1" ne sont affecté que par le style de leur DOM
    
    Pour l'exemple, j'utilise des feuilles de style interne, mais rien n'empêche d'utiliser des stylesheets (feuilles de style) externe

    Le selecteur CSS ":host" correspond au "body" ou au ":root" de notre shadowDOM
*/
const style1 = document.createElement("style"); 
/* on doit mettre ce message CSS pour avoir les couleurs */
style1.textContent = /* CSS */
`
    :host{text-align: right;} /* balise elle-même */
    h1{ background-color: black}
`;
const h01 = document.createElement("h1");
h01.textContent = "Je vois des fantômes dans les ombres"
shadowOpen.append(style1, h01);

const style2 = document.createElement("style"); 
style2.textContent = /* CSS */
`
    :host{text-align: center;}
    h1{ text-shadow: 5px 5px 5px red}
`;
const h02 = document.createElement("h1");
h02.textContent = "Mon ombre cache un fantôme"
shadowClose.append(style2, h02);
/*
    Si je tente de sélectionenr tous les H1, seul celui du DOM principal sera sélectionné.

    Pour sélectionenr un élément du shadowDOM, il me faudra directement faire la recherche dans celui-ci:
*/
const hx = document.querySelectorAll("h1");
console.log(hx, hx.length);   // on obtient qu'un seul élément, le premier car les autres sont en shadowDOM

const hx1 = shadowOpen.querySelector("h1"); // afin de trouver le 2eme h1 qui est en shadowopen
const hx2 = op.shadowRoot.querySelector("h1"); // on sélectionne la même chose, qu'au dessus mais d'une façon différente, on sélectionne la div puis shadow root puis h1
console.log(hx1, hx2, hx1 === hx2);

const hx3 = shadowClose.querySelector("h1"); // on obtient notre 3eme h1 qui est en shadow close
const hx4 = cl.shadowRoot?.querySelector("h1"); // ici on cherche et si trouve pas nous renvoie undefined, on obtient donc undefined car ne trouve pas notre shadowClose
console.log(hx3, hx4, hx3 === hx4);

/* Maintenant, lions le custom Element et le shadow dom */
import SuperBalise from "./SuperBalise.js";