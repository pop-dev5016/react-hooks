import React from 'react'

function Count({text,count}) {
    console.log(`2.${text} is rendered`);
  return (
    <div> {text}-{count}</div>
  )
}

export default Count