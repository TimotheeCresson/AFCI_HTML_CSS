"use strict"

/*
    Lorsque l'on veut récupérer des données depuis un autre fichier, ou bien depuis une API (interface logicielle qui permet de « connecter » un logiciel ou un service à un autre logiciel ou service afin d'échanger des données et des fonctionnalités.), nous avons besoin que JS envoi une requête (de préférence asynchrone (envoie la demande et continue son exécution. Il traitera la réponse quand elle arrivera) à ce fichier ou au site de l'API.
    Pour cela 2 solutions :
        - le plus ancien XMLHttpRequest();
        - la solution actuelle fetch() qui est compatible avec les navigateurs modernes.
*/
const url = "./hero.json";

//? ---------------------- XMLHttpRequest ---------------------
// Je crée un nouvel objet XMLHttpRequest
const xmlhttp = new XMLHttpRequest();
// Je lui ajoute une fonction lors de l'événement "onreadystatechange"
xmlhttp.onreadystatechange = handleRequest

/*
    J'ouvre la requête en lui donnant les paramètres suivants : 
    1. La méthode utilisée sous forme de string (ici GET)
    2. l'url auquel lancer la requête (ici dans mon const url)
    3. Si la requête doit être asynchrone ou non (de préférence oui)
*/
xmlhttp.open("GET", url, true)
// On envoi la requête
xmlhttp.send();
function handleRequest() {
    console.log(xmlhttp.readyState, xmlhttp.status);
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        let success, data;
        /*
            Le try{}catch(e){} permet de mettre un morceau de code dans les accolades du try, qui sera exécuté, mais qui en cas d'erreur ne fera pas planter toutes les applications.
            L'erreur sera "capturé" par le catch et pourra être affiché ou personnalisé.

            Optionnellement, on peut ajouter à la fin un "finally" qui exécutera son code une fois le try catch terminé.
        */
        try {
            /*null.addEventListener()
            console.log("test");*/
            // .responseText contient la réponse de notre requête.
            console.log(xmlhttp.responseText);
            data = JSON.parse(xmlhttp.responseText);
            console.log(data);
            success = true
        }
        catch(e){ // Application continue de fonctionner même si il y a une erreur 
            console.error(e.message + " Dans ->" + xmlhttp.responseText);
            success = false;
        }
        finally{
            //console.log("test1");
            if(success) {
                document.body.innerHTML = `<h1>${data.squadName} => ${data.homeTown}</h1>`
            }
        }
        //console.log("test2");
    }
}

//? -------------------- Fetch -------------------------
/*
    Fetch est toujours en asynchrone.
    Par défaut, il est en GET
    Donc pour une requête asynchrone en GET, il suffit de lui donner l'URL en paramètre.
    Il pourra prendre un second paramètre, en cas d'option supplémentaire.

    fetch est suivi d'un ".then()" qui contiendra la fonction callback à lancé une fois la requête terminé
*/
fetch(url).then(handleFetch); //url est déclarer plus haut

function handleFetch(response) {
    console.log(response);
    // ".ok" contient un boolean indiquant si la requête s'est bien passé
    if (response.ok) {  // dans la console on retrouve ok: true donc ici on fait un si la réponse est ok on fait...
        /*
            L'objet "response" de fetch, contient sa propre méthode asynchrone pour traiter le json.
            Je ne passerais donc pas par "JSON.parse()" mais par ".json()" 
            
            Elle sera suivi d'un ".then()" contenant la fonction callback à lancer une fois le json traité et d'un ".catch()" contenant la fonction callback à lancer si il y a une erreur dans le traitement de json.
        */
       response.json()
            .then(data=>{
                document.body.innerHTML += `<h2>${data.homeTown}</h2>`;
            })
            .catch(error=>console.error(error))
    }
    else {
        console.error(response.statusText);
    }
}