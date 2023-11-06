"use strict";
import H from "./Human.js";

/*
    Un des capacités les plus importantes de la POO, est nommé "héritage"

    Cela permet de créer des classes qui ont les mêmes propriétés et méthodes qu'une autre classe.
    
    Par exemple, ici je vais créer une classe "Dev" pour créer un nouveau développeur. Et aux dernières nouvelles, un développeur reste un humain.

    J'aimerais donc qu'il ai toutes les propriétés et méthodes d'un humain.
    Pour lui faire hériter de tout cela, je vais faire suivre son nom du mot clef "extends" puis de la classe à hériter
*/
export default class Dev extends H {
     /** 
   * Créer un nouveau développeur
   * @param {string} prenom Prénom de l'humain
   * @param {string} nom Nom de l'humain
   * @param {number|string} age Age de l'humain
   * @param {string|Array} tech Technologies connues
   */
    constructor(prenom, nom, age, tech) {
        /*
            En javascript, à partir du moment où l'on souhaite changer le constructeur d'une classe qui a hérité.
            Il est important d'appeler le constructeur du parent.
            Pour cela, on utilisera la méthode "super()";

            On devra alors passer les arguments attendu par le parent à la méthode "super()";
        */
       super(prenom, nom, age);
       this.techniques = tech;
       /*
            Lors d'un héritage, ce n'est pas toutes les méthodes et propriétés qui sont tranmises.
            Puisque ce qui se trouve en "privé" n'est pas transmit
       */
      // this.#setAge = 5;  cela ne fonctionne pas car privée
    }
    set techniques(t) {
        if(Array.isArray(t)){ // vérifie si le paramètre est un tableau
            this.tech = t
        }else {
            this.tech = [t];
        }
    }
    /*
        Il est possible de réécrire une méthode hérité d'un parent 

        Pour cela, il suffit de la redéclarer :
    */
   salutation() {
    console.log(`Bonjour, je suis ${this.getFullName} et j'ai ${this.getAge} et je maîtrise ${this.tech.join(", ")}`);
   }
}
