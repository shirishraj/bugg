import React, { Component } from 'react';
import { useState } from "react";
import "./projectform.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/issues/issues"



function ProjectForm()
 { 
  
  const [projectname,setProjectName]= useState('')
  const [user,setUser]= useState('')
  const [role,setRole]= useState('')
  
  
  async function registerProject(event){
    event.preventDefault()
    const response = await fetch('http://localhost:5000/api/project',
    {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        projectname,user,role,
      })
    })
    const data= await response.json()

    // if(data.message==='Project added successfully!'){
    //   alert('Issue successfully added')
    // }
    // else{
    //   alert('Please enter the fields ')
    // }
    console.log(data)
  }
  
  return (
    <div className="issue">
      <Sidebar/>
      <div className="issueContainer">
      <Navbar/>
      
      <div className="issueform">
        <h1>
          Add Project
        </h1>
        <form onSubmit={registerProject}>
          <input 
            type="text"
            placeholder='Project Name'
            value={projectname}
            onChange={(e)=>setProjectName(e.target.value)}
          />
          
          <h5>User</h5>
          
          <input 
            type="text"
            placeholder='user'
            user='user'
            value={user}
            onChange={(e)=>setUser(e.target.value)}
          />

          <h5>Roles</h5>
            <select name='role' onChange={(e)=>setRole(e.target.value)}>
            <option value="none" selected disabled hidden>Select an Option</option>
            <option value='Admin' selected={role === 'Admin'}>Admin</option>
            <option value='QA' selected={role === 'QA'}>QA</option>
            <option value='Developer' selected={role === 'Developer'}>Developer</option>
          </select>
          
          <div className='submit'>
            <input
              type='submit'
              // value=
              value="Submit"
              className='btn btn-primary btn-block'
            />
          </div>
        
        </form>
        
      </div>
      </div>
    </div>
    
  )
}


export default ProjectForm