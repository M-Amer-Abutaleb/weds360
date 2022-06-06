import React from 'react'
import styled from 'styled-components';
import {
	BsFacebook,
	BsTwitter,
	BsInstagram,
	BsHeartFill,
} from 'react-icons/bs';

const EachSearchResult = ({
	
	alt_description,
	likes,
	user: {
		name,
		portfolio_url,
		profile_image: { medium },
	},
}) => {
	return (
			<Main>
				<div className='leftSide'>
					{/* <img src={regular} alt={alt_description} /> */}
				</div>
				<div className='rightSide'>
					<div className='info'>
						<h4>
							Description :{' '}
							{!alt_description ? (
								<p className='text-warning'>
									This means that the the description is null, and this is an
									alternative message.
								</p>
							) : (
								alt_description
							)}
						</h4>
						<h3>{`User: ${name}`}</h3>
					</div>
					<div className='social-icons'>
						<h1>
							<BsFacebook />
						</h1>
						<h1>
							<BsTwitter />
						</h1>
						<h1>
							<BsInstagram />
						</h1>
						<h1 className='likes'>
							<BsHeartFill /> {likes}
						</h1>
					</div>
				</div>
			</Main>
	);
};

const Main = styled.div`
	padding: 10rem 1rem;
	display: flex;
	.leftSide {
		img {
			width: 70%;
			padding-left: 10%;
		}
	}
	.rightSide {
		padding-top: 10rem;
		width: 100%;
		height: 100%;
		align-items: center;
		align-content: center;
		display: flex;
		flex-direction: column;
		text-align: center;
		.text-warning {
			color: red;
		}
		.info {
			height: 100%;
			width: 100%;
		}
		.social-icons {
			display: flex;
			gap: 5rem;
		}
		.likes {
			color: red;
			fill: red;
		}
	}
`;

export default EachSearchResult