"use strict"

const app = Vue.createApp({

    data() {
        return {
            todos : [], // mettre toutes les taches
            newTodo: "", // récupérer la nouvelle tache
            editIndex: -1, // -1 mode 'ajout'
            storage_key: 'vue-js-3-todo', // clé pour local storage
            checked: "false",
            index: -1,
        }
    },
    methods: {
            addTodo(){  
                console.log(this.todos);    
                if(this.newTodo.trim() !== "") {   // .trim() permet de vérifier si il y a du vide ou non, si il y a quelque chose on peut push
                const updateTodos = [...this.todos]  // crée une copie du tableau (spread operator)
                if(this.editIndex != -1){// mode modification
                    updateTodos[this.editIndex] = { // se met à la bonne ligne 
                
                        text: this.newTodo,  // on change que le texte
                        completed: false,
                        //completed : updateTodos[this.editIndex].completed,
                        checked: this.checked,
                    };
                    this.todos = updateTodos;
                    this.editIndex = -1
                }else { // mode ajout
            // on vient mettre dans notre tableau notre texte vide et completed false
                this.todos.push({
                    text: this.newTodo,
                    completed: false,
                    checked: this.checked,
                });
                }
                this.saveTodos();
                this.newTodo = "";   // une fois modifié on réinitialise
            }
        },
        removeTodo(index) {  // on récupère l'index
            if(confirm("Voulez vous supprimer la tache ?")==true) {
            this.todos.splice(index, 1); // marche mais pour un seul paramètre
            this.saveTodos();
            }
        },
        editTodo(index) {
            this.editIndex = index,   // on prend la référence de la ligne pour avoir celle concerné pour ne plus être à -1
            console.log(this.editIndex);
            this.newTodo = this.todos[index].text  // à l'étiquette texte je récupère ce qu'il y a dedans et je l'ajoute à ma newTodo
            
        },
    toggleComplete(index) {
        if (index >=0 && index < this.todos.length) {  // vérifier si on est bien dans notre tableau, sécurité (optionnel)
            const updateTodos = [...this.todos]
            if (!this.todos[index].checked) { // si je ne suis pas cocher
                updateTodos[index] = { // se met à la bonne ligne 
                    text: this.todos[index].text,  // on change que le texte
                    completed: true, // pour cocher
                    //completed : updateTodos[this.editIndex].completed,
                    checked: true,
                }
            }else {
                updateTodos[index] = { // se met à la bonne ligne 
                    text: this.todos[index].text,  // on change que le texte
                    completed: false,
                    //completed : updateTodos[this.editIndex].completed,
                    checked: false,
            }
        }
            this.todos = updateTodos;
            this.saveTodos();
        }
    },
    loadTodos(){
        const varTodo = localStorage.getItem(this.storage_key)
        if (varTodo) {
            this.todos = JSON.parse(varTodo)
        }
    },
    saveTodos() {
        localStorage.setItem(this.storage_key, JSON.stringify(this.todos))
    }
    // mounted() {
    //     console.log("Mounted hook is called");
    //     const storedTodos = localStorage.getItem("todos");
    //     console.log("Stored todos from local storage:", storedTodos);
    //     this.todos =  JSON.parse(storedTodos) 
    //     console.log("Updated todos in the component:", this.todos);
    // },
    // mounted() {
    //     console.log("Mounted hook called");
    //     try {
    //         const storedTodos = localStorage.getItem("todos");
    //         this.todos = storedTodos ? JSON.parse(storedTodos) : [];
    //     } catch (error) {
    //         console.error("Error parsing todos from local storage:", error);
    //     }
    // },
    },
    mounted() { // le mounted, dès le chargement de page, il charge si il y a quelque chose dans notre storage
        this.loadTodos();
    },
});

app.mount("#app")