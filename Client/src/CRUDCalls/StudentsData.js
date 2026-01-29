import React, { Component } from 'react'
import axios from 'axios'

export default class StudentsData extends Component {
  constructor(){
    super();

    this.state={
      students:[]
    }
  }
  fetchStudents = ()=> {
      axios.get(`http://localhost:5000/students`)
    .then((res)=>{
      this.setState(
        {
          students: res.data
        }
      )
    })
    .catch((err)=>{
      console.log(err);
    })
    }
  componentDidMount(){
    
    this.fetchStudents();
  }
  deleteStudent = (sid)=>{
    axios.delete(`http://localhost:5000/students/${sid}`)
    .then(()=>{
      alert('Student Deleted Successfully')
      this.fetchStudents();
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  editStudent = (sid)=>{
    axios.get(`http://localhost:5000/students/${sid}`)
    .then((res)=>{})
  }
  render() {
    return (
      <div className='container p-5'>
        <h1> Students Data -{this.state.students.length}</h1>
        
        <table className='table table-bordered m-3 '>
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((stu)=>(
              <tr>
                <td>{stu.name}</td>
                <td>{stu.course}</td>
                <td>{stu.email}</td>
                <td>{stu.status}</td>
                <td>
                  <button className='btn btn-primary me-2' onClick={()=>this.editStudent(stu.id)}>Edit</button>
                  <button className='btn btn-danger' onClick={() => this.deleteStudent(stu.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    )
  }
}
