import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';



function HomeElements() {
  return (
    <div className='HomeContainer'>
        <div className='Title'>
        <h2>Track your bugs throughout the project</h2>
        </div>

        <div className='CreateAccount'>
        <Link to= "/register">
        <button>
            Create Account
        </button>
        </Link>
        </div>

        <div>
        <Link to= "/login">
        <button>
            Login
        </button>
        </Link>
        </div>

        
    </div>
  )
}

export default HomeElements