<?php
    $email = $_POST['email'];
    $first = $_POST['first'];
    $last = $_POST['last'];
    $business = $_POST['business'];
    $message = $_POST['message'];
    echo "Email $email First $first Last $last Business $business Message $message";
    mail('jereme.daniels@gmail.com', 'Customer', $message);
    header("Location: ../contact.php");
?>