import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SeventhSection from '../Home/components/SeventhSection';
import EighthSection from '../Home/components/EighthSection';
import Footer from '../Home/components/Footer';
import {
	BsFacebook,
	BsTwitter,
	BsInstagram,
	BsHeartFill,
} from 'react-icons/bs';
const PhotoInfo = () => {
	const { id } = useParams();
	const [photo, setPhoto] = useState([]);
	const [loading, setLoading] = useState(true);
	console.log(photo.likes);
	const getInfo = useCallback(async () => {
		try {
			const response = await fetch(
				`https://api.unsplash.com/photos/${id}?client_id=${process.env.REACT_APP_KEY}`
			);
			const data = await response.json();
			setPhoto(data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}, [id]);
	useEffect(() => {
		setLoading(true);
		getInfo();
	}, [id]);

	if (loading) {
		return (
			<div>
				{' '}
				<h1>Loading...</h1>{' '}
			</div>
		);
	}

	return (
		<>
			<Main>
				<div className='leftSide'>
					<img src={photo.urls.regular} alt={photo.tagline} />
				</div>
				<div className='rightSide'>
					<div className='info'>
						<h4>
							Description :{' '}
							{!photo.description ? (
								<p className='text-warning'>
									This means that the the description is null, and this is an
									alternative message.
								</p>
							) : (
								photo.description
							)}
						</h4>
						<h3>{`User: ${photo.user.name}`}</h3>
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
							<BsHeartFill /> {photo.likes}
						</h1>
					</div>
				</div>
      </Main>
      <SeventhSection />
      <EighthSection />
      <Footer />
		</>
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
    .likes{
      color:red;
      fill: red;
    }
	}
`;

export default PhotoInfo;
