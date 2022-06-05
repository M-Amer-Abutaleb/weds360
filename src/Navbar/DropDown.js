import React, { useState } from 'react';
import styled from 'styled-components';
import DropDownList from './DropDownList';

const DropDown = ({ title, content, id }) => {
	const [showItems, setShowItems] = useState(false);

	return (
		<Main>
			<div className='titles'>
				<a
					href='#'
					onMouseEnter={() => setShowItems(true)}
					onMouseLeave={() => setShowItems(false)}>
					{title}
				</a>
			</div>
			<div
				className='items'
				onMouseEnter={() => setShowItems(true)}
				onMouseLeave={() => setShowItems(false)}>
				{showItems &&
					content.map((item, id) => {
						return <DropDownList items={item} key={id} />;
					})}
			</div>
		</Main>
	);
};

const Main = styled.div`
	padding-top: auto;
	display: flex;
	.titles {
		padding: 5px 4px;
    text-align: center;
    &:hover{
      font-weight: 550;
    }
	}
	a {
		text-decoration: none;
		color: black;
		padding: 0 0.5rem;
	}
	.items {
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		position: fixed;
		top: 6.5%;
		z-index: 99999999999999999;
		height: auto;
		width: auto;
		box-sizing: border-box;
		box-shadow: 0px 5px 22px 0px rgba(0, 0, 0, 0.75);
		background-color: #fff;
    @media screen and (max-width: 1137px){
      top: 9.5%;
    }
	}
`;

export default DropDown;
