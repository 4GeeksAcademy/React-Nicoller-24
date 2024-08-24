import React from "react";

const NavBar = () => {
   return <>
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Bootstrap Start</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        <a className="nav-link text-secondary" href="#">About</a>
        <a className="nav-link text-secondary" href="#">Service</a>
        <a className="nav-link text-secondary" href="#">Contact</a>
      </div>
    </div>
  </div>
   
    </nav>
   </>
}

export default NavBar