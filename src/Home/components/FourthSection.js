import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { images } from './data/images';
import { motion } from 'framer-motion';

const FourthSection = () => {
	const [pictures, setPictures] = useState(images);
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, [width]);

	return (
		<Section>
			<FirstPart>
				<h1>Wedding of the week</h1>
				<p>
					The most beautiful pictures of other weddings that will help you
					gather ideas when planning your own. With inspiration for everything
					from the ultimate wedding dress to the best planners.
				</p>
			</FirstPart>
			<SecondPart>
				<motion.div
					className='Carousel'
					ref={carousel}
					whileTap={{ cursor: 'grabbing' }}>
					<motion.div
						drag='x'
						className='inner-carousel'
						dragConstraints={{ right: 0, left: -width }}>
						{pictures.map((picture, pictureIndex) => {
							const { image, title } = picture;
							return (
								<motion.div key={pictureIndex} className='item'>
									<img className='carousel-img' src={image} alt={title} />
									<div className='container'>
										<img className='carousel-img2' src={image} alt={title} />
										<img className='carousel-img3' src={image} alt={title} />
									</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Quo, corporis.
									</p>
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div>
			</SecondPart>
		</Section>
	);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////				 Styling 				///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Section = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	background-color: #f8f8f8; ;
	box-sizing: border-box;
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
	@media screen and (max-width: 768px) {
		flex-direction: column;
		p {
			box-sizing: border-box;
			width: 100%;
			padding: 0 3rem;
		}
	}
`;

const SecondPart = styled.div`
	box-sizing: border-box;
	.Carousel {
		box-sizing: border-box;
		padding: 1rem 0;
		max-width: 90vw;
		max-height: 50rem;
		cursor: grab;
		overflow: hidden;
	}
	.inner-carousel {
		display: flex;
	}
	.item {
		min-height: 18rem;
		width: 80rem;

		display: flex;
		flex-direction: column;
		padding: 0 1rem;
		gap: 0.1rem;

		&:hover {
			box-shadow: 1px 2px 6px -6px rgba(0, 0, 0, 0.33);
		}
		.carousel-img {
			width: 25rem;
			height: 100%;
			border-radius: 10px;
			border-radius: 10px 10px 0 0;
			object-fit: cover;
			pointer-events: none;
		}
		.container {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			height: 7rem;
			width: 100%;
			padding: 0;
			margin: 0;
			gap: 0.1rem;
			.carousel-img2 {
				width: 49.5%;
				height: 100%;
			}
			.carousel-img3 {
				width: 49.5%;
				height: 100%;
			}
		}
		p {
			padding: 1rem;
			margin: 0;
			font-size: 1rem;
			font-weight: 400;
			text-align: center;
			background-color: #024c4b;
			object-fit: cover;
			color: #fff;
			border-radius: 0 0 10px 10px;
		}
	}
`;
export default FourthSection;
