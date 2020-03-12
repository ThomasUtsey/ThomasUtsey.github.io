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
      <i onClick={this.onClickHandler} className="fas fa-bars burger"></i>

      <div className={this.state.toggle}>
        {" "}
        <NavLink style={{"color":"black"}} to="/" onClick={()=>this.setState({toggle:"close"})}>
          Home{" "}
        </NavLink>
      </div>
      <div className={this.state.toggle}>
        {" "}
        <NavLink style={{"color":"black"}} to="/projects" onClick={()=>this.setState({toggle:"close"})}>
          Projects{" "}
        </NavLink>
      </div>
      <div className={this.state.toggle}>
        <NavLink style={{"color":"black"}} to="/education" onClick={()=>this.setState({toggle:"close"})}>
          Education{" "}
        </NavLink>
      </div>
      <div className={this.state.toggle}>
        <NavLink style={{"color":"black"}} to="/experience" onClick={()=>this.setState({toggle:"close"})}>
          Experience{" "}
        </NavLink>
      </div>
      <div className={this.state.toggle}>
        {" "}
        <NavLink style={{"color":"black"}} to="/goals" onClick={()=>this.setState({toggle:"close"})}>
          Blog
        </NavLink>
      </div>
      <div className={this.state.toggle}>
        <NavLink style={{"color":"black"}} to="/contact" onClick={()=>this.setState({toggle:"close"})}>
          Contact Me{" "}
        </NavLink>
      </div>
    </div>
   )
 }
  

}
export default Nav;
