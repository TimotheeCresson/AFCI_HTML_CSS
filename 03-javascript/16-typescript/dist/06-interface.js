"use strict";
;
;
document.chaussette;
// Pour utiliser une interface, je dois utiliser le mot clef "implements"
class Point3D {
    // Je suis obligé d'implémenter toutes les propriétés et méthodes que défini "Point"
    x = 0;
    y = 0;
    z = 0;
    get() { return this.x; } // obliger d'avoir un get
}
// Ma fonction attend une interface "Point" en argument
function show(p) { } // on dit que l'interface doit être un point 
// Je lui donne une classe "Point3D" qui respecte toutes les règles de l'interface "Point"
show(new Point3D());
