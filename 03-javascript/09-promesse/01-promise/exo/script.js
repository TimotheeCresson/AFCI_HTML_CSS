"use strict"

const a1 = [3, 12, 45, 4, 70];
const a2 = [3, "12", 45, 4, 70];



function tri(tableau) {
    return new Promise(function(resolve, reject){
        // Check if all elements in the array have the same type
            if (tableau.every((value, index, arr) => typeof value === typeof arr[0])) { // Ici on compare (value est par exemple 3 est un nombre, "12" est un string (ensuite ici l'index ne sert à rien) et ensuite arr est tout notre tableau donc ici type of value (on regarde tous les types de valeur (donc nombre ou string) et on le compare à la première valeur de notre tableau donc ici au tableau 2 on va comparer "12" à 3))
        
        // If all elements have the same type, sort the array
            tableau.sort(function (a, b) {
                return a - b;
              });
              resolve(tableau);
            }
            
        else { reject("Erreur, type imcompatible")
           
        }
    });
}

tri(a1).then(tableau=>console.log(tableau)).catch(e=>console.error(e));
tri(a2).then(tableau=>console.log(tableau)).catch(e=>console.error(e));

