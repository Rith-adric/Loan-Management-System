import React,{useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Payments.css'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
 
const Addpayment = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
 
    const handleSubmit = (event) => {
        event.preventDefault();
 
        axios.post('http://localhost/ReactAPI/payment.php', inputs).then(function(response){
            alert("Payment added successfully");
            console.log(response.data);
            navigate('/Payment');
        });
         
    }
    return (
        <div>
        <div className="content-wrapper vh-100">
            <div className="row">
                    <div className="col-11 col-lg-11">
                        <div className="card" style={{marginLeft: "90px"}}>
                        <div className="Inform">
                            <h4 className="animate-text">  Insert Payment Information </h4>
                        </div>
                        <Form className="AddPayer">
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formLoans" className="AddPayer">
                            <Form.Label>Loans reference Number</Form.Label>
                            <Form.Control type="number" name="LoanReferenceNo" required 
                                          onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formPayee" className="AddPayer">
                            <Form.Label>Payee Name</Form.Label>
                            <Form.Control type="text" name="Payee" required 
                                          onChange={handleChange} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formAmount" className="AddPayer">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" name="Amount" required 
                                          onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formPPenalty" className="AddPayer">
                            <Form.Label>Penalty</Form.Label>
                            <Form.Control type="number" name="Penalty" required 
                                          onChange={handleChange}/>
                            </Form.Group>
                        
                            <Form.Group className="AddPayer" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="I Agree all information" />
                            </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit" className="AddPayer" onClick={handleSubmit}>
                                Submit
                            </Button>
                            <Link to="/Payment" className="btn btn-back"><h6>Back</h6></Link>
                        </Form>
                        </div>  
                    </div>
                </div>
            </div>
    </div>
    )
}
export default Addpayment;