<?php
// On crée une fonction de recherche 
function searchElementByIsId($array, $id) {
    // On parcourt chaque élément du tableau et assigne cet élément à la variable $element
    foreach($array as $element) {
        // On regarde si l'élément actuel a une clé 'id' définie et si la valeur de cette clé est égale à l'ID que nous recherchons
        if (isset($element['id']) && $element['id'] == $id) {
            return $element;
        }
    }
    // On retourne null si on ne trouve pas l'élément 
    return null; 
}

function deleteArticleFromJson($articleId, $category) {
    $jsonFile = __DIR__ . '/../../data.json';
    $jsonContent = null;

    // Vérifier si le fichier existe
    if (file_exists($jsonFile)) {
        // Lire le contenu actuel du fichier JSON
        $jsonContent = file_get_contents($jsonFile);

        // Décoder le contenu JSON en tableau PHP
        // jsonContent est le JSON string que je souhaite décoder, true (quand true) retourne un tableau associatif de mon JSON data, 512 (depth) valeur par défaut qui spécifie la profondeur max de la chaîne JSON que json_decode traitera,  JSON_UNESCAPED_UNICODE masque de bits facultatif: garantir que les caractères Unicode ne sont pas échappés lors de l'encodage afin de garder les caractères accentués ou des symboles spéciaux,qu'on souhaite conserver dans sa forme d'origine.
        $decodedContent = json_decode($jsonContent, true, 512, JSON_UNESCAPED_UNICODE);

        // Vérifier si la catégorie existe
        if (isset($decodedContent[$category])) {
            
            // Je recherche l'élément dans la catégorie en fonction de son id
            $articleToDelete = searchElementByIsId($decodedContent[$category], $articleId);

            // Je vérifie si l'élement a bien été trouvé
            if ($articleToDelete != null) {
                // Je recherche la clé de l'élément dans mon tableau
                $keyToDelete = array_search($articleToDelete, $decodedContent[$category]);

                // Supprimer l'article avec l'ID spécifié de la catégorie spécifiée
                unset($decodedContent[$category][$keyToDelete]);

                // Réorganiser les clés du tableau après la suppression
                $decodedContent[$category] = array_values($decodedContent[$category]);

                // Encoder le tableau en JSON
                $newJsonContent = json_encode($decodedContent, JSON_UNESCAPED_UNICODE);

                // Écrire le nouveau contenu dans le fichier JSON
                if (file_put_contents($jsonFile, $newJsonContent) !== false) {
                    // Retourner le nouveau contenu JSON
                    return $newJsonContent;
                } else {
                    echo "Erreur lors de l'écriture dans le fichier JSON.";
                    return;  // Ajout de cette ligne pour éviter l'exécution du code suivant en cas d'erreur
                }
            } else {
                echo "L'ID de l'article n'existe pas.";
                return;  // Ajout de cette ligne pour éviter l'exécution du code suivant en cas d'erreur
            }
        } else {
            echo "La catégorie n'existe pas.";
            return;  // Ajout de cette ligne pour éviter l'exécution du code suivant en cas d'erreur
        }
    } else {
        echo "Le fichier data.json n'existe pas.";
        return;  // Ajout de cette ligne pour éviter l'exécution du code suivant en cas d'erreur
    }

    // En cas d'erreur, retourner le contenu JSON actuel
    return $jsonContent;
}
?>
