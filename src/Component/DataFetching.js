import axios from 'axios'
import React,{useState,useEffect} from 'react'

function DataFetching() {
    const[posts,setPosts] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            console.log(res);
            setPosts(res.data)
        })
        .catch(Err=>{
            console.log(Err);
        },[])
    })
  return (
    <div>
      <ul>'
        {
            posts.map((post)=>(<li key = {post.id}> {post.id}.and {post.userId}</li>))
        }
      </ul>
    </div>
  )
}

export default DataFetching
