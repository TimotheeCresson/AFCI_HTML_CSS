"use strict"

const utilisateur = document.querySelector("#username");
const utilisateurReg= /^[a-zA-Z\s]+$/

utilisateur.addEventListener("input", user)
function user() {

    if (utilisateurReg.test(utilisateur.value)|| utilisateur.value === "") {
        utilisateur.textContent = "";
    }
    else {
        utilisateur.style.backgroundColor = "red"
    }
    if(utilisateur.value === ""){
        utilisateur.style.backgroundColor = "white"
    }
}





    const tel = document.querySelector("#tel");
    const telReg = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;

    tel.addEventListener("input", telephone)

    function telephone() {
        if(telReg.test(tel.value)){
            tel.style.backgroundColor="green";  
        }
        else {
            tel.style.backgroundColor="red";

        }
        if (tel.value === "") {
            tel.style.backgroundColor = "white"
        }
    }




    const password = document.querySelector("#password");
    const progression = document.querySelector(".progression");
/*
    const maj = /[A-Z]/
    const min = /[a-z]/
    const chiffre = /[0-9]/
    const carac = /[!@#$%^&*(),.?":{}|<>]/g;
    const mincarac = /.{8,}/
    */
    password.addEventListener("input", check)
    function check(e) {
        let v=0;
        v += /[A-Z]/.test(e.target.value)? 1:0;
        v += /[a-z]/.test(e.target.value)? 1:0;
        v += /\d/.test(e.target.value)? 1:0;
        v += /[!@#$%^&*(),.?":{}|<>]/.test(e.target.value)? 1:0;
        v += e.target.value.length >= 8 ? 1:0;
        v -= /^[A-Za-z\d@$!%*?&]+$/.test(e.target.value)? 0:1;
        console.log(v);
/*
        switch (v) {
            case -1:
            case 0:
                progression.style.backgroundColor = "";
                break;
            case 1:
                progression.style.backgroundColor ="red";
                break;
            case 2:
                progression.style.backgroundColor ="orangered";
            case 3:
                progression.style.backgroundColor ="orange";
                break;
            case 4:
                progression.style.backgroundColor ="yellow";
                break;
            case 5:
                progression.style.backgroundColor ="green";
                break;
        }*/
        v = v<0?0:v;
        progression.style.width = v*20+"%";
        // version couleur sans switch :
        const colors = ["", "red", "orangered", "orange", "yellow", "green"];
        progression.style.backgroundColor = colors[v];
    }


    /*
    password.addEventListener("input", load)
    function load(){
    if (maj.test(password.value) || password.value === "") {
        progression.style.width = "20%"
    }
    if (min.test(password.value) || password.value === "") {
        progression.style.width = "40%"
        progression.style.backgroundColor = "orange"
    }
    if (chiffre.test(password.value) || password.value === "") {
        progression.style.width = "60%"
        progression.style.backgroundColor = "yellow"
    }
    if (carac.test(password.value) || password.value === "green") {
        progression.style.width = "80%"
    }
    if (mincarac.test(password.value) || password.value === "green") {
        progression.style.width = "100%"
    }
}

const confirmed= document.querySelector("#confirmed");
confirmed.addEventListener("input", checkPasswordMatch)
*/
    











    const email = document.querySelector("#email");
    const emailReg = /^[A-Z0-9+_!#$&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+$/i;

    email.addEventListener("input", mail)
    function mail() {
        if(emailReg.test(email.value)){
            email.style.backgroundColor="red"; 
            console.log("vrai"); 
        }
        else {
            email.style.backgroundColor="";
            console.log("faux");
        }
    }