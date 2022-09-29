import React from 'react'

function Button2({salaryhandler,children}) {
    console.log("5. render",children)
  return (
    <div>
        <button onClick={salaryhandler}>{children}</button>
    </div>
  )
}

export default Button2