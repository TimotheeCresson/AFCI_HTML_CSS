"use strict"

// Je veux récupérer un tableau en json et le trier avec ma fonction :
fetch("tab.json").then(res=>{
    if(res.ok)
    {
        res.json().then(data=>{  // Pour charger en js
            tri(data).then(message=>{
                console.log(message, data);
            })
            .catch(err=>{console.log(err);})    // si il y a une erreur dans tri(data)
        })
        .catch(err=>{console.log(err);}) // si il ne trouve pas le json
    }
});
/*
    Le problème avec ce genre de code, c'est ce qu'on appelle un "callback hell", les callback s'enchaînent et on se retrouve du code imbriqué, dans un autre et aisni de suite, cela devient difficile à suivre. 

    C'est pour cela que JS implémente les mots clef "async" et "await".
    Le mot clef "async" se place devant la déclaration d'une fonction qui deviendra alors asynchrone.

    Le mot clef "await" se place devant l'appel d'une fonction retournant une promesse.
    Il indique que le code doit attendre le résultat de la promesse avant de continuer l'exécution.
        La valeur retournée ne sera donc plus une promesse mais directement un résultat.
        ! "await" ne peut être utilisé que dans une fonction "async"
*/
async function exemple() {
    let data;
    let res = await fetch("tab.json");
    console.log(res);
    if (!res.ok)return;
    /*
        await ne gérant pas le .catch(), on peut utiliser un simple "try catch (finally)" pour remplacer 
    */
   try{
    data = await res.json()
    let message = await tri(data)
    console.log(message);
   } catch(err) {
    console.error(err);
   }
   finally {
    console.log(data);
   }
}
exemple();
/*
    Les fonctions asynchrones se mettent à retourner automatiquement des promesses
*/
function synchrone() {
    return "coucou";
}
async function asynchrone() {
    return "coucou"
}
console.log(synchrone(), asynchrone());

// Notre burger était un sacré callback hell
async function burger() {
    console.log(await pain2());
    console.log(await sauce2());
    console.log(await viande2());
    console.log(await salade2());
    console.log("Mon burger est terminé");
}
burger()
console.log("test");

// code du cours précedent :

function tri(e)
{
    return new Promise(function(resolve, reject){
        if(e.every((element)=>typeof element === "number"))
        {
            e.sort(ordre);
            resolve(e);
        }   
        else
            reject("le tableau n'est pas conforme")
    })
}
function ordre(a,b)
{
    return a-b;
}


function pain2() {
    return new Promise(resolve=>setTimeout(()=>resolve("Le pain est grillé et placé"), 1000));
}
function viande2() {
    return new Promise(resolve=>setTimeout(()=>resolve("La viande est grillé et placé"), 3000));
}
function sauce2() {
    return new Promise(resolve=>setTimeout(()=>resolve("La sauce est versée")));
}
function salade2() {
    return new Promise(resolve=>setTimeout(()=>resolve("La salade est placée")));
}