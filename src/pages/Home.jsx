import React from "react";
import ProfileSide from "../components/ProfileSide/ProfileSide";
import "./Home.css"
const Home = () => { 
    return(
        <div className="Home">
                <ProfileSide/>

            <div className="Post">
            Post
            </div>
            <div className="Rightsidebar">
            Rightsidebar
            </div>
        

        </div>

    )
}
export default Home