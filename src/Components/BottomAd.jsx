import React from 'react';
import './BottomAd.css';
import LeftsideAd from '../assets/LeftsideAd.jpeg';
import RightsideAd from '../assets/RightsideAd.jpeg';

const BottomAd = () => {
    return (
        <div className='component BottomAdAll'>
            <div className='Header'>
                <div className='headerText'>Promoted</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"> <title>overflow-web-small</title> <g> <g> <path d="M3,9.5A1.5,1.5,0,1,1,4.5,8,1.5,1.5,0,0,1,3,9.5ZM11.5,8A1.5,1.5,0,1,0,13,6.5,1.5,1.5,0,0,0,11.5,8Zm-5,0A1.5,1.5,0,1,0,8,6.5,1.5,1.5,0,0,0,6.5,8Z"></path> </g> </g> </svg>
            </div>
            <div className='adContainer'>
                <div className='leftSideAd'>
                    <img className='AdPic' src={LeftsideAd} alt='LinkedInpfp'></img>
                    <div className='linkAd'>Subscribe with Google.</div>
                    <div className='AdDescription'>Unlimited Access: $2 per Week</div>
                </div>
                <div className='RightsideAd'>
                    <img className='AdPic' src={RightsideAd} alt='LinkedInpfp'></img>
                    <div className='linkAd'>BrightDrop Zevo 600</div>
                    <div className='AdDescription'>Helping make deliveries and meet sustainability goals.</div>
                </div>
                </div>
                <div className='bottom'>
                    <span>
                        Learn more
                    </span>
                    <span className='right-side-learn-more'>
                        Learn more
                    </span>
                </div>
        </div>
    );
};

export default BottomAd;
