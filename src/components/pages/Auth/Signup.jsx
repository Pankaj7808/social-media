import React from 'react'

function Signup() {
  return (
    <div className='Auth-Container'>
        <h1>RizviChat</h1>
        <form>
            <div>
                <input type='text' placeholder='First name'/>
                <input type='password' placeholder='Last name'/>
            </div>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <input type="password" placeholder='Confirm password' />
            <button type='submit'>Log In</button>
            <button>Login with Google+</button>
            <span>Already have an account. Sign in</span> 
        </form>
    </div>  
  )
}

export default Signup