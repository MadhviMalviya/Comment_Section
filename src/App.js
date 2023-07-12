
import './App.css';
import { useState } from 'react';

function App() {
  const[comment,setComnment]=useState('')
const[currentcomment,setCurrentComment]=useState([])

function handleClick(){
  setCurrentComment((currentcomment)=>[...currentcomment,comment])
}

  function handleChange(e){
    setComnment(e.target.value)
  }
  return (

    <div className="App">
    {currentcomment.map((text)=>(
      <div className='container'>{text}</div>
    ))}

   
    <div className='comment' >
      <h4 className='commentText' >Add Comment</h4>
      <textarea  className='ipbox' value={comment} onChange={handleChange} />
      <button className='btn'  onClick={handleClick} >Submit</button>
      </div>
    </div>
  );
}

export default App;


