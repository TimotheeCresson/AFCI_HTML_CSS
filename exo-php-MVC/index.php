<?php

// créé un nouveau serveur apache docker run -p 8081:80 --name php_mvc -v C:/Users/AFCI851/Desktop/AFCI_HTML_CSS/exo-php-MVC:/var/www/html php:8.2-apache


require './controller/userController.php';
require './model/userModel.php';

use model\User;
use controller\UserController;

// Crée un utilisateur avec des données fictives
$user = new User(1,'Cresson', 'Tim');

// Crée un contrôleur d'utilisateur et lui passe l'objet User en paramètre
$controller = new UserController($user);

// Obtient l'objet User à partir du contrôleur
$userObj = $controller->getUser();

// Include the view file and pass the User object to it
require __DIR__ . '/view/view.php';

?>
