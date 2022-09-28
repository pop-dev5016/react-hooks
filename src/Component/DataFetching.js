import axios from 'axios'
import React,{useState,useEffect} from 'react'

function DataFetching() {
    const[post,setPost] = useState({})
    const[id,setId] = useState(1)
    const[idFromButtonClick,setIdFromButtonClick] = useState(1)
    
    const handleclick=()=>{
        setIdFromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res=>{
           
            setPost(res.data)
        })
        .catch(Err=>{
           
        },[idFromButtonClick])
    })

    
  return (
    <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <button type="button" onClick={handleclick}>fetch post</button>
        <div>{post.title}</div>
      {/* <ul>
        {
            posts.map((post)=>(<li key = {post.id}> {post.id}.and {post.userId}</li>))
        }
      </ul> */}

    </div>
  )
}

export default DataFetching
