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
    // GET case: Retrieve loans data from table tblloans
    case "GET":
        $sql = "SELECT * FROM tblloans";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = " . $conn->real_escape_string($path[3]);
        }
        $result = $conn->query($sql);
        $users = ($result->num_rows > 0) ? $result->fetch_all(MYSQLI_ASSOC) : [];
        echo json_encode($users);
        break;

    // POST case: Insert a new loan record
case "POST":
    $user = json_decode(file_get_contents('php://input'));

    $sql = "INSERT INTO tblloans (
        borrowname, 
        borrowcontact, 
        borrowaddress, 
        loanreference, 
        loanloantype, 
        loanplan, 
        loandetailsamount, 
        loantotalpayable, 
        loanmonthlypable, 
        loanoverduepayable, 
        loandatereleased, 
        nextpaydate, 
        nextmonthlyamount, 
        nextpaypenalty, 
        nextpayableamount, 
        released
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";


    $stmt = $conn->prepare($sql);
    $stmt->bind_param(
        'ssssssssssssssssi',
        $user->borrowname,
        $user->borrowcontact,
        $user->borrowaddress,
        $user->loanreference,
        $user->loanloantype,
        $user->loanplan,
        $user->loandetailsamount,
        $user->loantotalpayable,
        $user->loanmonthlypable,
        $user->loanoverduepayable,
        $user->loandatereleased,
        $user->nextpaydate,
        $user->nextmonthlyamount,
        $user->nextpaypenalty,
        $user->nextpayableamount,
        $user->released
    );

    if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;
        
    // PUT case: Update a Loan record
    case "PUT":
        $user = json_decode(file_get_contents('php://input'));

        if (!isset($user->id)) {
            $response = ['status' => 0, 'message' => 'ID not provided for update.'];
            echo json_encode($response);
            exit();
        }

        $sql = "UPDATE tblloans SET 
            borrowname=?, 
            borrowcontact=?, 
            borrowaddress=?, 
            loanreference=?, 
            loanloantype=?, 
            loanplan=?, 
            loandetailsamount=?, 
            loantotalpayable=?, 
            loanmonthlypable=?, 
            loanoverduepayable=?, 
            loandatereleased=?, 
            nextpaydate=?, 
            nextmonthlyamount=?, 
            nextpaypenalty=?, 
            nextpayableamount=?, 
            released=?
            WHERE id=?";
            
        $stmt = $conn->prepare($sql);

        $stmt->bind_param(
            'ssssssssssssssssi',
            $user->borrowname,
            $user->borrowcontact,
            $user->borrowaddress,
            $user->loanreference,
            $user->loanloantype,
            $user->loanplan,
            $user->loandetailsamount,
            $user->loantotalpayable,
            $user->loanmonthlypable,
            $user->loanoverduepayable,
            $user->loandatereleased,
            $user->nextpaydate,
            $user->nextmonthlyamount,
            $user->nextpaypenalty,
            $user->nextpayableamount,
            $user->released,
            $user->id
        );

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }

        echo json_encode($response);
        break;

    // DELETE case: Delete a loan record
    case "DELETE":
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $id = $conn->real_escape_string($path[3]);
        $sql = "DELETE FROM tblloans WHERE id = $id";

        if ($conn->query($sql)) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}
?>
