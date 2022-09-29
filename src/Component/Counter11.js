import React,{useState}from 'react'
import UseCounter from './hooks/UseCounter'

function Counter11() {

    const [count,increment,Decncrement,Reset]=UseCounter(0,1)
  return (
    <div>
        <h2>count = {count}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={Decncrement}>decrement</button>
        <button onClick={Reset}>reset</button>
    </div>
  )
}

export default Counter11