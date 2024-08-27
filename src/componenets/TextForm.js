import React, {useState} from 'react'
import PropTypes from 'prop-types'

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
    setText(text.replace(/ /g,'_'));
    props.showAlert("Converted into Snakecase","Success");
    }

  const handleKeClick=()=>{
    setText(text.replace(/ /g,'-'));
    props.showAlert("Converted into Kebabacase","Success");
    }
    const handleClClick=()=>
    {
      setText("");
      props.showAlert("Cleared text","Success");
    }
  return (
    <>
      <div>
        <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'grey'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <div className="btn-group">
          <button className={`btn btn-${props.mode==='light'?'primary':'light'} mx-1`} onClick={handleUpClick}>Convert to Uppercase</button>
          <button className={`btn btn-${props.mode==='light'?'secondary':'light'} mx-1`} onClick={handleLoClick}>Convert to Lowercase</button>
          <button className={`btn btn-${props.mode==='light'?'success':'light'} mx-1`} onClick={handleSnClick}>Convert to Snake case</button>
          <button className={`btn btn-${props.mode==='light'?'danger':'light'} mx-1`} onClick={handleKeClick}>Convert to Kebab case</button> 
          <button className={`btn btn-${props.mode==='light'?'warning':'light'} mx-1`} onClick={handleClClick}>Clear Text</button>     
        </div>   
      </div>
      <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>Your text have {(text.length===0)?0:text.split(' ').length} words and {text.length} characters</p>
        <p>Average person can read it in {Math.round(1/183*text.split('').length*100)/100} minutes</p>
        <h3>Preview</h3>
        <p>{text===''?"Enter something in the text box above to preview here.":text}</p>
      </div>
    </>
  )
}
