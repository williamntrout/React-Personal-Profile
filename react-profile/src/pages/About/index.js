import React, { Component } from "react";
import AboutContent from "../../components/AboutContent";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const bg = {
  backgroundColor: "#284b63",
};
class About extends Component {
  handleClick(e) {
    e.preventDefault();
    window.open(About);
  }

  render() {
    return (
      <div style={bg}>
        <Header />
        <AboutContent />
        <Footer />
      </div>
    );
  }
}

export default About;
