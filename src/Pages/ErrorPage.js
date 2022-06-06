import React from 'react'
import styled from "styled-components"

const ErrorPage = () => {
  return (
		<Main>
			<img
				src='https://weds360.com/static/media/error404.0d6d22a4.png'
				alt=''
			/>
		</Main>
	);
}

const Main = styled.div`
  padding-top: 2rem;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
  display: flex;
  justify-content: center;
	img {
		width: 50%;
		box-sizing: border-box;
    object-fit: cover;
	}
`;

export default ErrorPage