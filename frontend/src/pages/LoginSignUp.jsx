import React from 'react'
import './css/loginSignUp.css'

function LoginSignUp() {
  return (
    <div className='loginSignUp'>
      <div className='loginSignUp-container'>
        <h1>Sign Up</h1>
        <div className="loginSignUp-fields">
          <input type="text" placeholder='Your Name...' />
          <input type="email" placeholder='Your Email Address...' />
          <input type="password" placeholder='Your Password...' />
          
          <button>Continue</button>
          <p className='loginSignUp-login'>
            Already have an account? <span>Login here</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp