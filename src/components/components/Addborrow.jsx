import React,{useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Payments.css'
import '../css/Users.css'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
 
const Addborrow = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
 
    const handleSubmit = (event) => {
        event.preventDefault();
 
        axios.post('http://localhost/ReactAPI/borrow.php', inputs).then(function(response){
            alert("User added successfully");
            console.log(response.data);
            navigate('/Borrow');
        });
         
    }
    return (
        <div>
        <div className="content-wrapper vh-100">
            <div className="row">
                    <div className="col-11 col-lg-11">
                        <div className="card" style={{marginLeft: "90px"}}>
                        <div className="Inform">
                            <h4 className="animate-text">  Insert Borrow Information </h4>
                        </div>
                        <Form className="AddPayer">
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formusername" className="AddPayer">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="test" name="username" required 
                                          onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formemail" className="AddPayer">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" required 
                                          onChange={handleChange} />
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            
                        <Form.Group as={Col} controlId="formaddress" className="AddPayer">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" name="address" required 
                                          onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formcontact" className="AddPayer">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="number" name="contact" required 
                                          onChange={handleChange} />
                            </Form.Group>
                        
                            <Form.Group className="AddPayer" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="I Agree all information" />
                            </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit" className="AddPayer" onClick={handleSubmit}>
                                Submit
                            </Button>
                            <Link to="/Borrow" className="btn btn-back"><h6>Back</h6></Link>
                        </Form>
                        </div>  
                    </div>
                </div>
            </div>
    </div>
    )
}
export default Addborrow;