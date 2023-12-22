<?php 
/* <!-- Attention, si on utilise xamp, il faut les extension pour pouvoir utiliser mongoDB -->
<!-- no sql --> */
use MongoDB\BSON\ObjectId;
use MongoDB\Driver\Query;
use MongoDB\Driver\Manager;
/**
 * Récupère la connexion à mongodb
 *
 * @return Manager
 */
function connexionMongo(): Manager {
    $config = require __DIR__."/../config/_blogMongoConfig.php";
    // Je construit mon DSN (data source name (string qui sert à indiquer la source de donnée)), celui de mongodb prend la syntaxe suivante : "mongodb://nomUser:password@host:port"
    $dsn = "mongodb://{$config['user']}:{$config['password']}@{$config['host']}:{$config['port']}";
    try {
        $mongo = new Manager($dsn);
        return $mongo;
    } catch (Exception $e) {
        echo "Exception reçue : {$e->getMessage()}";
    }
}

/**
 * Récupère le résultat d'une requête
 *
 * @param string $collection
 * @param Query $query
 * @param string $idName
 * @param boolean $one
 * @return array
 */
function queryResult(string $collection, Query $query, string $idName, bool $one = false): array {
    global $mongo;

    // On exécute la requête donné en snd argument, sur la collection en 1er argument
    $cursor = $mongo->executeQuery($collection, $query);

    // Pour obtenir nos résultats sous forme de tableau associatif :
    $cursor->setTypeMap(["root"=>"array"]);

    // On retourne le résultat sous forme de tableau :
    $resultat = $cursor->toArray();

    // On change l'objet "objetId" en string :
    $resultat = setId($resultat, $idName);
    
    // Si le boolean "$one" est à true et que l'on a au moins 1 résultat, je retourne le 1er résultat seulement
    if($one && count($resultat)) return $resultat[0];
    return $resultat;
}

/**
 * Traduit l'object ID de mongoDB en simple string pour un tableau de résultat
 *
 * @param array $result
 * @param string $idName
 * @return void
 */
function setId(array $result, string $idName): array {
    for($i=0; $i < count($result); $i++) {
        $result[$i][$idName] = (string)$result[$i]["_id"];
    }
    return $result;
}

/**
 * Transfrome l'id en object id;
 *
 * @param string $id
 * @return ObjectId
 */
function getId(string $id): ObjectId {
    return new ObjectId((string)$id);
}

/**
 * filtre le string passé en paramètre
 *
 * @param string $data
 * @return string
 */
function clean_data(string $data): string {
    $data = trim($data);
    $data = stripslashes($data);
    return htmlspecialchars($data);
    // return htmlspecialchars(stripslashes(trim($data)));  même chose que les 3 lignes du dessus 
}
?>