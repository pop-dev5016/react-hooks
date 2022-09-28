import React from 'react'
import { useState } from 'react'

function HookCounter2() {
    const initialcount = 0
    const [count,setCount] = useState(initialcount)
  return (
    <div>
        count:{count}<br></br>
        <button onClick={()=>setCount(initialcount)}>reset</button>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>
    </div>
  )
}

export default HookCounter2