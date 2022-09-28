import axios from 'axios'
import React,{useState,useEffect} from 'react'

function DataFetching() {
    const[post,setPost] = useState({})
    const[id,setId] = useState(1)
    

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res);
            setPost(res.data)
        })
        .catch(Err=>{
            console.log(Err);
        },[id])
    })
  return (
    <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
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
