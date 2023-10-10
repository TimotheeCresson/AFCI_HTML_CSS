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
    }}





    const tel = document.querySelector("#tel");
    const telReg = /^[0-9\s]+$/

    tel.addEventListener("input", telephone)

    function telephone() {
        if(telReg.test(tel.value) || tel.value === ""){
            tel.textContent="";  
        }
        else {
            tel.style.backgroundColor="red";

        }
    }




    const password = document.querySelector("#password");
    const progression = document.querySelector(".progression div");

    const maj = /[A-Z]/
    const min = /[a-z]/
    const chiffre = /[0-9]/
    const carac = /[!@#$%^&*(),.?":{}|<>]/g;
    const mincarac = /.{8,}/
    
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

    











    const email = document.querySelector("#email");
    const emailReg = /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/

    email.addEventListener("input", mail)
    function mail() {
        if(emailReg.test(email.value) || email.value === ""){
            email.style.backgroundColor="red"; 
            console.log("vrai"); 
        }
        else {
            email.style.backgroundColor="";
            console.log("faux");
        }
    }