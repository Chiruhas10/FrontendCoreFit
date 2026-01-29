import React, { useRef } from 'react'

const RefExample = () => {
    const qtyRef = useRef(0)
    const increment =()=>{
     qtyRef.current.value++
    }
    const decrement = ()=>{
        qtyRef.current.value--
    }
  return (
    <div className='container p-5'> 
     <button onClick={decrement}>-</button>
      <input ref={qtyRef} placeholder='no.of item' />
      <button onClick={increment}>+</button>
    </div>
  )
}

export default RefExample
