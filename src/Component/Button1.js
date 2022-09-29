import React, { Children } from 'react'

function Button1({handler, children}) {
    console.log("3/5 rendered - ",children);
  return (
    <div>
        <button onClick={handler}>
        {children}
        </button>
    </div>
  )
}

export default Button1