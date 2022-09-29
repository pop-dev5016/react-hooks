import React,{useState} from 'react'
import useInput from './hooks/useInput'


function Userform() {
    
    const [firstName,bindFirstName,resetFirstName] = useInput('')
    const [lastName,bindLastName,resetLastName] = useInput('')

    const submithandler = e =>{
        e.preventDefault()
        alert(`hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

  return (
    <div>
        <form onSubmit={submithandler}>
            <label>first name: </label>
            <input type="text" {...bindFirstName} />
            <div>
                <br></br>
            <label>last name: </label>
            <input type="text" {...bindLastName} />
            
            <div>
            <br></br>
            <button type="submit">submit</button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default Userform