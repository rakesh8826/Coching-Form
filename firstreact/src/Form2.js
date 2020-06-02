import React, { Component } from 'react';
import './form2.css'
class Form2 extends Component {
    constructor(){
        super();
        this.state={
            First_Name:[],
            Last_Name:[],
            Mobile:[],
            course:[],
            Email:[],
        }
        this.handle1 =this.handle1.bind(this)
        this.handle2 =this.handle2.bind(this)
        this.handle3 =this.handle3.bind(this)
        this.handle4 =this.handle4.bind(this)
        this.handle5 =this.handle5.bind(this)
        
    }
    handle1=(event)=>{
        this.setState({First_Name:event.target.value})
        
    }
    handle2=(event)=>{
        this.setState({Last_Name:event.target.value})
    }
    handle3=(event)=>{
        this.setState({Mobile:event.target.value})
    }
    handle4=(event)=>{
        this.setState({course:event.target.value})
    }
    handle5=(event)=>{
        this.setState({Email:event.target.value})
    }
    handlesubmit=(event)=>{
        alert('submited'+JSON.stringify(this.state))
        console.log(event.target.value)
    }
    componentDidMount(){
        const url='http://localhost:5000/';
        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((json) => {
            this.setState({First_Name:json})
            this.setState({Last_Name:json})
            this.setState({Mobile:json})
            this.setState({course:json})
            this.setState({Email:json})
        });
    }
    handleChange(event){
        this.setState({value:event.target.value})
    }
    render() {
        return (
            <div>
                <h2>Register Now</h2>
                <form onSubmit={this.handlesubmit}>
                    <label>First Name</label>
                    <input type="text" value={this.state.First_Name} onChange={this.handle1} placeholder="enter the first name"/><br/>
                    <label>Last Name</label><br/>
                    <input type="text" value={this.state.Last_Name} onChange={this.handle2}placeholder="enter last name"/><br/>
                    <label>Mobile</label><br/>
                    <input type="number"value={this.state.Mobile} onChange={this.handle3}placeholder="enter mobile no"/><br/>
                    <label>Course</label>
                    <input type="text"value={this.state.course} onChange={this.handle4}placeholder="enter your course"/><br/>
                    <label>Email</label>
                    <input type="text"value={this.state.Email} onChange={this.handle5} placeholder="enter your Email_id"/><br/>
                    <input type="submit"value="submit"/>
                </form>
            </div>
        );
    }
}

export default Form2;