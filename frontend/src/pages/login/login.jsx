import "./login.scss"
import { useState } from "react";
import React from 'react';
import { json } from "express";

function Login()
{
  const [name,setName]= useState('')
  const [password,setPassword]= useState('')

  async function loginUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:5000/api/login',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,password
      })
  })
    const data =await response.json()

    if(data.status==='ok'){
      //store JWT token
      alert(JSON.stringify(data));
      localStorage.setItem("token", data["token"]);
      //window.location.href='/dashboard';

    }
    
    else if (data.status='501'){
      alert('Please check your password')
    }
    else if (data.status='500'){
      alert('Please check your username ')
    }

    console.log(data)
  }

  return(
    <div className="login">
      
      <form onClick={loginUser}>
        <input 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        type="text" 
        placeholder="Name" />
        <br></br>
        
        <input 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        type="password" placeholder="Password" />
        <br></br>

        <input type="submit" value="Login"/>
      </form>
    </div>
  )
}


export default Login
