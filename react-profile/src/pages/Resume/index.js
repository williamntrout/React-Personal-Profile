import React, { Component } from "react";
import ResumeContent from "./component/ResumeContent";
import "./assets/css/style.css";

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
