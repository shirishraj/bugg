import React, { Component } from 'react';
import { useState } from "react";
import "./issueform.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/issues/issues"



function IssueForm()
 { 
  
  const [name,setName]= useState('')
  const [status,setStatus]= useState('')
  const [description,setDescription]= useState('')
  const [priority,setPriority]= useState('')
  
  
  async function registerIssue(event){
    event.preventDefault()
    const response = await fetch('http://localhost:5000/api/issue',
    {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,status,description,priority,
      })
    })
    const data= await response.json()

    if(data.message==='Issue added successfully!'){
      alert('Issue successfully added')
    }
    else{
      alert('Please enter the fields ')
    }
    console.log(data)
  }
  
  return (
    <div className="issue">
      <Sidebar/>
      <div className="issueContainer">
      <Navbar/>
      
      <div className="issueform">
        <h1>
          Add Issues
        </h1>
        <form onSubmit={registerIssue}>
          <input 
            type="text"
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          
          <h5>Status</h5>
          <select name='status' onChange={(e)=>setStatus(e.target.value)}>
          <option value="none" selected disabled hidden>Select an Option</option>
            <option value='Open' selected={status === 'Open'}>Open</option>
            <option value='Ongoing' selected={status === 'Ongoing'}>Ongoing</option>
            <option value='Delayed' selected={status === 'Delayed'}>Delayed</option>
            <option value='Overdue' selected={status === 'Overdue'}>Overdue</option>
            <option value='Completed' selected={status === 'Completed'}>Completed</option>
          </select>

          <h5>Description</h5>
          <textarea
            name='description'
            cols='50'
            rows='10'
            value={description}
            placeholder='Description'
            onChange={(e)=>setDescription(e.target.value)}
          ></textarea>

          <h5>Priority</h5>
            <select name='priority' onChange={(e)=>setPriority(e.target.value)}>
            <option value="none" selected disabled hidden>Select an Option</option>
              <option value='High' selected={priority === 'High'}>
                High
              </option>
              <option value='Normal' selected={priority === 'Normal'}>
                Normal
              </option>
              <option value='Low' selected={priority === 'Low'}>
                Low
              </option>
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


export default IssueForm