import React, { useState } from 'react'

function HookCounter2() {
    const initialcount = 0
    const[count,setCount] = useState(initialcount)


    const incrementnum = ()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount=>prevCount+1)
        }
    }
  return (
    <div>
        COUNT : {count}
      <button onClick={()=>setCount(initialcount)}>RESET</button>
      <button onClick={()=>setCount(prevCount=>prevCount+1)}>INCREMENT</button>
      <button onClick={()=>setCount(prevCount=>prevCount-1)}>DECREMENT</button>
      <button onClick={incrementnum}>INCREMENT 5</button>
    </div>
  )
}

export default HookCounter2
