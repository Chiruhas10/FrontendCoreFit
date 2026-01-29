import React, { Component } from 'react'
import MobileEx from './MobileEx'

export default class Movies extends Component {
  data = [
    {
       name : 'iphone 16 Pro Max',
       price : '149000',
       path : 'https://m.media-amazon.com/images/I/619oqSJVY5L._UF1000,1000_QL80_.jpg',
    },

    {
      name : 'iphone 16 Pro',
      price : '129000',
      path : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRR1d33M7BWwQdx7eHRzvrucWw2PtyA2L1JDzjViaRi8Sc3dsKwXuZRmCt3OYDZMcXA1M&usqp=CAU',
    },
    {
      name : 'iphone 16',
      price : '95000',
      path : 'https://m.media-amazon.com/images/I/712SuRmHG4L._UF1000,1000_QL80_.jpg', 
     },
    {
      name : 'iphone 16 Plus',
      price : '100000',
      path : 'https://m.media-amazon.com/images/I/71D3JsltoLL._UF1000,1000_QL80_.jpg',

    }
 
  ]
  render() {
    return (
      <div className='mobiles'>
        <h1> Mobile Component  </h1>
        {
          this.data.map((item, index)=>{
            return <MobileEx key={index} name={item.name} price={item.price} path={item.path} />

          })
        }

      </div>
    )
  }
}
