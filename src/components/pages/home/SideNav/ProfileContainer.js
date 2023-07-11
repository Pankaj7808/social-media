import React from 'react'
import User from '../../../../images/userimg.jpg'
import './SuggestionProfile.css'

function ProfileContainer(props) {
  return (
    <>
        <div>
            <div className='profile-container'>
                <div className='profile-image-container'>
                    <img className='image' src={props.userProfile.profileImg} alt=''/>
                </div>
                <div className='profile-info'>
                <a href='#'>{props.userProfile.userId}</a>

                    <p className='text-light-gray'>{props.userProfile.name}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProfileContainer