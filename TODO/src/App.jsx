
import { useState } from 'react'
import './App.css'

function App() {
  const [input,setInput]=useState(''); 
  const [todos,setTodos]=useState([]);

  function onChangeHandler(e){
      setInput(e.target.value);
  }

  function clickHandler(e){
    e.preventDefault();
    const newTodo={
      id:Date.now(),
      content:input,
      isComplete:false
    }

    setTodos([
      ...todos,
      newTodo
    ])
    setInput('');
    
    
  }

  return (
    <div>
      <div>
       
        <input 
          type='text'
          placeholder='Add Todo'
          value={input}
          onChange={onChangeHandler}
        />
        <button onClick={clickHandler}>add</button>
      </div>
      
      <div className='showData'>
        <ul>
          {
            todos.map((x)=>(
              <li key={x.id}>{x.content}</li>
            ))
          }
        </ul>
        
      </div>
    </div>
  )
}

export default App
