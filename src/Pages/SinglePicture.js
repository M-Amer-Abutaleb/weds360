import React from 'react';
import { useGlobalContext } from '../contextAPI';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const SinglePicture = ({
	urls: { regular },
	alt_description,
	user: { name },id
}) => {
	
	const navigate = useNavigate();
	return (
		<Photo>
			<button
				className='photo'
				onClick={() => {
					navigate(`/photo/${id}`);
				}}>
				<div className='image'>
					<img src={regular} alt={alt_description} />
					<h4>{name}</h4>
				</div>
			</button>
		</Photo>
	);
};

const Photo = styled.div`
	button {
		display: flex;
		flex-direction: column;
		padding: 0.5rem;
		background-color: #fff;
		border: 1px solid #e6e6e6;
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		transition: 0.3s;
		margin: 0.5rem;
		cursor: pointer;
	}
	.image {
		text-align: center;
		width: 100%;
		box-sizing: border-box;
	}
	img {
		width: 100%;
		height: 100%;
	}
	@media screen and (min-width: 800px) {
		
	}
`;

export default SinglePicture;
