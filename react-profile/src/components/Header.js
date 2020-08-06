import React from "./node_modules/react";
import { Link } from "./node_modules/react-router-dom";

function Header() {
  return (
    <header>
      <nav class="navbar" style="height: 6rem; background-color: #353535">
        <div class="container">
          <div class="navbar-header">
            <h1
              style="color:#ebebeb
                "
            >
              William N Trout
            </h1>
          </div>
          <nav class="nav d-flex justify-content-end">
            <a class="nav-link text-white" href="index.html">
              About
            </a>
            <a class="nav-link text-white" href="portfolio.html">
              Portfolio
            </a>
            <a class="nav-link text-white" href="contact.html">
              Contact
            </a>
            <a class="nav-link text-white" href="resume.html">
              Resume
            </a>
          </nav>
        </div>
      </nav>
      <hr class="new5"></hr>
    </header>
  );
}

export default Header;
