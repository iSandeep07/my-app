import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


export default function App(){
const [mode , setMode] = useState('light');
const [alert ,setAlert] = useState(null); 

const showAlert = (message , type)=>{
  setAlert({
    msg: message,
    type: type
  })
setTimeout(() =>{
  setAlert(null);
 } , 1000);

}


const toggleMode = () =>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled" , "success");

  }else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled" , "success");
  }
}
  return (
    // <Router>
    <>
       <Navbar title = "TextUtils"  mode = {mode} toggleMode={toggleMode}/> 
       <Alert alert={alert}/>
       {/* <Routes>   */}
        {/* //  <Route exact path="/" element={ */}
         <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode ={mode}/>
        {/* //  }/>       */}
        {/* //  <Route exact path="about" element={<About />} /> */}
      {/* //  </Routes> */}
    {/* // </Router> */}
    </>
  );}