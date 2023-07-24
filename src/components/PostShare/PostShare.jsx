import React, { useState ,useRef} from "react";
import "./PostShare.css";
import profileImage from "../../img/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";

const PostShare = () => {
const [image, setImage] = useState(null)
const imageRef = useRef
const onImageChange = () =>{
  if(event.target.files && event.target.files[0])
  {
    let img =event.target.files[0];
    setImage({
      image:URL.createObjectURL(img)
    })
  }
}

return (
    <div className="PostShare">
      <img src={profileImage} alt="" />
      <div>
        <input type="text" placeholder="What is happening?" />
        <div className="postOptions">
          <div className="Options"
          style={{color: "var(--photo)"}}>
            <UilScenery />
            Photo
          </div>
          <div className="Options"
          style={{color: "var(--video)"}}>
            <UilPlayCircle />
            Video
          </div>
          <div className="Options"
          style={{color: "var(--location)"}}>
            <UilLocationPoint />
            Location
          </div>
          <div className="Options"
          style={{color: "var(--schedule)"}}>
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps-button">
            Share

          </button>
          <div style={{display:"none"}}>
            <input type="file" name="myImage" onChange={onImageChange} />
           </div>
        </div>
        </div>

    </div>
  );
}

export default PostShare;
