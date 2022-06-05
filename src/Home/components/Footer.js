import React from 'react'
import styled from 'styled-components';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
const Footer = () => {
	return (
		<Section>
			<div className='container'>
				<First>
					<div className='header'>
						Plan your wedding wherever and whenever you want on the Weds360 App
					</div>
					<div className='icons'>
						<img
							src='https://weds360-production.s3.eu-west-1.amazonaws.com/new-weds360-preprod/PHOTOS/1644512613-Badge-1.png'
							alt=''
						/>
						<img
							src='https://weds360-production.s3.eu-west-1.amazonaws.com/new-weds360-preprod/PHOTOS/1644512613-g4036.png'
							alt=''
						/>
						<img
							src='https://weds360-production.s3.eu-west-1.amazonaws.com/new-weds360-preprod/PHOTOS/1644512613-Badge.png'
							alt=''
						/>
					</div>
				</First>
				<Second>
					<div className='header'>Support</div>
					<a href='#'>Privacy Policy</a>
					<a href='#'>Terms and Conditions</a>
				</Second>
				<Third>
					<div className='header'>Contact Us</div>
					<a href='#'>
						<span className='contact'>Email: </span>
						<span className='info'>lovetohelp@weds360.com</span>
					</a>
					<a href='#'>
						<span className='contact'>Address: </span>
						<span className='info'>
							6B, 12 Aswan Square, Al Agouzah, Giza Governorate 12651
						</span>
					</a>
					<a href='#'>
						<span className='contact'>Phone: </span>
						<span className='info'>+201066776677</span>
					</a>
				</Third>
			</div>
			<div className='social-media-icons'>
				<BsFacebook />
				<BsInstagram />
			</div>
		</Section>
	);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////				 Styling 				///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Section = styled.section`
	position: relative;
	background-color: black;
	height: 18vh;
	width: 100%;
	padding-bottom: 10px;
	border-radius: 40px 40px 0 0;
	color: white;
	display: flex;
	line-height: 2rem;
	cursor: pointer;
	.header {
		color: #848077;
		text-shadow: 0 0.1px 0.5px rgba(138, 126, 112, 0.57);
	}
	.contact {
		font-weight: bold;
		font-size: 1rem;
	}
	.info {
		color: #676c72;
		transition: all 5ms ease-in-out;
	}
	a {
		text-decoration: none;
		color: white;
	}
	.info:hover {
		color: white;
		transition: all 5ms ease-in-out;
	}
	.container {
		width: 100%;
		padding: 0 5rem 1rem;
		display: flex;
		align-content: flex-end;
		justify-content: space-between;
		flex-wrap: wrap;
		box-sizing: border-box;
	}
	.social-media-icons {
		position: absolute;
		bottom: 18px;
		right: 90px;
		font-size: 1.6rem;
		display: flex;
		gap: 1rem;
	}
`;

const First = styled.div`
	.header {
		width: 70%;
		padding-bottom: 1rem;
	}
	.icons {
		display: flex;
		gap: 1rem;
	}
`;
const Second = styled.div`
	display: flex;
	flex-direction: column;
`;
const Third = styled.div`
	display: flex;
	flex-direction: column;
`;


export default Footer