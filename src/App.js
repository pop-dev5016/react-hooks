import React from 'react'
import './App.css';
import Effecthook from './Component/Effecthook';
import Refclass from './Component/Refclass';
import RuneffectonlyonesEx from './Component/RuneffectonlyonesEx';
import Runeffectonlyones from './Component/Runeffectonlyones';
import Effectcleanup from './Component/Effectcleanup';
import Incorrentdependencyex from './Component/Incorrentdependencyex';
import Incorrentdependency from './Component/Incorrentdependency';


function App() {
  return (
    <div className="App">
    <Incorrentdependencyex></Incorrentdependencyex>
    <Incorrentdependency></Incorrentdependency>
    </div>
  );
}

export default App;
