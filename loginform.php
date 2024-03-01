<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
// Establish connection to your MySQL database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dbloansystem";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    // If connection fails, terminate script and display error message
    die("Connection failed: " . $conn->connect_error);
}

// Get POST data
$data = json_decode(file_get_contents("php://input"));

// Check if data is received properly and has expected keys
if ($data !== null && isset($data->username) && isset($data->password)) {
    // Extract username and password from received data
    $username = $data->username;
    $password = $data->password;

    // Perform SQL query to check user credentials
    $sql = "SELECT * FROM  tblusers WHERE name='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // If user is found in the database, authentication is successful
        $response = array("success" => true, "message" => "Login successful");
    } else {
        // If no matching user is found, authentication fails
        $response = array("success" => false, "message" => "Invalid username or password");
    }
} else {
    // If no data is received or if the expected keys are not set, indicate that authentication failed
    $response = array("success" => false, "message" => "Invalid data received");
}

// Return response as JSON
header('Content-Type: application/json');
echo json_encode($response);

// Close database connection
$conn->close();
?>
