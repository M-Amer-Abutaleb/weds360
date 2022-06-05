import React, { useEffect, useState } from 'react';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import FifthSection from './components/FifthSection';
import SixthSection from './components/SixthSection';
import SeventhSection from './components/SeventhSection';
import EighthSection from './components/EighthSection';
import Footer from './components/Footer';
import styled from 'styled-components';
import ChatModal from './components/ChatModal';
import { BsArrowUp, BsChatLeftFill, BsXLg } from 'react-icons/bs';

const Home = () => {
	const [showButton, setShowButton] = useState(false);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		});
	}, []);

	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<Main>
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
			<SixthSection />
			<SeventhSection />
			<EighthSection />
			<Footer />
			<div className='navButton'>
				{showButton && (
					<button className='scrollButton' onClick={() => scrollUp()}>
						<BsArrowUp />
					</button>
				)}
			</div>
			<div className='chat'>
				{showModal && (
					<div className='Modal'>
						<ChatModal />
					</div>
				)}
				<button className='chat-icon' onClick={() => setShowModal(!showModal)}>
					{!showModal ? <BsChatLeftFill /> : <BsXLg />}
				</button>
			</div>
		</Main>
	);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////				 Styling 				///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Main = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	background-color: #fff;
	padding-top: 5rem;
	font-family: 'Roboto', sans-serif;
	.Modal {
		position: fixed;
		bottom: 110px;
		right: 80px;
		z-index: 99999;
	}
	.chat-icon {
		position: fixed;
		bottom: 50px;
		right: 30px;
		color: white;
		background-color: #de8a42;
		border: none;
		font-size: 1rem;
		border-radius: 50%;
		display: flex;
		padding: 0.8rem;
		font-weight: 1000;
		cursor: pointer;
		box-shadow: 0 0 0 0.2px rgba(0, 0, 0, 0.9);
		z-index: 99999;
	}
	.scrollButton {
		position: fixed;
		bottom: 100px;
		left: 30px;
		color: white;
		background-color: #de8a42;
		border: none;
		font-size: 1rem;
		border-radius: 50%;
		display: flex;
		padding: 0.8rem;
		z-index: 99999;
		cursor: pointer;
		font-weight: 1000;
		animation: updown 2s ease infinite;
		@keyframes updown {
			from {
				transform: translate(0, 0px);
			}
			65% {
				transform: translate(0, 50px);
			}
			to {
				transform: translate(0, -0px);
			}
		}
	}
`;

export default Home;
