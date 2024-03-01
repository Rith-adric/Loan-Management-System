import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Payments.css';
import '../css/Users.css';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [inputs, setInputs] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    role: '',
  });

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios.get(`http://localhost/ReactAPI/users.php/${id}`)
      .then(function (response) {
        console.log(response.data);
        setInputs(response.data[0]);
      })
      .catch(function (error) {
        console.error('Error fetching user:', error);
      });
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Send a PUT request to update the user details
    axios.put(`http://localhost/ReactAPI/users.php`, inputs)
      .then(function (response) {
        console.log(response.data);
        alert("User Updated successfully!");
        navigate('/Users');
      })
      .catch(function (error) {
        console.error('Error updating user:', error);
      });
  };
  


  return (
    <div>
      <div className="content-wrapper vh-100">
        <div className="row">
          <div className="col-11 col-lg-11">
            <div className="card" style={{ marginLeft: "90px" }}>
              <div className="Inform">
                <h4 className="animate-text"> Update User Information </h4>
              </div>
              <Form className="AddPayer" onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formname" className="AddPayer">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" required value={inputs.name}
                     onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formage" className="AddPayer">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" name="age" required value={inputs.age}
                      onChange={(e) => setInputs({ ...inputs, age: e.target.value })}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formEmail" className="AddPayer">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" required value={inputs.email}
                      onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formPassword" className="AddPayer">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" required value={inputs.password}
                      onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formRole" className="AddPayer">
                    <Form.Label>Role</Form.Label>
                    <Form.Control  type="text" name="role" required value={inputs.role}
                      onChange={(e) => setInputs({ ...inputs, role: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group className="AddPayer" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="I Agree all information" />
                  </Form.Group>
                </Row>
                <Button variant="primary" type="submit" className="AddPayer">
                  Submit
                </Button>

                <Link to="/Users" className="btn btn-back">
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

export default EditUser;
