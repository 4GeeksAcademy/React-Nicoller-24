import React from "react";

const NavBar = () => {
   return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">Bootstrap Start</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
              <a className="nav-link text-secondary" href="#">About</a>
              <a className="nav-link text-secondary" href="#">Service</a>
              <a className="nav-link text-secondary" href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml;charset=UTF8,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28255, 255, 255, 1%29' stroke-width='1.5' d='M1 2.5h14M1 8h14M1 13.5h14'/%3E%3C/svg%3E");
        }
      `}</style>
    </>
   );
}

export default NavBar;
