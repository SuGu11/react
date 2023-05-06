
import React,{ useState } from 'react'

export default function Textform(props) {
  const [text, setText] = useState('Enter your text here');
  const handleUpcase=()=>{
    // console.log("handle uppercase was clicked" + text);
    let newText= text.toUpperCase();
    setText(newText)
  }
  const handleonchange=(event)=>{
    // console.log("on change")
    setText(event.target.value);
  }
  return (

    <div>
      <h1>{props.Heading}</h1>
<div className="mb-3">
<textarea className="form-control"onChange={handleonchange} value={text} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary' onClick={handleUpcase}>Convert to Uppercase</button>
<div className='container my-2'>
  <h1> your text summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
</div>
    </div>
  )
}
