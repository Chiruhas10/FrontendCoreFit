import React from 'react'
import { Link } from 'react-router' 
const Header = () => {
  return (
    <section className='container-fluid p-3 sticky-top' style={{backgroundColor:'black'}}>
        <div className='container'>
   <nav className="navbar navbar-expand-lg  navbar-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
    <strong className='display-6 fw-bold'>  <span className="core">Core</span><span className="fit">Fit</span></strong>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto fw-semibold ">
        <li className="nav-item m-3">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item m-3">
          <Link className="nav-link" to="/shop">Shop</Link>
        </li>
         <li className="nav-item m-3">
          <Link className="nav-link " to="/about">About</Link>
        </li>
        <li className="nav-item m-3">
          <Link className="nav-link" to="/collections">Collections</Link>
        </li>
        <li className="nav-item m-3">
          <Link className="nav-link " to="/contact">Contact</Link>
        </li>
      </ul>
    </div>

    
  </div>
</nav>      
</div>
    </section>
  )
}

export default Header
