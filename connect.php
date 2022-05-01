<?php

    if(isset($_POST['email']) && $_POST['message'] !="") {
        $Name = $_POST['name'];
        $Email = $_POST['email'];
        $Subject = $_POST['subject'];
        $Message = $_POST['message'];

        $to = "stefan.cineparu@outlook.com";
        $body = "";

        $body .= "From: ".$Name. "\r\n";
        $body .= "Email: ".$Email. "\r\n";
        $body .= "Message: ".$Message. "\r\n";

        mail($to,$Subject,$body);
    }

?>