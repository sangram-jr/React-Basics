
import { useState } from 'react'
import './App.css'

function App() {
  const [input,setInput]=useState(''); 
  const [todos,setTodos]=useState([]);

  function onChangeHandler(e){
      setInput(e.target.value);
  }

  //add
  function addHandler(e){
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
  //delete
  function deleteHandler(id){ ////whose id not found,push that content to the array-->means we ignore the specific id
    const foundOthers=todos.filter((x)=>(
      x.id!==id
    ))
    setTodos(foundOthers);
  }

  //done
  function doneHandler(id){
    const foundOne=todos.map((x)=>(
      x.id===id ? {...x,isComplete:!x.isComplete} : x
    ))
    setTodos(foundOne);
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
        <button onClick={addHandler}>add</button>
      </div>
      
      <div className='showData'>
        <ul>
          {
            todos.map((x)=>(
              <li key={x.id} className={x.isComplete?'classIsComplete':''}>

                <span onClick={()=> doneHandler(x.id)}>{x.content}</span>
                <button onClick={()=> deleteHandler(x.id)}>delete</button>
              </li>
            ))
          }
        </ul>
        
        
      </div>
    </div>
  )
}

export default App
