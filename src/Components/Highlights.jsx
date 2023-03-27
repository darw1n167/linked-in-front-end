import './Highlights.css';
import galvanize_logo from '../assets/galvanize_logo.jpg';

const Highlights = () => {
	
	return (
		<div
			id='Highlights'
			className='component section-container'
		>
			<h3>Highlights</h3>
			<div className='entry-container'>
				<div className='entry-img-sidebar'>
					<img
						className='entry-img'
						src={galvanize_logo}
						alt=''
					/>
				</div>
				<div className='entry-main'>
					<h4>You both studied at Galvanize Inc</h4>
					<span>You both studied at Galvanize Inc from 2022 to 2023</span>
					<br />
					<button className='highlight-button'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 16 16'
							data-supported-dps='16x16'
							fill='currentColor'
							className='mercado-match paper-airplane'
							width='16'
							height='16'
							focusable='false'
						>
							<path d='M14 2L0 6.67l5 2.64 5.67-3.98L6.7 11l2.63 5L14 2z'></path>
						</svg>
						<div className='highlight-button-text'>Message</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Highlights;
