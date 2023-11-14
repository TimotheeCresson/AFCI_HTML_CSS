"use strict";

const app = Vue.createApp({
    data() {
        return {
            title: "todoList",
            liste: "",
            taches: [],
            indexToEdit: -1,
            editedText: "",
        };
    },
    methods: {
        Ajouter() {
            if (this.liste !== "") {
                this.taches.push({ texte: this.liste, checked: false });
                this.liste = "";
            }
        },

        Supprimer(tache) {
            this.taches = this.taches.filter(d => d !== tache);
        },

        Editer(tache, index) {
            this.indexToEdit = index;
            this.editedText = tache.texte;
        },
        
        Modifier(index) {
            if (this.editedText !== "") {
                this.taches[index].texte = this.editedText;
                this.indexToEdit = -1;
                this.editedText = "";
            }
        },
    },
});

app.mount("#app");

// Explication : 

/* .filter(d => d != tache) : C'est la partie clé de la méthode. La fonction filter crée un nouveau tableau en filtrant les éléments du tableau existant (this.taches). La condition d => d != tache spécifie que seuls les éléments qui ne sont pas égaux à la tâche spécifiée (tache) seront inclus dans le nouveau tableau.

this.taches = ... : Cela affecte le nouveau tableau créé par filter à la propriété taches de l'objet de données Vue. En d'autres termes, cela remplace le tableau de tâches existant par le nouveau tableau qui exclut la tâche spécifiée.

En résumé, la méthode Supprimer supprime la tâche spécifiée de la liste des tâches en créant un nouveau tableau qui exclut cette tâche, puis en remplaçant le tableau existant par le nouveau tableau filtré. Cela a pour effet de mettre à jour l'interface utilisateur pour refléter la suppression de la tâche. */