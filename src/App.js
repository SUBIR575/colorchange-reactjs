import React,{useState} from 'react'
import Card from './Card'
import './App.css'

const App = () => {
  const [state, setstate] = useState('#ff4d4d')
  const [newText,setNewText] = useState();
  const clickEvent=()=>{
    setstate("#4dff4d");
    setNewText('Button Clicked');
  }
  return (
    <>
    <div className='container'>
    <div>
    <Card bgcolor={state}/>
    <br/>
    <div style={{textAlign:'center'}}>
    <button className='btn' onClick={clickEvent}>Press</button>
    <br/>
    <h4>{newText}</h4>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
