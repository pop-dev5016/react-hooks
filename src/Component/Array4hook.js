import React, { useState } from 'react'


function Array4hook() {
    const [items,setItems] = useState([])
    const additem = ()=>{
        setItems([...items,{id:items.length,value:Math.floor(Math.random()*10)+1}])
        
    }
  return (
    <div>
        <button onClick={additem}>add an item</button>
        <ul>
            {items.map(item =>(<li key={item.id}>keyis {item.id}   opop{item.value}</li>))}
        </ul>
    </div>
  )
}

export default Array4hook