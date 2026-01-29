import React, { Component } from 'react'
import axios from 'axios'

export default class UsersData extends Component {
    constructor(){
        super();
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            this.setState({users: res.data})
        })
        .catch(err => {
            this.setState({users: []})
        })
    }
  render() {
    return (
      <div className='container p-5'>
        <h1>Users:{this.state.users.length}</h1>
        <table className='table table-bordered text-center mt-3'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {this.state.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>

      </div>
    )
  }
}
