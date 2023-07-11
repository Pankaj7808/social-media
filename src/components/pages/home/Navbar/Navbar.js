import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='nav'>
        <h2 className='text-white' style={{marginLeft:'20px'}}> RizviChat</h2>

        <div className='search-container'> 
        <button className='hidden-search-btn icons'><i class="fa fa-search text-blue"></i></button>
            <form className='search-form'>
                <input type="text" placeholder='Search here ' />
                <span><i class="fa fa-search text-blue"></i></span>
            </form>
        </div>

        <div className='nav-icons'>
            <button className='icons'><i class="fa-solid fa-house "></i></button>
            <button className='icons'><i class="fa-solid fa-message "></i></button>
            <button className='icons'><i class="fa-solid fa-bell "></i></button>
            <button className='icons'><i class="fa-solid fa-gear "></i></button> 
            <button className='icons'><i class="fa-solid fa-bars "></i></button>
        </div>
    </nav>
  )
}

export default Navbar;