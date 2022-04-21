import React, { Component } from 'react';
import { useState } from "react";
import "./issueform.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/issues/issues"

/*
const issues = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}
*/


export const IssueForm = () => {
  let [des, setDes] = useState("");
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  
  const { name, email, password, password2 } = user;
  
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
      <Navbar/>
      
    <div className="jumbotron">
      <h4>Add New Issue Details</h4>
      <form >
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            value={name}
            // onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            name='email'
            value={email}
            // onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            // onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            name='password2'
            value={password2}
            // onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <input
          type='submit'
          value='Sign Up'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
    </div>
    </div>
  );
};


export default IssueForm