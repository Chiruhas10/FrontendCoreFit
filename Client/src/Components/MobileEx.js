import React, { Component } from 'react'

export default class MobileEx extends Component {
  render() {
    return (
      <div className='mobile'>
        <figure className="figure">
            <img src={this.props.path}  alt="" />
            <figcaption >
                <h4>{this.props.name}</h4>
                <p>Price: ₹{this.props.price}</p>
                <button>Buy Now</button>
            </figcaption>
        </figure>
        
      </div>
    )
  }
}
