<?php 
    use AFCI\Chat;
    use Ratchet\Http\HttpServer;
    use Ratchet\Server\IoServer;
    use Ratchet\WebSocket\WsServer;

    require __DIR__ . "/../../vendor/autoload.php";
    require __DIR__ . "/../src/Chat.php";
//:: est utilisé pour accéder à des éléments statiques d'une classe, tels que des propriétés ou des méthodes statiques. Cet opérateur est également appelé "opérateur de résolution de portée" ou "paamayim nekudotayim", qui signifie "deux points deux fois" en hébreu.
    $server = IoServer::factory(
        new HttpServer(
            new WsServer(
                new Chat()
            )
            ),
            8000
    );
    $server->run();  //PS C:\Users\AFCI851\Desktop\AFCI_HTML_CSS\08-fullStack\websocket\back> php bin/server.php dans console

?>