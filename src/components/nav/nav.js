import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.css";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: "close",
    };
  }
  onClickHandler = () => {
    return this.state.toggle === "close"
      ? this.setState({ toggle: "nav-child open" })
      : this.setState({ toggle: "close" });
  };
  render() {
    return (
      <div className="nav">
        <div onClick={this.onClickHandler} className="burger">
          <a id="nav-toggle" href="#">
            <span></span>
          </a>
        </div>

        <div className={this.state.toggle}>
          {" "}
          <NavLink
            style={{ color: "black" }}
            to="/"
            onClick={() => this.setState({ toggle: "close" })}
          >
            Home{" "}
          </NavLink>
        </div>
        <div className={this.state.toggle}>
          {" "}
          <NavLink
            style={{ color: "black" }}
            to="/skills"
            onClick={() => this.setState({ toggle: "close" })}
          >
            Skills | Certs{" "}
          </NavLink>
        </div>
        <div className={this.state.toggle}>
          {" "}
          <NavLink
            style={{ color: "black" }}
            to="/projects"
            onClick={() => this.setState({ toggle: "close" })}
          >
            Projects{" "}
          </NavLink>
        </div>
        <div className={this.state.toggle}>
          <NavLink
            style={{ color: "black" }}
            to="/education"
            onClick={() => this.setState({ toggle: "close" })}
          >
            Education{" "}
          </NavLink>
        </div>
        <div className={this.state.toggle}>
          <NavLink
            style={{ color: "black" }}
            to="/experience"
            onClick={() => this.setState({ toggle: "close" })}
          >
            Experience
          </NavLink>
        </div>
        <div className={this.state.toggle}>
          <NavLink
            style={{ color: "black" }}
            to="/contact"
            onClick={() => this.setState({ toggle: "close" })}
          >
            Contact Me{" "}
          </NavLink>
        </div>
      </div>
    );
  }
}
export default Nav;
