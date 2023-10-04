"use strict";
/*
    Le rôle d'une fonction est de répéter un code ou de découper un code en plusieurs parti et de pouvoir les récupérer avec les fonctions.
    Pour déclarer une fonction, on utilisera le mot clef "function", suivi du nom de la fonction., des parenthèses qui accueillerons de possibles arguments, puis enfin des accolades contenant le corps de la fonction.

    Une fonction simplement déclaré, ne lancera aucun code. Pour lancer une fonction, il faut l'appeler. Pour cela, on écrira son nom, suivi de parenthèse.

    Js va lire une première fois le code, et déclarer toutes les fonctions, puis relire le code et effectuer les actions demandées.
    C'est à dire que l'on peut appeler une fonction, avant ou après sa déclaration.

    On verra souvent toutes les fonctions déclarées aux mêmes endroits, séparé de la logique du code lui même.
*/
salut();        // On peut déclarer la fonction avant ou après avoir appelé celle-ci
function salut (){
    console.log("Salut : Salut tout le monde");    // On appelle la fonction
}
salut();
/* 
    Il existe d'autres façons de déclarer une fonction, à noter que toutes ces autres façons, ne peuvent être appelés qu'après leurs déclarations.

    On peut ranger dans une (variable, un tableau ou un objet) une fonction "anonyme".
    C'est à dire une fonction qui n'a pas de nom.
    Pour l'appeler, on utilisera la variable ou l'objet qui la contient.
*/
const salut2 = function name() {
    console.log("salut2: Bonjour les gens !");
}
salut2();

/*
    Plutôt qu'une fonction anonyme, on pourra utiliser une fonction fléchée.
    C'est à dire une fonction dont le mot clef "function" disparaît, pour laisser place à une "=>" entre parenthèses les accolades.
*/
/*const salut3 = {
    maFonction: ()=>{
        console.log("salut3: Coucou le peuple !");
    }
}
salut3.maFonction();*/
const salut3 = ()=>{
    console.log("salut3: Coucou le peuple !");
}
salut3();
/*
    Si la fonction fléchée n'a qu'une seule instruction à faire, on peut se passer des accolades.
    (Cela implique un return automatique, mais on verra cela plus tard)
*/
const salut4 = ()=>console.log("Salut4: Hello World !");
salut4();

//? ------------------------------ Les paramètres (ou arguments)----------------------------
/*
    Lorsque l'on place un argument (une variable) dans la déclaration d'une fonction (entre parenthèses) lors de l'appel de celle-ci, on pourra placer entre ses parenthèses, des données qui seront transmise à la fonction.
*/
function bonsoir(nom) {
    if (nom === undefined) 
        console.error("Donne moi un fichu argument !")
    else
        console.log("Bonsoir " + nom);
}
// Si on ne met aucune donnée, l'argument sera "undefined"
bonsoir();          // ici c'est undefined donc donne le message donne moi un fichu argument
// Ici "Thomas" est transmis à l'argument "nom"
bonsoir("Thomas");
// Si trop d'argument lui sont donnés, les supplémentaires seront ignorés (ici il n'y a que maurice qui s'affiche)
bonsoir("Maurice", "Pierre");
/*
    Chaque nouvel argument est séparé d'une virgule, que ce soit pour l'appel ou la déclaration.
    Le premier paramètre de l'appel, ira au premier de la déclaration, le second au second et ainsi de suite.
*/
function bonneNuit(nom1, nom2) {
    console.log(`%cBonne nuit ${nom1} et ${nom2}`, "background: blue; color: yellow;");
}
bonneNuit("Patrick", "Raphael") // Le nom1 à un bien été sur Patrick et le nom2 sur Raphaël

/*
    On peut indiquer une valeur par défaut à un ou plusieurs paramètres.
    Pour cela, on fera suivre dans la déclaration, son nom d'un "=" puis de sa valeur par défaut.

    Lors de l'appel, si aucune valeur n'est fourni, plutôt que "undefined", il prendra sa valeur par défaut.
    Si une valeur est fourni, il oubliera la valeur par défaut.
*/
function goodBye(nom1, nom2 = "les autres") {
    console.log("Good bye " +nom1 + " et " + nom2);
}
goodBye("Kevin");   // Ici Kevin étant un mot seul, le mot Kevin a prit le nom1 et par défaut le nom2 a prit "les autres"
goodBye("Marie", "Alan"); // Ici, nous avons 2 noms, donc Marie a prit le nom1 et Alan le nom2 effaçant "les autres" et mettant Alan à la place

