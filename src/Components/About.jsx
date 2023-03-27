import { useState, useContext } from "react";
import ProfileContext from "../context/ProfileContext";
import "./About.css";

const About = () => {
  const { profileBio } = useContext(ProfileContext);
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
    const btn = document.querySelector(".see-more-btn");
    btn.className = "about-click-state";
  };

  if (!showMore) {
    return (
      <div className="component about-div">
        <div className="about-heading-div">
          <div className="about-heading">About</div>
        </div>
        <div className="about-content">
          {profileBio.substring(0, 424)}
          <button className="see-more-btn" onClick={handleClick}>
            ...see more
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="component see-more-div">
        <div className="about-heading-div">
          <div className="about-heading">About</div>
        </div>
        <div className="about-content">
          {profileBio}
        </div>
      </div>
    );
  }
};

export default About;
