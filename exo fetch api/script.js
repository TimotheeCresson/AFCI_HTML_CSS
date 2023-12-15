"use strict";
const body = document.querySelector('body')
const pokemon = document.querySelector("#pokemon")

fetch("https://pokeapi.co/api/v2/pokemon/").then
(reponse => {
    if(reponse.ok) {
            reponse.json().then(data => {
                console.log(data.results);
                data.results.forEach(pokemonName =>{
                    const option = document.createElement("option");
                    option.value = pokemonName.url;
                    option.textContent = pokemonName.name;
                    pokemon.append(option);

                option.addEventListener('click', pokemonDescription)
                
                function pokemonDescription() {
                    const selectedOption = pokemon.options[pokemon.selectedIndex];  //pokemonSelect.selectedIndex: This property returns the index of the currently selected option within the <select> element.
                    const pokemonUrl = selectedOption.value;
                    // console.log(selectedOption, pokemonUrl);

                    fetch(pokemonUrl).then(descriptionDetails => {
                        if (descriptionDetails.ok) {
                            descriptionDetails.json().then(pokemonDetails => {
                            const description = document.createElement("p");
                            description.textContent = `Height: ${pokemonDetails.height}, Weight: ${pokemonDetails.weight}`;
                            body.append(description);
                            })
                        }
                    })
                
                }
            })
        })
    }
})