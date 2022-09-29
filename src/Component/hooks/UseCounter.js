import React ,{useState} from 'react'

function UseCounter() {
    const [count,setCount] = useState(0) 
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