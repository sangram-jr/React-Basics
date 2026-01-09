import { useRef, useState } from "react"


function App() {

  const [time,setTime]=useState(1);
  let varRef=useRef();

  function handleClick(){
    varRef.current=setInterval(()=>{
      setTime(x=>x+1);
    },1000)
  }

  function handlePause(){
    clearInterval(varRef.current)
  }
  

  return (
    <div>
      <div>{time}</div>
      <button onClick={handleClick}>start</button>
      <button onClick={handlePause}>pause</button>
    </div>
  )
}

export default App
