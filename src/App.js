import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
 
let name="Changezi";
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#343a40';
      showAlert("Dark mode has been enabled!","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Dark mode has been disabled!","success");
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="Text Utils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
      {/* <Routes>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text Below to analyze" mode={mode} toggleMode={toggleMode} />} />
      </Routes> */}

      <TextForm showAlert={showAlert} heading="Enter Your Text Below to analyze" mode={mode} toggleMode={toggleMode} />
    </div>
    {/* </Router> */}
    </>
  )
}

export default App;
