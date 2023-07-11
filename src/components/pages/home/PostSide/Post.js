import React from 'react'
import './Post.css'
// import Photo from '../../../../images/userimg.jpg';
import ProfileContainer from '../SideNav/ProfileContainer'


function Post(props) {
    console.log(props.postData)
  return (
    <div className='post-container'>
        <div className='post-header'>
            <div  className='post-profile-container'>
            <ProfileContainer userProfile={props.postData} />

            </div>
            <div className='post-image'>
                <img src={props.postData.postImg} />
            </div>

            <div className='post-btn-container'>
                <button><i class="fa-regular fa-heart"></i></button>
                <button><i class="fa-regular fa-comment"></i></button>
                <button><i class="fa-solid fa-share"></i></button>
            </div>
            <div className='post-desc'>
                <p className='text-light-gray'>{props.postData.likes} likes</p>
                <div>
                    <a>{props.postData.userId} </a>
                    <span className='text-light-gray'>{props.postData.desc}</span>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Post