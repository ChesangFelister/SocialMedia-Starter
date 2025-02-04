import React from 'react'
import './FollowersCard.css'
import {Follower} from "../../Data/followersData.js"

function FollowersCard() {
  return (
    <div className='FollowersCard'>
        <h3>Who is following you</h3>
        {Follower. map((follower, id) =>{
               return(
                <div className='follower'>

                    <img src={follower.img} alt="" className='followerImg'/>
                    <div className='name'>
                        <span>{follower.name}</span>
                        <span>@{follower.username}</span>
                    </div>
                    <button className='button fc-button'>Follow</button>
                </div>
                )


        

        }
        )}


       
  </div>
  )
}

export default FollowersCard
