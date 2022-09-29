import React,{useEffect} from 'react'

function UseDocu(count) {
    useEffect(() => {
        document.title = `count ${count}`
      }, [count])
}

export default UseDocu