import React from "react";
import { Link } from "react-router-dom";

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
            <Link
              className="nav-link text-white"
              to={process.env.PUBLIC_URL + "/"}
            >
              About
            </Link>
            <Link
              className="nav-link text-white"
              to={process.env.PUBLIC_URL + "/portfolio"}
            >
              Portfolio
            </Link>
            <Link
              className="nav-link text-white"
              to={process.env.PUBLIC_URL + "/contact"}
            >
              Contact
            </Link>
            <Link
              className="nav-link text-white"
              to={process.env.PUBLIC_URL + "/resume"}
            >
              Resume
            </Link>
          </nav>
        </div>
      </nav>
      <hr
        className="new5"
        style={{ border: "8px solid #3c6e71", margin: "0rem" }}
      ></hr>
    </header>
  );
}

export default Header;
