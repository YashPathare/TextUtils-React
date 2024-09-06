import './App.css';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import About from './componenets/About';
import React,{useState} from 'react'
import Alert from './componenets/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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

  // const removeBodyClasses=()=>
  // {
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-info');
    
  // }

  const toggleMode = (cls) =>{
    //removeBodyClasses();
    document.body.className=''; //Alternate solution to removeBodyClasses()
    setMode(cls);
    document.body.classList.add('bg-'+cls)
    showAlert(`${cls.charAt(0).toUpperCase() + cls.slice(1)} Mode Enabled`,"Success");
  //   if( mode==='light')
  //   {
  //     setMode('dark');
  //     document.body.style.backgroundColor='black'
  //     showAlert("Dark Mode Enabled","Success");
  //     /*setInterval( () =>{
  //       document.title=("You are getting hacked!")
  //     },2000 
  //   );
  //   setInterval( () =>{
  //     document.title=("Install something now!")
  //   },1500  
  // );*/

  //   }
  //   else
  //   {
  //     setMode('light');
  //     document.body.style.backgroundColor='white'
  //     showAlert("Light Mode Enabled","Success");
  //   }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes> 
            <Route exact path="/about" element={<About mode={mode} />}/>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text to Analyze Below" mode={mode}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;