import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { BsArrowRightShort } from 'react-icons/bs';
import { images } from './data/images';
import { motion } from 'framer-motion';
import Carousel from './Carousel';

import 'swiper/css';

const SixthSection = () => {
	const [pictures, setPictures] = useState(images);
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	return (
		<Section>
			<FirstPart>
				<div className='LeftSide'>
					<div className='background'></div>
					<div className='carousel'>
						<Carousel />
					</div>
				</div>
				<div className='RightSide'>
					<div className='content'>
						<h1>Wedding Ring</h1>
						<p>
							Your ring will always serve as a reminder of the love you two
							share. So, choose wisely and pick a beautiful wedding ring. You
							can find every type of design from timeless classics to the latest
							trends.
						</p>
						<button>
							See More <BsArrowRightShort className='arrow' />
						</button>
					</div>
				</div>
			</FirstPart>

			<SecondPart>
				<div className='LeftSide'>
					<div className='content'>
						<h1>Wedding gown</h1>
						<p>
							Check out the latest dress trends so you can create your
							up-to-date dream gown with the most talented designers and
							high-end boutiques out there. Choose the best for you.
						</p>
						<button>
							See More <BsArrowRightShort className='arrow' />
						</button>
					</div>
				</div>
				<div className='RightSide'>
					<div className='secondBackground'></div>
					<div className='secondCarousel'>
						<Carousel />
					</div>
				</div>
			</SecondPart>
		</Section>
	);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////				 Styling 				///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Section = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	padding-bottom: 2rem;
	margin: 0;
	box-sizing: border-box;
	h1 {
		font-size: 2rem;
		font-weight: 500;
		color: #000;
		margin-bottom: 1rem;
	}
	p {
		font-size: 1rem;
		color: #000;
		line-height: 1.5;
		margin-bottom: 1rem;
	}
	button {
		display: flex;
		align-items: center;
		font-size: 1.2rem;
		color: #fff;
		background: #e08a41;
		border: none;
		padding: 0.2rem 0.6rem;
		border-radius: 10px;
		cursor: pointer;
		transition: 0.3s ease-in-out;
		&:hover {
			box-shadow: 0.25px 0px 3px rgba(0, 0, 0, 0.8);
		}
		.arrow {
			align-content: center;
			font-size: 1.9rem;
		}
	}
	@media screen and (max-width: 768px) {
		margin-bottom: 20rem;
	}
`;

const FirstPart = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 25rem;
	width: 100%;
	position: relative;

	.RightSide {
		width: 39%;
		height: 100%;
		background: #fff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		h1 {
			font-size: 2rem;
			font-weight: 500;
		}
		p {
			width: 70%;
		}
	}

	.LeftSide {
		width: 61%;
		height: 100%;
		.background {
			box-sizing: border-box;
			position: absolute;
			background-color: #e8f6f7;
			height: 20rem;
			width: 65vw;
			top: 20px; // To control the Y position of the background shape (Move up or Down)
			left: -100px; // To control the X position of the background shape (Left or Right)
			clip-path: polygon(0 1%, 100% 0, 84% 100%, 0% 100%);
			z-index: 1;
		}
		.Carousel {
			position: absolute;
			z-index: 2;
			left: 0; // To control the X position of the background shape (Left or Right)
			top: 40px; // To control the Y position of the background shape (Move up or Down)
			max-width: 50vw;
			max-height: 100vh;
			cursor: grab;
			overflow: hidden;
		}
		.inner-carousel {
			display: flex;
			height: 100%;
		}
		.item {
			max-height: 50vh;
			min-width: 14vw;
			max-width: 20vw;
			padding: 5px;
			display: flex;
			flex-direction: column;
			img {
				width: 100%;
				height: 100%;
				border-radius: 10px;
				border-radius: 10px 10px 0 0;
				object-fit: cover;
				pointer-events: none;
			}
			p {
				padding: 0;
				margin: 0;
				width: 100%;
				font-size: 1rem;
				font-weight: 400;
				text-align: center;
				background-color: #fff;
				border-radius: 0 0 10px 10px;
			}
		}
	}

	/* Media */

	@media (max-width: 768px) {
		flex-direction: column;
		padding-bottom: 23rem;
		.RightSide {
			flex-direction: column;
			p,
			h1 {
				box-sizing: border-box;
				text-align: start;
				width: 100%;
				padding: 0 1rem;
			}
			button {
				margin-left: 1rem;
			}
		}
		.RightSide {
			width: 100%;
			text-align: center;
		}
		.LeftSide {
			.background {
				top: 420px;
				width: 100%;
				min-width: 110vw;
				clip-path: polygon(0 1%, 100% 0, 94% 100%, 0% 100%);
			}
			.Carousel {
				top: 450px;
				left: 60px;
				max-width: 70vw;
				max-height: 70vh;
			}
			.inner-carousel {
				height: 30vh;
			}
			.item {
				max-height: 30vh;
				min-width: 40vw;
			}
		}
	}
`;

const SecondPart = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 40vh;
	width: 100%;
	padding-top: 2rem;
	position: relative;
	box-sizing: border-box;
	.LeftSide {
		width: 30%;
		height: 100%;
		background: #fff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 2rem;
	}

	.RightSide {
		width: 70%;
		height: 100%;

		.secondBackground {
			position: absolute;
			background-color: #e8f6f7;
			height: 30vh;
			width: 70vw;
			top: 70px; // To control the Y position of the background shape (Move UP or Down)
			right: 0; // To control the X position of the background shape (Left or Right)
			clip-path: polygon(0 0, 100% 0, 100% 100%, 18% 100%);
			z-index: 1;
		}
		.secondCarousel {
			position: absolute;
			z-index: 2;
			right: 0;
			top: 100px;
			max-width: 60vw;
			max-height: 75vh;
			cursor: grab;
			overflow: hidden;
		}
	}

	/* Media */

	@media screen and (max-width: 768px) {
		flex-direction: column;

		.LeftSide {
			flex-direction: column;
			width: 100%;
			box-sizing: border-box;
			p,
			h1 {
				box-sizing: border-box;
				text-align: start;
				width: 100%;
				padding: 0 1rem;
			}
			button {
				margin-left: 1rem;
			}
		}

		.RightSide {
			.secondBackground {
				top: 280px;
				width: 100%;
				min-width: 110vw;
				height: 37vh;
				clip-path: polygon(0 0, 100% 0, 100% 100%, 23% 100%);
			}
			.secondCarousel {
				top: 290px;
				left: 60px;
				min-width: 70vw;
				max-height: 70vh;
			}
			.second-inner-carousel {
				min-width: 60vw;
				width: 70vw;
			}
			.item {
				max-width: 80vw;
				min-width: 60vw;
				width: 80vw;
				/* width: 55vw; */
				height: 32vh;
			}
		}
	}
`;

export default SixthSection;
