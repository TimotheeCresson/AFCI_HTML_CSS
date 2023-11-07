"use strict"

export default class Calculatrice {
    constructor (){
        this.calcul= "",
        this.ecranResultat = document.querySelector(".result"),
        this.ecranCalcul = document.querySelector(".calcul"),
        this.boutons = document.querySelectorAll(".button button")
        // console.log(this.boutons);
        this.initBoutons();
    }

    initBoutons() {
        this.boutons.forEach(bouton => {
            bouton.addEventListener("click", () => {
                this.eventClic(bouton.textContent); // prend le texte du bouton en argument
            });
        });
    }
    
    
    eventClic(valeur){
        if(valeur === "=") {
            this.calcResult()
        }
        else if (valeur === "clear") {
            this.clear();
        } else {
            this.calcul += valeur;// si on appuye pas sur = ou clear, on arrive ici, value prendra la valeur appuyer (1,2,3...) qu'on additionnera à une autre valeur sélectionné
            this.afficheResult();
        }
    }

    calcResult(){
        try {
            this.calcul = this.evaluationExpression(this.calcul); //Si l'expression stockée dans this.calcul est mathématiquement valide, la fonction anonyme renverra le résultat du calcul.
            this.afficheResult();
        } catch (erreur) {
            this.calcul = "erreur";
            this.afficheResult();
        }
    }

    evaluationExpression(expression) {
        return new Function('return ' + expression)(); // Function. La chaîne que vous passez au constructeur commence par "return ", suivi de l'expression que vous avez passée en argument. Donc, dans l'exemple donné, la chaîne passée au constructeur Function ressemblerait à "return 2 + 3". et () permet de renvoyer 5
    }
  

    
    clear() {
        this.calcul = ""
        this.afficheResult();
    }

    afficheResult() {
        this.ecranCalcul.textContent = this.result
        this.ecranResultat.textContent = this.calcul
    }
}





 // ALTERNATIVE EXPRESSION
  // evaluerExpression(expression) {
    //     // Séparer l'expression en termes et opérateurs
    //     const termes = expression.split(/\+|\-|\*|\//);
    
    //     // Séparer les opérateurs
    //     const operateurs = expression.match(/[\+\-\*\/]/g);
    
    //     // Vérifier si les termes et les opérateurs ont des longueurs différentes
    //     if (!operateurs || termes.length !== operateurs.length + 1) {
    //         throw new Error('Expression invalide');
    //     }
    
    //     // Effectuer le calcul itérativement
    //     let resultat = parseFloat(termes[0]);
    //     for (let i = 0; i < operateurs.length; i++) {
    //         const valeurSuivante = parseFloat(termes[i + 1]);
    //         const operateur = operateurs[i];
    
    //         if (isNaN(valeurSuivante)) {
    //             throw new Error('Expression invalide');
    //         }
    
    //         switch (operateur) {
    //             case '+':
    //                 resultat += valeurSuivante;
    //                 break;
    //             case '-':
    //                 resultat -= valeurSuivante;
    //                 break;
    //             case '*':
    //                 resultat *= valeurSuivante;
    //                 break;
    //             case '/':
    //                 if (valeurSuivante === 0) {
    //                     throw new Error('Division par zéro');
    //                 }
    //                 resultat /= valeurSuivante;
    //                 break;
    //             default:
    //                 throw new Error('Opérateur non pris en charge');
    //         }
    //     }
    
    //     return resultat;
    // }




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

