/*
    Parfois on a besoin qu'une fonction prenne un nombre infini de paramètre. (C'est le cas du console.log())
    Pour cela, il suffit que le dernier paramètre de la fonction, soit précédé du "rest operator" qui est symbolisé par "..."
    Cela va créer un tableau contenant tous les paramètres supplémentaires.
*/
console.log(1,2,3,4,5,6,7,8,9,10);
function goodMorning(...noms) {
    /*console.log(noms);*/
    /*console.log("Good Morning " + noms.toString())*/; // Ici on transforme en string (ce n'est plus un tableau) concaténation
   // console.log("Good Morning " + noms);    // raccourci de la ligne du dessus car .tostring() est géré par défaut
    // Si on souhaite autre chose que des "," comme séparateur (ici des "et"):
    console.log("Good Morning " + noms.join(" et "));
}
goodMorning("Pierre");
goodMorning("Pierre", "Ondine", "Giovanni") // Cela rend un tableau avec les prénoms

//? ------------------------------ Mettre fin à une fonction, renvoyer une information ----------------------------

/*
    On peut avoir besoin de mettre fin à une fonction avant la fin de son code ou bien retourner une information que l'on pourra utiliser ailleurs.
    Ces 2 cas utilisent le même mot clef, qui est "return"
*/
function insulte(nom) {
    if (nom === undefined) {
        console.error("Donne moi un nom !");
        // return seul, mettra fin à la fonction sans autre effet
        return;
        // ce qui suit ne sera pas effectué
        console.log("test");
    }
    // Si le return est suivi d'une valeur, la fonction prendra fin en retournant cette valeur là où elle a été appelé 
    return nom + " Le Poltron !";
}
insulte();
// Aucun log, rien est affiché 
insulte("Charles");
// On place la valeur retourné par la fonction dans une variable qu'on log ensuite
let newName = insulte("Bob");
console.log(newName);
// On appelle directement la fonction dans le log 
console.log(insulte("Bill"), insulte());

/*
    Les fonctions fléchées avec une seule instruction (sans accolade) ont un "return" implicite.
    C'est à dire que cette seule instruction est retournée même sans le mot clef.
*/
const add = (a,b)=>a+b;
console.log(add(4,8), add('4', 8));
// Quand la fonction fléchée ne prend qu'un argument, les parenthèses sont optionnelles :
const square = a=>a*a;
console.log(square(5));

//? -------------------------- Fonction Callback -----------------------------
/*
    Certaines fonctions prennent en paramètre, non pas un string, number ou autre, mais une autre fonction.
    C'est ce qu'on appelle une fonction callback

    Un exemple que l'on a déjà pu voir, c'est "forEach"

    Lorsque l'on met une fonction en callback d'une autre, on se contente d'écrire son nom, sans parenthèse.
*/
const pr = ["Alice", "Ariel", "Mulan", "Belle"];
pr.forEach(bonsoir);  // Pour chaque élément du tableau, appelle la fonction "bonsoir"
// On peut aussi utiliser une fonction anonyme.
pr.forEach(function(p){     // p est l'argument permettant d'appeler chaque élément du tableau  
    console.log("Bienvenue " + p);
});
// ou une fonction fléché: 
pr.forEach(p=>console.log("Bonjour bonjour " + p));

/*
    On peut créer notre propre fonction utilisant un callback, simplement en utilisant un argument tel une fonction.
*/
function compliment(salutation, nom) {
    if(typeof salutation != "function") return;
    salutation (nom + " le magnifique");    //salutation prend l'argument bonsoir et nom "Greg"
}
compliment(bonsoir, "Greg"); // Bonsoir prend l'argument salutation et Greg l'argument nom
compliment(n=>console.log("Guten tag " + n), "Hanz"); // n est l'argument permettant d'appeler l'argument salutation

//? --------------------------- Fonctions récurcives --------------------------------
/*
    Une fonction récurcive est une fonction qui s'appelle elle même. 
    
    Cela va provoquer une boucle, faite attention de prévoir une condition de sortie.
*/
function countdown(x) {
    console.log(x--);
    if (x < 0)return; 
    countdown(x);
}
countdown(5);

/*
    Il est bon ton, de décrire ses fonctions avec de la JS DOC.
    Cela permet d'un coup d'oeil de retrouver l'utilité de la fonction, ainsi que les paramètres qu'elle doit prendre.

    Cela sera aussi visible au survol ou remplissage de la fonction :
*/
/**
 * Fonction qui retourne la présentation de la personne             Pour avoir ces paramètres il faut faire /**
 * @param {string} nom nom de la personne 
 * @param {number} age nom de la personne
 * @returns {string} phrase de présentation
 */
function presentation(nom, age) {
    return `Je suis ${nom} et j'ai ${age} ans`;
}
let p = presentation("Claude", 54);
console.log(p);