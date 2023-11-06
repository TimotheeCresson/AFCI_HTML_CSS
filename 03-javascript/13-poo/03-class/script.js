"use strict";

import H from "./Human.js"
//? ----------------- Class -------------------- 
const humain = new H("Maurice", "Dupont", 54);
console.log(H, humain);


//? ----------------- Static -------------------- 
// Je peux appeler ma propriété "static" sur ma classe mais pas sur l'objet
console.log(humain.categorie, H.categorie);  // ici sur humain on obtient undefined et sur H, mammifère
// Exemple :
console.log(Date.now());
/*const n = new Date(); // si on instancie notre objet date, cela ne fonctionne pas
console.log(n.now());*/  // cela ne fonctionne pas, c'est une méthode qui n'existe que sur la classe

H.description();
// humain.description();  étant dasn du static, cela ne fonctionne pas
//? ----------------- Private -------------------- 
// utiliser dans la classe elle même, nous n'obtenons pas les fonctionnalités internes
// Je ne peux pas accèder à mes propriétés privés :
console.log(humain.vivant); // nous l'obtenons car public
// console.log(humain.#name);   erreur car privée

humain.setPrenom = "Gunter"; 
// humain.#setAge = 32;   cela ne fonctionne pas car privée
humain.salutation();
humain.anniversaire();
//? ----------------- Heritage -------------------- 

import D from "./Dev.js";

const dev = new D("Fred", "Fontaine", 18, ["Javascript", "PHP"]);

dev.salutation();
dev.anniversaire(); // réécrie la méthode avec age + 1