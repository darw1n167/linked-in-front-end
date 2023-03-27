import React, { useContext } from 'react';
import { useState } from 'react';
import ProfileContext from '../context/ProfileContext.jsx';
import './Experience.css';


function Experience() {
  const { isLoading, experience } = useContext(ProfileContext);
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className='component ExpAll'>
      <div className='title'><h2 className='h2-title'>Experience</h2></div>
      <div className='experience-content'>
        <div className='experience-company-img'>
        <img width='48' height='48' src={isLoading ? 'Loading..' : experience[1].org_img} alt="army"></img>
        </div>
        <div>
          <div>
            <div className='job'>{isLoading ? 'Loading..' : experience[1].job_title}</div>
            <div className='title'>{isLoading ? 'Loading..' : experience[1].org_name}</div>
            <div className='dates'>{isLoading ? 'Loading..' : experience[1].date_started} - {isLoading ? 'Loading..' : experience[1].date_ended} · 4 yrs 7 mos</div>
            <div className='location'>{isLoading ? 'Loading..' : experience[1].location}</div>

            <div>
              {isLoading ? 'Loading..' : experience[1].description > 100 && !showFullText ? (
                <div className='exp-body'>
                  { isLoading ? 'Loading..' : experience[1].description.slice(0, 98)}...
                  <a className='seeMore' href='#' onClick={toggleFullText}>
                    See more
                  </a>
                </div>
              ) : (
                <div className='exp-body'>{isLoading ? 'Loading..' :experience[1].description}</div>
              )}
            </div>
            <div className='exp-skills'>
              <span className='exp-bold'>Skills: </span> {isLoading ? 'Loading..' :experience[1].skills}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
