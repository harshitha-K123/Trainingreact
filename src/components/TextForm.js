import React, {useState} from "react"

export default function TextForm(props) {
  const handleUpClick = ()=>{
  let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
      setText(newText)
    }
    const handleClearClick = ()=>{
      let newText = '';
        setText(newText)
      }

    const handleOnChange = (event)=>{
      //console.log("On Change")
      setText(event.target.value)
  }
  const[text, setText]=useState ('');
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to Lowercase</button>
<button className="btn btn-primary" onClick={handleClearClick}>Clear text</button>
    </div>
    <div className="container my-3">
      <h1>Text Summary</h1>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

