"use strict"
const header = document.querySelector("header")
const url = "./hero.json";
const heroes = document.querySelector("#heroes")
let previousOption = null;
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
                data.members.forEach(heroesName => {
                
                    const option = document.createElement("option");
                    option.value = heroesName.name;
                    option.textContent = heroesName.name 
                    heroes.append(option);
                    heroes.removeAttribute("disabled");
                    console.log(option);
                    

                    
                    option.addEventListener('click', optionMembers)

                    function optionMembers() {
                        if (previousOption === option) {
                            if (header.contains(header.querySelector("div"))) {
                                header.removeChild(header.querySelector("div"));
                            }
                            previousOption = null;
                        } else {
                    
                    const card = document.createElement("div");
                    header.append(card);
                    const inCard = document.createElement("ul")
                    card.append(inCard);
                    /*
                     * for in permet de rechercher les données de heroesName est de les mettre sur mes li
                     */
                    
                    for(const li in heroesName){
                    const liCard = document.createElement("li")
                    inCard.style.border = "1px solid black"
                    inCard.style.width = "200px";
                    inCard.append(liCard);
                    console.log(heroesName.powers[0]);
                    liCard.innerHTML = `${[li]} : ${heroesName[li]}`
                    }
                    /**
                     * On sélectionne le dernier li et on crée un ol en dehors de la boucle afin à en créer qu'un seul 
                     * puis on crée une boucle for of afin de sélectionner chaque pouvoirs et dont la fonction à pour nom last
                     * enfin on crée des li qu'on met dans notre ol et nous mettons pour texte la fonction last contenant donc les pouvoirs
                     */
                    const lastLi = inCard.querySelector("li:last-child")
                    const olLast = document.createElement("ol")
                    lastLi.textContent = "powers :"
                    lastLi.append(olLast);
                    for(const last of heroesName.powers){
                        const liLast = document.createElement("li")
                        olLast.append(liLast)
                        liLast.textContent = last
                    }
                    previousOption = option; 
                    }}
                });
            })
            .catch(error=>console.error(error))
        }
        else {
            console.error(response.statusText);
        }
}