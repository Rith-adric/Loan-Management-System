import React, { useState, useEffect } from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import { Button, Form, Row } from 'react-bootstrap';
import axios from 'axios';

const Editloantype = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    typename: '',
    description: '',
  });

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios.get(`http://localhost/ReactAPI/loantype.php/${id}`).then(function (response) {
      console.log(response.data);
      setInputs(response.data[0]); 
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`http://localhost/ReactAPI/loantype.php/${id}/update`, inputs).then(function (response) {
      console.log(response.data);
      alert("Loanstype updated successfully");
      navigate('/Loanstype');
    });
  };


  return (
    <div>
      <div className="content-wrapper vh-100">
        <div className="row">
          <div className="col-11 col-lg-11">
            <div className="card" style={{ marginLeft: "90px" }}>
              <div className="Inform">
                <h4 className="animate-text"> Update Loanstype Information </h4>
              </div>
              <Form className="AddPayer" onSubmit={handleSubmit}>
                    <Row className="mb-4">
                    <label for="type">Type :</label>
                    <textarea  name="typename" rows="2" cols="39" required value={inputs.typename}
                      onChange={(e) => setInputs({ ...inputs, typename: e.target.value })} style={{fontSize : "20px"}}>
                    </textarea>

                    <label for="description">Description :</label>
                    <textarea  name="description" rows="3" cols="39" required value={inputs.description}
                      onChange={(e) => setInputs({ ...inputs, description: e.target.value })} style={{fontSize : "20px"}}>
                    </textarea>
                    </Row>
                    <Button variant="primary" type="submit" className="AddPayer">
                        Save
                    </Button>
                    <Link to="/Loanstype" className="btn btn-back"><h6>Back</h6></Link>
                </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Editloantype;
