"use strict";
// exo 3.1
/*
let nbre = prompt("Donnez-moi un nombre")

if(nbre < 0) console.log(nbre + " négatif")
        else if (nbre > 0) console.log(nbre + " positif");

// exo 3.2 
let nbre2 = prompt("Donnez-moi un nombre")
let nbre3 = prompt("Donnez-moi un second nombre")

let produit = nbre2*nbre3
console.log(produit);
if(produit < 0) {
    console.log(produit + " négatif");
}
else {
    console.log(produit + " positif");
}

// exo 3.3
let nom1 = prompt("Donnez-moi un nom");
let nom2 = prompt("Donnez-moi un second nom");
let nom3 = prompt("Donnez moi un 3eme nom");
    if(nom1<nom2 && nom2<nom3) {
        console.log("ranger dans l'ordre");
    }
    else {
        console.log("pas rangé dans l'ordre");
    }


// exo 3.4 
let nbre = prompt("Donnez-moi un nombre")

if(nbre == 0) {
    console.log(nbre + " nulle")}
        else if (nbre > 0) {
        console.log(nbre + " positif")}
else {
    console.log(nbre + " négatif");
}


// exo 3.6 

let age = prompt("Donnez-moi l'âge d'un enfant ?")

switch (age) {
    case "6":
    case "7":
        console.log("Poussin");
    break;
    case "8":
    case "9":
        console.log("Pupille");
    break;
    case "10":
    case "11":
        console.log("Minime");
    break;
    default:
        if(age < 6) console.log("Trop petit")
        else console.log("Cadet");
}
*/
/*
// exo 4.1
let Tutu = prompt("Donnez un nombre");
let Toto = prompt ("Donnez un 2eme nombre");
let Tata = "pas ok";
if (Tutu>Toto+4 || Tata == "OK") {
    console.log(Tutu = Tutu+1);
}
else {
    console.log(Tutu = Tutu-1);
}
*/
// exo 4.2
/*
let heure = prompt("Donnez l'heure")
let minute = prompt("Donnez les minutes")
minute=++minute
if(minute > 59){
    ++heure;
    minute = minute - 60;
}
if (heure == 24){
    console.log("minuit");
}
else{
    /*console.log("Dans une minute, il sera ");
    console.log(heure);
    console.log("h");
    console.log(minute);
   console.log(`Dans une minute, il sera ${heure} h ${minute} mins`);
} */
/*
// Exo 4.4
let number = prompt("Entrez le nombre de photocopies")
let price; 
if(number <= 10){
    console.log(price = number*0.10);
}
else if (number <= 30) {
    console.log(price = number*0.09);
}
else { console.log(price = number*0.08);}
*/


/*
// Exo 3.5 
let nbre2 = prompt("Donnez-moi un nombre")
let nbre3 = prompt("Donnez-moi un second nombre")

let produit = nbre2*nbre3
console.log(produit);
if(produit < 0) {
    console.log(produit + " négatif");
}
else {
    console.log(produit + " positif");
}
*/

/*
// Exo 5.1 
let number = prompt("Entrez un nombre")
while(number<1 || number>3){
    number = prompt("Entrez un nombre")
}
alert("OK")
*/

// Exo 5.2 
let number = prompt("Entrez un nombre ")
while(number<10){
    alert("plus Grand")
    number = prompt("Entrez un nombre ")
    if(number>20);
    alert("Pluspetit")
    number = prompt("Entrez un nombre ")
    if(number<10 || number>20) 
    alert("GG")
    break;
    
}
// Exo 5.3
/*
let n = prompt("Entrez un nombre ")

let s = n+10
console.log("Les nombres suivants sont :");
while(n < s){
    n++
    console.log(n);
}*/

/*
let n = prompt("Entrez un nombre ")
let i=0
console.log("Les nombres suivants sont :");
while(i < 10){
    i++
    console.log(++n);
}
        -------Fonctionne-------------*/



// Exo 5.4
let n = prompt("Entrez un nombre ")
let i;
console.log("La table de multiplication de ce nombre est ");
for(i=1; i<=10; i++) {
    console.log(n," x ", i, " = ", n*i);
}

// Exo 5.5

