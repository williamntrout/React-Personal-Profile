import React, { Component } from "react";
import AboutContent from "../../components/AboutContent";
import "./assets/css/style.css";


class About extends Component {
  handleClick(e) {
    e.preventDefault();
    window.open(About);
  }

  render() {
    return (
      <div>
        <body style="background-color: #284b63;">
          <Header />
          <AboutContent />
          <Footer />
        </body>
      </div>
    );
  }
}

export default About;
