import { useContext } from 'react';
import AuthContext from '../context/authContext';
import { useEffect, useState } from 'react';
import { API_URL } from '../App';
import { People } from '../context/context';

import './MayKnow.css';

const PeopleViewed = () => {
	const { currentAccessToken } = useContext(AuthContext)
	const [showMore, setShowMore] = useState(false);
	const [people, setPeople] = useState([]);

	useEffect(() => {
		async function fetchPeople() {
			const response = await fetch(`${API_URL}/viewed`, {
				headers: {
					'Authorization': `Bearer ${currentAccessToken}`
				}
			});
			const data = await response.json();
			setPeople(data);
		}
		fetchPeople();
	}, []);

	return (
		<People.Provider value={people}>
			<div className='container component'>
				<div className='cards'>
					<div>
						<span className='bold component-header'>People also viewed</span>
					</div>
					{people
						.map((person) => (
							<PeopleViewedCard
								key={person.id}
								person={person}
							/>
						))
						.slice(0, showMore ? 10 : 5)}
				</div>
				<div
					className='show-more'
					onClick={() => setShowMore(!showMore)}
				>
					<div className='show-more-text'>
						Show {showMore ? 'less' : 'more'}
					</div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						data-supported-dps='16x16'
						viewBox='0 0 16 16'
						fill='currentColor'
						width='16'
						height='16'
						focusable='false'
					>
						<path
							d={
								showMore
									? 'M15 11L8 6.39 1 11V8.61L8 4l7 4.61z'
									: 'M1 5l7 4.61L15 5v2.39L8 12 1 7.39z'
							}
						></path>
					</svg>
				</div>
			</div>
		</People.Provider>
	);
};

const PeopleViewedCard = ({ person }) => {
	const [connected, setConnected] = useState(false);

	const handleClick = () => {
		setConnected(!connected);
	};

	return (
		<div className='card'>
			<div className='card-image'>
				<img
					className='thumbnail'
					src={person.pic_url}
					alt=''
				/>
			</div>
			<div className='card-content'>
				<div>
					<span className='card-name bold'>{person.name}</span>
				</div>
				<div className='truncate'>{person.headline}</div>
				<button
					className='card-button'
					onClick={handleClick}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 16 16'
						data-supported-dps='16x16'
						fill='currentColor'
						width='16'
						height='16'
						focusable='false'
					>
						<path
							d={
								connected
									? 'M10.87 9.52a1 1 0 01-1.37.37l-2-1A1 1 0 017 8V5a1 1 0 012 0v2.42l1.5.74a1 1 0 01.37 1.36zM15 8a7 7 0 11-7-7 7 7 0 017 7zm-2 0a5 5 0 10-5 5 5 5 0 005-5z'
									: 'M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z'
							}
						></path>
					</svg>
					<div className='card-button-text'>
						{connected ? 'Pending' : 'Connect'}
					</div>
				</button>
			</div>
		</div>
	);
};

export default PeopleViewed;
