"use strict"
const header = document.querySelector("header")
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
                data.members.forEach(heroesName => {
                    const option = document.createElement("option");
                    option.value = heroesName.name;
                    option.textContent = heroesName.name 
                    heroes.append(option);
                    heroes.removeAttribute("disabled");
                    console.log(option);

                    


                    option.addEventListener('click', optionMembers)
                    function optionMembers() {
                        const card = document.createElement("div");
                        header.append(card);
                        const inCard = document.createElement("ul")
                        card.append(inCard);
                        const liCard = document.createElement("li")
                        inCard.append(liCard);
                        liCard.innerHTML +=`${data.members}`
                        
                    }
                });
            })
            .catch(error=>console.error(error))
        }
        else {
            console.error(response.statusText);
        }
}

heroes.addEventListener("change", () => {
                const selectedHeroes = Array.from(heroes.selectedOptions, option => option.value);
                displayHeroCards(selectedHeroes, data.members);})



















/*heroesSelect.addEventListener("change", () => {
                const selectedHeroes = Array.from(heroesSelect.selectedOptions, option => option.value);
                displayHeroCards(selectedHeroes, data.members);
            });
        })
        .catch(error => console.error("Une erreur s'est produite lors de la requête fetch : " + error));

    // Fonction pour afficher les cartes des héros sélectionnés sous forme de liste
    function displayHeroCards(selectedHeroes, allHeroes) {
        heroInfoList.innerHTML = "";

        selectedHeroes.forEach(heroName => {
            const selectedHero = allHeroes.find(hero => hero.name === heroName);

            if (selectedHero) {
                const heroItem = document.createElement("li");
                heroItem.innerHTML = `
                    <h2>${selectedHero.name}</h2>
                    <p>Âge : ${selectedHero.age}</p>
                    <p>Identité secrète : ${selectedHero.secretIdentity}</p>
                    <p>Pouvoirs : ${selectedHero.powers.join(", ")}</p>
                `;
                heroInfoList.appendChild(heroItem);
            }
        });
        */