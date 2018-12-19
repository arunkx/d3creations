import React from 'react';
import {Route,Switch} from 'react-router-dom';
import LandingPage from './landingpage';
import Service from './services';
import Project from './projects';
import Contact from './contactus';
const Main = () => {
    return(
    <Switch>
        <Route exact path='/'component={LandingPage}/>
        <Route  path='/services'component={Service}/>
        <Route  path='/projects'component={Project}/>
        <Route  path='/contactus'component={Contact}/>
    </Switch>)
}

export default Main; 