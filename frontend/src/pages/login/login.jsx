import "./login.scss"

/*const Login = () => {
  return (
    <div>Login</div>
  )
}*/
//export default Login
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
  
  const { register , handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (

    
    <div className="login">
    
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
      
      <input type="password" placeholder="Password" {...register("Password", {required: true, maxLength: 40})} />
      
      <input type="submit" />
    </form>
    </div>
  );
}
