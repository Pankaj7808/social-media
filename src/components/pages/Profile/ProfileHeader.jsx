import React from 'react'
import User from  '../../../images/userimg.jpg';
import Cover from  '../../../images/cover.jpg';
import './Profile.css'

function ProfileHeader() {
  return (
    <>
        <div className='ProfileHeader-container'>
            <div className='CoverPic'>
                <img src={Cover} alt="" />
            </div>

            <div className='ProfileHeader'>
                <div className='ProfilePic'>
                    <img src={User} alt="" />
                </div>

                <div className='UserInfo-container'>
                    <div className='userInfo'>
                        <h2>Pankaj Mandal</h2>
                        <span>panman_vibes</span>
                    </div>
                    <div className='followStatus'>
                        <div className="follow">
                            <span>6,890</span>
                            <a href="">Followings</a>
                        </div>
                        
                        <div className="follow">
                            <span>1</span>
                            <a href="#">Followers</a>
                        </div>
                            
                            <div className="follow">
                                <span>3</span>
                                <a href="#"> Posts</a>
                            </div>
                        </div>
                    </div>

                    <div className='EditProfilePic'>
                        <span class="material-symbols-outlined">
                            edit
                        </span>
                    </div>
                </div>

            </div>          
    </>
  )
}

export default ProfileHeader