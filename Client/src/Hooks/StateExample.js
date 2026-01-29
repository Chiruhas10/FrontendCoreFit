import React, {useEffect, useState} from 'react'

const StateExample = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
      document.title=`You clicked ${count} times`
    })
  return (
    <div className='container p-5'>
      <h1>Count:{count}</h1>
      <button className='btn btn-primary me-3' onClick={()=>setCount(count+1)}>Add</button>
      <button className='btn btn-danger me-3' onClick={()=>setCount(count-1)}>Sub</button>
      <button className='btn btn-warning' onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default StateExample
