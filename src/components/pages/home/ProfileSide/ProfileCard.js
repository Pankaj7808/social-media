import React from 'react'
import User from  '../../../../images/userimg.jpg';
import Cover from  '../../../../images/cover.jpg';
import './ProfileCard.css';

function ProfileCard() {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        
        <img src={User} alt="" />
      </div>

      <div className="ProfileName">
          <span>user123</span>
          <span>Pankaj Mandal</span> 
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <a href="">Followings</a>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <a href="#">Followers</a>
          </div>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <a href="#"> Posts</a>
              </div>
        </div>
        <hr />
      </div>

      <button>My Profile</button>

    </div>
  )
}

export default ProfileCard