import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { images } from './data/images';
const SeventhSection = () => {
	const [pictures, setPictures] = useState(images);
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, [width]);

	return (
		<Section>
			<FirstPart>
				<h1>Featured Vendors</h1>
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
                  <h6>{title}</h6>
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
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 0;
	background-color: #f6f6f6;
	width: 100%;
`;

const FirstPart = styled.div`
	text-align: center;
	h1 {
		font-size: 2rem;
		font-weight: 500;
	}
`;

const SecondPart = styled.div`
	/* height: 30rem; */
	.Carousel {
		padding: 2rem 0;
		max-width: 45vw;
		max-height: 25vh;
		cursor: grab;
		overflow: hidden;
	}
	.inner-carousel {
		display: flex;
		gap: 1rem;
    height: 20rem;
	}
	.item {
		border-radius: 10px;
    max-height: 16rem;
		display: flex;
		flex-direction: column;
		box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
		&:hover {
			box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 1);
		}
		img {
			width: 13rem;
			height: 100%;
			border-radius: 10px 10px 0 0;
			object-fit: cover;
			pointer-events: none;
		}
		p {
			padding: 0;
			margin: 0;
			font-size: 0.9rem;
			font-weight: 400;
			text-align: start;
			color: #a8adb1;
			border-radius: 0 0 10px 10px;
			text-transform: capitalize;
		}
		h6 {
			font-size: 1rem;
			font-weight: 400;
			text-transform: capitalize;
		}
	}
`;

export default SeventhSection;
