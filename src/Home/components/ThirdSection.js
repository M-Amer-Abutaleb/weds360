import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { images } from './data/images';
const ThirdSection = () => {
	const [pictures, setPictures] = useState(images);
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, [width]);

	return (
		<Section>
			<FirstPart>
				<h1>Wedding Specialists</h1>
				<p>
					Learn more about wedding specialists in all fields, see their work and
					choose the best for you and your wedding.
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
									<p>{title}</p>
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 20px;
	width: 100%;
	box-sizing: border-box;
`;

const FirstPart = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
	margin: 0;
	padding: 0 1rem;
	h1 {
		font-size: 2rem;
		font-weight: 500;
		padding-right: 5rem;
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
		padding: 2rem 0;
		max-width: 80vw;
		
		max-height: 50vh;
		cursor: grab;
		overflow: hidden;
	}
	.inner-carousel {
		display: flex;
		gap: 1rem;
	}
	.item {
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
		&:hover {
			box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 1);
		}
		img {
			width: 13rem;
			height: 10rem;
			border-radius: 10px 10px 0 0;
			object-fit: cover;
			pointer-events: none;
		}
		p {
			padding: 1rem;
			margin: 0;
			font-size: 1rem;
			font-weight: 400;
			text-align: center;
			background-color: #fff;
			border-radius: 0 0 10px 10px;
		}
	}
`;

export default ThirdSection;
