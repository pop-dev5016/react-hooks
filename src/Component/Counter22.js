import React,{useState}from 'react'
import UseCounter from './hooks/UseCounter'

function Counter22() {
   const [count,increment,Decncrement,Reset]=UseCounter(10,10)
  return (
    <div>
        <h2>count = {count}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={Decncrement}>decrement</button>
        <button onClick={Reset}>reset</button>
    </div>
  )
}

export default Counter22