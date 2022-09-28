import { useState,useReducer } from "react"
import React from 'react'

const initialState = {firstCounter:0}
const reducer = (currentstate,action)=>{
     switch(action.type){
        case 'increment':
            return {firstCounter:currentstate.firstCounter+action.value}
        case 'decrement':
            return {firstCounter:currentstate.firstCounter-action.value}
        case 'reset':
            return initialState
        default:
           return currentstate     
     }
}

function ReducerCounter2() {
     const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <div>count = {count.firstCounter}</div>
     <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
     <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
     <button onClick={()=>dispatch({type:'increment',value:5})}>Increment 5</button>
     <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement 5</button>
     <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default ReducerCounter2
