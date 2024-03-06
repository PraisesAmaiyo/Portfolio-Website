<?php
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $name = $_POST["name"];
//     $email = $_POST["email"];
//     $message = $_POST["message"];
    
//     // Set up email parameters
//     $to = "amaiyo.praises@gmail.com";
//     $subject = "New Message from Contact Form";
//     $body = "Name: $name\n;
//     $Email: $email\n;
//     $Message: $message";
//     $headers = "From: $email";
    
//     // Send email
//     if (mail($to, $subject, $body, $headers)) {
//         echo "Thank you! Your message has been sent.";
//     } else {
//         echo "Oops! Something went wrong.";
//     }
// }



$name = $_POST['name'];
$email = $_POST['email'];
// $subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "amaiyo.praises@gmail.com";

mail($recipient, $message, $mailheader) or die("Error!");

echo'

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact form</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Thank you for contacting me. I will get back to you as soon as possible!</h1>
        <p class="back">Go back to the <a href="index.html">homepage</a>.</p>
        
    </div>
</body>
</html>



';

?>
