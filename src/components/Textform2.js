import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () =>{
//  console.log("Uppercase was clicked" + text);
 let newText = text.toLowerCase();
 setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
           }

    const [text, setText] = useState("Enter Text here");
  return (
    <div className="my-3">   
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* onChange={(e) => handleOnChange(e)} */}
           <textarea className="form-control" placeholder='' value={text} onChange = {handleOnChange} id="myBox"  rows="8"></textarea>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
             <button className="btn btn-primary " onClick={handleUpClick}>Convert To Lowercase</button>
        </div>
    </div>
  )
}
