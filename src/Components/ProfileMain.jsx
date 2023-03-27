import { useState } from "react";
import { ProfileProvider } from "../context/ProfileContext";
import Profile from "./Profile";
import Skills from ".//Skills";
import Experience from "./Experience";
import Education from "./Education";
import ActivityFeed from "./Acitivity";
import About from "./About";
import MayKnow from "./MayKnow.jsx";
import Footer from "./Footer";
import TopAd from "./TopAd";
import BottomAd from "./BottomAd";
import PeopleAlsoViewed from "./PeopleAlsoViewed";
import Interests from "./Interests";
import InLearning from "./InLearning";
import NavBar from "./NavBar";
import Highlights from "./Highlights";

function ProfileMain() {
    const [overlayOn, setOverlayOn] = useState(false);
    
    return ( 
        <>
            <ProfileProvider>
                <div className="full-page">
                    <div
                    className="overlay"
                    style={{ display: overlayOn ? "block" : "none" }}
                    ></div>
                    <NavBar setOverlayOn={setOverlayOn} />
                    <div className="outer-main">
                    <div className="main-content">
                        <div className="main-body">
                        <Profile />
                        <Highlights />
                        <About />
                        <ActivityFeed />
                        <Experience />
                        <Education />
                        <Skills />
                        <Interests />
                        </div>
                        <div className="side-bar">
                        <TopAd />
                        <PeopleAlsoViewed />
                        <MayKnow />
                        <InLearning />
                        <BottomAd />
                        </div>
                    </div>
                    </div>
                    <Footer />
                </div>
            </ProfileProvider>
        </>
    );
}

export default ProfileMain;