import React, { Component } from "react";
import PortfolioContent from "./component/PortfolioContent";
import "./assets/css/style.css";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <body style="background-color: #284b63;">
          <Header />
          <PortfolioContent />
          <Footer />
        </body>
      </div>
    );
  }
}

export default Portfolio;
