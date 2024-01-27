<?php
require_once __DIR__ . "/../../06-php/03-crud/model/UserModel.php";


// Test de la fonction getEveryUsers()
$users = getAllUsers();
var_dump($users);

// Test de la fonction getUserById()
$userById = getOneUserById(1);
var_dump($userById);

// Test de la fonction getUserByEmail()
$userByEmail = getOneUserByEmail("example@email.com");
var_dump($userByEmail);

// Test de la fonction addingUser()
addUser("NouvelUtilisateur", "nouveau@email.com", "motdepasse");

// Test de la fonction deleteUserByIsID()
deleteUserById(2);

// Test de la fonction updateUserByIsId()
updateUserById(1, "NouveauNom", "nouveau@email.com", "nouveaumotdepasse");
?>
