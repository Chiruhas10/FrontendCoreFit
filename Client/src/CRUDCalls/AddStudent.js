import axios from 'axios';
import React, { Component } from 'react'

export default class AddStudent extends Component {
    constructor(){
        super();

        this.state = {
            name:'',
            course:'',
            email:'',
            status:''   
        }
    }
    ChangeData = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    SubmitHandler = (e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post(`http://localhost:5000/students`,this.state)
        .then(()=>{
            alert('Student Added Successfully')
            this.setState({
                name:'',
                course:'',
                email:'',
                status:''   
            })
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }
  render() {
    return (
      <div className='container p-5'>
        <div className='col-lg-6 shadow p-5 mx-auto'>
            <form onSubmit={this.SubmitHandler}>
                <h2 className='text-center mb-4'> Add New Student</h2>
                <input type="text" name='name' value={this.state.name} onChange={this.ChangeData} className='form-control' placeholder='Student Name' />
                <input type="text" name='course' value={this.state.course} onChange={this.ChangeData} className='form-control my-3' placeholder='Student Course' />
                <input type="email" name='email' value={this.state.email} onChange={this.ChangeData} className='form-control' placeholder='Student Email' />
                <input type="text" name='status' value={this.state.status} onChange={this.ChangeData} className='form-control my-3' placeholder='Student Status' />
                <button className='btn btn-primary w-100'>Submit</button>
            </form>
        </div>
        
      </div>
    )
  }
}
