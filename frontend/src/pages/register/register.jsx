import "./register.scss";
import Axios from 'axios';
import React from 'react';
import { useState } from "react";
import { useForm } from 'react-hook-form';
/*const Login = () => {
  return (
    <div>Login</div>
  )
}*/
//export default Login


export default function Register() {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('')
  
  /*const { register, handleSubmit, formState: { errors } } = useForm();*/
  const {handleSubmit, formState: {errors}} =useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  
  const register = async() => {
    const userDetails = {usernameReg,passwordReg,emailReg}
    await Axios.post('http://localhost:5000/api/register',userDetails).then((response) => {
      console.log(response);
    });
  };
  return (

    
    <div className="register">
    
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text"
      onChange={(e)=> {setUsernameReg(e.target.value)}}
      placeholder="Name"  />
     
     <input type="email"
     onChange={(e)=> {setEmailReg(e.target.value)}}
     placeholder="Email"  />
      
      <input type="password" 
      onChange={(e)=> {setPasswordReg(e.target.value)}}
      placeholder="Password"  />
      
      <input type="password" placeholder="Retype Password"  />
      {/* //<input onClick={register} type="submit" /> */}
      <button onClick={register}>Register</button>
    </form>
    </div>
  );
}
