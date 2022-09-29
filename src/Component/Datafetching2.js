import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initialState={
    loading:true,
    error:'',
    post:{}
}

const reducer = (state,action)=>{
    switch(action.type){
        case "FETCH_SUCCESS":
            return {
                loading:false,
                post:action.payload,
                error:''
            }

        case "FETCH_ERROR":
            return{
                loading:false,
                post:{},
                error:'somthing went wrong'
            }
        default:
            return state    
    }
}

function Datafetching2() {
    const [state,dispatch]=useReducer(reducer,initialState)
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res=>{
           dispatch({type:"FETCHING_SUCCESS",payload:res.data})
        })
        .catch(error=>{
            dispatch ({type:"FETCHING_error"})
        })
    },[])
  return (
    <div>
        {state.loading?'loading.....':state.post.title}
        {state.error ? state.error:null}
    </div>
  )
}

export default Datafetching2