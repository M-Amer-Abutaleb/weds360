import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const FirstSection = () => {
	const [inputValue, setInputValue] = useState('');

	const value = (e) => {
		const word = e.target.value;
		return setInputValue(word);
	};

	useEffect(() => {
		
	})

	return (
		<Main>
			<LeftSide>
				<div className='content'>
					<h1>Search for </h1>
					<span className='typewriter'>
						<Typewriter
							options={{
								pauseFor: 1000,
								strings: [
									'Best Venue',
									'Best Wedding Planner',
									'Best Makeup Artist',
									'Most Talented Photographer',
									'Best-Skilled Videographer',
									'The Best Barber',
								],
								autoStart: true,
								loop: true,
							}}></Typewriter>
					</span>
				</div>
				<Inputs>
					<form onSubmit={(e) => e.preventDefault()}>
						<input
							type='text'
							className='first-input'
							placeholder='Search for a service'
						/>
						<div className='second-input'>
							<input
								type='submit'
								placeholder='Select Area'
								className='area-input'
								value={inputValue}
								onChange={() => value}
							/>
							<select onClick={value}>
								<option>Giza</option>
								<option>Alex</option>
							</select>
						</div>
						<button>Search</button>
					</form>
				</Inputs>
			</LeftSide>
			<RightSide>
				{/* <img
					src='https://images.unsplash.com/photo-1654430742629-fbba55f2fcbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
					alt=''
				/> */}
				<video autoPlay muted loop>
					<source src='https://weds360-production.s3.amazonaws.com/VIDEOS/coveren.webm' />
				</video>
			</RightSide>
		</Main>
	);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////				 Styling 				///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Main = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 50vh;
	width: 100%;
	background-color: #fff;
	h1 {
		font-weight: 400;
		font-size: 1.6rem;
	}
	@media screen and (max-width: 768px) {
		margin-top: 50px;
		flex-direction: column;
		align-items: center;
	}
`;

const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	height: 100%;
	width: 100%;
	.content {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		width: 100%;
		align-items: center;
	}

	.typewriter {
		color: #046a6e;
		font-size: 2rem;
		font-weight: 600;
		padding-left: 0.6rem;
	}

	@media (max-width: 768px) {
		margin-top: 50px;
		flex-direction: column;
		align-items: center;
		padding: 0;
		.content {
			display: none;
		}
	}
	/* @media (min-width: 1000px) {
		.content, .typewriter{
			font-size: 20px;
		}
	} */
`;

const Inputs = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;

	.first-input {
		width: 50%;
		height: 30px;
		border: 1px solid #ccc;
		padding: 5px;
	}
	form {
		width: 100%;
		display: flex;
		.area-input {
			width: 100%;
			background-color: #fff;
			border: none;
		}
		select {
			border: none;
			width: 20px;
		}
		option {
			font-size: 20px;
		}
	}
	.second-input {
		display: flex;
		width: 50%;
		height: 30px;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 5px;
	}
	button {
		font-size: 1em;
		width: 50%;
		height: 42px;
		border: 1px solid #ccc;
		box-shadow: 0.5px 0.5px 0.2px #00000057;
		border-radius: 0 5px 5px 0px;
		background-color: #046a6e;
		color: #ffffff;
		cursor: pointer;
		&:hover {
			font-weight: 800;
		}
	}
	@media (max-width: 768px) {
		.second-input,
		.first-input,
		button {
			margin: 1px 0;
			margin: 0;
			width: 100%;
			box-sizing: border-box;
		}
		form {
			display: flex;
			flex-direction: column;
		}
	}
	
`;

const RightSide = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: end;
	width: 100%;
	padding: 0;
	margin: 0;
	video {
		width: 100%;
		height: 20rem;
		object-fit: cover;
		border-radius: 90px 0 0 90px;
	}
`;

export default FirstSection;
