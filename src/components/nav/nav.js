import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.css";

class Nav extends React.Component {
  constructor(){
    super()
  this.state = {
    toggle:'close'
  }
}
  onClickHandler = () => {
   
    return this.state.toggle === "close"
      ? this.setState({toggle:"nav-child open"})
      : this.setState({toggle:"close"})
  };
 render(){
   return(
    <div className="nav">
      <i onClick={this.onClickHandler} className="fas fa-bars"></i>

      <div className={this.state.toggle}>
        {" "}
        <NavLink style={{"color":"black"}} to="/">
          Home{" "}
        </NavLink>
      </div>
      <div className={this.state.toggle}>
        {" "}
        <NavLink style={{"color":"black"}} to="/projects">
          Projects{" "}
        </NavLink>
      </div>
      <div className={this.state.toggle}>
        <NavLink style={{"color":"black"}} to="/education">
          Education{" "}
        </NavLink>
      </div>
      <div className={this.state.toggle}>
        <NavLink style={{"color":"black"}} to="/experience">
          Experience{" "}
        </NavLink>
      </div>
      <div className={this.state.toggle}>
        {" "}
        <NavLink style={{"color":"black"}} to="/goals">
          Blog
        </NavLink>
      </div>
      <div className={this.state.toggle}>
        <NavLink style={{"color":"black"}} to="/contact">
          Contact Me{" "}
        </NavLink>
      </div>
    </div>
   )
 }
  

}
export default Nav;
