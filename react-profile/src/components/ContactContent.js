import React from "react";
import emailjs from "emailjs-com";

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

    emailjs
      .sendForm("troutw5593_gmail_com", "mine", ".this", "troutw5593@gmail.com")
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert(error.text);
        }
      );
  }

  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-10 col-md-10 col-sm-12 col-xs-12">
            <form
              className="ui form"
              id={this.props.id}
              name={this.props.name}
              method={this.props.method}
              action={this.props.action}
            >
              <div
                className="card border-dark form-group"
                style={{
                  backgroundColor: "#d9d9d9",
                  margin: "1rem",
                  borderRadius: "0.25rem",
                }}
              >
                <div className="card-body controls">
                  <h3>Contact Me Today</h3>
                  <hr />
                  <div
                    id="contact-card"
                    style={{
                      height: "calc(100vh - 360px)",
                      marginTop: "10px",
                      overflowY: "scroll",
                    }}
                  >
                    <div className="row form-group">
                      <label form="contactInputName">
                        <h5 style={{ marginLeft: "20px" }}>Your Name:</h5>
                      </label>
                      <div
                        className="card border-dark ml-3 mb-2"
                        style={{ width: "95%" }}
                      >
                        <input
                          id="name"
                          name="name"
                          onChange={this.handleInputChange.bind(this)}
                          placeholder="your name"
                          required
                          value={this.state.name}
                        />
                      </div>
                    </div>
                    <div className="row form-group">
                      <label for="contactEmailAddress">
                        <h5 style={{ marginLeft: "20px" }}>Email Address:</h5>
                      </label>
                      <div
                        className="card border-dark ml-3 mb-2"
                        style={{ width: "95%" }}
                      >
                        <input
                          id="email"
                          name="email"
                          onChange={this.handleInputChange.bind(this)}
                          placeholder="your email address"
                          required
                          value={this.state.email}
                        />
                      </div>
                    </div>
                    <div className="row form-group">
                      <label for="contactInputMessage">
                        <h5 style={{ marginLeft: "20px" }}>Your Message:</h5>
                      </label>
                      <div
                        className="card border-dark ml-3 mb-3"
                        style={{ width: "95%", height: "8rem" }}
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
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-dark btn-lg ml-3"
                        onClick={(e) => this.sendMessage(e)}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactContent;
