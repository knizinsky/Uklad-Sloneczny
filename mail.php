<?php

$name = $_POST["name"];
$from = $_POST["email"];
$subject = "Wiadomość z formularza";
$to = "";
$message = $_POST["msg"];

$txt = "Imię: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "Treść: " . $message;

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers)

?>