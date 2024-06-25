import React, { useState } from 'react'
import './css/loginSignUp.css'

function LoginSignUp() {
  const [state, setState] = useState('Login')
  const [formData, setFormData] = useState({
    name: '', 
    password: '', 
    email: '', 
  })

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const login = async () => {
    console.log('Login Fn Executed!', formData)
    let responseData
    await fetch('http://localhost:4000/login', {
      method: 'POST', 
      headers: {
        Accept: 'application/form-data', 
        'Content-Type': 'application/json', 
      }, 
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then((response) =>  responseData = response)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace('/')
    } else {
      alert(responseData.msg)
    }
  }

  const signUp = async () => {
    console.log('Sign Up Fn Executed!', formData)
    let responseData
    await fetch('http://localhost:4000/signup', {
      method: 'POST', 
      headers: {
        Accept: 'application/form-data', 
        'Content-Type': 'application/json', 
      }, 
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then((response) =>  responseData = response)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace('/')
    } else {
      alert(responseData.msg)
    }
  }
  
  return (
    <div className='loginSignUp'>
      <div className='loginSignUp-container'>
        <h1>{state}</h1>
        <div className="loginSignUp-fields">
          {state === 'Sign Up'? (
            <input name='name' value={formData.name} onChange={changeHandler} type="text" placeholder='Your Name...' />
          ): (
            <></>
          )}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Your Email Address...' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Your Password...' />
          
          <button 
          onClick={() => {
            state === 'Login'? login(): signUp()
          }}
          >Continue</button>
          {state === 'Sign Up' ? (
            <p className='loginSignUp-login'>
              Already have an account? <span onClick={() => setState('Login')}>Login here</span>
            </p>
          ) : (
            <p className='loginSignUp-login'>
              Don't have an account? <span onClick={() => setState('Sign Up')}>Sign Up here</span>
            </p>
          )}
          
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp