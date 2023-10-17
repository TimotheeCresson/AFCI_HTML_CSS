"use strict"
/*
    JSON signifie Javascript Object Notation 
    Il a principalement 2 rôles.
    le 1er est de stocker des données complexes tel que des objets ou des tableaux sous forme de string.
    Le snd est de pouvoir partager des données entre plusieurs langages à la syntaxe différente.
    On pourra aussi créer des fichiers JSON qui seront donc lisible par n'importe lequel de ces langages.

    Ici on va récupérer les données d'un formulaire, les stocker sous forme de json en localStorage, et les récupérer.
*/
const form = document.querySelector('form');

form.addEventListener("submit", saveData);

function saveData(e) {
    e.preventDefault(); // évite qu'il y ai un refresh de page
    //Je crée un objet FormData qui contiendra les données du formulaire donné en paramètre
    const data = new FormData(form);
    // console.log(data);
    const user = {};
    data.forEach((value, name)=>{
        //console.log(value, name);
        // Je rempli mon objet vide avec les données du formulaire
        user[name] = value;
    });
    // J'obtiens un objet contenant toutes les informations de mon formulaire.
    console.log(user);
    showUser(user);
    // Je transforme mon objet en donnée JSON (sous forme de string)
    const strUser = JSON.stringify(user);
    console.log(strUser, typeof strUser);
    // mon JSON étant un string, je peux le sauvegarder en localStorage
    localStorage.setItem("user", strUser)
}
/**
 * Affiche le prénom et l'âge de l'utilisateur dans le h1
 * @param {object} u objet contenant une propriété prénom et une propriété âge 
 */



function showUser(u) {
    const h1 = document.querySelector('h1');
    h1.textContent = `Je suis ${u.prenom}, ${u.age} ans !`
}

const userString = localStorage.getItem("user");
if (userString){
    console.log(userString, typeof userString);
    /*
        L'objet JSON n'a que 2 méthodes :
            - parse() : elle convertit une chaine de caractère json en un objet javascript
            - stringify : convertit un objet JS en chaîne de caractère
    */
    const user = JSON.parse(userString); // parse permet de transformer le string en donnée
    console.log(user, typeof user);
    showUser(user)
}