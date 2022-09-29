import React,{useState} from 'react'

function Memocount() {
    const [counterone, setCounterone] = useState(0)
    const [countertwo, setCountertwo] = useState(0)

    const incrementone = ()=>{
        setCounterone(counterone+1)
    }

    const incrementTwo = ()=>{
        setCountertwo(countertwo+1)
    }

    const iseven = ()=>{
      let i = 0
      while(i<2000000000) i++
      return counterone % 2 === 0
    }

  return (
    <div>
        <div>
        <button onClick={incrementone}>count value {counterone}</button>
        <span> {iseven()?"EVEN":"ODD"}</span>
        </div>
        <div>
        <button onClick={incrementTwo}>count value {countertwo}</button>
        </div>
    </div>
  )
}

export default Memocount