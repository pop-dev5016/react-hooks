import { useState,useReducer } from "react"
import React from 'react'

const initialState = 0
const reducer = (currentstate,action)=>{
     switch(action){
        case 'increment':
            return currentstate+1
        case 'decrement':
            return currentstate-1
        case 'reset':
            return initialState
        default:
           return currentstate     
     }
}

function ReducerCounter() {
     const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <div>count = {count}</div>
     <button onClick={()=>dispatch('increment')}>Increment</button>
     <button onClick={()=>dispatch('decrement')}>Decrement</button>
     <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default ReducerCounter
