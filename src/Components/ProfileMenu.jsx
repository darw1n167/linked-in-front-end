import { useContext } from 'react';
import AuthContext from '../context/authContext';
import ProfileContext from '../context/ProfileContext';
import './ProfileMenu.css';

function ProFileMenu() {
    const { logoutProfile } = useContext(AuthContext)
    const { profileMenuRef, profileData, isLoading } = useContext(ProfileContext)

    return ( 
        <div className="profile-menu-container" ref={profileMenuRef}>
            <div className="profile-menu-header">
                <div className='profile-menu-header-member-container'>
                    <div className='profile-menu-header-member-photo'>
                        <img src={isLoading ? 'Loading..' : profileData.profile_img} alt="Profile Menu Picture" /> 
                    </div>
                    <div className='profile-menu-header-member-details-container'>
                        <div className='profile-menu-header-member-details-name'>{isLoading ? 'Loading..' : profileData.name}</div> 
                        <div className='profile-menu-header-member-details-tags'>{isLoading ? 'Loading..' : profileData.headline}</div> 
                    </div>
                </div>
                <div className='profile-menu-header-link'>
                    <button>View Profile</button>
                </div>
            </div>
            <div className="profile-menu-account container-link-positioning">
                <div>
                    <ul>
                        <li className='container-link-header'>Account</li>
                        <li className='container-link-header-premium'>Try Premium for free</li>
                        <li>Settings and Privacy</li>
                        <li>Help</li>
                        <li>Language</li>
                    </ul>
                </div>
            </div>
            <div className="profile-menu-manage container-link-positioning">
                <div>
                    <ul>
                        <li className='container-link-header'>Manage</li>
                        <li>Posts & Activity</li>
                        <li>Job Posting Account</li>
                    </ul>
                </div>
            </div>
            <div className="profile-menu-sign-out container-link-positioning">
                <div className='profile-menu-sign-out-btn'>
                    <ul>
                        <li onClick={logoutProfile}>Sign Out</li> {/* TODO: Connect button to log-out state*/}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProFileMenu;