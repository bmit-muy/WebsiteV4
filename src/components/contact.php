<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "muy.bm.it.contact@gmail.com";
    $subject = "New Form Submission";
    $messageBody = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $messageBody, $headers)) {
        http_response_code(200); // Success
    } else {
        http_response_code(500); // Server error
    }
} else {
    http_response_code(400); // Bad request
}
?>
