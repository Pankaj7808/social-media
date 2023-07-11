import React from 'react'
import './Home.css'
import Navbar from './Navbar/Navbar'
import SideNav from './SideNav/SideNav'
import ProfileCardeSide from './ProfileSide/ProfileCardeSide'
import PostSide from './PostSide/PostSide'

function Home() {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <div className='side-nav'>
              <SideNav/>
            </div>

             <div>
              <PostSide/>
            </div>

            <div className='ProfileCard-side'>
              <ProfileCardeSide/>
            </div> 
        </div>

    </>
  )
}

export default Home