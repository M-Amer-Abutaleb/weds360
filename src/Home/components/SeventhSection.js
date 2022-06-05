import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { images } from './data/images';
import Carousel from './Carousel';
const SeventhSection = () => {
	return (
		<Section>
			<FirstPart>
				<h1>Featured Vendors</h1>
			</FirstPart>
			<SecondPart className='Carousel'>
				<Carousel />
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
	.Carousel {
		padding: 2rem 0;
		max-width: 45vw;
		max-height: 90vh;
		cursor: grab;
		overflow: hidden;
	}
	.inner-carousel {
		display: flex;
		gap: 3rem;
		height: 20rem;
	}
	.item {
		border-radius: 10px;
		max-height: 30vh;
		display: flex;
		flex-direction: column;
		box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
		&:hover {
			box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 1);
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
