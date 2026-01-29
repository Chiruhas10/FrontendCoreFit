import React, { useContext, useState } from 'react'
import {userData} from './MainComp'

const Comp4 = () => {
   const [count, setCount] = useContext(userData)
  return (
    <div>
        <h2>Counter:{count}</h2>
        <button className='btn btn-primary' onClick={()=>setCount(count + 1)}>Add</button>
      <p> Component 4 </p>
    </div>
  )
}

export default Comp4
