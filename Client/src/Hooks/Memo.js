import React, { useCallback, useMemo, useState } from 'react'

const Memo = () => {
    const [ count, setCount] = useState(0)
    const [number, setNumber] = useState(4)
    const result = useMemo(()=>{
         return Mul(number )
    }, [number])
    const add = useCallback(()=>{
        setCount(count + 1)
    },[count])
  return (
    <div className='container p-5'>
      <h2>Counter:{count}</h2>
      <button className='btn btn-primary' onClick={add}>Increment</button>
      <h2>Result : {result}</h2>
      <button className='btn btn-primary' onClick={()=>setNumber(number + 1)}>Increment number</button>
    </div>
  )
}
const Mul =(num)=>{
    console.log('function executed')
    return num * num
}
    
export default Memo
