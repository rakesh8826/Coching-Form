import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Web extends Component {
    render() {
        return (
            <div>
                <h1>this is web development</h1>
               <li><Link to="/Web">web development</Link></li>
                
            </div>
        );
    }
}




export default Web;