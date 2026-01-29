import React from 'react'
import './style.css'

const StyleExample = () => {
    const myStyle = {
        color:'blue',
        backgroundColor : 'yellow'
    }
  return (
    <div>

     <h1 style={{ color:'red'}}> StyleExample</h1>
     <h1 style={myStyle}> Internal css</h1>
     <h1 className='success'> External css</h1>
    </div>
  )
}

export default StyleExample
