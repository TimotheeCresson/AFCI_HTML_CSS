"use strict"
// Lien pour trouver les liens VueJS : https://cours.brosseau.ovh/tp/vuejs3/tp1.html

        // On crée notre instance de vue entre {}
        // const{ createApp } = Vue   //  il faut mettre un Vue avec un v Majuscule

        const app = Vue.createApp({  // autre solution pour pouvoir mettre  app.mount('#app');  à la fin de notre script et createApp est une fonction défini tel que le constructor()
            data() {
                return{
                    titre: "Bonjour à vous",
                    image: "./img/chien.jpg",
                    image2: "",
                    // inStock : false  // on peut changer et mettre fromage: true par exemple
                    inStock: true,
                    model: "",
                    inventaire: 5,
                    details: ['60% Coton', '30% laine', '10% polyester'],
                    variants: [
                        {id: 2234, color:'Bleu'},
                        {id: 2235, color:'Rouge'},
                        {id: 2236, color:'Black'},
                    ],
                    cart: 0,
                    variants2: [
                        {id:1, color:'bleu', image2:'./img/phare.jpg'},
                        {id:2, color:'rouge', image2:'./img/lava.jpg'}
                    ]
                }
            },
            // nous mettons toutes nos fonctions appelées méthodes ici
            // Création de la fonction (ici appelé méthode) de notre ajout au panier
            methods: {
                Ajouter(){
                    this.cart +=1       // on peut faire this comme la variable cart est déclaré au dessus this.cart = cart + 1
                },
                Supprimer() {
                    // if (this.cart > 0) {
                    //     this.cart -= 1;
                    // }
                    this.cart -= 1;
                },
                updateImage(variantImage) {
                    console.log('mouseover detected');
                    this.image2 = variantImage
                }
            },
        });
        
        app.mount('#app');  // Pour qu'il sache que tout ce qu'on met dans notre vue js monte dans notre div #app, nous avons lier les 2, on le met en dessous pour pouvoir créer d'autres fonction comme createApp