import React from 'react'
// icons react js 
import { MdOutlinePayment } from "react-icons/md";
import { FaUsersViewfinder, FaMoneyCheckDollar } from "react-icons/fa6";
import { FaUserFriends , FaRegArrowAltCircleRight} from "react-icons/fa";
import '../assets/css/bootstrap.min.css'
import './css/HomeItem.css'

function HomeItem() {

    



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
    <div className="content-wrapper">
    <div className="container-fluid">
        <div className="card mt-3">
        <div className="card-content">
            <div className="row row-group m-0">
            <div className="col-12 col-lg-6 col-xl-3 border-light">
                <div className="card-body">
                <h5 className="text-white mb-0">9526 <span className="float-right"><MdOutlinePayment /></span></h5>
                <div className="progress my-3" style={{height: 3}}>
                    <div className="progress-bar" style={{width: '90%'}} />
                </div>
                <p className="mb-0 text-white small-font">View Payments <span className="float-right"><FaRegArrowAltCircleRight /></span></p>
                </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-3 border-light">
                <div className="card-body">
                <h5 className="text-white mb-0">8323 <span className="float-right"><FaUserFriends /></span></h5>
                <div className="progress my-3" style={{height: 3}}>
                    <div className="progress-bar" style={{width: '49%'}} />
                </div>
                <p className="mb-0 text-white small-font">View Borrows <span className="float-right"><FaRegArrowAltCircleRight /></span></p>
                </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-3 border-light">
                <div className="card-body">
                <h5 className="text-white mb-0">6200 <span className="float-right"><FaUserFriends /></span></h5>
                <div className="progress my-3" style={{height: 3}}>
                    <div className="progress-bar" style={{width: '64%'}} />
                </div>
                <p className="mb-0 text-white small-font">View laon List <span className="float-right"><FaRegArrowAltCircleRight /></span></p>
                </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-3 border-light">
                <div className="card-body">
                <h5 className="text-white mb-0">5630 <span className="float-right"><FaMoneyCheckDollar /></span></h5>
                <div className="progress my-3" style={{height: 3}}>
                    <div className="progress-bar" style={{width: '78%'}} />
                </div>
                <p className="mb-0 text-white small-font">Total Receivable <span className="float-right"><FaRegArrowAltCircleRight /></span></p>
                </div>
            </div>
            </div>
        </div>
        </div>  
        <div className="row">
        <div className="col-12 col-lg-12">
            <div className="card">
            <div className="card-header">Borrowers Table List
                <div className="card-action">
                <div className="dropdown">
                    <a href="#" className="dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown">
                    <i className="icon-options" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table align-items-center table-flush table-borderless">
                <thead className="title-header">
                    <tr>
                    <th>User ID</th>
                    <th>Username</th>
                    <th>Amount</th>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="title-hover">
                    <td>#9405822</td>
                    <td>Iphone 5</td>
                    <td>$ 1250.00</td>
                    <td>03 Aug 2017</td>
                    </tr>
                    <tr  className="title-hover">
                    <td>#9405820</td>
                    <td>Earphone GL</td>
                    <td>$ 1500.00</td>
                    <td>03 Aug 2017</td>
                    </tr>
                    <tr  className="title-hover">
                    <td>#9405830</td>
                    <td>HD Hand Camera</td>
                    <td>$ 1400.00</td>
                    <td>03 Aug 2017</td>
                    </tr>
                    <tr  className="title-hover">
                    <td>#9405825</td>
                    <td>Clasic Shoes</td>
                    <td>$ 1200.00</td>
                    <td>03 Aug 2017</td>
                    </tr>
                    <tr  className="title-hover">
                    <td>#9405840</td>
                    <td>Hand Watch</td>
                    <td>$ 1800.00</td>
                    <td>03 Aug 2017</td>
                    </tr>
                    <tr  className="title-hover">
                    <td>#9405825</td>
                    <td>Clasic Shoes</td>
                    <td>$ 1200.00</td>
                    <td>03 Aug 2017</td>
                    </tr>
                </tbody></table>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </>

  )
}

export default HomeItem