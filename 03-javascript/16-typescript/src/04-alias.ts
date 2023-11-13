"use strict"
/*
    Un développeur n'aime pas se répéter.
    Pour éviter de devoir retaper des types long, 
    TS permet de créer ses propres types.
*/
// let f: {nom: string, couleur: string};
// let AF: {nom: string, couleur: string}[];    la ligne du dessus est la même que celle-ci plus simplement effectué

//  ----------------------- Les Alias ------------------------
type Fruit = {nom: string, couleur: string};
/*
    Avec le mot clef "type", je peux déclarer un type et l'utiliser sur mes variables.
*/
let f: Fruit = {nom: "Pomme", couleur: "Rouge"};
let aF: Fruit[] = [f, {nom: "Banane", couleur: "Jaune"}];  // f est la variable du dessus

// aF[0].couleur
/* 
    Je peux déclarer un type et utiliser ce type pour déclarer un second type.
    Ici, je déclare le type "Age" et je l'utilise dans la déclaration du type "Person".
*/
type Age = number|string;
type Person = {nom: string, age: Age};

let p: Person = {nom:"Maurice", age:54};
/*
    Ici, j'indique que le type "Name" doit être de même type que la propriété "nom" du tupe "Fruit"
*/
type Name = Fruit["nom"]; // Le nom dans fruit doit être un string donc c'est un string

let n: Name = "George"
/* 
    keyof permet de créer un type qui n'accepte que les propriétés d'un objet sous forme de string.
    Ici, mon type "Full" n'accepte que les strings "age" et "nom"
*/
type Full = keyof Person;

let fp: Full = "age"; // on a le droit de même que le nom des propriétés
fp = "nom";

/* document.body.textContent = `${fp} : ${p[fp]}` exemple pour le dessus */
/* 
    La propriété typeof permet de créer un type à partir d'un objet déjà existant.
*/
let objet = {vieux: true, prenom: "Maurice", age: 78};
type Item = typeof objet;

let objet2: Item = {vieux: false, prenom: "Pierre", age: 23};

const test = "Bonjour"; // Comme c'est une constante et qu'il ne peut pas bouger, ici il est de type "Bonjour"

// ------------------------ GENERICS ---------------------------

function useless(arg:any): any {
    return arg;
}
let machine = useless("Salut");
/* 
    Par défaut, dans l'exemple ci-dessus, notre fonction ne fait que retourné son argument sans rien faire.
    Mais typescript est incapable de faire le lien entre le type de l'argument et celui de la valeur de retour.
    Ma variable vaut donc "any".
    
    Avec les Generics comme <Type1>(arg:Type1): Type1, il est possible d'indiquer à notre fonction qu'elle va recevoir un type "nommé" et que celui-ci sera le même que la valeur de retour.
    Ici, mes variables sont du type de l'argument donné à la fonction.
    
    Il est possible de limiter les types possibles avec : 
        *  <NomDuType = number|string>
*/
function useful<Type1>(arg:Type1): Type1 {  // dans ma fonction il va avoir un type, celui ci est le type de l'argument et tu me retourne le même type
    return arg;
}
let machine2 = useful("Bonjour");
let machine3 = useful(54);
/* 
    Ici, j'indique que l'argument est un tableau du type "nommé" et que la valeur de retour est non plus un tableau mais uniquement le type contenu dans ce tableau.
*/
function lastOf<TypeArr>(arr:TypeArr[]): TypeArr{
    return arr[arr.length-1];
}
let last = lastOf([34, 23, 91]); // de type number
let last2 = lastOf(["34", "23", "91"]); // de type string
let last3 = lastOf(["34", 23 , "91"]); // ici c'est de type number|string

/* 
    Ici, ma fonction accepte n'importe quel argument, tant que cet argument possède la propriété "length" qui est un "number".
*/
function logSize<TypeL extends {length:number}>(arg:TypeL): TypeL {
    console.log(arg.length);
    return arg  // comme on a demandé une valeur de retour de TypeL
}

let s1 = logSize([45]);
let s2 = logSize("Chaussette");
// let s3 = logSize(42); fonctionne pas
let s4 = logSize({nom: "Maurice", length: 345});