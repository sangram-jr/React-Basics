import { useContext } from "react";
import { createContext } from "react"
import { useState } from "react"

//step 1: create a context
const lightContext=createContext();

function App() {
  const [light,setLight]=useState(false);

  return (
    //step 2: wrap the provider and set the value that i want in onother component
    <div>
      <lightContext.Provider value={{light,setLight}}>
        <Bulb/>
      </lightContext.Provider>
      
    </div>
  )
}



function Bulb(){
  return(
    <div>
      <BulbOn />
      <ToggleButton />
    </div>
  )
}


function BulbOn(){

  //step 3: use provided data using useContex hook
  const {light}= useContext(lightContext);
  return (
    <div>
      {light ?"Light On":"Light Off"}
    </div>
  )
}



function ToggleButton(){
  
  ////step 3: use provided data using useContex hook
  const {light,setLight}=useContext(lightContext);

  function handleClick(){
    setLight(!light)
  }
  return (
    <div>
      <button onClick={handleClick}>toggle</button>
    </div>
  )
}


export default App
