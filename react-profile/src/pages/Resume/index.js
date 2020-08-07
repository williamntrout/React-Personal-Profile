import React, { Component } from "react";
import ResumeContent from "../../components/ResumeContent";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class Resume extends Component {
  render() {
    return (
      <div>
        <body style="background-color: #284b63;">
          <Header />
          <ResumeContent />
          <Footer />
        </body>
      </div>
    );
  }
}

export default Resume;
