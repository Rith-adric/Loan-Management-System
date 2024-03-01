import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 

import { FaUsersViewfinder} from "react-icons/fa6";

export default function Loantype() {
    const [BodyData, setBodyData] = useState([]);
    const [inputs, setInputs] = useState([]);
    const navigate = useNavigate();

    // Fectch Data From API 
    useEffect(() => {
        getUsers();
    }, []);
 
    function getUsers() {
        axios.get('http://localhost/ReactAPI/loantype.php/').then(function(response) {
            // console.log(response.data);
            setBodyData(response.data);
        });
    }
    // End

    // On Change
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    // End

    // POST Data
    const handleSubmit = () => {
 
        axios.post('http://localhost/ReactAPI/loantype.php/', inputs).then(function(response){
            alert("Loan Type added successfully");
            console.log(response.data);
            navigate('/Loanstype');
        });
         
    }
    // End

    // Delete Data
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this record?")) {
            axios.delete(`http://localhost/ReactAPI/loantype.php/${id}/delete`).then(function(response){

            alert("Loan type Record deleted successfully");

            console.log(response.data);
            getUsers();
        });
        }
    }
    // End

  return (
    <div>
        <div className="topbar-nav">
        <nav className="navbar navbar-expand fixed-top">
            <ul className="navbar-nav mr-auto align-items-center">
                <li className="nav-item">
                <a className="nav-link toggle-menu">
                <i className="icon-menu menu-icon"><FaUsersViewfinder /></i>
                </a>
                </li>
                <li className="nav-item">
                <form className="search-bar">
                    {/* <input type="text" className="form-control" placeholder="Enter keywords" /> */}
                    <h2 className='titledasboard'>Loans Management System</h2>
                </form>
                </li>
            </ul>
            
            </nav>   
    </div>
    <div className="content-wrapper vh-100">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-4 col-xl-4">
            <div className="card">
                <div className="card-body">
                    <div className="card-title"> Loan Type Form</div>
                    <hr />
                    <form>
                    <label for="type">Type :</label>
                    <textarea  name="typename" 
                        rows="2" cols="39" onChange={handleChange} required>
                    </textarea>
                    <br/><br/>
                    <label for="description">Description :</label>
                    <textarea  name="description" 
                        rows="3" cols="39" onChange={handleChange} required>
                    </textarea>
                    <div className="form-group py-2">
                        <div className="icheck-material-white">
                        <input type="checkbox" id="user-checkbox1" defaultChecked />
                        <label htmlFor="user-checkbox1">I Agree Type &amp; Description</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-light px-5" onClick={handleSubmit}>
                            <i className="icon-lock"/> <b> Save </b> 
                        </button>
                    </div>
                    </form>
                </div>
              </div>
            </div>{/*End Row*/}
        <div className="col-12 col-lg-8 col-xl-8">
            <div className="card">
            <div className="table-responsive" style={{marginLeft: "1px"}}>
                <table className="table align-items-center table-flush table-hover">
                    <thead>
                            <tr>
                                <th>ID</th>
                                <th>Loan Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody style={{fontSize : "13px"}}>
                            {BodyData.map((data) => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>
                                <span><b>Name: </b>{data.typename}</span><br/>
                                <span><b>Contact: </b>{data.description}</span>
                                </td>
                                <td>
                                <button className="animated-edit-button"><Link to={`/Editloantype/${data.id}`}>Update</Link></button>
                                <button className="animated-delete-button" onClick={() => handleDelete(data.id)}>Delete</button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}