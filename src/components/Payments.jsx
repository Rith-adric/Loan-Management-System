import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './css/Payments.css';
import './css/Btn.css';

// Icons 
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { MdMonetizationOn } from "react-icons/md";
 
export default function Payment() {
    const [BodyData, setBodyData] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
 
    function getUsers() {
        axios.get('http://localhost/ReactAPI/payment.php/').then(function(response) {
            console.log(response.data);
            setBodyData(response.data);
        });
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this record?")) {
            axios.delete(`http://localhost/ReactAPI/payment.php/${id}/delete`).then(function(response){

            alert("Payment Record deleted successfully");

            console.log(response.data);
            getUsers();
        });
        }
    }


    return (
        <div>
       <div className="topbar-nav">
       <nav className="navbar navbar-expand fixed-top">
            <ul className="navbar-nav mr-auto align-items-center">
                <li class="nav-item">
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
            <div className="card mt-3">
            <div className="card-content">
                <div className="row row-group m-0">
                    <div className="col-12 col-lg-6 col-xl-6 border-light">
                    <div className="card-body">
                    <h5 className="text-white mb-0"> 20 <span className="float-right"><FaUsers /></span></h5>
                    <div className="progress my-3" style={{height: 3}}>
                        <div className="progress-bar" style={{width: '0%'}} />
                    </div>
                    <p className="mb-0 text-white small-font">Total User<span className="float-right">...</span></p>
                    </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-6 border-light">
                    <div className="card-body">
                    <h5 className="text-white mb-0"> 790450 <span className="float-right"><h4><MdMonetizationOn /></h4></span></h5>
                    <div className="progress my-3" style={{height: 3}}>
                        <div className="progress-bar" style={{width: '0%'}} /> 
                    </div>
                    <p className="mb-0 text-white small-font">Total Amounts <span className="float-right">...</span></p>
                    </div>
                </div>
                </div>
            </div>
            </div>  
            <div className="row">
                <div className="col-12 col-lg-12">
                <div className="card">
                <div className="card-header"><h4>Payment Table List</h4>
                <button className="glow-on-hover"><Link to="/Addpayment" >  New Payment </Link></button>
                </div>
                <div className="table-responsive">
                    <table class="table align-items-center table-flush table-hover">
                    <thead >
                    <tr>
                        <th>ID</th>
                        <th>Loan Reference Number</th>
                        <th>Payee</th>
                        <th>Amount</th>
                        <th>Penalty</th>
                        <th style={{paddingLeft : "70px"}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {BodyData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td>{data.LoanReferenceNo}</td>
                                    <td>{data.Payee}</td>
                                    <td>{data.Amount}</td>
                                    <td>{data.Penalty}</td>
                                    <td >
                                        <button className="animated-edit-button"><Link to={`/Editpayment/${data.id}`}>Update</Link></button>
                                        <button className="animated-delete-button" onClick={e => handleDelete(data.id) }>Delete</button> 
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