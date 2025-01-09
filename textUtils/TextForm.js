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
  const [Text, setText] = useState('Enter your Text here');
  return (
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
    <button className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
  </div>
  )
}
