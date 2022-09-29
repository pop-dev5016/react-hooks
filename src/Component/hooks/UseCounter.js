import React ,{useState} from 'react'

function UseCounter(initialCount=0,value) {
    const [count,setCount] = useState(initialCount ) 
    const increment = ()=>{
        setCount(prevCount=>prevCount+value)
    }
    const Decncrement = ()=>{
        setCount(prevCount=>prevCount-value)
    }
    const Reset = ()=>{
        setCount(0)
    }
    return [count,increment,Decncrement,Reset]
}

export default UseCounter