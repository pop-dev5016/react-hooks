import React,{useState,useEffect} from 'react'

function Effecthook() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("")

    useEffect(()=>{
      console.log(" use effect document updated");
      document.title = `you clicked ${count} times`
    },[count])
   
   return (
     <div>
         <input type="text" value={name} onChange={ (e) =>setName(e.target.value)}/>
         <button onClick = {()=>setCount(count+1)}> you clicked {count} times</button>
     </div>
   )
 }

 export default Effecthook