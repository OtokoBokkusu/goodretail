<?php
  $firstName = $_POST["FirstName"];
  $lastName = $_POST["LastName"];
  $email = $_POST["Email"];
  $message = $_POST["Message"];

  $ownEmail = "kornienko-web@yandex.ru";

  $subject = "Message from the GoodRetail website";
  $msg = "Form Data:\n" ."First Name: $firstName\n" ."Last Name: $lastName\n" ."Email: $email\n" ."Message: $message";
  $headers = "Content-type: text/plain; charset=UTF-8" . "\r\n";

  if(!empty($firstName) && !empty($lastName) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)){
    mail($ownEmail, $subject, $msg, $headers);
    echo "Form Data:\n" ."First Name: $firstName\n" ."Last Name: $lastName\n" ."Email: $email\n" ."Message: $message";
    }
?>