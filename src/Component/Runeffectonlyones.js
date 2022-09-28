import React,{useState,useEffect} from 'react'

function Runeffectonlyones() {
  const [x,setX] = useState(0)
  const [y,setY] = useState(0)
 

  const logMousePosition = (e)=>{
    console.log("mouse event");
    setX(e.clientX)
    setY(e.clientY)
  }



  useEffect(()=>{
    console.log("useeffect called");
    window.addEventListener("mousemove",logMousePosition)

    return ()=>{
        console.log("component unmounted");
        window.removeEventListener("mousemove",logMousePosition)

    }
  },[])



  return (
    <div>
       HOOK X - {x} AND HOOK Y - {y}
    </div>
  )
}

export default Runeffectonlyones