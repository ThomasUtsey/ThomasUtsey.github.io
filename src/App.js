import React from "react";
import axios from "axios";
import './app.css'
import {Route, Switch} from 'react-router-dom'
import ProfileCard from "./components/profile-card/profileCard";
import Nav from "./components/nav/nav"
import Projects from './components/projects/projects'
import Goals from './components/goals/goals'
import Contact from './components/contact/contact'
import Experience from './components/experience/experience'
import Education from './components/education/education'


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
      
      <Nav/>
        <Switch>
            <Route 
              exact={true} 
              path="/" 
              render={e =><ProfileCard 
                data={this.state.user.basics}
                /> 
              }/>
            <Route 
              path="/projects" 
              render={e =><Projects 
                data={this.state.user.projects}
              /> }
              />
            <Route 
              path="/goals" 
              render={e =><Goals/>}
              />
            <Route 
              path="/contact"
              component={Contact}/>
            <Route 
              path="/experience" 
              render={e =><Experience 
                data={this.state.user.work}
              /> }
             />
            <Route 
              path="/education" 
              render={e =><Education 
                data={this.state.user.education}
              />}
              />
            <Route component={App}/>
        </Switch>
        <Nav/>
     
      </div>;
  }
}


export default App;
