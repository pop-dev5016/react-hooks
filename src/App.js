import React from 'react'
import './App.css';
import ComponentC from './Component/ComponentC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"pavithran"}>
        <ChannelContext.Provider value ={"popcity"}>
           <ComponentC></ComponentC>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
