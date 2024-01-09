<?php

namespace model;

class User {

    // attributs

    private $id;
    private $nom; 
    private $prenom;

    // Constructor
    public function __construct($id, $nom, $prenom) {
        $this->id = $id;
        $this->nom = $nom;
        $this->prenom = $prenom;
    }

    // setter (si nécessaire)

    // getter
    function getId() {
        return $this->id; 
    }

    function getNom() {
        return $this->nom;
    }

    function getPrenom() {
        return $this->prenom;
    }

}
