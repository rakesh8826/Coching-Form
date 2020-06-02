import React from 'react';
import './index.css'
import {Link} from 'react-router-dom';
const Demo=()=>{
    return(<div className="style">
        <ul>
            <li> <Link to="/Home">Home</Link></li>
            <li><Link to="About">About</Link></li>
            <li><Link to="Course">Course</Link></li>
            <li><Link to="Contact">Registration</Link></li>
            
        </ul>
    </div>)
}
export default Demo;