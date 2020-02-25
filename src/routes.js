import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import App from './App'
import Projects from './components/projects/projects'
import Goals from './components/goals/goals'
import Contact from './components/contact/contact'
import Experience from './components/experience/experience'
import Education from './components/education/education'
import Nav from "./components/nav/nav"


const Routes = () =>{
    return(
    <BrowserRouter>
        <Nav/>
        <Switch>
            <Route exact={true} path="/" component={App}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/goals" component={Goals}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/education" component={Education}/>
            <Route component={App}/>
        </Switch>
        <Nav/>
    </BrowserRouter>
 
    )
}
export default Routes