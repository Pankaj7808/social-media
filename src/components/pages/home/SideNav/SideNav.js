import React from 'react'
import './SideNav.css'
import SuggestionData from '../../../../Data/SuggestionData'
import SuggestionProfile from './SuggestionProfile'

function SideNav() {
  return (
    <div className='side-nav-container'>
        <button className='side-nav-btns'><i class="text-blue fa-solid fa-house "></i><span>Home</span></button>
        <button className='side-nav-btns'><i class=" text-blue fa-solid fa-message "></i><span>Messages</span></button>
        <button className='side-nav-btns'><i class="text-blue fa-solid fa-bell "></i><span>Notifications</span></button>
        <button className='side-nav-btns'><i class="text-blue fa-solid fa-gear "></i><span>Setting</span></button>

        <hr/>

        <div className='suggestion-header'>
            <p className='text-gray'>Suggested for you</p>
            <a href='#'>View all</a>
        </div>

        {
          SuggestionData.map((data)=>{
            return(
              <SuggestionProfile key={data.id} userProfile={data}/>
            )
          })
        }
        <button className='side-nav-btns profile-btn'><i class="text-blue fa-solid fa-user"></i><span>My Profile</span></button>
    </div>
  )
}

export default SideNav