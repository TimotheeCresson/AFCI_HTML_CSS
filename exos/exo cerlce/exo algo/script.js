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
/*
// Exo 5.2 
let number = 0;
while(number<10 || number>20){
    let number = prompt("Entrez un nombre ")
    if (number<10) {
    alert("plus Grand")
    }
   else if(number>20){
    alert("Pluspetit")
    }
   else {
    alert("Nice")
   } 
}
*/
/*
// Exo 5.3
let n = parseInt(prompt("Entrez un nombre "))

let s = n+10
console.log("Les nombres suivants sont :");
while(n < s){
    n = n + 1
    console.log(n);
}
*/
/*
let n = parseInt(prompt("Entrez un nombre "))
let i=0
console.log("Les nombres suivants sont :");
while(i < 10){
    i++
    console.log(++n);
}
*/


/*
// Exo 5.4
let n = prompt("Entrez un nombre ")
let i;
console.log("La table de multiplication de ce nombre est ");
for(i=1; i<=10; i++) {
    console.log(n," x ", i, " = ", n*i);
}
*/

/*
// Exo 5.5
let number = parseInt(prompt("Entrez un nombre"))
let i;
let som = 0;
for(i=1; i<=number; i++) { // On prend 5 pour number
    som = som + i                           // on commence à 0+1 =1  ensuite 1+ 2= 3 3+3 =6 6+4=10 et 10+5 = 15
}
console.log("La somme est ", som);  // on a 10+5=15
*/
/*
//Exo 5.6 
 let number = parseInt(prompt("Entrez un nombre"))
let i; 
let fact = 1;
for (i=1; i<=number; i++) {
    fact = fact*i
    /* 1*1=1 2*1=2 2*3=6 6*4=24 24*5=120 120*6=720 720*7=5040 5040*8=40320 
}
console.log("La factorielle est", fact);
*/
/*
//Exo 5.7
let n
let i 
let minpause
let maxpause
let min = Infinity
let max = -Infinity;
for (n=1; n<=5; n++){
    i = parseInt(prompt(`Entrez le nombre numéro ${n}`));
    if(i<min){
    min=i
    minpause = n
    }
    if (i>max) {
        max=i 
        maxpause = n
    }
    
}
console.log("minpause ", minpause, "min ", min,"maxpause ", maxpause, "max ", max);

*/
/*
// Exo 5.8
let n
let i 
let minpause
let maxpause
let min = Infinity
let max = -Infinity;
for (n=1; n<=Infinity; n++){
    i = parseInt(prompt(`Entrez le nombre numéro ${n}`));
    if (i==0) {
        break;
    }
    if(i<min){
    min=i
    minpause = n
    }
    if (i>max) {
        max=i 
        i>0
        maxpause = n
    }
}
console.log("minpause ", minpause, "min ", min,"maxpause ", maxpause, "max ", max); */

// Exo 5.9 
/*
let prix,
    somme,
    paye,
    reste,
    remise10eur = 0,
    remise5eur = 0,
    p,
    sommedue = 0;

for(p=1; p<=3; p++){
    prix = parseInt(prompt(`votre prix ${p}`));
    sommedue = sommedue + prix
}
alert(`Vous devez payer ${sommedue} euros`)

paye = prompt('Entrez vos billet dans la machine, montant versé : ')
reste = paye - sommedue
while (reste>=10) {
    remise10eur=remise10eur + 1
    reste = parseInt(reste) - 10 
}
while (reste>=5){
    remise5eur=remise5eur + 1
    reste = parseInt(reste) - 5
}
alert("Rendu de la monnaie :")
alert(`Billet de 10 euros: ${remise10eur}`)
alert(`Billet de 5 euros": ${remise5eur}`)
alert(`Pièce de 1 euro": ${reste}`)*/

/*
let prix,
    somme,
    paye,
    reste,
    remise10eur = 0,
    remise5eur = 0,
    p,
    sommedue = 0;

for(p=1; p<=1; p++){
    prix = parseInt(prompt(`votre prix ${p}`));
    sommedue = sommedue + prix
}
alert(`Vous devez payer ${sommedue} euros`)

paye = prompt('Entrez vos billet dans la machine, montant versé : ')
reste = paye - sommedue
alert(`Nous allons vous rendre ${reste} euros`)
while (reste>=10) {
    remise10eur=remise10eur + 1
    reste = parseInt(reste) - 10 
}
while (reste>=5){
    remise5eur=remise5eur + 1
    reste = parseInt(reste) - 5
}
alert("Rendu de la monnaie :")
alert(`Billet de 10 euros: ${remise10eur}`)
alert(`Billet de 5 euros": ${remise5eur}`)
alert(`Pièce de 1 euro": ${reste}`)
*/


// exo 5.10
/*
let ordre = 0,
    desordre =0,
    i,
    X = 1,
    Y = 1;

let n = parseInt(prompt("Nombre de chevaux partants"))
let p = parseInt(prompt("Nombre de chevaux joués"))

for(i=1; i<p; i++){
    X = 
    
}
alert(`Dans l'ordre, une chance sur ${X}`)
alert(`Dans le désordre, une chance sur ${X/Y}`)
*/
/*
// exo 6.1

let truc = [6]
let i;
for(i=0; i<=6; i++){
   truc [i] = 0;
}
console.log([truc]);
*/

/*
// Exo 6.2 
let tab = [5]
tab [0] = "a"
tab [1] = "e"
tab [2] = "i"
tab [3] = "o"
tab [4] = "u"
tab [5] = "y"

console.log(tab);
*/
/*
// Exo 6.3 

let note = [8]
let i; 
for(i=0; i<=8; i++){
    note [i] = parseInt(prompt("Entrez la note numéro")),  i + 1
}
console.log([note]);
*/
/*
// Exo 6.4
let nb = [5]
let i;
for(i=0; i<=5; i++) {
    nb[i] = i*i
}
for(i=0; i<=5; i++) {
    console.log(nb[i]);
}
// Cette algorithme donne 6 valeurs: 0, 1, 4, 9, 16, 25
// Pour le simplifier : 
let nb = [5]
let i;
for(i=0; i<=5; i++) {
    nb[i] = i*i
    console.log(nb[i]);
}
*/
/*
// Exo 6.5 
let nb = [6],
    i,
    k;
nb[0]=1;
for(k=1; k<=6; k++) {
    nb[k] = nb[k-1] + 2
}
for(i=0; i<=6; i++){
    console.log(nb[i]);
}
Les valeurs rendus sont: 1, 3, 5, 7, 9, 11, 13
Pour simplifier : 

let nb = [6],
    k;
nb[0]=1;
for(k=1; k<=6; k++) {
    nb[k] = nb[k-1] + 2
    console.log(nb[k]);
}*/

/*
// Exo 6.6 

let suite = [7]
let i 
suite[0] = 1
suite[1] = 1
for(i=2; i<=7; i++){
    suite[i] = suite[i-1] + suite[i-2]
}
for(i=0; i<=7; i++){
    console.log(suite[i]);
}
// on obtient 1, 2, 3, 5, 8, 13, 21


/*
// Exo 6.7  

let note = [8]
let i; 
let somme=0; 
for(i=0; i<=8; i++){
    note [i] = parseInt(prompt("Entrez la note numéro")),  i + 1
    somme = somme + note[i]
}
console.log([note]);
console.log("la moyenne est :", somme/9);
*/

/*

// Tri à bulle :
    let i;
    let h;
    function aleatoire(items) {
        for(i=0; i<items; i++){
        }
    }
    */
    