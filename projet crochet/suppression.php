<?php
function searchElementById($array, $id) {
    foreach ($array as $element) {
        if (isset($element['id']) && $element['id'] == $id) {
            return $element;
        }
    }
    return null; // Retourner null si l'élément n'est pas trouvé
}

function deleteArticleFromJson($articleId, $category) {
    $jsonFile = __DIR__ . '/../../data.json';
    $jsonContent = null;

    // Vérifier si le fichier existe
    if (file_exists($jsonFile)) {
        // Lire le contenu actuel du fichier JSON
        $jsonContent = file_get_contents($jsonFile);
        
        // Décoder le contenu JSON en tableau PHP
        $articles = json_decode($jsonContent, true);

        // Vérifier si la catégorie existe
        if (isset($articles[$category])) {
            // Rechercher l'élément dans la catégorie par ID
            $articleToDelete = searchElementById($articles[$category], $articleId);

            // Vérifier si l'élément a été trouvé
            if ($articleToDelete !== null) {
                // Trouver la clé de l'élément dans le tableau
                $keyToDelete = array_search($articleToDelete, $articles[$category]);

                // Supprimer l'élément avec l'ID spécifié de la catégorie spécifiée
                unset($articles[$category][$keyToDelete]);

                // Réorganiser les clés du tableau après la suppression
                $articles[$category] = array_values($articles[$category]);

                // Encoder le tableau en JSON
                $newJsonContent = json_encode($articles);

                // Écrire le nouveau contenu dans le fichier JSON
                if (file_put_contents($jsonFile, $newJsonContent) !== false) {
                    // Retourner le nouveau contenu JSON
                    return array('status' => 'success', 'message' => $newJsonContent);
                } else {
                    return array('status' => 'error', 'message' => "Erreur lors de l'écriture dans le fichier data.json.");
                }
            } else {
                return array('status' => 'error', 'message' => "L'ID de l'article n'existe pas.");
            }
        } else {
            return array('status' => 'error', 'message' => "La catégorie n'existe pas.");
        }
    } else {
        return array('status' => 'error', 'message' => "Le fichier data.json n'existe pas.");
    }
}
?>
