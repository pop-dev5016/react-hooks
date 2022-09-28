import React,{useState,useEffect} from 'react'

function Incorrentdependency() {
  
     const[count,setCount] = useState(0)

    useEffect(()=>{
        const interval = setInterval(thick,1000)
        return () =>{
            clearInterval(interval)
        }
    },[count])




     const thick = ()=>{
        setCount(count+1)
     }

  return (
    <div>
      value is {count} counting..........
    </div>
  )
}

export default Incorrentdependency
