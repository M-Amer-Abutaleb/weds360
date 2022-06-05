import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { images } from './data/images';
import Carousel from './Carousel';

const EighthSection = () => {
	return (
		<Section>
			<FirstPart>
				<h1>New and Notable</h1>
			</FirstPart>
			<SecondPart>
				<div className='Carousel'>
					<Carousel />
				</div>
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
	padding: 3rem 20px;
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
		padding: 0 0 5rem 0;
		max-width: 80vw;
		max-height: 25vh;
		cursor: grab;
		overflow: hidden;
	}
	.inner-carousel {
		display: flex;
		gap: 1rem;
		height: 19rem;
	}
	.item {
		border-radius: 10px;
		max-height: 17rem;
		max-width: 21rem;
		display: flex;
		flex-direction: column;
		text-align: start;
		box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
		&:hover {
			box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 1);
		}
		p {
			padding: 0;
			margin: 0;
			font-size: 0.9rem;
			font-weight: 400;
			color: #a8adb1;
			border-radius: 0 0 10px 10px;
			text-transform: capitalize;
		}
		h6 {
			font-size: 1rem;
			font-weight: 400;
			text-transform: capitalize;
			width: 100%;
		}
	}
`;

export default EighthSection;
