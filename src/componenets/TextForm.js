import React, {useState} from 'react'
import './Navbar.css';

export default function TextForm(props) {
  const [text,setText]=useState("");
  const handleUpClick=()=>{
  setText(text.toUpperCase());
  props.showAlert("Converted into Uppercase","Success");
  }

  const handleLoClick=()=>{
    setText(text.toLowerCase());
    props.showAlert("Converted into Lowercase","Success");
    }

  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

  const handleSnClick=()=>{
    setText(text.split(" ").filter((element)=>{return element.length!==0}).join('_'));
    props.showAlert("Converted into Snakecase","Success");
    }

  const handleKeClick=()=>{
    setText(text.split(" ").filter((element)=>{return element.length!==0}).join('-'));
    props.showAlert("Converted into Kebabacase","Success");
    }
    const handleClClick=()=>
    {
      setText("");
      props.showAlert("Cleared text","Success");
    }

    function getNavbarBackgroundColor(mode) {
      switch (mode) {
        case 'primary':
          return '#cce5ff'; // Light shade of primary color
        case 'success':
          return '#d4edda'; // Light shade of success color
        case 'danger':
          return '#f8d7da'; // Light shade of danger color
        case 'warning':
          return '#fff3cd'; // Light shade of warning color
        case 'info':
          return '#d1ecf1'; // Light shade of info color
        case 'dark':
          return '#6c757d'; // Light shade of dark color
        case 'light':
          return '#f8f9fa'; // Light color (white background)
        default:
          return '#ffffff'; // Default color (white)
      }
    }
    

  return (
    <>
      <div>
        <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{color: props.mode === 'dark' ? 'white' : 'black',backgroundColor: getNavbarBackgroundColor(props.mode),}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'light'} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'secondary':'light'} mx-1 my-1`} onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'success':'light'} mx-1 my-1`} onClick={handleSnClick}>Convert to Snake case</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'danger':'light'} mx-1 my-1`} onClick={handleKeClick}>Convert to Kebab case</button> 
        <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'warning':'light'} mx-1 my-1`} onClick={handleClClick}>Clear Text</button>     
      </div>
      <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>Your text have {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>Average person can read it in {Math.round(1/183*text.split('').filter((element)=>{return element.length!==0}).length*100)/100} minutes</p>
        <h3>Preview</h3>
        <p>{text===''?"Nothing to preview.":text}</p>
      </div>
    </>
  )
}
