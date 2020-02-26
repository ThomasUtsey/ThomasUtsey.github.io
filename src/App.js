import React from "react";
import axios from "axios";
import './app.css'
import ProfileCard from "./components/profile-card/profileCard";
import Nav from "./components/nav/nav"


class App extends React.Component {
  state = {
    user: {}
  };

  getUser = () => {
    axios
      .get("https://gitconnected.com/v1/portfolio/thomasutsey")
      .then(res => {
        this.setState({ user: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    console.log(this.state)
    if(!this.state.user.basics) return <div>Loading...</div>

    return <div className='app-container'>
      {/* <div className="image">
        <img src={background} alt="background img"/>
      </div> */}
      
   
        <ProfileCard
        data={this.state.user.basics}
        />
     
      </div>;
  }
}


export default App;
