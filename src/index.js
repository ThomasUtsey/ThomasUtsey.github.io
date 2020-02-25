import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import App from './App'
import Projects from './components/projects/projects'
import Goals from './components/goals/goals'
import Contact from './components/contact/contact'
import Experience from './components/experience/experience'
import Education from './components/education/education'

const routes = (
    <BrowserRouter>
    <div>
    <Route exact='True' path="/" component={App}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/goals" component={Goals}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/experience" component={Experience}/>
    <Route path="/education" component={Education}/>

    
     </div>
    </BrowserRouter>
)



ReactDOM.render(
   routes,
    document.querySelector('#root')
)