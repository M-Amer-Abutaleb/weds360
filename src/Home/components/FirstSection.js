import React from 'react';
import Styled from 'styled-components';

const FirstSection = () => {
	return (
		<Main>
			<LeftSide>
				<h1>Search for Best Venue</h1>
				<Buttons>
					<input
						type='text'
						className='first'
						placeholder='Search for a service'
					/>
					<input type='option' className='second' placeholder='Select Area' />
					<button>Search</button>
				</Buttons>
			</LeftSide>
			<RightSide>
				<video src='https://weds360-production.s3.amazonaws.com/VIDEOS/coveren.webm#t=0.001'></video>
			</RightSide>
		</Main>
	);
};

const Main = Styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 50vh;
	width: 100%;
	background-color: #fff;
`;

const LeftSide = Styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
`;

const Buttons = Styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	input{
		width: 50%;
		height: 30px;
		border: 1px solid #ccc;
		padding: 5px;	
	}
	.first{
			width: 50%;
			height: 30px;
			border: 1px solid #ccc;
			border-radius: 5px;
			padding: 5px;	
		}
	button{
		font-size: 1em;
		width: 20%;
		height: 42px;
		border: 1px solid #ccc;
		box-shadow: 0.5px 0.5px 0.2px #00000057;	
		border-radius: 0  5px 5px  0px;
		background-color: #386359;
		color: #ffffff;
	}

`;

const RightSide = Styled.div`
	display: flex;
	align-items: ;
	justify-content:end;
	height: 60%;
	width: 100%;
	padding: 0;
		margin: 0;
	video{
		width: 100%;
		height: 100%;
		align-items: start;
		border-radius: 90px 0 0 90px;
		padding: 0;
		
		
	}

`;

export default FirstSection;
