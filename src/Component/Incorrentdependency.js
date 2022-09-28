import React,{useState,useEffect} from 'react'

function Incorrentdependency() {
  
     const[count,setCount] = useState(0)

     const thick = (prevCount)=>{
        setCount(prevCount => prevCount+1)
     }

    useEffect(()=>{
        const interval = setInterval(thick,1000)
        return () =>{
            clearInterval(interval)
        }
    },[])




    

  return (
    <div>
      value is {count} counting..........
    </div>
  )
}

export default Incorrentdependency
