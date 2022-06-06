import React, { useState } from 'react';
import { useGlobalContext } from '../contextAPI';
import SinglePicture from './SinglePicture';
import styled from 'styled-components';
import Search from '../components/Search';

const Photos = () => {
	const { data, isLoading } = useGlobalContext();
	const [inputValue, setInputValue] = useState('');

	const value = (e) => {
		const word = e.target.value;
		return setInputValue(word);
	};

	if (isLoading) {
		return (
			<div>
				<h1>Loading..</h1>
			</div>
		);
	}
	return (
		<Main>
			<Container>
				<div className='text-content'>
					Lorem ipsum dolor sit amet consectetur.
				</div>
				<div className='main-div'>
					<div className='leftSide'>
						<div className='search'>
							<Search />
						</div>
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
						<div className='buttons'>
							<button>Search</button>
							<button>Clear Search</button>
						</div>
					</div>
					<div className='rightSide'>
						<div className='photos-center'>
							{data.map((photo) => {
								return <SinglePicture key={photo.id} {...photo} />;
							})}
						</div>
					</div>
				</div>
			</Container>
		</Main>
	);
};

const Main = styled.div`
	padding-top: 15rem;
	@media screen and (min-width: 800px) {
		padding-top: 15rem;
	}
`;
const Container = styled.section`
	.text-content {
		text-align: center;
	}
	.main-div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.leftSide {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			justify-content: space-evenly;
			align-items: center;
			.search {
				width: 100%;
				box-sizing: border-box;
				border: 1px solid #e6e6e6;
			}
			.second-input {
				width: 100%;
				display: flex;
				outline: none;
				border: 1px solid #e6e6e6;
				box-sizing: border-box;
				input {
					width: 100%;
					height: 100%;
					border: none;
					outline: none;
					background-color: #fff;
					box-sizing: border-box;
					padding: 0.5rem;
					font-size: 1.2rem;
					font-family: 'Roboto', sans-serif;
					color: #000;
				}
				select {
					width: 22px;
				}
			}
			.buttons {
				width: 100%;
				display: flex;
				justify-content: space-evenly;
				gap: 3px;
				padding: 5px 0;
				button {
					width: 100%;
					height: 100%;
					color: #b8b8b8;
					background-color: black;
					font-size: 1rem;
					border-radius: 7px;
					padding: 0.5rem;
					outline: none;
					border: none;
					cursor: pointer;
					&:hover {
						color: white;
						box-shadow: 0px 0px 10px #000;
					}
				}
			}
		}

		.rightSide {
			box-sizing: border-box;
			width: 100%;
			display: flex;
			.photos-center {
				width: 100%;
				box-sizing: border-box;
				padding: 2rem;
			}
		}
	}
	@media screen and (min-width: 800px) {
		padding-bottom: 20rem;
		width: 100%;
		height: 100%;
		padding: 0 3rem;
		box-sizing: border-box;
		.main-div {
			flex-direction: row;
			justify-content: space-between;
			width: 100%;
			height: 100%;
			box-sizing: border-box;

			.rightSide {
				height: 100%;
				padding: 3rem;
				margin: 0 auto;
				box-sizing: border-box;
				.photos-center {
					width: 100%;
					height: 30vh;
					display: flex;
					justify-content: space-between;
					gap: 2rem;
					box-sizing: border-box;
					button {
						width: 100%;
						height: 100%;
						padding: 0;
					}
				}
			}
			.leftSide {
				box-sizing: border-box;
			}
		}
	}
`;

export default Photos;
