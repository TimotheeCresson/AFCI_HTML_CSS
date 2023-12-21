<!-- voir le dossier Vendor 
voir sur mailtrap pour avoir certaines infos-->
<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
// l'autoload s'occupera de require automatiquement les classes demandées

require __DIR__."/../../vendor/autoload.php";


/**
 * Envoi un mail
 *
 * @param string $from
 * @param string $to
 * @param string $subject
 * @param string $body
 * @return string
 */
function sendMail(string $from, string $to, string $subject, string $body): string {
    $mail = new PHPMailer(true); // activer les messages d'erreur par exception
    try {
        /* 
            On active l'utilisation de SMTP (Simple Mail Transfer Protocol)
        */
        $mail->isSMTP();

        // On indique notre serveur de mail :
        $mail->Host = "sandbox.smtp.mailtrap.io";

        // On active l'authentification par SMTP:
        $mail->SMTPAuth = true;

        //On indique le port du serveur de mail :
        $mail->Port = 0;

        // on indique les informations d'authentification à notre serveur de mail :
        $mail->Username = "1e77adf0ab1df0";

        $mail->Password = "";
        
        /* 
            Permet d'avoir de nombreux détails sur le déreoulement de l'envoi de mail: 
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        */
        /* 
            Quel type de chiffrement sera utilisé pour envoyer les mails (ici je ne l'active pas car il peut poser problème avec le serveur de mail que j'ai choisi)
            $mail->SMTPSecure = PHPMAILER::ENCRYPTION_SMTPS
        */

        // Paramètre l'expéditeur du mail
        $mail->setFrom($from);

        // Paramètre un destinataire
        $mail->addAddress($to);

        // Active le format HTML pour le mail
        $mail->isHTML(true);

        // Le sujet du mail 
        $mail->Subject = $subject;

        // Le corps du mail :
        $mail->Body = $body;

        /* 
            On peut ajouter un "AltBody" dans le cas où le client de l'utilisateur ne gère pas le HTML
        */
        $mail->send();
        return "Message Envoyé";

    } catch (Exception $e) {
        return "Le message n'a pas pu être envoyé.
        Mailer Error : {$mail->ErrorInfo}";
    }
}