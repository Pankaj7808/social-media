import React from 'react'
import './SuggestionProfile.css'
import ProfileContainer from './ProfileContainer';

function SuggestionProfile(props) {
  console.log(props.userProfile)
  return (
    
    < >
        <div className='suggestion-container'>
           <ProfileContainer userProfile={props.userProfile}/>
           <button className='follow-btn'>Follow</button>    
        </div>
    </>
  )
}

export default SuggestionProfile;