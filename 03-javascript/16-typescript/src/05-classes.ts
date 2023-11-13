"use strict"

class Truc {
    /* 
        A la différence de JS, TS utilise des mots clefs pour préciser si une propriété est publique ou privée.
        TS ajotue aussi les propriétés "protected" qui sont entre le "private" et le "public".

        ! ATTENTION: les propriétés "private" ne sont pas traduite en JS.
    */
    public prenom = "Maurice";
    protected nom = "Dupont";
    private age = 54;
}
const t = new Truc();
t.prenom;
/* Les champs protected et private ne sont pas accessible à l"extérieur de la classe */
// t.age 
// t.nom

class Machin extends Truc {
    constructor() {
        super(); // On appelle la méthode constructeur de la class parente (Truc)
        this.prenom;
        this.nom;
        // Les propriétés et méthodes "protected" sont hérité à la différence des "private"
        //this.age; ne fonctionne pas 
        document.body.addEventListener("click", this.faireUnTruc);
        // this.faireUnTruc.bind(document.body)();
        // this.faireUnTruc();
    }
    // faireUnTruc(this: Object) {
    //     console.log(this);
    /* 
        Dans certains cas, comme celui du "addEventListener", "this" peut changer de valeur et ne plus correspondre à l'objet.
        On peut donc le préciser à typescript en indiquant entre les parenthèses, le nouveau type de "this".
    */
    faireUnTruc(this: HTMLElement) {
        console.log(this);
    }
}
// Les generics sont utilisable sur une classe : 
class Collection <T> {  // T est le type
    /* 
        En déclarant l'accesseur d'une propriété directement dans les arguments du constructor.
        Cela indique à typescript que l'on veut sauvegarder cet argument en tant que propriété de notre classe 
    */
    constructor(private items: T[]){}
    // *  équivalent à :
    /* private items : T[];
    constructor(items: T[]) {
        this.items = items 
    } */
    addOne(arg: T): this {
        this.items.push(arg); 
        return this;
    }
    addMore(arg: T[]): this {
        this.items.push(...arg); 
        return this;
    }
}
const c = new Collection([5, 3, 9, 0]);
// const c = new Collection([5, 3, 9, "0"]);
c.addOne(32);
const c2 = new Collection(["truc", "test"]);
c2.addOne("coucou").addMore(["abc", "def"]).addOne("fin"); // addOne retourne c2, addmore retourne c2 ... car retourne this comme sa on peut chaîner comme ici

// let bidule: [string] = ["test", "coucou"] pas bon comme attend 2 string
let bidule: [string, string] = ["test", "coucou"]

/* 
    petite astuce JS : 

    Lorsqu'une méthode n'a rien à retourner, on peut faire retourner "this pour pouvoir enchaîner les méthodes ocmme jsute au dessus"
*/
class Triangle {
    c1 = 5;
    c2 = 8 
    c3 = 2;
}
class Rectangle {
    c1 = 12;
    c2 = 20;
}
function getC1(arg:Rectangle) {
    return arg.c1;
}
getC1(new Rectangle());
// getC1(newDate())
getC1(new Triangle());
/* 
    Lorsqu'on indique à TS qu'un argument est d'une classe particulière.
    Il ne vérifiera pas le nom de la classe mais si l'objet contient les mêmes propriétés.
    Ici, "Rectangle" est un objet contenant les propriétés "c1" et "c2".
    Alors il accepte un "Triangle" qui a aussi ces propriétés.
*/

abstract class Polygone {
    sides: {[key:string]: number}={}; // objet qui peut avoir autant de propriétés qu'on veut qui sont des "string" est qui retourne un nombre qui est un objet
    abstract surface(): number; // les classes abstract servent qu'à être hérité
    countSides() {
        return Object.keys(this.sides).length;  // retourne la taille de mon objet sides
    }
}
/* 
    Les classes abstraites ne peuvent pas être instanciées.
    Elles ont pour rôle d'être hérité uniquement.
*/
// new Polygone(); ne fonctionne pas 
class Carre extends Polygone {
    constructor(c: number) {
        super();
        this.sides.c = c;
    }
    /* 
        Les méthodes abstraites que l'on retrouve dans les classes abstraites obligent à intégrer une méthode de même nom et ayant les mêmes propriétés aux classes qui en héritent.
        Le corps de la fonction peut changer d'une classe à l'autre.
    */
    surface(): number {
        return this.sides.c**2; // puissance 2
    }
}
const ca = new Carre(5);
console.log(ca.surface());
console.log(ca.countSides());

