import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Payments.css';
import '../css/Users.css'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Editborrow = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    address: '',
    contactnumber: '',
  });

  useEffect(() => {
    // Fetch payment details when the component mounts
    getUser();
  }, []);

  function getUser() {
    axios.get(`http://localhost/ReactAPI/borrow.php/${id}`).then(function (response) {
      console.log(response.data);
      setInputs(response.data[0]); 
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a PUT request to update the payment details
    axios.put(`http://localhost/ReactAPI/borrow.php/${id}/update`, inputs).then(function (response) {
      console.log(response.data);
      alert("Borrow updated successfully");
      navigate('/Borrow');
    });
  };

  return (
    <div>
      <div className="content-wrapper vh-100">
        <div className="row">
          <div className="col-11 col-lg-11">
            <div className="card" style={{ marginLeft: "90px" }}>
              <div className="Inform">
                <h4 className="animate-text"> Update Borrower Information </h4>
              </div>
              <Form className="AddPayer" onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formusername" className="AddPayer">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" required value={inputs.username}
                      onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formemail" className="AddPayer">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" required  value={inputs.email}
                      onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formaddresst" className="AddPayer">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" required value={inputs.address}
                      onChange={(e) => setInputs({ ...inputs, address: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formcontact" className="AddPayer">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="number" name="contact" required value={inputs.contactnumber}
                      onChange={(e) => setInputs({ ...inputs, contactnumber: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group className="AddPayer" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="I Agree all information" />
                  </Form.Group>
                </Row>
                <Button variant="primary" type="submit" className="AddPayer">
                  Submit
                </Button>

                <Link to="/Borrow" className="btn btn-back">
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

export default Editborrow;
