import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Payments.css';
import '../css/Users.css'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Editpayment = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [inputs, setInputs] = useState({
    LoanReferenceNo: '',
    Payee: '',
    Amount: '',
    Penalty: '',
  });

  useEffect(() => {
    // Fetch payment details when the component mounts
    getUser();
  }, []);

  function getUser() {
    axios.get(`http://localhost/ReactAPI/payment.php/${id}`).then(function (response) {
      console.log(response.data);
      setInputs(response.data[0]); 
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a PUT request to update the payment details
    axios.put(`http://localhost/ReactAPI/payment.php/${id}/update`, inputs).then(function (response) {
      console.log(response.data);
      alert("Record updated successfully.");
      navigate('/Payment');
    });
  };

  return (
    <div>
      <div className="content-wrapper vh-100">
        <div className="row">
          <div className="col-11 col-lg-11">
            <div className="card" style={{ marginLeft: "90px" }}>
              <div className="Inform">
                <h4 className="animate-text"> Update Payment Information </h4>
              </div>
              <Form className="AddPayer" onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formLoans" className="AddPayer">
                    <Form.Label>Loans reference Number</Form.Label>
                    <Form.Control type="number" name="LoanReferenceNo" required value={inputs.LoanReferenceNo}
                      onChange={(e) => setInputs({ ...inputs, LoanReferenceNo: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formPayee" className="AddPayer">
                    <Form.Label>Payee Name</Form.Label>
                    <Form.Control type="text" name="Payee" required  value={inputs.Payee}
                      onChange={(e) => setInputs({ ...inputs, Payee: e.target.value })}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formAmount" className="AddPayer">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" name="Amount" required value={inputs.Amount}
                      onChange={(e) => setInputs({ ...inputs, Amount: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formPenalty" className="AddPayer">
                    <Form.Label>Penalty</Form.Label>
                    <Form.Control type="number" name="Penalty" required value={inputs.Penalty}
                      onChange={(e) => setInputs({ ...inputs, Penalty: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group className="AddPayer" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="I Agree all information" />
                  </Form.Group>
                </Row>
                <Button variant="primary" type="submit" className="AddPayer">
                  Submit
                </Button>

                <Link to="/Payment" className="btn btn-back">
                  <h6>Back</h6>
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editpayment;
