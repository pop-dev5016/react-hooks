import React,{useState} from 'react'
import UseDocu from './hooks/UseDocu'

function DocTitle() {
  const [count, setCount] = useState(0)

  UseDocu(count)
    
  return (
    <div>
       <button onClick={()=>setCount(count+1)}>count value = {count}</button>
        </div>
  )
}

export default DocTitle