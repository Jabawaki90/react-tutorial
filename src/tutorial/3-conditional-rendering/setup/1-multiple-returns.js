import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [user, setUser] = useState('')
  const [toggle, setToggle] = useState("true")

  const fetchData = async()=>{
    const response = await fetch(url)
    const data = await response.json();
    setUser(data.login);
    setLoading(false)
  }


  useEffect(()=>{
    fetchData()
  }
    
  ,[])
  if(loading){
    return <h1>Loading...</h1>
  }
  if(error){
    return <h1>Error!</h1>
  }
  return <>
    <h1>{user}</h1>
    
  </>
  
};

export default MultipleReturns;
