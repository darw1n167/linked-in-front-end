import React from 'react';
import './TopAd.css';
import pfpAd from '../assets/LIpfp.jpeg';
import FedResAd from '../assets/FedResAd.jpeg';

const TopAd = () => {
	return (
        <div className='component TopAdAll'>
            <div className="Ad-Topright">
                <span className='AdText'>Ad</span>
                <svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><title>overflow-web-small</title><g><g><path d="M3,9.5A1.5,1.5,0,1,1,4.5,8,1.5,1.5,0,0,1,3,9.5ZM11.5,8A1.5,1.5,0,1,0,13,6.5,1.5,1.5,0,0,0,11.5,8Zm-5,0A1.5,1.5,0,1,0,8,6.5,1.5,1.5,0,0,0,6.5,8Z"></path></g></g></svg>
            </div>
            <div className='headerTop'>
            <h2> Follow Federal Reserve Financial to stay up to date on instant payments news</h2>
            </div>
            <div className='images'>
                <img className='pfpAd' src={pfpAd} alt='LinkedInpfp'></img>
                <img className='fedResAd' src={FedResAd} alt='Federal Reserve Ad'></img>
            </div>
            <div className="headerBottom">
                <h2 className='headerBottom'> Brian, keep up with the latest insights from <span className='companyName'>Federal Reserve Financial</span></h2>
            </div>
            <div className="button">
                <button className="Follow">Follow</button>
            </div>
        </div>
	);
};

export default TopAd;
