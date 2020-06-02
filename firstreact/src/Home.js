import React, { Component } from 'react';
import './home.css';
class Home extends Component {
    render() {
        return (
            <div className="home1">
               <table className="table">
                   <tr>   
                   <th><Home1 language="Latest Programming Skills of 2020" /></th>
                   
                   </tr>
               </table>
              
<Home2 name="ENQUIRY NOW"/>
            </div>
        );
    }
}


class Home1 extends Component {
    render() {
        return (
            <div className="language">
                <h2>{this.props.language} </h2>
                <table>
                    <tr>
                        <ul >
                            <li ><td>Node js (Backend)</td></li>
                            <li><td>Expressjs</td></li>
                            <li ><td>Type Script</td></li>
                            <li ><td>java</td></li>
                            <li ><td>python</td></li>
                            <li ><td>React js (library)</td></li>
                            <li><td>java script</td></li>
                            <li><td>Embedded</td></li>
                            <li><td>MongoDB(Database)</td></li>
                            <li><td>Angular(Framwork)</td></li>
                            
                        </ul>
                        
                    </tr>
                </table>
                <br/>
        
            </div>
        );
    }
}



class Home2 extends Component {
    constructor(){
        super();
        this.state={
            Name:[],
            Mobile:[],
            course:[],
            Email:[],
        }
        this.handle1 =this.handle1.bind(this)
        this.handle2 =this.handle2.bind(this)
        this.handle3 =this.handle3.bind(this)
        this.handle3 =this.handle3.bind(this)
    }
    handle1=(event)=>{
        this.setState({Name:event.target.value})
        
    }
    handle2=(event)=>{
        this.setState({Mobile:event.target.value})
    }
    handle3=(event)=>{
        this.setState({course:event.target.value})
    }
    handle4=(event)=>{
        this.setState({Email:event.target.value})
    }
    handlesubmit=(event)=>{
        alert('your form is recorded'+JSON.stringify(this.state))
        
        console.log(event.target.value)
    }
    render(){
        return(
            <div>
               <h2>ENQUIRY NOW</h2>
               <form onSubmit={this.handlesubmit}>
                    <label>Name</label>
                    <input type="text" value={this.state.Name} onChange={this.handle1} placeholder="Enter the name"/><br/>
                    <label>Mobile no</label><br/>
                    <input type="number" value={this.state.Mobile} onChange={this.handle2}placeholder="Enter mobile no"/><br/>
                    <label>Course</label><br/>
                    <input type="text"value={this.state.course} onChange={this.handle3}placeholder="Enter course"/><br/>
                    <label>Email</label>
                    <input type="text"value={this.state.Email} onChange={this.handle4}placeholder="Enter your Email"/><br/>
                    <input type="submit"value="submit"/>
               </form>
            </div>
        )
    }
}



export default Home;