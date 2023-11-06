"use strict"

export default class calculatrice {
    constructor (){
        this.result = "",
        this.ecranResultat = document.querySelector("result"),
        this.ecranCalcul = document.querySelector("calcul"),
        this.boutons = document.querySelectorAll(".button button")
        // console.log(this.boutons);

    }

    initBoutons() {
        this.boutons.forEach(bouton, () => {
            bouton.addEventListener("click", () => {
                this.eventClic(bouton.innerText);
            })
        })
    }
    
    eventClic(e){
        if(e.target.value === "=") {
            this.calcResult()
        }
        else if (e.target.value === "clear")
            this.clear()
        else {

        }
    }

}







// class Calculatrice {
//     constructor() {
//         this.resultat = '';
//         this.ecranResultat = document.querySelector('.result');
//         this.ecranCalcul = document.querySelector('.calcul');
//         this.boutons = document.querySelectorAll('.button button');
//         this.initBoutons();
//     }

//     initBoutons() {
//         this.boutons.forEach(bouton => {
//             bouton.addEventListener('click', () => {
//                 this.gererClic(bouton.textContent);
//             });
//         });
//     }

//     gererClic(valeur) {
//         if (valeur === '=') {
//             this.calculerResultat();
//         } else if (valeur === 'clear') {
//             this.clear();
//         } else {
//             this.resultat += valeur;
//             this.afficherResultat();
//         }
//     }

//     calculerResultat() {
//         try {
//             this.resultat = eval(this.resultat);
//             this.afficherResultat();
//         } catch (erreur) {
//             this.resultat = 'Erreur';
//             this.afficherResultat();
//         }
//     }

//     clear() {
//         this.resultat = '';
//         this.afficherResultat();
//     }

//     afficherResultat() {
//         this.ecranResultat.textContent = this.resultat;
//         this.ecranCalcul.textContent = this.resultat;
//     }
// }

// export default Calculatrice;