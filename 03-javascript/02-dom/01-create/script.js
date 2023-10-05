"use strict";
//? ------------------ DOM --------------------------
/*
    Le DOM ou Document Objet Model est une réprésentation sous forme d'objet, de notre document HTML.

    La plupart des méthodes (fonctions) qui y sont liés passerons par l'objet "document".
*/
console.log(document);
console.dir(document); /* pour chrome */
/*
    La méthode "createElement()" de l'objet "document" permet de créer un objet représentant une balise HTML.
    Il prendra en paramètre, un string indiquant le nom de la balise à créer.
*/
const h = document.createElement("header");
console.log(h);
/*
    L'élément a été créé sous forme d'objet Javascript.
    Mais il n'est pas encore présent dans la page HTML.
*/
const m = document.createElement("main");
const f = document.createElement("footer");
/*
    Je peux modifier le contenu HTML de ma balise avec la propriété "innerHTML":
*/
h.innerHTML = "<h1>Super Site en JS</h1>";
f.innerHTML = /*html*/ `<ul><li>Menu 1</li><li>Menu 2</li><li>Menu 3</li></ul>` 
/* Grâce à l'extension es6-string, on peut mettre un commentaire comme ici "html" est ensuite mettre entre `` le reste pour que se soit affiché en couleur */
console.log(h,f);
/*
    Mes éléments sont bien rempli, mais ils n'apparaissent toujours pas dans ma page HTML.

    Pour cela, je vais avoir besoin de sélectionner le body :
*/
console.log(document.body);
/*
    Par défaut, le body est "null".
    Cela est dû au fait que le script est exécuté avant que la balise "body" soit lu.
    Pour corriger cela, 2 solutions :
        - déplacer la balise script en bas de page.
        - Ajouter l'attribut "defer" au script, qui lui demandera de lancer celui-ci, qu'une fois le HTML chargé complétement.

        Avant de travailler sur un élément HTML, cela peut être une bonne chose de vérifier qu'il existe :
*/
if(document.body){
    /*
        La méthode "append()" peut être utilisé sur n'importe quel élément HTML (non auto fermant).
        Elle prendra en argument, autant d'élément HTML (ou string), que souhaité.

        Elle ajoutera ces éléments à l'intérieur de l'élément HTML qui précède :
    */
   document.body.append(h,m,f);
   // Il existe aussi ".prepend()" pour ajouter au début.
}
for (let i = 0; i < 5; i++) {   // A chacune des boucle, il fait un p et vient y ajouter un lorem et soit *5
    const p = document.createElement("p");
    /*
        ".textcontent" permet d'insérer du texte dans un élément html.
        Mais à la différence de ".innerHTML", les balises présentes ne seront pas interprété.

        Cela peut être utile, si votre ajout dépend de l'entré d'un utilisateur.
    */
   p.textContent = "<strong>Lorem ipsum dolor </strong>, sit amet consectetur adipisicing elit. Distinctio incidunt consequatur maiores deserunt error culpa quos, quibusdam non sed ipsam quam dignissimos est commodi eius, tenetur dolore ullam earum quasi. sit amet consectetur adipisicing elit. Distinctio incidunt consequatur maiores deserunt error culpa quos, quibusdam non sed ipsam quam dignissimos est commodi eius, tenetur dolore ullam earum quasi. sit amet consectetur adipisicing elit. Distinctio incidunt consequatur maiores deserunt error culpa quos, quibusdam non sed ipsam quam dignissimos est commodi eius, tenetur dolore ullam earum quasi."
   /*
        ".appendChild()" a le même rôle que ".append()".
        Mais celui-ci ne peut prendre qu'un seul élément HTML, et pas de string.
        En général on utilise que .append mais on le voit car il est encore utilisé sur certain site
   */
   m.appendChild(p)         
}

// Exo (façon 1):
/*
const d = document.createElement("div");
d.innerHTML = "<h2>Santé!</h2><p>Mangez 5 fruits et légume par jour, les produits laitiers sont nos amis pour la vie, ne mangez ni trop gras, ni trop sucré, ni trop salé, l'absus d'alcool est dangereux pour la santé.</p><button> tchin tchin</button><button> Le gras c'est la vie!</button>";
document.body.append(d)
*/
/*// façon 2: mais cette version change tout le HTML donc ne pas faire comme cela
document.body.innerHTML += "<div><h2>Santé!</h2><p>Mangez 5 fruits et légume par jour, les produits laitiers sont nos amis pour la vie, ne mangez ni trop gras, ni trop sucré, ni trop salé, l'absus d'alcool est dangereux pour la santé.</p><button> tchin tchin</button><button> Le gras c'est la vie!</button></div>";*/

// façon 3 (meilleure façon car on peut modifier plus facilement les boutons):
const d = document.createElement("div");
d.innerHTML = /* html */`<h2>Santé!</h2><p>Mangez 5 fruits et légume par jour, les produits laitiers sont nos amis pour la vie, ne mangez ni trop gras, ni trop sucré, ni trop salé, l'absus d'alcool est dangereux pour la santé.</p>`;
document.body.append(d);

const btn1 = document.createElement("button"); /* Il faut mettre button et non bouton sinon ce n'est pas reconnu comme un bouton */
btn1.textContent = "Tchin Tchin";
const btn2 = document.createElement("button");
btn2.textContent = "Le gras c'est la vie";

d.append(btn1, btn2)  /* On ajoute à d soit la div les boutons 1 et 2 */
