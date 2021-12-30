import React, { useRef, useState } from 'react';


export default function TextForm(props) {
  const [text, setText,] = useState("");
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);


  const capitalize = () => {
    let firstChar =text.charAt(0);
    let newText = firstChar.toUpperCase();
    setText(newText + text.slice(1));
    props.showAlert("First Latter Captalied", "success");
  
  }

  const handleUpClick = () => {
    //  console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Convert To Upper Case", "success");
  }

  const handleLoClick = () => {
    //  console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Convert To Lower Case", "success");
  }

  const handleClearClick = () => {
    //  console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText)
    props.showAlert("Clear All Text", "success");
  }

  //copy button

  // function copyToClipboard(e) {
  //   console.log("textAreaRef",textAreaRef);
  //   textAreaRef.current.select();
  //   document.execCommand('copy');
  //   e.target.focus();
  //   alert('You are sure this value copy')
  // };
  const handleCopy = () => {
    console.log("copy text");
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    alert('Are You Sure Copy Text')
  }


//handle extra space
const handleExtraSpace = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Remove Extra Space", "success");
  
}

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }


  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1 className='my-3'>{props.heading}</h1>
        <div className="mb-3">
          {/* onChange={(e) => handleOnChange(e)} */}
           <textarea  ref={textAreaRef} className="form-control" placeholder='Enter Text here' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#042743':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-primary " onClick={capitalize}>First Later Capital</button>
          <button className="btn btn-primary " onClick={handleUpClick}>Convert To Uppercase</button>
          <button className="btn btn-primary " onClick={handleLoClick }>Convert To Lowercase</button>
          <button className="btn btn-primary " onClick={handleClearClick}>Clear</button>
          <button className="btn btn-primary " onClick={handleCopy}>Copy</button> 
          {copySuccess}
          <button className="btn btn-primary " onClick={handleExtraSpace}>Extra Space Remove</button> 
            {/* {state.copySuccess} */}
          
        </div>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p >{0.008 * text.split("").length} Minutes Read</p>
        <h2 >Preview</h2>
        <p>{text.length>0?text: "Enter Something in the textBox above to preview it here."}</p>
      </div>


    </>
  )
}
