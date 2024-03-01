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
    // GET case: Retrieve users data from table users
    case "GET":
        $sql = "SELECT * FROM tblusers";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = " . $conn->real_escape_string($path[3]);
        }
        $result = $conn->query($sql);
        $users = ($result->num_rows > 0) ? $result->fetch_all(MYSQLI_ASSOC) : [];
        echo json_encode($users);
        break;

    // POST case: Insert a new user record
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO tblusers (name, age, email, password, role) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('sssss', $user->fullname, $user->age, $user->email, $user->password, $user->role);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;
        
    // PUT case: Update a user record
    case "PUT":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE tblusers SET name=?, age=?, email=?, password=?, role=? WHERE id=?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('sssssi', $user->name, $user->age, $user->email, $user->password, $user->role, $user->id);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }

        echo json_encode($response);
        break;


    // DELETE case: Delete a user record
    case "DELETE":
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $id = $conn->real_escape_string($path[3]);
        $sql = "DELETE FROM tblusers WHERE id = $id";

        if ($conn->query($sql)) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}
?>
