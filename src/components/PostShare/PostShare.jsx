import React from "react";
import "./PostShare.css";
import profileImage from "../../img/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";

function PostShare() {
  return (
    <div className="PostShare">
      <img src={profileImage} alt="" />
      <div>
        <input type="text" placeholder="What is happening?" />
        <div className="postOptions">
          <div className="options">
            <UilScenery />
            Photo
          </div>
          <div className="options">
            <UilPlayCircle />
            Video
          </div>
          <div className="options">
            <UilLocationPoint />
            Location
          </div>
          <div className="options">
            <UilSchedule />
            Schedule
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostShare;
