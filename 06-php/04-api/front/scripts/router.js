import routes from "./routes.js";

const main = document.querySelector('main');

export default async function router(uri){
    window.history.pushState({},"",uri); //  Cette ligne utilise l'API pushState pour mettre à jour l'URL dans la barre d'adresse du navigateur sans recharger la page. Cela permet de modifier l'URL sans effectuer de requête au serveur.
    main.classList.remove("show");

    const path = window.location.pathname, //: Cela récupère le chemin de l'URI actuelle.
        route = "/04-api/front/view/"+(routes[path]?.html||"404.html"),// Cette ligne construit le chemin complet de la route en ajoutant "/view/" suivi du fichier HTML associé au chemin actuel. Il utilise l'opérateur de coalescence nulle (?.) pour éviter une erreur si routes[path] n'est pas défini.
        response = await fetch(route);

    if (!response.ok) return;
    
    const data = await response.text();
    main.innerHTML = data;
    if (routes[path]?.js) { // si j'ai du js alors
        const script = await import("./"+routes[path].js);
        await script.default(routes[path].option??undefined);
    }

    getLinks();
    main.classList.add("show");
}
export function getLinks(parent = document){
    const links = parent.querySelectorAll("a");
    links.forEach(setLink);
}
function setLink(a) {
    a.onclick = goToHref;
    const logged = sessionStorage.getItem("logged");
    if (a.classList.contains("logged")) {
        a.parentElement.style.display = logged?"block":"none";
    }
    else if (a.classList.contains("logout")){
        a.parentElement.style.display = logged?"none":"block";
    }
}
function goToHref(e) {
    e.preventDefault();
    router(this.href);
}