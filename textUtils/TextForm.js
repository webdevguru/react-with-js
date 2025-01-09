import React, { useState } from 'react';

export default function Textform( props) {
const handleUpclick =() =>{
  console.log("Uppercase was clicked" + Text);
     let newText = Text.toUpperCase();
  setText(newText); 
  
}
const handleonchange =(event) =>{
  setText(event.target.value);
}
const handlelolclick =() =>{  
  let newText = Text.toLowerCase();
  setText(newText);
}

const handlclearclick =() =>{
  let newText = '';
  setText(newText);
}

const handledownload =() =>{  
  const element = document.createElement("a");
  const file = new Blob([Text], {type: 'text/plain'});
  element.href = URL.createObjectURL(file);
  element.download = "myFile.txt";
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
}
  const [Text, setText] = useState('Enter your Text here');
  return (
    <>
    <div className="container mt-3">
      <h1>{props.heading}</h1>
    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Example Textarea
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1" value={Text} onChange={handleonchange}
        rows="4"
        placeholder="Enter your text here"

      ></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handlelolclick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handlclearclick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handledownload}>Download Text</button>
  </div>
   <div className="container">
     <h1>Your Text summery</h1>
    <p>{Text.split(" ").length} words and {Text.length} characters</p>
    <p>{0.008 * Text.split(" ").length} Minutes read</p>
    <h2>preview</h2>
    <p>{Text}</p>
   </div>
    </>
  )
}
