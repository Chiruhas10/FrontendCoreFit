import React, { Component } from 'react'

export default class StateExample extends Component {
    constructor(){
        super()
        //state initialization
        this.state={
            count : 0
        }
    }
    //state update
    add = () =>{
        this.setState({
            count: this.state.count +1
        })
    }
  render() {
    console.log("render method called");

    return (
      <div className='container p-5'>
        {/* state display */}
        <h1 >Counter: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}
