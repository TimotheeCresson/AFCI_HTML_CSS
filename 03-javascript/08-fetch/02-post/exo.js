"use strict"
const url = "https://randomuser.me/api/";

const button = document.querySelector('.btn');
const result = document.querySelector(".result");
const age = document.querySelector(".age");
/*const body =document.querySelector("body");*/


button.addEventListener("click", getColor);

function getColor(e) {
    e.preventDefault()
    fetch(url).then(checkedResponse)

    function checkedResponse(response) {
        if (response.ok) {
            response.json().then(data => {
                console.log(data);
                console.log(data.results[0].picture.large);
                result.innerHTML += `<img src="${data.results[0].picture.large}"/>`
                /*const age = document.createElement("div")
                body.append(age)*/
                age.textContent += `Age =${data.results[0].registered.age}`
                age.style.textAlign ="center"
            })
        }
    }
}

