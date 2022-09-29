import React, { Children } from 'react'

function Button1({handler, children}) {
    console.log("rendered button - ",children);
  return (
    <div>
        <button onClick={handler}>
        {children}
        </button>
    </div>
  )
}

export default React.memo(Button1)