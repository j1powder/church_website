'use client'

import React, {Fragment, useEffect} from 'react'
import Link from 'next/link'



const Header = () => {

  useEffect(()=>{
    import( "bootstrap/dist/js/bootstrap.bundle.js")
},[])


  return (
    <Fragment>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true" href='#'>Disabled</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </Fragment>
  )
}

export default Header