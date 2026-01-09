import { useRef, useState } from "react"


function App() {

  const [time,setTime]=useState(0);
  let varRef=useRef();

  function handleClick(){
    varRef.current=setInterval(()=>{
      setTime(x=>x+1);
    },1)
  }

  function handlePause(){
    clearInterval(varRef.current);
  }
  

  function handleReset(){
    clearInterval(varRef.current);
    setTime(0);
    
  }


  function formatTimer(time){

    // 1 hour = 3600000 ms
    const hours = Math.floor(time / 3600000);

    // remaining time after hours
    const remainingAfterHours = time % 3600000;

    //1 min=60 sec=60000 ms
    const minutes=Math.floor(remainingAfterHours/60000);
    const remainingAfterMinutes= remainingAfterHours%60000;

    //1 sec=1000 ms
    const seconds=Math.floor(remainingAfterMinutes/1000) ;
    const remainingAfterSeconds=remainingAfterMinutes%1000;

    const miliseconds=remainingAfterSeconds;


    //now these convert to string and add leading zero and how many number is needed to represent hour,min,sec,ms(hour->2->because max 23hour  || min->2->max 59min)
    const hour=hours.toString().padStart(2,"0");//first argument --->in the padstart is how much max number need to represent the hour   2nd argument--->leading zero if two number is not present
    const minute=minutes.toString().padStart(2,"0");
    const second=seconds.toString().padStart(2,"0");
    const milisecond=miliseconds.toString().padStart(3,"0");
    return {hour,minute,second,milisecond};
  }
  

  //get the hour,min,sec,ms form the formatTimer function call
  const {hour,minute,second,milisecond}=formatTimer(time);


  return (
    <div>
      <p>{hour}:{minute}:{second}:{milisecond}</p>

      <button onClick={handleClick}>start</button>
      <button onClick={handlePause}>pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
