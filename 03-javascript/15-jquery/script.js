"use strict"
/*
    JQuery fut créé en 2006 par John Resig 
    Il est représenté par la phrase "Faire plus en écrivant moins"
    Il permet de faire du JS plus rapidement et plus simplement

    Enfin, ceci est vrai à l'époque car JS a bien évolué et gère pas mal de choses maintenant.
    Ici nous allons voir certaines bases de JQuery, mais si vous souhaitez l'approfondir
    Vous pouvez lire la documentation

    JQuery peut être utilisé via CDN, en téléchargeant le fichier ou bien via NPM ( Pour l'installer on va dans la console sur le dossier souhaité puis npm install jquery puis lié le lien) (ou autre package manager)

    JQuery reste du Javascript, donc toutes les fonctions JS classique fonctionnent 
    Seul certains objets rendu par JQuery sont spécifique à celui-ci
    et donc les méthodes classiques pourraient ne pas fonctionner 

    $("") sert à la fois pour "querySelectorAll" et pour "createElement"
    $("div") sélectionne toutes les divs
    $("<div>") crée une nouvelle div
 */
const btnSlide = $("#slide"); // si je mets $("button"), cela sélectionne tous les boutons, en javascript nous devrions faire un forEach
console.log(btnSlide);

// le on est l'addEventListener
btnSlide.on("click", slideTitle); 

function slideTitle() {
    // console.log("event !");
    /*
        Certains effets classiques des animations CSS, telles que "fade", "slide" ou "hide" sont implémentés de base dans jquery.
        Cela avec les méthodes "slideIn()", "slideOut()", "slideToggle()" et de même pour les autres animations.

        On pourra donner en argument une durée pour l'animation, puis optionnellement, une fonction à lancer une fois l'animation terminé
    */
   $("h1").slideToggle(1000, function(){
    console.log("Toggle terminé !");
    /*
        Pour accéder aux propriétés CSS avec Jquery, on utilisera la méthode ".css()"
        Elle prendra 1 seul argument si on veut récupérer la valeur
        Et 2 arguments si on veut la modifier : 
            -   .css("color"), on récupère la couleur
            -   .css("color","red") on modifie la couleur
    */
   const color = btnSlide.css("background-color") === "rgb(255, 0, 0)" ? "green":"red";  // si la couleur est = à rgb(255, 0, 0) on met couelur verte sinon rouge
   console.log(color);
   btnSlide.css("background-color", color)
   });
}

// document.querySelectorAll("#fade").forEach(el=>el.addEventListener("click", fadeSpan));
// document.querySelector("#fade").addEventListener("click", fadeSpan);
$("#fade").on("click", fadeSpan);

function fadeSpan() {
    /*
        Au contraire de javascript, si il y a plusieurs éléments sélectionnés, pas besoin de boucle, JQuery s'en occupe
    */
   $("h1 span").fadeToggle();
}
/*
    Avec jquery, je peux ajouter plusieurs événements d'un seul coup :
*/
$("h1 span").on("mouseenter mouseleave", function (e) {
    // En jquery, je n'utiliserais pas "this" mais "$(this)"
    if (e.type == "mouseenter") {
        // ici this représente e.target
        $(this).css("font-size", "5rem");
    } else {
        $(this).css("font-size", "");
    };
});

/*
    $("document"). ready(function) (ou de nos jours $(function))
    Permet d'attendre que le DOM a chargé avant d'éxécuter le script (il peut être remplacé par un defer)
*/
$(function(){
    $("#load").on("click", function () {
        $("ol").hide(200);
        /* 
            $.ajax("") est le fetch de jQuery
            On le fera suivre des méthodesz ".done()", ".fail()" et ".always()" qui sont l'équivalent de ".then()", ".catch()" et ".finally()"
        */
       $.ajax("liste.json")
            .done(data=>{
                /*
                    Jquery comprend directement que les données sont en JSON et les traduit automatiquement en objet Javascript
                */
                console.log(data);
                data.forEach(d=>{
                    /*
                        const li = document.createElement("li");
                        li.textContent = d;
                        document.querySelector("ol").append(li);

                        !( Attention, à la méthode appendTo de JQuery qui est inversé par rapport au append de JS)
                        parent.append(enfant) en JS
                        enfant.appendTo(parent) en jquery
                    */
                    $("<li>").text(d).appendTo($("ol"));
                }); // fin forEach
                $("ol").show(500) // cette ligne sélectionne la liste ordonnée (<ol>) à l'aide de $("ol") et utilise la méthode .show() pour la rendre visible. Le paramètre 500 représente la durée de l'animation en millisecondes 
            })
            .fail(err=>console.error(err))
            .always(()=>console.log("requête terminé !"));
    }); // fin on click
    $("#anime").on("click", function () {
        $(this).css("position", "absolute");
        /*
            La fonction animate de jquery diffère de celle de javascript.
            Elle se contente de prendre en premier argument, un objet contenant les valeurs à modifier et en second la durée de l'animation.
            On notera qu'on peut lui donner des valeurs à augmenter ou diminuer.
        */
       // ici this = $("#anime")
       $(this).animate({
            width: "50vw",
            height: "5rem",
            top: "+=50px", // à chaque fois que tu augmente, tu donnes 50px 
            left: "-=50px" // à chaque fois que tu diminue, tu enlève 50px 
       }, 500)
    })
});
    