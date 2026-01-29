import React, { createContext, useState } from 'react'
import Comp1 from './Comp1'


export const userData = createContext()

const MainComp = () => {

    const [count, setCount] = useState(0)
  return (
    <div className='container p-5'>
        <userData.Provider value={[count, setCount]}>
        <h2>Counter:{count}</h2>
        <button className='btn btn-primary' onClick={()=>setCount(count + 1)}>Add</button>
        <p>Main Component</p>
        <Comp1 />
        </userData.Provider>
    </div>
  ) 
}

export default MainComp
