import React, { Component } from "react";
import ContactContent from "./component/ContactContent";
import "./assets/css/style.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <body style="background-color: #284b63;">
          <Header />
          <ContactContent />
          <Footer />
        </body>
      </div>
    );
  }
}

export default Contact;
