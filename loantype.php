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
        $sql = "SELECT * FROM tblloantype";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = " . $conn->real_escape_string($path[3]);
        }
        $result = $conn->query($sql);
        $users = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($users);
        break;

    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        if (!$user) {
            $response = ['status' => 0, 'message' => 'Invalid JSON data.'];
            echo json_encode($response);
            break;
        }

        $sql = "INSERT INTO tblloantype (typename, description) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('ss', $user->typename, $user->description);

        if ($stmt->execute()) {
            $lastInsertId = $stmt->insert_id;
            $response = ['status' => 1, 'message' => 'Record inserted successfully.', 'id' => $lastInsertId];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to insert record.'];
        }
        echo json_encode($response);
        break;

    case "PUT":
        $user = json_decode(file_get_contents('php://input'));
        if (!$user) {
            $response = ['status' => 0, 'message' => 'Invalid JSON data.'];
            echo json_encode($response);
            break;
        }

        $sql = "UPDATE tblloantype SET typename=?, description=? WHERE id=?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('ssi', $user->typename, $user->description, $user->id);

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
        $sql = "DELETE FROM tblloantype WHERE id = $id";

        if ($conn->query($sql)) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}
?>
