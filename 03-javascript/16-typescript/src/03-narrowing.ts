"use strict";
/*
    Le narrowing en Typescript est le fait de supprimer des possibilités de types pour nos variables
*/
function birthday(age:string|number): string { // on doit forcément le retrouné en string
    // age peut être un string, donc l'incrémentation est une erreur 
    // age++ ne fonctionne pas 
    if (typeof age === "number") {
        age++
    }
    else {
        age = parseInt(age)+1 // on le met en string grâce au +1
    }
    /* 
        Dans le "if" age devient forcément un type nombre
        Dans le "else" age devient forcément un type string
    */
    return age+ "ans" // return obligatoire
}

function chaussette(droite:string|boolean, gauche: string|number) {
    if (droite === gauche) { // doivent être strictement égal
        console.log("vous avez la paire !", droite, gauche); // ici droite et gauche sont des strings pour qu'il soit égal
        /* 
            Pour entrer dans la condition, droite et gauche doivent être égales
            La seule possibilité, c'est que se soit tous les 2 de strings
        */
    }
}

function planning(date:Date|string, days: string[]|number) {
    //date.getDate() fonctionne pas 
    if (date instanceof Date) {
        date.getDate();
    }
    // days++ ne fonctionne pas 
    if (!Array.isArray(days)) { // si days n'est pas un tableau, is Array est une méthode de la classe Array
        days++
    }
}

function clavier(e:KeyboardEvent|HTMLElement) {
    if (typeof e === "number") {
        console.log(e);  
        /*
            Ici "e" est de type "never"
            Cela signifie, que selon "typescript", il est impossible d'arriver ici, les conditions ne sont pas bonne
        */
    }
}

/* 
    Si j'indique qu'une fonction ayant pour rôle de faire du narrowing, retourne un boolean.
    La logique humaine permet de comprendre la connexion entre ce boolean et le rôle de la fonction.
    Mais pour typescript, il comprend juste que la fonction retourne un boolean sans savoir son rôle

    Pour indiquer à typescript le rôle de ce boolean, nous pouvons remplacer le type de retour "argument is Type"
    Ici, on a mit "a is Date" pour lui indiquer que le boolean servira à préciser si l'argument est une Date.
*/


// function isDate(a: any): boolean {
    function isDate(a: any): a is Date {
    return a instanceof Date;  // demande si c'est bien le date, retourne moi un boolean en me disant si c'est date ou pas 
}
function check(a:Date|HTMLElement) {
    if(isDate(a)) {
        console.log(a);
    }
}

