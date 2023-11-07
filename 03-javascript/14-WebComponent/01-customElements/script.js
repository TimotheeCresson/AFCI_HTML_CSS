import SuperBalise from "./superBalise.js";
import SuperDiv from "./superDiv.js";
/*
    Les customs elements (éléments personnalisés) permettent de créer nos propres éléments HTML.
    On va pouvoir créer de nouvelles balises, avec leurs propres règles et capacités.

    Il existe 2 types de customs éléments :
        - Les éléments personnalisés autonomes qui héritent de "HTMLElement"
        - Les éléments personnalisés intégrés, qui héritent d'un élémént HTML particulier (div, p, li ...)

        Pour les créer, nous allons devoir définir une classe qui hérite de l'élément voulu.
        Puis hors de celle-ci, utiliser la méthode : 
            *  customElements.define()

        Cette méthode prendra en premier argument, un string qui sera le nom de votre balise personnalisée.
        ! Important : les noms des customs elements doivent prendre un tiret "-"

        En second argument, la class que vous avez définie plus haut.
        Et optionnellement, cela pour les customs elements intégrés, elle prendra le nom de la classe dont elle hérite.

        Une fois la méthode précédente appelée, pour utiliser nos balises, il suffira de suivre une des façons suivantes : 
            *  autonome : "<nom-balise></nom-balise>"
            *  intégré :  "<baliseParent is="nom-balise"></baliseParent>"        // on prend une balise qu'on crée
            
        Il est aussi possible d'ajouter des "cycles de vie" à nos éléments HTML.
        Les cycles de vie sont des méthodes prédéfinies qui se déclenchent automatiquement à certains moment précis :
        *   connectedCallback : appelé lorsque l'objet a été attaché au DOM 
        *   disconnectedCallback : appelé lorsque l'objet a été détaché du DOM
        *   adoptedCallback : appelé lorsque l'objet est déplacé d'un DOM à un autre (avec un iframe par exemple)
        *   attributeChangeCallback : Appelé lorsque l'attribut ciblé est modifié 
            
            attributeChangeCallback prendra 3 arguments : 
                - Le nom de l'attribut modifié
                - La valeur avant modification
                - La nouvelle valeur
            Pour cela fonctionne, on devra accompagner cela d'un "getter static" appelé : 
                "observedAttributes" qui retournera un tableau contenant les attributs à observer
*/