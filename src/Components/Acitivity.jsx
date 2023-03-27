import './Activity.css';
import { useContext } from "react";
import ProfileContext from "../context/ProfileContext";

const ProfileActivity = () => {
	const { profileData } = useContext(ProfileContext);
	return (
		<div className='component'>
			<div className='profile-activity'>
				<h3 className='activity-title'>Activity</h3>
				<p className='activity-followers'>39 followers</p>
				<p className='activity-text'>{profileData.first_name} hasn't posted lately</p>
				<p className='activity-description'>
					{profileData.first_name}'s recent posts and comments will be displayed here.
				</p>
			</div>
			<div className='activity-show-all-container'>
				<span className='activity-show-all-text'>Show all activity</span>
				<i className='activity-show-all-icon'>&rarr;</i>
			</div>
		</div>
	);
};

export default ProfileActivity;
