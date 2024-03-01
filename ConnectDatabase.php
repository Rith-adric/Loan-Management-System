<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dbloansystem";
$conn = new mysqli($servername, $username, $password, $dbname);
    if (!$conn) {
        die("Connection is error, Please connect again!!" .mysql_error());
    }
        // else {
        //     echo"Connection is succesful !!";
        // }
?>
    <!-- include_once 'ConnectDatabase.php'; -->