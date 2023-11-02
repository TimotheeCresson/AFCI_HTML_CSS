"use strict"
import P from "./Person.js";
P.setAge = 18; // Si on met P.setAge = "truc"; cela nous retourne l'age = 0 par défaut
P.nom = "dupONT";
P.prenom ="eRiC";
console.log(P.fullName);
P.salutation();
P.anniversaire();
console.log(P);