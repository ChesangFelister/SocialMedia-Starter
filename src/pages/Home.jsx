import React from "react";
import ProfileSide from "../components/ProfileSide/ProfileSide";
import "./Home.css"
import PostSide from "../components/FollowersCard/PostSide/PostSide";
const Home = () => { 
    return(
        <div className="Home">
                <ProfileSide/>
                <PostSide/>
            <div className="Rightsidebar">
            Rightsidebar
            </div>
        

        </div>

    )
}
export default Home