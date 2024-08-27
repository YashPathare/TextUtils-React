import './App.css';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
// import About from './componenets/About';
import React,{useState} from 'react'
import Alert from './componenets/Alert';
/*import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";*/

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAltert]=useState(null);
  const showAlert = (message,type) => {
    setAltert({
      msg:message,
      type:type
  })
  setTimeout (() =>{
    setAltert(null)
  },2000)
  }
  const toggleMode = () =>{
    if( mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='black'
      showAlert("Dark Mode Enabled","Success");
      /*setInterval( () =>{
        document.title=("You are getting hacked!")
      },2000 
    );
    setInterval( () =>{
      document.title=("Install something now!")
    },1500  
  );*/

    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light Mode Enabled","Success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>} /> */}
          {/* <Route exact path="/" element={<div className="container my-3"> */}
              <TextForm showAlert={showAlert} heading="Enter Text to Analyze Below" mode={mode}/>
              {/*<About/>*/}
            {/* </div>} /> */}
        {/* </Routes> */}
      {/* // </Router> */}
    </>
  );
}

export default App;