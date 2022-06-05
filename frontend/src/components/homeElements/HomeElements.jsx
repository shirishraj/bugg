import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import "./HomeElements.scss"


function HomeElements() {
  return (
    <div className='Home'>
      <div className='HomeContainer'>
          <div className='Title'>
            <h2>Bug Tracker</h2>
          </div>
          
      </div>  
      <div className='Info'>
          <h4>Track your bugs throughout the project</h4>
      
      <div className='button'>
          <div className='CreateAccount'>
          <Link to= "/register">
          <button>
              Create Account
          </button>
          </Link>
          </div>
          
          <div className='Login'>
          <Link to= "/login">
          <button>
              Login
          </button>
          </Link>
        </div>
    </div>
    </div>
  </div>
  )
}

export default HomeElements