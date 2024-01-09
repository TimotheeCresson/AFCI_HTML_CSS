<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Details</title>
</head>
<body>
    <h1>User Details</h1>
    <?php if ($user): ?>
        <p>ID: <?php echo $user->getId(); ?></p>
        <p>Nom: <?php echo $user->getNom(); ?></p>
        <p>Prénom: <?php echo $user->getPrenom(); ?></p>
    <?php else: ?>
        <p>User not found</p>
    <?php endif; ?>
</body>
</html>

