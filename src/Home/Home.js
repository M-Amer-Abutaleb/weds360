import React from 'react'
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from './components/FifthSection';
import SixthSection from './components/SixthSection';
import SeventhSection from "./components/SeventhSection";
import EighthSection from './components/EighthSection';
import NinthSection from './components/NinthSection';
import TenthSection from './components/TenthSection';
import Footer from "./components/Footer";
import Styled from 'styled-components';

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
      <NinthSection />
      <TenthSection />
      <Footer />
    </Main>
  )
}

const Main = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #fff;
`













export default Home