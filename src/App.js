import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import React, {useState} from 'react';
//import Note from './components/note';

function App() {
  const [mode , setMode] = useState('light');
 
  const toggleMode=()=>{
    if(mode==="light"){
      setMode('dark');
     
    }
    else{
    setMode('light');
   }
  }
  return (
    <>
<Navbar title="Analyzer" mode={mode}  toggleMode={toggleMode}/> 
{/* <Note/>*/ }
<TextForm mode={mode} />

</>
  );

}

export default App;
