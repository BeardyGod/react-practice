import React, { useState } from 'react';
import Show from "./Show"
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [arr, setArr] = useState([]);

  const onChange = (e) => {
    setText(e.target.value);
    // console.log(e.target.value)
    var res = e.target.value.split('');
    // console.log(res);
    setArr(res);
    return res;
    // setArr(res);
  }

  const onClick = (e) => {
    // e.preventDefault();
    // console.log(e.target.innerText);
    // var t = text;
    console.log(text)
    var newText = text.replace(e.target.innerText, '');
    setText(newText);
    console.log(newText)
  }

  return (
    <div className="App">
      <h3>Text Area</h3>
      <textarea 
        name="text" 
        id="text" 
        cols="30" 
        rows="4" 
        onChange={onChange}
        value={text}
      >
      </textarea>
      <Show arr={arr} onClick={onClick} />
    </div>
  );
}

export default App;
