import React from 'react';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import '../styles/HomePage.scss'
import HomePage from '../components/HomePage';




function Routers ()  {
    return(

        <Router>
            <div className="navlinks">
            </div>
            <Switch>
                <Route exact path='/'><HomePage /></Route>
            </Switch>
        </Router>
    )
};
export default Routers;