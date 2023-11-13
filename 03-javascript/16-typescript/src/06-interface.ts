"use strict"
/* 
    Les interfaces sont à la jonction entre les types et les classes abstraites.
    A la différence des classes abstraites, l'interface ne contiendra que des déclarations, sans aucune définition ou valeur.
    A la différence des types, l'interface sera réservé aux objets et pourra être redéfini (fusionné)
*/
type Chaussette = string;
// Je ne peux pas le changer:
// type Chaussette = number; 

interface Point {
    x:number;
    y: number;
    get(): number;
}
// Pas d'erreur, les 2 ont fusionnés : 
interface Point {z: number};
// Document // on peut ctrl clic dessus 

// Je peux très bien changer une interface déjà définie dans vscode :
interface Document{chaussette:string};
document.chaussette;

// Pour utiliser une interface, je dois utiliser le mot clef "implements"
class Point3D implements Point {
    // Je suis obligé d'implémenter toutes les propriétés et méthodes que défini "Point"
    x=0;
    y=0;
    z=0;
    get() {return this.x;} // obliger d'avoir un get
}
// Ma fonction attend une interface "Point" en argument
function show(p:Point) {} // on dit que l'interface doit être un point 
// Je lui donne une classe "Point3D" qui respecte toutes les règles de l'interface "Point"
show(new Point3D())