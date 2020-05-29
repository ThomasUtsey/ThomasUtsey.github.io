import React from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import Recaptcha from "react-recaptcha";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      user_email: "",
      message: "",
      isVerified: false,
    };
  }
  recaptchaLoaded = (e) => {
    console.log("loaded");
  };
  verify = (res) => {
    if (res) {
      this.setState({ isVerified: true });
    }
  };
  sendEmail = (e) => {
    e.preventDefault();

    if (this.state.isVerified) {
      console.log(e);

      const data = {
        template_params: {
          to_name: "Thomas",
          email: this.state.user_email,
          from_name: this.state.user_name,
          message_html: this.state.message,
        },
      };

      emailjs
        .send(
          "gmail",
          "template_4XZrIpKt",
          data.template_params,
          "user_WbeUYLO8TMaKH3hBSVqbe"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      this.setState({
        user_name: "",
        user_email: "",
        message: "",
      });
      alert("The email has been sent");
    } else {
      alert("You must click captcha if you are human");
    }
  };
  handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value, event: event });
  };

  render() {
    return (
      <form className="contact-form form-group" onSubmit={this.sendEmail}>
        <h3>Contact me via Email</h3>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          value={this.state.user_name}
          onChange={this.handleChange}
          className="form-control"
          id="formGroupExampleInput"
        />
        <label>Email</label>
        <input
          className="form-control"
          type="email"
          name="user_email"
          value={this.state.user_email}
          onChange={this.handleChange}
        />
        <label htmlFor="formGroupExampleInput"> Message </label>
        <textarea
          className="form-control message"
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <div className="button-container">
          <div className="captcha">
            <Recaptcha
              sitekey="6LdQDvMUAAAAAAuK5i-pNwLT0axKIKL6_Do7Jwfr"
              render="explicit"
              onloadCallback={this.recaptchaLoaded}
              verifyCallback={this.verify}
            />
          </div>

          <input className="button" type="submit" value="Send" />
        </div>
      </form>
    );
  }
}
export default Contact;
