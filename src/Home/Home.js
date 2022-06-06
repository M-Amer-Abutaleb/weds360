import React from 'react';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import FifthSection from './components/FifthSection';
import SixthSection from './components/SixthSection';
import SeventhSection from './components/SeventhSection';
import EighthSection from './components/EighthSection';
import Footer from './components/Footer';
import styled from 'styled-components';

const Home = () => {
	return (
		<Main>
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
			<SixthSection />
			<SeventhSection />
			<EighthSection />
			<Footer />
		</Main>
	);
};

// Styling

const Main = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	background-color: #fff;
	padding-top: 5rem;
	font-family: 'Roboto', sans-serif;
`;

export default Home;
