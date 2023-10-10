"use strict"
/*
    Les REGEX ou expressions régulières permettent la recherche dans un string de caractères.

    Une regex commence et se termine par un "/" (ou un flag, voir plus bas dans le cours)
    un regex s'écrit tout collé sans espace car un espace a une signification que nous allons voir plus tard
*/
const r1 = /ou/;
const r2 = /[ou]/;
/*
    En javascript, il existe plusieurs fonctions qui peuvent utiliser les regex.
    la première que l'on va voir est "regex.test(string)" qui retourne un boolean selon si la regex a été trouvé dans le string.
*/
// r1 recherche la présence de "ou" dans le string
console.log(r1, r1.test("Bonjour"), r1.test("Salut")); // on obtient true false (on obtient true pour le premier car il recherche ou dans le premier et dans bonjour il y a ou mais pas dans le 2e mot)
// r2 recherche la présence de "o" ou "u" dans le string (dans bonjour il y a o et u et dans salut (u) donc true true)
console.log(r2, r2.test("Bonjour"), r2.test("Salut"));
// Les regex sont sensible au majuscule donc si on a mis un regex avec un O majuscule et que le mot est en minuscule il retournera false même si un o est présent dans le mot.

// r3 recherche un string qui commence par "ou" donc retourne false true
const r3 = /^ou/;
console.log(r3, r3.test("Bonjour"), r3.test("outre"));

// r54 recherche un string qui termine par "ou" donc false true
const r4 = /ou$/; 
console.log(r4, r4.test("Bonjour"), r4.test("mou"));


// r5 recherche la présence de "ou" ou "oi" donc true true
const r5 = /ou|oi/;
console.log(r5, r5.test("Bonjour"), r5.test("Bonsoir"));

// r6 recherche la présence d'une lettre minuscule comprise entre a et z donc true false ( on peut faire /[a-f]/ pas obliger jusqu'à z)
const r6 = /[a-z]/;
console.log(r6, r6.test("Bonjour"), r5.test("0987654321"));

// r7 recherche la "non-présence" de lettre minuscule de "a" à "z" (une lettre majuscule n'importe où dans un mot suffit à retourner true), ici on obtient donc false true
const r7 = /[^a-z]/;
console.log(r7, r7.test("bonjour"), r7.test("0987654321"));


// r8 recherche la présence ou non de "ou" (utilisé dans un code multiple où on dit que ca doit contenir ceci puis peut être cela avec cette formule...), ici on a donc true true 
const r8 = /(ou)?/;
console.log(r8, r8.test("Bonjour"), r8.test("pizza"));


// r9 recherche la présence de "ou" une fois ou plus( peut être utilisé comme  /^co+ol)/ donc les mot col et cool sont true car avec le + on peut avoir plusieur o ou un seul)  ici on a true false si on met le + après une lettre (exemple: a+et), seul le a peut être présent plus d'une fois, si on a (et)+  , on peut avoir plusieur et mais pas plusieurs t et e séparé
const r9 = /(ou)+/;
console.log(r9, r9.test("Bonjour"), r9.test("pizza"));

// r10 recherche la présence de "ou" autant de fois qu'on le veut ou pas du tout donc ici on a true true 
const r10 = /(ou)*/;
console.log(r10, r10.test("Bonjour"), r10.test("pizza"));

// r11 recherche la présence de "cou" 2 fois d'affilé soit 2 fois collé, ici on obtient donc false true false
const r11 = /(cou){2}/;
console.log(r11, r11.test("coup"), r11.test("coucou"), r11.test("couaicou"));


// r12 recherche la présence d'un string qui commence et termine par "cou" apparaissant entre 2 et 4 fois soit ici true false
const r12 = /^(cou){2,4}$/;
console.log(r12, r12.test("coucoucou"), r12.test("coucoucoucoucou"));


// r13 recherche la présence d'un string qui commence et termine par "cou" apparaissant entre 2 et autant de fois que l'on veut soit ici true true
const r13 = /^(cou){2,}$/;
console.log(r13, r13.test("coucoucou"), r13.test("coucoucoucoucoucou"));



// r14 recherche la présence de "^" dans le string (le caractère suivant "\" sera échapé, il perdra son sens premier pour la regex), on obtient ici true false
const r14 = /\^/;
console.log(r14, r14.test("^true^"), r14.test("Bonjour"));



