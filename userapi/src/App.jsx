
import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react';

function App() {

  const [user,setUser]=useState([]);
  const [page,setPage]=useState(1);

  useEffect(()=>{

    const fetchApi= async()=>{
        const response=await axios.get(`https://randomuser.me/api?page=${page}&results=5`);
        setUser((prevUser)=>[...prevUser,...response.data.results]);//merge prevUser and response.data.results(new user data)
    }

    fetchApi();
  
  },[page]);

  return (
    <div>
      
      {
        user.map((data,index)=>(
          <div key={index}>
            {data.email}
          </div>
        ))
      }
      
      
    </div>
  )
}




export default App
