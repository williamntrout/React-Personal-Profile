import React, { Component } from "react";
import ContactContent from "../../components/ContactContent";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class Contact extends Component {
  render() {
    return (
      <div>
        <body style={{ backgroundColor: "#284b63" }}>
          <Header />
          <ContactContent />
          <Footer />
        </body>
      </div>
    );
  }
}

export default Contact;
