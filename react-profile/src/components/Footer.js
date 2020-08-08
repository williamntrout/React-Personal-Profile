import React from "react";

function Footer() {
  return (
    <footer
      id="sticky-footer"
      className="py-4 bg-dark text-white-50"
      style={{
        position: "fixed",
        left: "0px",
        bottom: "0px",
        height: "112px",
        width: "100%",
        borderTop: "18px solid #3c6e71",
      }}
    >
      <div
        className="container d-flex"
        style={{
          color: "#ffffff",
          fontSize: "50px",
          marginBottom: "30px",
          marginRight: "10px",
          justifyContent: "center",
        }}
      >
        <a
          href="https://github.com/williamntrout"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github-square"></i>
        </a>
        <a
          href="https://linkedin.com/in/williamntrout"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
