import './App.css'
import  Timer  from './components/Timer'
import  Stopwatch  from './components/Stopwatch'
import { useState } from 'react'

function App() {
  const [show,setShow]= useState(false)
  return (
    <div className="App">
      <button onClick={()=>{setShow(!show)}}>{show ? "StopWatch" : "Timer"}</button>
      {show ? <Timer/> : <Stopwatch/>}
    </div>
  )
}

export default App
