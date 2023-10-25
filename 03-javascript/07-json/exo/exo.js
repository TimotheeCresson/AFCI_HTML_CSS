"use strict"
const btn = document.querySelector("#btn");
const text = document.querySelector("#todoList");
const List = document.querySelector(".List");
const remove = document.querySelector("li")

const all = []

btn.addEventListener("click", ajouteListe)
function ajouteListe(e){
    e.preventDefault()
    const ajoutTexte = text.value
    if (ajoutTexte){
            const taskList = document.createElement("li")
            taskList.innerHTML =  `${ajoutTexte} <button class=deletebutton> x </button>` ;
            List.append(taskList);
            text.value = ""; 

            taskList.addEventListener('click', function() {
                taskList.classList.toggle('done');
            });


            const deleteButton = document.querySelectorAll(".deletebutton")
            deleteButton.forEach(button =>{
                button.onclick = () => {
                    button.parentElement.remove()
            }});
        };

        all.push(ajoutTexte)
        const tabAll = JSON.stringify(all)
        localStorage.setItem("ajoutTexte", tabAll)
};


const tabAllGet = localStorage.getItem ("ajoutTexte")
if (tabAllGet) {
    const saveTab = JSON.parse(tabAllGet)
    console.log(saveTab, typeof saveTab);
    saveTab.forEach (save => {
        console.log(save);
        
        
    })
}





