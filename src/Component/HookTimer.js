import React,{useState,useEffect} from 'react'

function HookTimer() {
  const [timer,setTimer] = useState(0)
  useEffect(() => {
    const interval = setInterval(()=>{
        setTimer(prevTimer=>prevTimer+1)
    },1000)
  
    return () => {
      clearInterval(interval)
    };
  }, [])
  
  return (
    <div>
        HookTimer -{timer}
       <button onClick={()=>clearInterval(interval)}> to clear interval</button>
    </div>
   
  )
}

export default HookTimer