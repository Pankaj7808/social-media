import React from 'react'
import Navbar from '../../pages/home/Navbar/Navbar'
import SideNav from '../home/SideNav/SideNav'
import ProfileHeader from './ProfileHeader';
import PostData from '../../../Data/PostData'
import Post from '../home/PostSide/Post';
import CreatePost from '../home/PostSide/CreatePost'

import './Profile.css'

function Profile() {
  return (
    <>
    <Navbar/>
    <div className='p-container'>
        <div className='side-nav'>
          <SideNav/>
        </div>

         <div className='ProfilePost'>
          <ProfileHeader/>
          <CreatePost/>
          <div className='UserPost'>
              {
              PostData.map((data)=>{
                return (
                  <Post key={data.id} postData={data}/>
                )
              })
            }
          </div>

        </div>

        <div className='ProfileCard-side'>
         <h1>Pankaj Mandal</h1>
        </div> 
    </div>

</>
  )
}

export default Profile