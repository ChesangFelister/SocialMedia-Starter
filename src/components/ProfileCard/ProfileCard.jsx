import React from 'react'
import "./ProfileCard.css"
import Cover from "../../img/cover.jpg"
import Profile from "../../img/b.jpg"



const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
      <div className='ProfileImages'>
        <img src={Cover} alt=''/>
        <img src={Profile} alt=''/>


      </div>
      <div className='ProfileName'>
        <span> chesang F C</span>
        <span>Senior UI/UX Designer</span>

      </div>

      <div className="followStatus">
        <hr/>
        <div>
            <div className="follow">
                <span>8000</span>
                <span>Following</span>

            </div>
            <div className='vl'></div>
            <div className="follow">
                <span>80</span>
                <span>Followers</span>

            </div>
        </div>
        <hr/>
      </div>
      < span>My Profile</span>
    </div>
  )
}

export default ProfileCard
