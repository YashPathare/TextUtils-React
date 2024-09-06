import React from 'react'

 export default function About(props) {
//     const [myStyle,setmyStyle]=useState(
//     {
//         color:'black',
//         backgroundColor:'white',
//     }
// )

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

          let myStyle={
            color:props.mode!=='dark'?'black':'white',
            backgroundColor:getNavbarBackgroundColor(props.mode)
        }
  return (
    <>
        <div className={`text-${props.mode!=='light'?'light':'dark'}`}>
            <h1>About Us</h1>
        <div style={myStyle} className="accordion" id="accordionExample">
    <div style={myStyle} className="accordion-item">
        <h2 className="accordion-header">
            <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
            </button>
        </h2>
        <div style={myStyle} id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div style={myStyle} className="accordion-body">
            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count or character count. 
        </div>
        </div>
    </div>
    <div style={myStyle} className="accordion-item">
        <h2 className="accordion-header">
        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
        </button>
        </h2>
        <div style={myStyle} id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div style={myStyle} className="accordion-body">
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the numbber of words and characters. Thus it is suitable for writing text with word/ character
        </div>
        </div>
    </div>
    <div style={myStyle} className="accordion-item">
        <h2 className="accordion-header">
        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
        </button>
        </h2>
        <div style={myStyle} id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div style={myStyle} className="accordion-body">
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
        </div>
        </div>
    </div>
    </div>


        </div>
    </>
  )
}
