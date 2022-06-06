import React from 'react';
import FirstSection from '../Home/components/FirstSection';
import SecondSection from '../Home/components/SecondSection';
import ThirdSection from '../Home/components/ThirdSection';
import FourthSection from '../Home/components/FourthSection';
import FifthSection from '../Home/components/FifthSection';
import SixthSection from '../Home/components/SixthSection';
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
