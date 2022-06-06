import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Photos from './Pages/Photos';
import styled, { GlobalStyleComponent } from 'styled-components';
import ChatModal from './Home/components/ChatModal';
import PhotoInfo from './Pages/PhotoInfo';
import { BsArrowUp, BsChatLeftFill, BsXLg } from 'react-icons/bs';
import './index.css';


function App() {
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
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/photos' element={<Photos />}></Route>
				<Route path='/photo/:id' element={<PhotoInfo />}></Route>
			</Routes>

			{/* Chat + Nav Icon */}

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
}

const Main = styled.div`
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

export default App;
