import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './assets/css/bootstrap.min.css'
import './assets/css/app-style.css'
import './assets/css/bootstrap.css'
import './assets/css/animate.css'
import './assets/css/app.css'
import './assets/css/icons.css'
import './App.css'

import Bennter from './assets/images/BELTEIIU.jpg' 

import HomePage from './pages/HomePage'
import PaymentPage from './pages/PaymentPage'
import LoanPage from './pages/LoanPage'
import BorrowPage from './pages/BorrowPage'
import LoantypePage from './pages/LoantypePage'
import UserPage from './pages/UserPage'
  // Collections of Dynamic
import Addborrow from './components/components/Addborrow.jsx'
import Editborrow from './components/components/Editborrow.jsx'
import Addpayment from './components/components/Addpayment.jsx'
import Editpayment from './components/components/Editpayment.jsx'
import Addusers from './components/components/Addusers'
import Editusers from './components/components/Editusers.jsx'
import AddLaons from './components/components/AddLaons.jsx'
import EditLoans from './components/components/EditLoans.jsx'
import Editloantype from './components/components/Editloantype.jsx'

function App() {
  return (
  <body className="bg-theme bg-theme1">
    <div id="wrapper">
      <BrowserRouter>
      {/* Call Router Navbar  */}
      <div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
        <div className="brand-logo">
        <a href="#">
        <img src={Bennter} className="logo-icon" alt="logo icon" />
        {/* <h6 class="logo-text">Dashtreme Admin</h6> */}
      </a>
      </div>
      <ul className="sidebar-menu do-nicescrol">
      <li className="sidebar-header">&nbsp;&nbsp;&nbsp; M A I N &nbsp; N A V I G A T I O N</li>
      <li>
        <a href='/'>
          <i className="zmdi zmdi-view-dashboard"></i> <span>Dashboard</span>
        </a>
      </li>

      <li>
        <a href="/Loans">
          <i className="zmdi zmdi-invert-colors"></i> <span>Loans</span>
        </a>
      </li>

      <li>
        <a href="/Payment">
          <i className="zmdi zmdi-format-list-bulleted"></i> <span>Payments</span>
        </a>
      </li>

      <li>
        <a href="/Borrow">
          <i className="zmdi zmdi-grid"></i> <span>Borrowers</span>
        </a>
      </li>

      <li>
        <a href="/Loanstype">
          <i className="zmdi zmdi-lock"></i> <span>Loans Types</span>
        </a>
      </li>

       <li>
        <a href="/Users">
          <i className="zmdi zmdi-account-circle"></i> <span>Users</span>
        </a>
      </li>
      <li>
        <br/><br/>
        {/* <p style={{color: "white"}}>Click logout to logout the Dashboard</p> */}
          <h4><button className="logout">Logout</button></h4>
      </li>

    </ul>
    </div>

        <Routes>
                        {/* Home Page  */}
                  <Route path='/' element={<HomePage />} />
                        {/* Payment Collection  */}
                  <Route path='/Payment' element={<PaymentPage />} />
                  <Route path='/Addpayment' element={<Addpayment />} />
                  <Route path='/Editpayment/:id' element={<Editpayment />} />
                        {/* Loan Collection  */}
                  <Route path='/Loans' element={<LoanPage />} />
                  <Route path='/AddLoans' element={<AddLaons />} />
                  <Route path='/EditLoans/:id' element={<EditLoans />} />
                        {/* Borrow Collection  */}
                  <Route path='/Borrow' element={<BorrowPage />} />
                  <Route path='/Addborrow' element={<Addborrow />} />
                  <Route path='/Editborrow/:id' element={<Editborrow />} />
                        {/* Loan Type Collection  */}
                  <Route path='/Loanstype' element={<LoantypePage />} />
                  <Route path='/Editloantype/:id' element={<Editloantype />} />
                        {/* Users Collection  */}
                  <Route path='/Users' element={<UserPage />} />
                  <Route path='/Addusers'element={<Addusers />}/>
                  <Route path='/Editusers/:id' element={<Editusers />} />
        </Routes>
      </BrowserRouter>
    </div>
    </body>
  )
}

export default App