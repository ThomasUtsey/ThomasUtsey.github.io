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
          <button id="nav-toggle" href="#">
            <span></span>
          </button>
        </div>

        <div className={this.state.toggle}>
          {" "}
          <NavLink
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            to="/"
            onClick={() => this.setState({ toggle: "close" })}
          >
            Home{" "}
          </NavLink>
        </div>
        <div className={this.state.toggle}>
          {" "}
          <NavLink
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            to="/skills"
            onClick={() => this.setState({ toggle: "close" })}
          >
            Certifications{" "}
          </NavLink>
        </div>
        <div className={this.state.toggle}>
          {" "}
          <NavLink
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            to="/projects"
            onClick={() => this.setState({ toggle: "close" })}
          >
            Projects{" "}
          </NavLink>
        </div>
        <div className={this.state.toggle}>
          <NavLink
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            to="/education"
            onClick={() => this.setState({ toggle: "close" })}
          >
            Education{" "}
          </NavLink>
        </div>
        <div className={this.state.toggle}>
          <NavLink
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            to="/experience"
            onClick={() => this.setState({ toggle: "close" })}
          >
            Experience
          </NavLink>
        </div>
        <div className={this.state.toggle}>
          <NavLink
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
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
