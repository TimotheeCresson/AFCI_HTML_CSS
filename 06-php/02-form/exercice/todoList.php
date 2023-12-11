<?php 
    session_start();

    // Load existing session data into $textTodoList
    $textTodoList = isset($_SESSION["textTodoList"]) ? $_SESSION["textTodoList"] : [];
    $error = [];

    if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["textTodoList"])) {
        $newTodo = trim($_GET["textTodoList"]);

        if (empty($newTodo)) {
            $error["textTodoList"] = "Le champ ne peut pas être vide.";
        } else {
            // Add the new todo to the existing list
            $textTodoList[] = $newTodo;
            $_SESSION["textTodoList"] = $textTodoList;
        }
    }
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma Todo List</title>
    <link rel="stylesheet" href="./todoList.css">
    <script src="./todoscript.js" defer></script>
</head>
<body>
    <div id="todo">
        <div class="headerTodo">
            <h2>Liste de choses à faire</h2>
            <div class="formTodo">
                <form method="get" action="">
                    <input type="text" id="addTodo" name="textTodoList" placeholder="Titre...">
                    <button type="submit" class="addBtn" name="ajouter" value="ajouter">Ajouter</button>
                </form>
            </div>
        </div>

        <?php if (!empty($error["textTodoList"])) : ?>
            <p class="error"><?php echo $error["textTodoList"]; ?></p>
        <?php endif; ?>

        <ul id="list">
            <?php foreach ($textTodoList as $item): ?>
                <li><?= $item; ?></li>
                <span class="close">yo</span>
            <?php endforeach; ?>
        </ul>
    </div>
</body>
</html>
