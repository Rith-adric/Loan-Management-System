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
    // GET case: Retrieve payment data from table payment
    case "GET":
        $sql = "SELECT * FROM tblpayments";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = " . $conn->real_escape_string($path[3]);
        }
        $result = $conn->query($sql);
        $users = ($result->num_rows > 0) ? $result->fetch_all(MYSQLI_ASSOC) : [];
        echo json_encode($users);
        break;

    // POST case: Insert a new payment record
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        var_dump($user);
        $sql = "INSERT INTO tblpayments (LoanReferenceNo, Payee, Amount, Penalty) VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $Penalty = (double) $user->Penalty;
        $stmt->bind_param('sssd', $user->LoanReferenceNo, $user->Payee, $user->Amount, $Penalty);
        echo json_encode($response);
        break;

    // PUT case: Update a payment record
    case "PUT":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE tblpayments SET LoanReferenceNo=?, Payee=?, Amount=?, Penalty=? WHERE id=?";
        $stmt = $conn->prepare($sql);
        $Penalty = (double) $user->Penalty;
        $stmt->bind_param('ssssi', $user->LoanReferenceNo, $user->Payee, $user->Amount, $Penalty, $user->id);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    // DELETE case: Delete a payment record
    case "DELETE":
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $id = $conn->real_escape_string($path[3]);
        $sql = "DELETE FROM tblpayments WHERE id = $id";
        echo json_encode($response);
        break;
}
?>
