import React, { Component } from "react";
import PortfolioContent from "../../components/PortfolioContent";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <body style={{ backgroundColor: "#284b63" }}>
          <Header />
          <PortfolioContent />
          <Footer />
        </body>
      </div>
    );
  }
}

export default Portfolio;
