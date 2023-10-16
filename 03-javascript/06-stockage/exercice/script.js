"use strict"
const body = document.querySelector ("body")
const select = document.querySelector("#themeSelect")
const greenColor = document.querySelector(".greenTheme")
const orangeColor = document.querySelector(".orangeTheme")
const blueColor = document.querySelector(".blueTheme")
console.log(select);


console.log(greenColor);
/*
select.addEventListener("click", changeTheme )
function changeTheme() {
    let selection = select.value;
    if (selection = greenColor.value) {
        document.documentElement.style.setProperty("--fond", "green");
    }
    else if (selection = orangeColor.value) {
        document.documentElement.style.setProperty("--fond", "orange");
    }
    else if (selection = blueColor.value) {
        document.documentElement.style.setProperty("--fond", "blue");
    }
    else 
    document.documentElement.style.setProperty("--fond", "white");
}

changeTheme();
*/

select.addEventListener("change", change )

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
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16).padStart(6, "0"); 
    console.log(randomColor);
    body.style.backgroundColor = "#" + randomColor;
    localStorage.setItem("thème", `# ${randomColor}` )
    button.value = localStorage.getItem("thème") === `# ${randomColor}`;
}
button.addEventListener("click", Color)






// Selecteur de langue et titre qui change