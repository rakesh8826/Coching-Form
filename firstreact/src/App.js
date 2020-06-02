import React, { Component } from 'react';
import Demo from './Demo';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Heading from './Heading'
import Course from './Course';

import {BrowserRouter,Route,} from 'react-router-dom';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
              <Heading name="IT" Contact="8826765462" Email="rakesh.focus2015@gmail.com" />  

              <Demo/> 
              <Route path="/home"component={Home}/>
              <Route path="/about"component={About}/>
              <Route path="/course"component={Course}/>
              <Route path="/contact"component={Contact}/> 
              
                <App1/>
            </div>
            </BrowserRouter>
        );
    }
}


class App1 extends Component {
 
    render() {
        return (
            <div>

                
            </div>
        );
    }
}


export default App;