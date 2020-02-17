<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import ProfileCard from './components/profileCard'
import './app.css'
import image from './background.jpg'

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // NOTE: Use your username below
    fetch('https://gitconnected.com/v1/portfolio/thomasutsey')
      .then(res => res.json())
      .then(user => {
        setUser(user);
=======
import React from "react";
import axios from "axios";

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
>>>>>>> a7f9f8ec18efc5a1261b158d28558c8d0bfd708a
      });
  };

  componentDidMount() {
    this.getUser();
  }
<<<<<<< HEAD
  console.log(user)
  return (
   
    <div className="appcontainer">
      <img src={image} alt="" srcset=""/>
      <ProfileCard
      data = {user.basics}
    />
    </div>
  )
=======

  render() {
    if(!this.state.user.basics) return <div></div>
    console.log(this.state.user.basics);

    return <div>
      <h1>{this.state.user.basics.name}</h1>
      </div>;
  }
>>>>>>> a7f9f8ec18efc5a1261b158d28558c8d0bfd708a
}

// function App() {
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     fetch('https://gitconnected.com/v1/portfolio/thomasutsey')
//       .then(res => res.json())
//       .then(user => {
//         setUser(user);
//       });
//   }, []);
//  console.log(user)
//   return <div>
//     <h2>{user.basics.name}</h2>

//   </div>

// }

export default App;
