import React from 'react'

function Title() {
    console.log("title rendered")
  return (
    
    <div>
        <h1>use call back hook</h1>
    </div>
  )
}

export default React.memo(Title)