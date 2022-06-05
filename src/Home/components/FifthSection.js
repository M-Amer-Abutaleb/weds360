import React from 'react'
import styled from 'styled-components';

const FifthSection = () => {
	const cards = [
		{
			src: 'https://images.unsplash.com/photo-1579583764988-3e08c6132d2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=883&q=80',
			content: 'Search for a vendor',
			id: 1,
		},
		{
			src: 'https://images.unsplash.com/photo-1508435234994-67cfd7690508?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
			content: 'Meet and contact a vendor',
			id: 2,
		},
		{
			src: 'https://images.unsplash.com/photo-1519741357542-22a23fd3627b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=827&q=80',
			content: 'Create and manage your budget',
			id: 3,
		},
		{
			src: 'https://images.unsplash.com/photo-1503525642560-ecca5e2e49e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=835&q=80',
			content: 'Who is coming? Who is not?',
			id: 4,
		},
		{
			src: 'https://images.unsplash.com/photo-1570573690764-f5033492f5cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
			content: 'Create your dream list',
			id: 5,
		},
		{
			src: 'https://images.unsplash.com/photo-1528472602515-4c7d6feea2cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
			content: 'Set your tasks',
			id: 6,
		},
	];

	return (
		<Main>
			<FirstPart>
				<h1>Tips and ideas</h1>
				<p>
					Our specialists collect questions and ideas that are usually on a
					bride and groom's mind so we can discuss, analyze, and answer common
					concerns.
				</p>
			</FirstPart>

			<SecondPart>
				{cards.map((card) => (
					<div key={card.id} className='card'>
						<div className='photo'>
							<img src={card.src} alt={card.content} />
						</div>
						<div className='card-info'>
							<p>{card.content}</p>
						</div>
					</div>
				))}
			</SecondPart>
		</Main>
	);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////				 Styling 				///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Main = styled.div`
	height: 100%;
	width: 100%;
	padding: 1.5rem 0;
`;
const FirstPart = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	margin: 0;
	align-items: center;
	h1 {
		font-size: 2rem;
		font-weight: 500;
	}
	p {
		color: #3f3d3d;
		width: 30%;
	}
`;

const SecondPart = styled.section`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	box-direction: column;
	text-align: center;
	margin: 50px auto;
	width: 100%;
	max-width: 1200px;
	.card {
		width: 300px;
		height: 300px;
		margin: 3rem;
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		transition: all 0.3s ease-in-out;
		cursor: pointer;
		padding-bottom: 20px;
		&:hover {
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
		}
		.photo {
			width: 100%;
			height: 100%;
			img {
				width: 100%;
				height: 100%;
				border-radius: 10px 10px 0 0;
			}
		}
		.card-info {
			width: 100%;
			height: 100%;
			text-align: center;
			p {
				font-size: 18px;
				font-weight: 500;
				color: #363636;
			}
		}
	}
`;

export default FifthSection