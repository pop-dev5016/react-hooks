import React ,{useReducer}from 'react'
import './App.css';
import ComponentA2 from './Component/ComponentA2';
import ComponentB2 from './Component/ComponentB2';
import Componentc2 from './Component/Componentc2';


export const CountContext = React.createContext()

const initialState = 0
const reducer = (state,action)=>{
     switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
           return state     
     }
}


function App() {
  const[count,dispatch] = useReducer(reducer,initialState)
  return (
   <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
     <div className="App">
      count: {count}
    <ComponentA2></ComponentA2>
    <ComponentB2></ComponentB2>
    <Componentc2></Componentc2>
     </div>
   </CountContext.Provider>
  ) 
  }
export default App;
