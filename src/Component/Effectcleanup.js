import React,{useState,useEffect} from 'react'
import Runeffectonlyones from './Runeffectonlyones'

function Effectcleanup() {  
    const [display,setDisplay]   = useState(true)  ////////for componnent will mount
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>toggle to display </button>
      {display && <Runeffectonlyones></Runeffectonlyones>}
    </div>
  )
}

export default Effectcleanup
