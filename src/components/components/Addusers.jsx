import React,{useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Payments.css'
import '../css/Users.css'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
 
const Addusers = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
 
    const handleSubmit = (event) => {
        event.preventDefault();
 
        axios.post('http://localhost/ReactAPI/users.php', inputs).then(function(response){
            alert("User added successfully");
            console.log(response.data);
            navigate('/Users');
        });
         
    }
    return (
        <div>
        <div className="content-wrapper vh-100">
            <div className="row">
                    <div className="col-11 col-lg-11">
                        <div className="card" style={{marginLeft: "90px"}}>
                        <div className="Inform">
                            <h4 className="animate-text">  Insert User Information </h4>
                        </div>
                        <Form className="AddPayer">
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formfullname" className="AddPayer">
                            <Form.Label>FullName</Form.Label>
                            <Form.Control type="text" name="fullname" required 
                                          onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formage" className="AddPayer">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" name="age" required 
                                          onChange={handleChange} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formemail" className="AddPayer">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" required 
                                          onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formpassword" className="AddPayer">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" required 
                                          onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formrole" className="AddPayer">
                            <Form.Label>Role</Form.Label>
                            <Form.Control type="text" name="role" required 
                                          onChange={handleChange}/>
                            </Form.Group>
                        
                            <Form.Group className="AddPayer" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="I Agree all information" />
                            </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit" className="AddPayer" onClick={handleSubmit}>
                                Submit
                            </Button>
                            <Link to="/Users" className="btn btn-back"><h6>Back</h6></Link>
                        </Form>
                        </div>  
                    </div>
                </div>
            </div>
    </div>
    )
}
export default Addusers;