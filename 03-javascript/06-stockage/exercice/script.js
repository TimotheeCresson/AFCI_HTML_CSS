"use strict"
const body = document.querySelector ("body");
const select = document.body.querySelector(".div #themeSelect");
const greenColor = document.querySelector(".greenTheme");
const orangeColor = document.querySelector(".orangeTheme");
const blueColor = document.querySelector(".blueTheme");
console.log(select);


console.log(greenColor);
/*
if(select) {
select.addEventListener("click", changeTheme )
}

function changeTheme() {
    if (greenColor.value == "green") {
        body.style.backgroundColor = "green"
    }
    else if (orangeColor.value == "orange") {
        body.style.backgroundColor = "orange"
    }
    else if (blueColor.value == "blue") {
        body.style.backgroundColor = "blue"
    }
    else 
    body.style.backgroundColor = "white"
}

*/


select.addEventListener("change", change );

function change() {
    let selection = select.value;
    switch (selection) {
        case "green":
            //document.documentElement.style.setProperty("--fond", "green");
            body.style.backgroundColor = "green"
            localStorage.setItem("theme", "green");
            break;
        case "orange":
            //document.documentElement.style.setProperty("--fond", "orange");
            body.style.backgroundColor = "orange"
            localStorage.setItem("theme", "orange");
            break;
        case "blue":
            //document.documentElement.style.setProperty("--fond", "blue");
            body.style.backgroundColor = "blue"
            localStorage.setItem("theme", "blue");
            break;
        default:
            //document.documentElement.style.setProperty("--fond", "white");
            body.style.backgroundColor = "white"
            localStorage.removeItem("theme");
    }
}
const theme = localStorage.getItem("theme");
if (theme){
    body.style.backgroundColor = theme
}





const button = document.querySelector(".button")
const Color = () => {
    const randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16).padStart(6, "0"); 
    console.log(randomColor);
    body.style.backgroundColor = "#" + randomColor;
    localStorage.setItem("random", `#${randomColor}` )
    localStorage.removeItem("theme");
}
const recupAlea = localStorage.getItem("random")
if (recupAlea) {
    body.style.backgroundColor = recupAlea
}
button.addEventListener("click", Color)








// Selecteur de langue et titre qui change

const select2 = document.querySelector("#langueSelect") 
const french = document.querySelector(".French") 
const english = document.querySelector(".English") 
const spanish = document.querySelector(".Spanish") 
const Title = document.querySelector(".Title") 
console.log(Title);
console.log(select2);

function languageChange() {
    let selectLanguage = select2.value
    switch (selectLanguage) {
        case "French":
        Title.textContent = "Français";
        break;
        case "English":
        Title.textContent = "Anglais";
        break;
        case "Spanish":
        Title.textContent = "Spanish";
        break;
        default: 
        Title.textContent = "";
    }
}
select2.addEventListener ("change", languageChange)