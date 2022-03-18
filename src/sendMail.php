<?php

if ($_GET['ajax']){

    $name = trim(stripslashes(htmlspecialchars($_GET["name"])));
    $email = trim(stripslashes(htmlspecialchars($_GET["email"])));
    $message = $_GET["msg"];
    $objet = trim(stripslashes(htmlspecialchars($_GET["subject"])));

    if (!empty($name)

        && strlen($name) <= 50
        && !empty($objet)
        && strlen($objet) <= 100
        && !empty($message)
        && !empty($email)
        && filter_var($email, FILTER_VALIDATE_EMAIL)) {

        if (preg_match('/<\/?(.|\s|\S)*?>/', $objet) == false && preg_match('/<\/?(.|\s|\S)*?>/', $message) == false
            && preg_match('/<\/?(.|\s|\S)*?>/', $name) == false) {
            $to = "Bretonludovic40@gmail.com"; // Change this email to your //
            $subject = "$objet:  $name";
            $body = "You have received a new message from your website contact form.\n\n" . "Here are the details:\n\nName: $name\n\n\nEmail: $email\n\nSubject: $objet\n\nMessage: $message";
            $header = "From: portfolio.bretonludovic@hotmail.fr". "\r\n" .
                "Reply-To: $email" ;
            if(mail($to, $subject, $body, $header)) {
                $tab = ['Response' => 'success', 'Message' => 'Votre mail a été envoyé'];
            } else {
                $tab = ['Response' => 'error', 'Message' => 'Le mail n\'a pas été envoyé'];
            }
        } else {
            $tab = ['Response' => 'error', 'Message' => 'Les balises ne sont pas autorisées'];
        }
    } else {
        $tab = ['Response' => 'error', 'Message' => 'Merci de remplir les champs'];
    }

    echo json_encode($tab);

    

} else {
    $tab = ['Response' => 'error', 'Message' => 'Votre formulaire n\'a pas été validé correctement'];
    echo json_encode($tab);
}

