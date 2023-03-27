import { useEffect, useState, useContext } from "react";
import "./Skills.css";
import ProfileContext from "../context/ProfileContext";


function Skills() {
  const [isLoading, setIsLoading] = useState(true);
  const { companies, skills } = useContext(ProfileContext);

  return (
    <section className="component entire-component">
      <div id="skills" className=" padding-top-right-left-12">
        <div className="padding-top-right-left-12">
          <h2 className="component-h2-header">
            <span>Skills</span>
          </h2>
        </div>
      </div>
      {/* outer container of the skills list */}
      <div>
        {/* inner container of the skills list */}
        <ul>
          {skills.map((skill) => {
            return (
              //Start of each skill list
              <SkillItem
                key={skill.id}
                id={skill.id}
                skill={skill}
                companies={companies}
                isLoading={isLoading}
              />
            );
          })}
        </ul>
        <div>
          <a className="skill-anchor-tag footer display-flex align-items-center justify-center">
            <div>
              <span className="footer-text">Show all {skills.length} skills</span>
            </div>
            <div className="pvs-navigation__icon">
              <li-icon aria-hidden="true" type="arrow-right" size="small">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="mercado-match"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
                </svg>
              </li-icon>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function SkillItem({ id, skill, companies, isLoading }) {
  const [isEndorsed, setIsEndorsed] = useState(true);
  const toggleEndorsement = () => {
    setIsEndorsed(!isEndorsed);
  };

  return (
    <li key={id} className="skill-item-container">
      <div className="padding-top-bottom-12-left-right-24">
        {/*  skill title */}
        <div>
          <a className="skill-anchor-tag">
            <span className="inline-show-more-text skill-title">
              {skill.skill_name}
            </span>
          </a>
        </div>
        {/* Each skills company and endorsements */}
        <ul>
          <li>
            <div className="display-flex margin-top-bottom-4">
              <div className="right-margin-8">
                <img
                  width="24"
                  height="24"
                  loading="lazy"
                  src={skill.org_img}
                />
              </div>
              <div className="display-flex align-items-center">
                <div className="inline-show-more-text">
                
                    <span>{skill.org_name}</span>
                  
                </div>
              </div>
            </div>
          </li>
          <li>
            <a className="skill-anchor-tag" target="_self" href="">
              <div className="display-flex">
                <div className="right-margin-8">
                  <img
                    className="img-centered"
                    width="24"
                    height="24"
                    loading="lazy"
                    src="https://media.licdn.com/dms/image/D5603AQG0sE1PfdibwA/profile-displayphoto-shrink_100_100/0/1671662502941?e=1683763200&v=beta&t=BlTlSXk45nt_E7X2Vy8eKjWL_ZMpzAatBN8mVUGPPxs"
                  />
                </div>
                <div className="inline-show-more-text display-flex align-items-center">
                  <span className="color-action">
                    Endorsed by Dany Briceno and 1 other mutual connection
                  </span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a className="skill-anchor-tag" target="_self" href="">
              <div className="display-flex">
                <div className="right-margin-8">
                  <li-icon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                    </svg>
                  </li-icon>
                </div>
                <div className="inline-show-more-text display-flex align-items-center">
                  {isEndorsed ? (
                    <span className="color-action"> {skill.endorsements} endorsements</span>
                  ) : (
                    <span className="color-action">{skill.endorsements - 1} endorsements</span>
                  )}
                </div>
              </div>
            </a>
          </li>
          <li>
            <div className="padding-top-bottom-8"></div>
            <EndorseButton
              isEndorsed={isEndorsed}
              toggleEndorsement={toggleEndorsement}
            />
          </li>
        </ul>
      </div>
    </li>
  );
}

function EndorseButton({ isEndorsed, toggleEndorsement }) {
  return (
    <button
      className="endorse-button"
      type="button"
      onClick={toggleEndorsement}
    >
      {isEndorsed ? (
        <div>
          <li-icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              className="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M12.57 2H15L6 15l-5-5 1.41-1.41 3.31 3.3z"></path>
            </svg>
          </li-icon>{" "}
          <span>Endorsed</span>
        </div>
      ) : (
        <span>Endorse</span>
      )}
    </button>
  );
}
export default Skills;
