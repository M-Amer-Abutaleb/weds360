import React from 'react';
import styled from 'styled-components';
const ChatModal = () => {
	return (
		<Main>
			<Nav>
				<div className='nav-container'>
					<div className='icon'>
						<img src='../../../Assets/logo.png' alt='' />
					</div>
					<div className='agentName'>Farah Mabrook</div>
					<div className='active-icon'></div>
				</div>
			</Nav>
			<Content>
				<div className='text-container'>
					<div className='content-text'>
						<p>
							At weds360, you'll find the best of the best wedding services and
							be able to find the vendor that is the most suitable for you.
							We'll help you narrow your options and pair you with your perfect
							match who will satisfy your financial needs and meet your
							preferred service types. So, let us know what you're looking for,
							and let's get started!
						</p>
						<img
							src='https://file2.api.drift.com/drift-prod-file-uploads/6201%2F620154735c994a7b7d70145694b8640a/giphy.gif?mimeType=image%2Fgif'
							alt=''
							style={{ width: '10rem', height: '10rem' }}
						/>
					</div>
					<div className='content-text'>
						<p>
							Hello and congratulations! I'm Farah. Would you like me to help
							pair you with some of the best wedding specialists? (This is a
							free service).
						</p>
					</div>
				</div>
				<Buttons>
					<button>Yes, please, Farah!</button>
					<button>No thanks</button>
				</Buttons>
			</Content>
		</Main>
	);
};

const Main = styled.section`
	width: 350px;
	height: 500px;
	background-color: white;
	border-radius: 10px;
	box-shadow: -2px 7px 9px 0px rgba(0, 0, 0, 0.25);
	p {
		text-align: start;
		color: #64676d;
	}
	.content-text {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		background-color: #f4f8fb;
		margin: 10px 0;
		padding: 10px 8px;
	}
	button {
		margin: 0 10px;
		display: block;
		background-color: #fff;
		color: #e08a41;
		font-size: 15px;
		border: 1px solid #e08a41;
		padding: 13px;
		border-radius: 15px;
		cursor: pointer;
		&:hover {
			background-color: #e08a41;
			color: white;
		}
	}
`;

const Nav = styled.section`
	background-color: #e08a41;
	border-radius: 10px 10px 0 0;
	height: 3rem;
	.nav-container {
		display: flex;
		align-content: center;
		align-items: center;
		width: 50%;
		height: 100%;
		padding: 0 1rem;
		justify-content: space-between;
		.agentName {
			color: white;
		}
		.active-icon {
			background-color: #19c219;
			width: 10px;
			height: 10px;
			border-radius: 50%;
			position: relative;
			right: 142px;
			top: 10px;
			z-index: 9999999999999;
			border: 2px solid white;
		}
	}
	.icon {
		width: 10%;
		background-color: white;
		border-radius: 40px;
		padding: 5px;
		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}
`;

const Content = styled.section`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow-y: scroll;
	height: 450px;
	box-sizing: border-box;
	padding: 1px;
	.text-container {
		width: 80%;
		border-radius: 20px;
		padding: 2px 10px;
		margin: 1rem;
	}
`;
const Buttons = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 12px;
	width: 100%;
	padding-top: 10px;
`;

export default ChatModal;
