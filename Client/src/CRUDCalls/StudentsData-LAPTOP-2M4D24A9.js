import React, { Component } from 'react'
import axios from 'axios'

export default class StudentsData extends Component {
  constructor(){
    super();

    this.state={
      students:[],
      name:'',
      course:'',
      email:'',
      status:''
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
  getOneRecord = (sid)=>{
    axios.get(`http://localhost:5000/students/${sid}`)
    .then((res)=>{
      console.log(res.data);
      this.setState({
        id: res.data.id,
        name: res.data.name,
        course: res.data.course,
        email: res.data.email,
        status: res.data.status, 
      })
    })
    .catch((err)=>{
      console.log(err);
    })
  }
 ChangeData = (e)=>{
  this.setState({
    [e.target.name]: e.target.value
  })
 }
 SubmitHandler =(e)=>{
  e.preventDefault();
  const {id, name, course, email, status} = this.state;
  axios.put(`http://localhost:5000/students/${id}`,{
    name,
    course,
    email,
    status
  })
  .then(()=>{
    alert('Student Updated Successfully')
    this.fetchStudents();
  })
  .catch((err)=>{
    console.log(err);
  })  
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
            {this.state.students.map((stu,index)=>(
              <tr key={index}>
                <td>{stu.name}</td>
                <td>{stu.course}</td>
                <td>{stu.email}</td>
                <td>{stu.status}</td>
                <td>
                  <button className='btn btn-primary me-2' data-bs-target="#editModal" data-bs-toggle="modal" onClick={()=>this.getOneRecord(stu.id)}>Edit</button>
                  <button className='btn btn-danger' onClick={() => this.deleteStudent(stu.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='modal' id='editModal'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h3 className='fw-semibold'>Edit Student</h3>
              </div>
              <div className='modal-body'>
                <form >
                  <input type="text" name='name' className='form-control mb-3' onChange={this.ChangeData} placeholder='Student Name' value={this.state.name} />
                  <input type="text" name='course' className='form-control mb-3' onChange={this.ChangeData} placeholder='Student Course' value={this.state.course} />
                  <input type="email" name='email' className='form-control mb-3' onChange={this.ChangeData} placeholder='Student Email' value={this.state.email} />
                  <input type="text" name='status' className='form-control mb-3' onChange={this.ChangeData} placeholder='Student Status' value={this.state.status} />
                  
                </form>
              </div>
              <div className='modal-footer'>
                <button className='btn btn-primary' onClick={this.SubmitHandler} data-bs-dismiss="modal">Update Student</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}
