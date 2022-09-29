import React ,{useState} from 'react'

function UseCounter(initialCount=0) {
    const [count,setCount] = useState(initialCount) 
    const increment = ()=>{
        setCount(prevCount=>prevCount+1)
    }
    const Decncrement = ()=>{
        setCount(prevCount=>prevCount-1)
    }
    const Reset = ()=>{
        setCount(0)
    }
    return [count,increment,Decncrement,Reset]
}

export default UseCounter