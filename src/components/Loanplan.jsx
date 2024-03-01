import React from 'react'
import '../assets/css/bootstrap.min.css'
import { MdOutlinePayment } from "react-icons/md";
import { FaUsersViewfinder, FaMoneyCheckDollar } from "react-icons/fa6";
import { FaUserFriends , FaRegArrowAltCircleRight} from "react-icons/fa";

function Loanplan() {
  return (
    <div>
        <div className="topbar-nav">
        <nav class="navbar navbar-expand fixed-top">
            <ul class="navbar-nav mr-auto align-items-center">
                <li class="nav-item">
                <a class="nav-link toggle-menu">
                <i class="icon-menu menu-icon"><FaUsersViewfinder /></i>
                </a>
                </li>
                <li class="nav-item">
                <form class="search-bar">
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
        </div>  
        <div className="row">
        <div className="col-12 col-lg-8 col-xl-8">
            <div className="card">
            <div className="card-header">Site Traffic
                <div className="card-action">
                <div className="dropdown">
                    <a className="dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown">
                    <i className="icon-options" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" >Action</a>
                    <a className="dropdown-item" >Another action</a>
                    <a className="dropdown-item" >Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" >Separated link</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="card-body">
                <ul className="list-inline">
                <li className="list-inline-item"><i className="fa fa-circle mr-2 text-white" />New Visitor</li>
                <li className="list-inline-item"><i className="fa fa-circle mr-2 text-light" />Old Visitor</li>
                </ul>
                <div className="chart-container-1">
                <canvas id="chart1" />
                </div>
            </div>
            <div className="row m-0 row-group text-center border-top border-light-3">
                <div className="col-12 col-lg-4">
                <div className="p-3">
                    <h5 className="mb-0">45.87M</h5>
                    <small className="mb-0">Overall Visitor <span> <i className="fa fa-arrow-up" /> 2.43%</span></small>
                </div>
                </div>
                <div className="col-12 col-lg-4">
                <div className="p-3">
                    <h5 className="mb-0">15:48</h5>
                    <small className="mb-0">Visitor Duration <span> <i className="fa fa-arrow-up" /> 12.65%</span></small>
                </div>
                </div>
                <div className="col-12 col-lg-4">
                <div className="p-3">
                    <h5 className="mb-0">245.65</h5>
                    <small className="mb-0">Pages/Visit <span> <i className="fa fa-arrow-up" /> 5.62%</span></small>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="col-12 col-lg-4 col-xl-4">
            <div className="card">
            <div className="card-header">Weekly sales
                <div className="card-action">
                <div className="dropdown">
                    <a className="dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown">
                    <i className="icon-options" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" >Action</a>
                    <a className="dropdown-item" >Another action</a>
                    <a className="dropdown-item" >Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" >Separated link</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="card-body">
                <div className="chart-container-2">
                <canvas id="chart2" />
                </div>
            </div>
            <div className="table-responsive">
                <table className="table align-items-center">
                <tbody>
                    <tr>
                    <td><i className="fa fa-circle text-white mr-2" /> Direct</td>
                    <td>$5856</td>
                    <td>+55%</td>
                    </tr>
                    <tr>
                    <td><i className="fa fa-circle text-light-1 mr-2" />Affiliate</td>
                    <td>$2602</td>
                    <td>+25%</td>
                    </tr>
                    <tr>
                    <td><i className="fa fa-circle text-light-2 mr-2" />E-mail</td>
                    <td>$1802</td>
                    <td>+15%</td>
                    </tr>
                    <tr>
                    <td><i className="fa fa-circle text-light-3 mr-2" />Other</td>
                    <td>$1105</td>
                    <td>+5%</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>{/*End Row*/}
        <div className="row">
        <div className="col-12 col-lg-12">
            <div className="card">
            <div className="card-header">Recent Order Tables
                <div className="card-action">
                <div className="dropdown">
                    <a  className="dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown">
                    <i className="icon-options" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item">Action</a>
                    <a className="dropdown-item" >Another action</a>
                    <a className="dropdown-item" >Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" >Separated link</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table align-items-center table-flush table-borderless">
                <thead>
                    <tr>
                    <th>Product</th>
                    <th>Photo</th>
                    <th>Product ID</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Shipping</th>
                    </tr>
                </thead>
                <tbody><tr>
                    <td>Iphone 5</td>
                    <td><img src="https://via.placeholder.com/110x110" className="product-img" alt="product img" /></td>
                    <td>#9405822</td>
                    <td>$ 1250.00</td>
                    <td>03 Aug 2017</td>
                    <td><div className="progress shadow" style={{height: 3}}>
                        <div className="progress-bar" role="progressbar" style={{width: '90%'}} />
                        </div></td>
                    </tr>
                    <tr>
                    <td>Earphone GL</td>
                    <td><img src="https://via.placeholder.com/110x110" className="product-img" alt="product img" /></td>
                    <td>#9405820</td>
                    <td>$ 1500.00</td>
                    <td>03 Aug 2017</td>
                    <td><div className="progress shadow" style={{height: 3}}>
                        <div className="progress-bar" role="progressbar" style={{width: '60%'}} />
                        </div></td>
                    </tr>
                    <tr>
                    <td>HD Hand Camera</td>
                    <td><img src="https://via.placeholder.com/110x110" className="product-img" alt="product img" /></td>
                    <td>#9405830</td>
                    <td>$ 1400.00</td>
                    <td>03 Aug 2017</td>
                    <td><div className="progress shadow" style={{height: 3}}>
                        <div className="progress-bar" role="progressbar" style={{width: '70%'}} />
                        </div></td>
                    </tr>
                    <tr>
                    <td>Clasic Shoes</td>
                    <td><img src="https://via.placeholder.com/110x110" className="product-img" alt="product img" /></td>
                    <td>#9405825</td>
                    <td>$ 1200.00</td>
                    <td>03 Aug 2017</td>
                    <td><div className="progress shadow" style={{height: 3}}>
                        <div className="progress-bar" role="progressbar" style={{width: '100%'}} />
                        </div></td>
                    </tr>
                    <tr>
                    <td>Hand Watch</td>
                    <td><img src="https://via.placeholder.com/110x110" className="product-img" alt="product img" /></td>
                    <td>#9405840</td>
                    <td>$ 1800.00</td>
                    <td>03 Aug 2017</td>
                    <td><div className="progress shadow" style={{height: 3}}>
                        <div className="progress-bar" role="progressbar" style={{width: '40%'}} />
                        </div></td>
                    </tr>
                    <tr>
                    <td>Clasic Shoes</td>
                    <td><img src="https://via.placeholder.com/110x110" className="product-img" alt="product img" /></td>
                    <td>#9405825</td>
                    <td>$ 1200.00</td>
                    <td>03 Aug 2017</td>
                    <td><div className="progress shadow" style={{height: 3}}>
                        <div className="progress-bar" role="progressbar" style={{width: '100%'}} />
                        </div></td>
                    </tr>
                </tbody></table>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Loanplan