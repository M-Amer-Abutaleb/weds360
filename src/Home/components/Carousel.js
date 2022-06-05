import React,{useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import { images } from './data/images';
import { motion } from 'framer-motion';

const Carousel = () => {
	const [pictures, setPictures] = useState(images);
	const [width, setWidth] = useState(0);
  const carousel = useRef();
  
  	useEffect(() => {
			setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
		}, []);
	return (
		<Main>
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
		</Main>
	);
};

const Main = styled.div`
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

	/* Media */

	@media screen and (max-width: 768px) {
		flex-direction: column;
		
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
`;

export default Carousel;
