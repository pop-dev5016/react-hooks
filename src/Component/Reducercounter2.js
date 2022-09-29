import { useState,useReducer } from "react"
import React from 'react'

const initialState = {firstCounter:0,secondCounter: 10 }
const reducer = (currentstate,action)=>{
     switch(action.type){
        case 'increment':
            return {...currentstate,firstCounter:currentstate.firstCounter+action.value}
        case 'decrement':
            return {...currentstate,firstCounter:currentstate.firstCounter-action.value}
        case 'increment2':
            return {...currentstate,secondCounter:currentstate.secondCounter+action.value}
        case 'decrement2':
            return {...currentstate,secondCounter:currentstate.secondCounter-action.value}
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
        <div>1st count = {count.firstCounter}</div>
        <div>2nd count = {count.secondCounter}</div>
     <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
     <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
     <button onClick={()=>dispatch({type:'increment2',value:1})}>Increment counter 2</button>
     <button onClick={()=>dispatch({type:'decrement2',value:1})}>Decrement counter 2</button>
     <button onClick={()=>dispatch({type:'increment',value:5})}>Increment5</button>
     <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement5</button>
     <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default ReducerCounter2
