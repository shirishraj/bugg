import "./register.scss";
import React from 'react';
import { useState  } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register()
{
  const  navigate = useNavigate()

  const [name,setName]= useState('')
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const [roles,setRoles]= useState('')

  async function registerUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:5000/api/register',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,email,password,roles
      })
  })
    const data =await response.json()

    if (data.status==='ok')
    {
      alert('Register successful!')
      window.location.href='/login'
    }else if (data.error){
      alert('This email has been used already.')
    }
    else{
      alert('This email has been used already.')
    }
    console.log(data)
  }

  return(
    <div className="register">
      
      <form onClick={registerUser}>
        <input 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        type="text" 
        placeholder="Name" />
        <br></br>
        <input 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        type="email" placeholder="Email" />
        <br></br>
        <input 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        type="password" placeholder="Password" />
        <br></br>

        <select name='roles' onChange={(e)=>setRoles(e.target.value)}>
            <option value="none" selected disabled hidden>Select an Option</option>
            <option value='Admin' selected={roles === 'Admin'}>Admin</option>
            <option value='QA' selected={roles === 'QA'}>QA</option>
            <option value='Developer' selected={roles === 'Developer'}>Developer</option>
          </select>
        <br></br>
        
        <button type="submit" 
          onclick="submit">
              Register
          </button>
      </form>
    </div>
  )
}


export default Register