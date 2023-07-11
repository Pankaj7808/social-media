import React from 'react'

function Login() {
  return (
    <div className='Auth-Container'>
        <h1>RizviChat</h1>
        <form>
            <input type='text' placeholder='Enter Username'/>
            <input type='password' placeholder='Enter Password'/>
            <button type='submit'>Log In</button>
            <button>Login with Google+</button>
            <span>Don't have an account? Sign up</span> 
        </form>
    </div>  
  )
}

export default Login