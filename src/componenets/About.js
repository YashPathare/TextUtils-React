import React,{useState} from 'react'

export default function About(props) {
    const [myStyle,setmyStyle]=useState(
    {
        color:'black',
        backgroundColor:'white',
    }
)
    const[btnText,setbtnText]=useState("Enable dark mode");
    const changeMode = () =>{
        if (myStyle.color==='white')
        {
        setmyStyle({
            color:'black',
            backgroundColor:'white',
        })
        setbtnText("Enable dark mode")
        }
        else
        {
            setmyStyle({
                color:'white',
                backgroundColor:'black',
                border:'1px solid white'
            })
            setbtnText("Enable light mode")
        }
    }
  return (
    <>
        <div style={myStyle}>
            <h1>About Us</h1>
        <div style={myStyle} className="accordion" id="accordionExample">
    <div style={myStyle} className="accordion-item">
        <h2 className="accordion-header">
        <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
        </button>
        </h2>
        <div style={myStyle} id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div style={myStyle} className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNameNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div style={myStyle} className="accordion-item">
        <h2 className="accordion-header">
        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
        </button>
        </h2>
        <div style={myStyle} id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div style={myStyle} className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div style={myStyle} className="accordion-item">
        <h2 className="accordion-header">
        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
        </button>
        </h2>
        <div style={myStyle} id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div style={myStyle} className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    </div>

        <div className="container my-3">
            <button onClick={changeMode} className="btn btn-info">{btnText}</button>
        </div>
        </div>
    </>
  )
}
