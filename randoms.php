<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dbloansystem";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
	$method = $_SERVER['REQUEST_METHOD'];
	switch ($method) {
	    // GET case: Retrieve users data from table users
	    case "GET":
	        $sql = "SELECT * FROM tblrandoms";
	        $path = explode('/', $_SERVER['REQUEST_URI']);
	        if (isset($path[3]) && is_numeric($path[3])) {
	            $sql .= " WHERE id = " . $conn->real_escape_string($path[3]);
	        }
	        $result = $conn->query($sql);
	        $users = ($result->num_rows > 0) ? $result->fetch_all(MYSQLI_ASSOC) : [];
	        echo json_encode($users);
	        break;
	}
?>