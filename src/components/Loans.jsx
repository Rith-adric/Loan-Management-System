import React,{ useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
// import '../assets/css/app.css'
import axios from 'axios';
import './css/Loans.css'
import { FaUsersViewfinder} from "react-icons/fa6";

function Loans() {
    const [BodyData, setBodyData] = useState([]);

  useEffect(() => {
      getUsers();
    }, []);

  function getUsers() {
      axios.get('http://localhost/ReactAPI/loan.php/').then(function(response) {
          // console.log(response.data);
          setBodyData(response.data);
      });
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
        axios.delete(`http://localhost/ReactAPI/loan.php/${id}/delete`).then(function(response){

        alert("Borrow Record deleted successfully");

        console.log(response.data);
        getUsers();
    });
    }
}


  return (
    <>
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
        <div className="row">
            <div className="col-12 col-lg-12">
            <b><h3>Loan Table List</h3></b>
            <Link to="/AddLoans" className="ButtonLink"><h5>+ New Loans</h5></Link>
                <div className="card">
                <div className="table-responsive">
                     {/* align-items-center table-flush table-borderless */}
                     <table class="table table-bordered">
              <thead>
                <tr >
                  <th className="center">ID</th>
                  <th className="center">Borrow</th>
                  <th className="center">Loan Details</th>
                  <th>Next Payment Details</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {/* <tr>
                      {
                        Header.map((column, index) => (
                          <th key={index}>{column}</th> ))}
                          <th>Action</th>
                  </tr> */}
              </thead>
              <tbody>
                {BodyData.map((data, index) => (
                  <tr key={index}>
                    <td style={{fontSize : "14px"}}><br/><br/><br/><br/><br/><br/><br/><br/>
                        {data.id}</td>
                    <td style={{fontSize : "12px"}}><br/><br/><br/><br/><br/><br/>
                        <span><b>Name : </b>    {data.borrowname}</span><br/><br/>
                        <span><b>Contact : </b> {data.borrowcontact}</span><br/><br/>
                        <span><b>Address : </b> {data.borrowaddress}</span>
                    </td>
                    <td style={{fontSize : "12px"}}><br/>
                        <span><b>Reference :</b>  {data.loanreference}</span><br/><br/>
                        <span><b>LoanType :</b>   {data.loanloantype}</span><br/><br/>
                        <span><b>Plan :</b>       {data.loanplan}</span><br/><br/>
                        <span><b>Amount :</b>     {data.loandetailsamount}</span><br/><br/>
                        <span><b>Total Payable Amount :</b>   {data.loantotalpayable}</span><br/><br/>
                        <span><b>Monthly Payable Amount :</b> {data.loanmonthlypable}</span><br/><br/>
                        <span><b>Overdue Payable Amount :</b> {data.loanoverduepayable}</span><br/><br/>
                        <span><b>Date Released :</b>          {data.loandatereleased}</span><br/><br/>
                    </td>
                    <td style={{fontSize : "12px"}}><br/><br/><br/><br/>
                        <span><b>Date :</b>             {data.nextpaydate}</span><br/><br/>
                        <span><b>Monthly Amount :</b>   {data.nextmonthlyamount}</span><br/><br/>
                        <span><b>Penalty :</b>          {data.nextpaypenalty}</span><br/><br/>
                        <span><b>Payable Amount :</b>   {data.nextpayableamount}</span><br/><br/>
                    </td> 
                    <td style={{fontSize : "12px"}}>
                        <span> <h4 className='h4'>{data.released}</h4></span><br/><br/>
                    </td>
                    <td><br/><br/><br/><br/><br/><br/><br/>
                        <button className="animated-edit-button"><Link to={`/EditLoans/${data.id}`}>Update</Link></button>
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
    </>
  );

}
export default Loans