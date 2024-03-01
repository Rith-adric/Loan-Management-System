import React,{useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
 
        axios.post('http://localhost/ReactAPI/loan.php', inputs).then(function(response){
            alert("Loan added successfully");
            console.log(response.data);
            navigate('/Loans');
        });
         
    }
    return (
      <div>
        <div className="content-wrapper vh-100">
          <div className="row">
            <div className="col-11 col-lg-11">
              <div className="card" style={{ marginLeft: "90px" }}>
                <div className="Inform">
                  <h4 className="animate-text"> Add New Loans Information </h4>
                </div>
                <Form className="AddPayer">
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formborrowname" className="AddPayer">
                      <Form.Label>Borrow Name</Form.Label>
                      <Form.Control type="text" name="borrowname" required 
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formborrowcontact" className="AddPayer">
                      <Form.Label>Borrow Contact</Form.Label>
                      <Form.Control type="text" name="borrowcontact" required 
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formborrowaddress" className="AddPayer">
                      <Form.Label>Borrow Address</Form.Label>
                      <Form.Control type="text" name="borrowaddress" required 
                        onChange={handleChange}
                      />
                    </Form.Group>

                  </Row>

                  <Row className="mb-3">

                    <Form.Group as={Col} controlId="formloanreference" className="AddPayer">
                      <Form.Label>Loan Details Reference</Form.Label>
                      <Form.Control type="number" name="loanreference" required 
                        onChange={handleChange}
                      />

                    </Form.Group>

                    <Form.Group as={Col} controlId="formloanloantype" className="AddPayer">
                      <Form.Label>Loan Type Details</Form.Label>
                      <Form.Control  type="text" name="loanloantype" required 
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formloanplan" className="AddPayer">
                      <Form.Label>Loan Plan Details</Form.Label>
                      <Form.Control  type="text" name="loanplan" required 
                        onChange={handleChange}
                      />
                    </Form.Group>

                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formloandetailsamount" className="AddPayer">
                      <Form.Label>Loan Amount Details</Form.Label>
                      <Form.Control type="number" name="loandetailsamount" required 
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formloantotalpayable" className="AddPayer">
                      <Form.Label>Loan Total Payable Details</Form.Label>
                      <Form.Control type="number" name="loantotalpayable" required 
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formloanmonthlypable" className="AddPayer">
                      <Form.Label>Loan Monthly Payable Details</Form.Label>
                      <Form.Control type="number" name="loanmonthlypable" required 
                        onChange={handleChange}
                      />
                    </Form.Group>

                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formloanoverduepayable" className="AddPayer">
                      <Form.Label>Loan Overdue Payable Details</Form.Label>
                      <Form.Control type="number" name="loanoverduepayable" required 
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formloandatereleased" className="AddPayer">
                      <Form.Label>Loan Date Released</Form.Label>
                      <Form.Control type="date" name="loandatereleased" required 
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formnextpaydate" className="AddPayer">
                      <Form.Label>Next Payment Date</Form.Label>
                      <Form.Control type="date" name="nextpaydate" required 
                        onChange={handleChange}
                      />
                    </Form.Group>

                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formnextmonthlyamount" className="AddPayer">
                      <Form.Label>Next Payment Monthly Amount</Form.Label>
                      <Form.Control type="number" name="nextmonthlyamount" required 
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formnextpaypenalty  " className="AddPayer">
                      <Form.Label>Loan Payment Penalty</Form.Label>
                      <Form.Control type="number" name="nextpaypenalty" required 
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formnextpayableamount" className="AddPayer">
                      <Form.Label>Next Payable Amount</Form.Label>
                      <Form.Control type="number" name="nextpayableamount" required 
                        onChange={handleChange}
                      />
                    </Form.Group>

                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formreleased" className="AddPayer">
                      <Form.Label>Status</Form.Label>
                      <Form.Control type="text" name="released" required 
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="AddPayer" id="formGridCheckbox">
                      <Form.Check type="checkbox" label="I Agree all information" />
                    </Form.Group>

                  </Row>

                  <Button variant="primary" type="submit" className="AddPayer" onClick={handleSubmit}>
                    Submit
                  </Button>

                  <Link to="/Loans" className="btn btn-back">
                    <h6>Back</h6>
                  </Link>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Addusers;