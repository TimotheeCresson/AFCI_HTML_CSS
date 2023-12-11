<?php 
    session_start();
    $randomNumber = rand(0, 100);
    $message = "";
    $error = [];
    $userGuess = "";
        if (empty($_SESSION["randomNumber"])) {
            $_SESSION["randomNumber"] = $randomNumber;
        } else {
            $randomNumber = $_SESSION["randomNumber"];
        }
    if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["proposer"])) {
        if (empty($_GET["userGuess"])) {
            $error["userGuess"] = "Veuillez entrer un prix";
        }
        else {
            $userGuess = intval($_GET["userGuess"]);
        }
    } 
    if ($userGuess === $randomNumber) {
        $message = "Bravo, vous avez deviné le juste prix";
        unset($_SESSION["randomNumber"]); // enlève ce qu'il y avait pour en recommencer un nouveau
    } 
    elseif ($userGuess > $randomNumber) {
        $message = "Le nombre à deviner est plus petit";
    }
    else {
        $message = "Le nombre à deviner est plus grand";
    }
    
    ?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Plus ou Moins</title>
    <link rel="stylesheet" href="justePrix.css">
</head>

<body>
    <div class="plusOuMoins">
        <div class="card-wrapper">
            <div class="card  <?php echo $userGuess === $randomNumber ? 'reveal' : ""; ?>">
            <div class="front">
                    <span><?php echo $userGuess ?></span>
                    <form method="GET" action="">
                        <button type="submit" name="recommencer">Recommencer</button>
                    </form>
                </div>
                <div class="back"></div>
            </div>
        </div>
        <?php var_dump($randomNumber) ?>
        <?php if (!empty($userGuess)) : ?>
        <p class="message"><?php echo $message; ?></p>
        <?php endif; ?>
        <div class="gameZone">
            <form method="GET" action="">
                <input type="number" name="userGuess" max="100" min="0" autofocus>
                <button type="submit" name="proposer">Proposer</button>
            </form>
            <?php if (!empty($error["userGuess"])) : ?>
                <p class="error"><?php echo $error["userGuess"] ?></p>
            <?php endif;?>
        </div>
    </div>
</body>

</html>

