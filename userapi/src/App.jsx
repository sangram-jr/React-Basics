
import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react';

function App() {

  const [user,setUser]=useState([]);
  const [page,setPage]=useState(1);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{

    const fetchApi= async()=>{
        setLoading(true);
        const response=await axios.get(`https://randomuser.me/api?page=${page}&results=5`);
        setUser((prevUser)=>[...prevUser,...response.data.results]);//merge prevUser and response.data.results(new user data)
        setLoading(false);
    }

    fetchApi();
  
  },[page]);



  function pageRefresh(){
    setPage(c=>c+1);
  }

  return (
    <div className='upper'>
      <h1>User Data</h1>
      <div className='main'>
          {
            user.map((data,index)=>(
              <div key={index} className='box'>
                <img src={data.picture.thumbnail} />
                <h3>{data.name.first}</h3>
              </div>
            ))
          }
      </div>

      <div className='loading-text'>
        {loading && "loading...."}
      </div>
      
      <div className='btn'>
        <button onClick={pageRefresh}>add</button>
      </div>
      
      
    </div>
  )
}




export default App