// r15 recherche la présence d'un espace dans le string (un "\" devant un caractère sans signification, peut lui en donner un), on a donc true false
/*const r15 = /\ /    même signification que la ligne du dessous */
const r15 = /\s/;
console.log(r15, r15.test("Hello World"), r15.test("Bonjour"));



// r13 recherche la présence d'un chiffre dans le string (équivalent à [0-9]), ici on a true false
const r16 = /\d/;
console.log(r16, r16.test("Bonjour 8 fois"), r16.test("Bonjour à tous"));



// r13 recherche la présence de "ou" ou "oi" suivi de n'importe quel nombre de caractères, suivi du même résultat que la 1ère parenthèse soit ici true false true
const r17 = /(ou|oi).*\1/;
console.log(r17, r17.test("Bonjour à tous"), r17.test("Bonsoir à tous"), r17.test("Bonsoir tant de fois"));


//? ------------------------------------------ Flags ---------------------------------------------------
/*
    Les flags sont des caractères qui se placent après la fin de la regex.
    Ils viennent lui donner de nouvelles capacités.

    On va les tester avec la méthode "string.match(regex)" qui retourne un tableau contenant les résultats de la regex
*/
const phrase = "J'aime la pizza, les cannelés et les okonomiyaki";
console.log(phrase.match(/pizza/));

// Par défaut, la regex s'arrête au 1er résultat trouvé :
console.log(phrase.match(/les/));

// les flag "g" indiquera à la regex de rechercher de façon global et donc de ne pas s'arrêter au 1er résultat. (on obtient ici les 2 "les")
console.log(phrase.match(/les/g));


const phrase2 = "Vive les regex et vive javascript !";
// par défaut, une regex est sensible à la casse (il y a une majuscule sur le premier Vive)
console.log(phrase2.match(/vive/g));

// Avec le flag "i", la regex va ignorer la casse.
console.log(phrase2.match(/vive/gi));


const phrase3 = `1er : Maurice
2ème : Paul
3ème : Charlie`;
// Le string commence par un chiffre, il nous est bien retourné, mais les sauts à la ligne ne sont ps de nouveaux strings (on obtient donc "1")
console.log(phrase3.match(/^\d/g));

// avec le flag "m", chaque saut à la ligne est considéré comme une nouvelle phrase à traiter (ici on veut toute la phrase donc on met "gm"), on obtient donc 1, 2 et 3
console.log(phrase3.match(/^\d/gm));

// Cela fonctionne aussi avec les fin de ligne: (on obtient Maurice, Paul et Charlie)
console.log(phrase3.match(/(\w+)$/gm));

// \w tient pour "word" (attention, il ne prend pas en compte les accents)

// Chaque saut à la ligne mettant fin à la phrase, il ne trouve rien ici car il n'y a pas résultat de 1 à 3
console.log(phrase3.match(/1.+3/gm));

// le flag "s" permet de prendre en compte les "saut à la ligne" dans la recherche
console.log(phrase3.match(/1.+3/gms));

//? ----------------------------- Autres fonctions et bonus ----------------------------

// Les lettres accentués sont des caractères à part de l'alphabet:
console.log(/^[a-z]+$/.test("paul"), /^[a-z]+$/.test("élodie"));

// Si je veux prendre en compte les lettres accentués... pas trop le choix :
console.log(/^[a-zàéèûùâêï]+$/i.test("Élodie"));    // le i annule la classe et on peut donc considére les majuscules

/*
    Il existe d'autres fonctions qui acceptent les regex comme :
        string.replace(string|regex, string);

    Qui viendra remplacer dans le premier string, ce qui est trouvé par la regex (ou le string) par le dernier string
*/
console.log(phrase.replace("pizza", "salade"));    // on remplace le mot pizza par le mot salade 
console.log(phrase.replace(/pizza/, "salade"));

// L'avantage de la regex, c'est qu'elle pourra être plus versatile qu'un string 
console.log(phrase.replace(/pizza|okonomiyaki|cannelés/gi, "salade")); // on a remplacé chaque mot par salade
console.log(phrase2.replace(/regex|javascript/gi, "******"));

// "$&" permet de ne pas remplacer mais seulement d'ajouter :
console.log(phrase2.replace(/javascript/gi, "CSS et $& et PHP")); // on obtient CSS et javascript et PHP


/*
    Dans la table des caractères "unicode" entre les majuscules et les minuscules se trouvent des caractères spéciaux
    Ce test retourne donc true 
*/
console.log(/[A-z]/.test("_"));
// On écrira donc plus habituellement : 
console.log(/[A-Za-z]/.test("_")); // Ici on obtient false