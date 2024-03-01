import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Payments.css';
import '../css/Users.css';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Editloans = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [inputs, setInputs] = useState({
    borrowname: '', 
    borrowcontact: '', 
    borrowaddress: '', 
    loanreference: '', 
    loanloantype: '', 
    loanplan: '', 
    loandetailsamount: '', 
    loantotalpayable: '', 
    loanmonthlypable: '', 
    loanoverduepayable: '', 
    loandatereleased: '', 
    nextpaydate: '', 
    nextmonthlyamount: '', 
    nextpaypenalty: '', 
    nextpayableamount: '', 
    released: '',
  });

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios.get(`http://localhost/ReactAPI/loan.php/${id}`)
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

    // Send a PUT request to update the loan details
    axios.put(`http://localhost/ReactAPI/loan.php/`, inputs)
      .then(function (response) {
        console.log(response.data);
        alert("Loan Updated successfully!");
        navigate('/Loans');
      })
      .catch(function (error) {
        console.error('Error updating loan:', error);
      });
  };
  
  
  return (
    <div>
      <div className="content-wrapper vh-100">
        <div className="row">
          <div className="col-11 col-lg-11">
            <div className="card" style={{ marginLeft: "90px" }}>
              <div className="Inform">
                <h4 className="animate-text"> Update Loans Information </h4>
              </div>
              <Form className="AddPayer" onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formname" className="AddPayer">
                    <Form.Label>Borrow Name</Form.Label>
                    <Form.Control type="text" name="borrowname" required value={inputs.borrowname}
                     onChange={(e) => setInputs({ ...inputs, borrowname: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formage" className="AddPayer">
                    <Form.Label>Borrow Contact</Form.Label>
                    <Form.Control type="number" name="borrowcontact" required value={inputs.borrowcontact}
                      onChange={(e) => setInputs({ ...inputs, borrowcontact: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formEmail" className="AddPayer">
                    <Form.Label>Borrow Address</Form.Label>
                    <Form.Control type="text" name="borrowaddress" required value={inputs.borrowaddress}
                      onChange={(e) => setInputs({ ...inputs, borrowaddress: e.target.value })}
                    />
                  </Form.Group>

                </Row>

                <Row className="mb-3">

                  <Form.Group as={Col} controlId="formPassword" className="AddPayer">
                    <Form.Label>Loan Details Reference</Form.Label>
                    <Form.Control type="number" name="loanreference" required value={inputs.loanreference}
                      onChange={(e) => setInputs({ ...inputs, loanreference: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formRole" className="AddPayer">
                    <Form.Label>Loan Type Details</Form.Label>
                    <Form.Control  type="text" name="loanloantype" required value={inputs.loanloantype}
                      onChange={(e) => setInputs({ ...inputs, loanloantype: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formRole" className="AddPayer">
                    <Form.Label>Loan Plan Details</Form.Label>
                    <Form.Control  type="text" name="loanplan" required value={inputs.loanplan}
                      onChange={(e) => setInputs({ ...inputs, loanplan: e.target.value })}
                    />
                  </Form.Group>

                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formname" className="AddPayer">
                    <Form.Label>Loan Amount Details</Form.Label>
                    <Form.Control type="number" name="loandetailsamount" required value={inputs.loandetailsamount}
                     onChange={(e) => setInputs({ ...inputs, loandetailsamount: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formage" className="AddPayer">
                    <Form.Label>Loan Total Payable Details</Form.Label>
                    <Form.Control type="number" name="loantotalpayable" required value={inputs.loantotalpayable}
                      onChange={(e) => setInputs({ ...inputs, loantotalpayable: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formEmail" className="AddPayer">
                    <Form.Label>Loan Monthly Payable Details</Form.Label>
                    <Form.Control type="number" name="loanmonthlypable" required value={inputs.loanmonthlypable}
                      onChange={(e) => setInputs({ ...inputs, loanmonthlypable: e.target.value })}
                    />
                  </Form.Group>

                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formname" className="AddPayer">
                    <Form.Label>Loan Overdue Payable Details</Form.Label>
                    <Form.Control type="number" name="loanoverduepayable" required value={inputs.loanoverduepayable}
                     onChange={(e) => setInputs({ ...inputs, loanoverduepayable: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formage" className="AddPayer">
                    <Form.Label>Loan Date Released</Form.Label>
                    <Form.Control type="date" name="loandatereleased" required value={inputs.loandatereleased}
                      onChange={(e) => setInputs({ ...inputs, loandatereleased: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formEmail" className="AddPayer">
                    <Form.Label>Next Payment Date</Form.Label>
                    <Form.Control type="date" name="nextpaydate" required value={inputs.nextpaydate}
                      onChange={(e) => setInputs({ ...inputs, nextpaydate: e.target.value })}
                    />
                  </Form.Group>

                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formname" className="AddPayer">
                    <Form.Label>Next Payment Monthly Amount</Form.Label>
                    <Form.Control type="number" name="nextmonthlyamount" required value={inputs.nextmonthlyamount}
                     onChange={(e) => setInputs({ ...inputs, nextmonthlyamount: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formage" className="AddPayer">
                    <Form.Label>Loan Payment Penalty</Form.Label>
                    <Form.Control type="number" name="nextpaypenalty" required value={inputs.nextpaypenalty}
                      onChange={(e) => setInputs({ ...inputs, nextpaypenalty: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formEmail" className="AddPayer">
                    <Form.Label>Next Payable Amount</Form.Label>
                    <Form.Control type="number" name="nextpayableamount" required value={inputs.nextpayableamount}
                      onChange={(e) => setInputs({ ...inputs, nextpayableamount: e.target.value })}
                    />
                  </Form.Group>

                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formEmail" className="AddPayer">
                    <Form.Label>Status</Form.Label>
                    <Form.Control type="text" disabled name="released" required value={inputs.released}
                      onChange={(e) => setInputs({ ...inputs, released: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group className="AddPayer" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="I Agree all information" />
                  </Form.Group>

                </Row>

                <Button variant="primary" type="submit" className="AddPayer">
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
  );
};

export default Editloans;
