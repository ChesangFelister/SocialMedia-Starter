import React from "react";
import ProfileSide from "../components/ProfileSide/ProfileSide";
import "./Home.css"
import PostSide from "../components/PostSide/PostSide";
import PostShare from "../components/PostShare/PostShare";
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