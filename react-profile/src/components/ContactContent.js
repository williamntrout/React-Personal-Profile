import React from "react";
import { Link } from "react-router-dom";

class ContactContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      feedback: "",
    };
  }
  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }
  sendMessage(event) {
    event.preventDefault();
    //   if (!this.validateMail()) {
    // return;
    //       }
    //   const templateParams = {
    //         from_name: this.state.name + " (" + this.state.email + ")",
    //         to_name: {wherever you are sending the email},
    //         feedback: this.state.feedback
    //       };
    //   emailjs
    //         .send("gmail", "portfoliositecontact", templateParams, {id given from your EmailJS template})
    //         .then(
    //           function(response) {
    //             toast.success("Your message has successfully sent!", {
    //               position: toast.POSITION.BOTTOM_CENTER
    //             });
    //             console.log("SUCCESS!", response.status, response.text);
    //           },
    //           function(err) {
    //             toast.error("Your message was not able to be sent");
    //           }
    //         );
    //   this.setState({
    //         name: "",
    //         email: "",
    //         feedback: ""
    //       });
  }

  render() {
    return (
      <div className="container">
        <content className="row d-flex justify-content-center">
          <content className="col-10 col-md-10 col-sm-12 col-xs-12">
            <form
              className="ui form"
              id={this.props.id}
              name={this.props.name}
              method={this.props.method}
              action={this.props.action}
            >
              <div
                className="card border-dark form-group"
                style="
                    background-color: #d9d9d9;
                    margin: 1rem;
                    border-radius: 0.25rem;
                  "
              >
                <element className="card-body controls">
                  <h3>Contact Me Today</h3>
                  <hr />
                  <div id="contact-card">
                    <element className="row form-group">
                      <label for="contactInputName">
                        <h5 style="margin-left: 20px;">Your Name:</h5>
                      </label>
                      <element
                        className="card border-dark ml-3 mb-2"
                        style="width: 95%;"
                      >
                        <input
                          id="name"
                          name="name"
                          onChange={this.handleInputChange.bind(this)}
                          placeholder="your name"
                          required
                          value={this.state.name}
                        />
                      </element>
                    </element>
                    <element className="row form-group">
                      <label for="contactEmailAddress">
                        <h5 style="margin-left: 20px;">Email Address:</h5>
                      </label>
                      <element
                        className="card border-dark ml-3 mb-2"
                        style="width: 95%;"
                      >
                        <input
                          id="email"
                          name="email"
                          onChange={this.handleInputChange.bind(this)}
                          placeholder="your email address"
                          required
                          value={this.state.email}
                          error={this.state.errors.email}
                        />
                      </element>
                    </element>
                    <element className="row form-group">
                      <label for="contactInputMessage">
                        <h5 style="margin-left: 20px;">Your Message:</h5>
                      </label>
                      <element
                        className="card border-dark ml-3 mb-3"
                        style="width: 95%; height: 8rem;"
                      >
                        <textarea
                          id="feedback"
                          name="feedback"
                          onChange={this.handleInputChange.bind(this)}
                          placeholder="Please leave us a message?"
                          required
                          value={this.state.feedback}
                          rows="10"
                        ></textarea>
                      </element>
                    </element>
                    <element className="row d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-dark btn-lg ml-3"
                        onClick={this.sendMessage.bind(this)}
                      >
                        Submit
                      </button>
                    </element>
                  </div>
                </element>
              </div>
            </form>
          </content>
        </content>
      </div>
    );
  }
}

export default ContactContent;
