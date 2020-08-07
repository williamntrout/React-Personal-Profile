import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
      <div class="container text-center smed">
        <a href="https://github.com/williamntrout" target="_blank">
          <i class="fab fa-github-square"></i>
        </a>
        <a href="https://linkedin.com/in/williamntrout" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
