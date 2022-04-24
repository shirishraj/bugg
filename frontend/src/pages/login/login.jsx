import "./login.scss"

import { useState } from "react";
import { Link } from "react-router-dom";

import React from 'react';
import { useForm } from 'react-hook-form';

// export default function Login() {
  
//   const { register , handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);
  
//   return (

    
//     <div className="login">
    
    
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
      
//       <input type="password" placeholder="Password" {...register("Password", {required: true, maxLength: 40})} />
      
//       <input type="submit" />
//     </form>
//     </div>
//   );
// }

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

    if(data.user){
      alert('Login successful')
      window.location.href='/'
    }else{
      alert('Please check your username and password')
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
