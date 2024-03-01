<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
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
    case "GET":
        $sql = "SELECT * FROM   borrowers";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = " . $conn->real_escape_string($path[3]);
        }
        $result = $conn->query($sql);
        $users = ($result->num_rows > 0) ? $result->fetch_all(MYSQLI_ASSOC) : [];
        echo json_encode($users);
        break;

    case "POST":
        $user = json_decode(file_get_contents('php://input'));

        $sql = "INSERT INTO borrowers (username, email, address, contactnumber) VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        
        $stmt->bind_param('ssss', $user->username, $user->email, $user->address, $user->contact);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Borrower added successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to add borrower.'];
        }
        echo json_encode($response);
        break;


    case "PUT":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE borrowers SET username=?, email=?, address=?, contactnumber=? WHERE id=?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('ssssi', $user->username, $user->email, $user->address, $user->contactnumber, $user->id);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $id = $conn->real_escape_string($path[3]);
        $sql = "DELETE FROM   borrowers WHERE id = $id";

        if ($conn->query($sql)) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}
