import React,{useState}from 'react'

function Userform() {
    
    const [firstName,bindFirstName,resetFirstName] = useInput('')
    const [lastName,bindLastName,resetLastName] = useInput('')

    const submithandler = e=>{
        e.preventDefault()
        alert(`hello ${firstName} ${lastName}`)
    }

  return (
    <div>
        <form onSubmit={submithandler}>
            <label>first name: </label>
            <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            <div>
                <br></br>
            <label>last name: </label>
            <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            
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