import React from "react";
import axios from "axios";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import ProfileCard from "./components/profile-card/profileCard";
import Nav from "./components/nav/nav";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Experience from "./components/experience/experience";
import Education from "./components/education/education";
import Links from "./components/Links/links";
import background from "./background.jpg";
import Skills from "./components/skills/skills";

class App extends React.Component {
  state = {
    user: {},
  };

  getUser = () => {
    axios
      .get("https://gitconnected.com/v1/portfolio/thomasutsey")
      .then((res) => {
        console.log(res.data);
        this.setState({ user: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    if (!this.state.user.basics) return <div>Loading...</div>;

    return (
      <div className="app-container">
        <div className="back-image">
          <img src={background} alt="" />
        </div>
        <Nav />
        <Routes>
          <Route
            exact={true}
            path="/"
            element={<ProfileCard data={this.state.user.basics} />}
            render={(e) => <ProfileCard data={this.state.user.basics} />}
          />
          <Route
            exact={true}
            path="/skills"
            element={<Skills 
              data={this.state.user.skills}
              certs={this.state.user.certificates}
               />}
            render={(e) => <Skills data={this.state.user.skills} />}
          />
          <Route
            path="/projects"
            element={<Projects data={this.state.user.projects} />}
            render={(e) => <Projects data={this.state.user.projects} />}
          />
          <Route path="/contact"
            element={<Contact />} component={Contact} />
          <Route
            path="/experience"
            render={(e) => <Experience data={this.state.user.work} />}
            element={<Experience data={this.state.user.work} />}
          />
          <Route
            path="/education"
            render={(e) => <Education data={this.state.user.education} />}
            element={<Education data={this.state.user.education} />}
          />
          <Route component={App} />
        </Routes>
        <div className="linkage">
          <Links />
        </div>
      </div>
    );
  }
}

export default App;
