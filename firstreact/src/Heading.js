import React, { Component } from 'react';
import './heading.css'
class Heading extends Component {
    render() {
        return (
            <div className="heading">
               <h1>EXPERT    {this.props.name}     TRAINING CENTRE</h1>
               <div className="right">
        
        <h4>Contact:-{this.props.Contact}</h4>
        
              </div>
            </div>
        );
    }
}

export default Heading;