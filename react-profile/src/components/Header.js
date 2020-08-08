import React from "react";

function Header() {
  return (
    <header>
      <nav
        className="navbar"
        style={{ height: "6rem", backgroundColor: "#353535" }}
      >
        <div className="container">
          <div className="navbar-header">
            <h1 style={{ color: "#ebebeb" }}>William N Trout</h1>
          </div>
          <nav className="nav d-flex justify-content-end">
            <a className="nav-link text-white" href="/">
              About
            </a>
            <a className="nav-link text-white" href="/portfolio">
              Portfolio
            </a>
            <a className="nav-link text-white" href="/contact">
              Contact
            </a>
            <a className="nav-link text-white" href="/resume">
              Resume
            </a>
          </nav>
        </div>
      </nav>
      <hr className="new5" style={{border: "8px solid #3c6e71", margin: "0rem"}}></hr>
    </header>
  );
}

export default Header;
