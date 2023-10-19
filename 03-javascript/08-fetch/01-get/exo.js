"use strict"

const url = "./hero.json";
const heroes = document.querySelector("#heroes")
/*
Fetch est toujours en asynchrone.
Par défaut, il est en GET
Donc pour une requête asynchrone en GET, il suffit de lui donner l'URL en paramètre.
Il pourra prendre un second paramètre, en cas d'option supplémentaire.

fetch est suivi d'un ".then()" qui contiendra la fonction callback à lancé une fois la requête terminé*/

fetch(url).then(members);
console.log(members);
function members(response) {
    console.log(response);
    if (response.ok) {
        response.json()
            .then(data=>{
                data.members.forEach(members => {
                    const option = document.createElement("option");
                    option.value = members.name;
                    option.textContent = members.name 
                    heroes.appendChild(option);
                    heroes.removeAttribute("disabled");
                    console.log(option);
                });
                
            })
            .catch(error=>console.error(error))
        }
        else {
            console.error(response.statusText);
        }
}

