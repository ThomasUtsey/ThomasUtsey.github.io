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
      });
  }, []);

  if (!user) {
    return <div />;
  }
  console.log(user)
  return (
   
    <div className="appcontainer">
      <img src={image} alt="" srcset=""/>
      <ProfileCard
      data = {user.basics}
    />
    </div>
  )
}

export default App;