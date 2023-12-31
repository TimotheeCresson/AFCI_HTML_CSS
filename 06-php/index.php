<?php 
// créer un nouveau serveur apache  :   docker run -p 8081:80 --name php_mvc -v C:/Users/AFCI851/Desktop/AFCI_HTML_CSS/exo-php-MVC:/var/www/html php:8.2-apache

$title = "Sommaire PHP";
require "./ressources/template/_header.php";
?>
    <ol class="sommaire">
        <li>
            <h3>01 - Syntaxe :</h3>
            <ol>
                <li>
                    <a href="/variables">Variables</a>
                </li>
                <li>
                    <a href="/conditions">Conditions</a>
                </li>
                <li>
                    <a href="/boucle">Boucles</a>
                </li>
                <li>
                    <a href="/fonction">Fonctions</a>
                </li>
                <li>
                    <a href="/include">Include</a>
                </li>
                <li>
                    <a href="/session">session</a>
                </li>
                <li>
                    <a href="/date">Dates</a>
                </li>
                <li>
                    <a href="/header">header</a>
                </li>
                <li>
                    <a href="./01-syntaxe/10-a-poo.php">POO part 1</a>
                </li>
                <li>
                    <a href="./01-syntaxe/10-b-poo.php">POO part 2</a>
                </li>
                <li>
                    <a href="./01-syntaxe/10-c-poo.php">POO part 3</a>
                </li>
            </ol>
        </li>
        <li>
            <h3>02 - Formulaire :</h3>
            <ol>
                <li>
                    <a href="/get">GET</a>
                </li>
                <li>
                    <a href="/post">POST</a>
                </li>
                <li>
                    <a href="/file">FILE</a>
                </li>
                <li>
                    <a href="/connexion">Connexion</a>
                </li>
                <li>
                    <a href="/deconnexion">Déconnexion</a>
                </li>
                <li>
                    <a href="/security">Sécurité</a>
                </li>
                <li>
                    <a href="/mail">Mailer</a>
                </li>
            </ol>
        </li>
        <!-- <li>
            <h3>03 - CRUD :</h3>
            <ol>
                <li>
                    <a href="./userlist">Liste Utilisateur</a>
                </li>
                <li>
                    <a href="./03-crud/01-create.php">Inscription</a>
                </li>
                <li>
                    <h4>Exercice :</h4>
                    <ul>
                        <li>
                            <a href="./connexionBDD">connexion</a>
                        </li>
                        <li>
                            <a href="./03-crud/exercice/deconnexion.php">déconnexion</a>
                        </li>
                    </ul>
                </li>
            </ol>
        </li> -->
        <!-- <li>
            <h3>04 - ROUTER :</h3>
            <ol>
                <li>
                    <a href="./04-router">Page 1</a>
                </li>
                <li>
                    <a href="./04-router/p2">Page 2</a>
                </li>
                <li>
                    <h4>Exercice :</h4>
                    <ul>
                        <li>
                            <a href="./04-router/exercice">Page 1</a>
                        </li>
                        <li>
                            <a href="./04-router/exercice/p2">page 2</a>
                        </li>
                    </ul>
                </li>
            </ol>
        </li> -->
        <li>
            <h3>05 - MVC :</h3>
            <ol>
                <li>
                    <a href="/userlist">Liste Utilisateur</a>
                </li>
                <li>
                    <a href="/inscription">Inscription</a>
                </li>
                <li>
                    <h4>Exercice :</h4>
                    <ul>
                        <li>
                        <a href="/connexionBDD">Connexion</a>
                    </li>
                    <li>
                        <a href="/deconnexionBDD">Déconnexion</a>
                    </li>
                    </ul>
                </li>
            </ol>
        </li>
        <!-- <li>
            <h3>06 - POO :</h3>
            <ol>
                <li>
                    <a href="./06-poo/">Liste Utilisateur</a>
                </li>
                <li>
                    <a href="./06-poo/inscription">Inscription</a>
                </li>
                <li>
                    <h4>Exercice :</h4>
                    <ul>
                        <li>
                            <a href="./06-poo/connexion">Connexion</a>
                        </li>
                        <li>
                            <a href="./06-poo/deconnexion">Déconnexion</a>
                        </li>
                    </ul>
                </li>
            </ol>
        </li>
    </ol> -->
<?php 
require "./ressources/template/_footer.php";
?>