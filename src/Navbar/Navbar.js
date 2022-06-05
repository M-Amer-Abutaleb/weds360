import React, { useEffect, useState } from 'react';
import { BsSearch, BsFillPersonPlusFill } from 'react-icons/bs';
import DropDown from './DropDown';
import { data } from './data';

import styled from 'styled-components';

const Navbar = () => {
	const [changeLanguage, setChangeLanguage] = useState(false);

	return (
		<Nav className='nav-area'>
			<div className='container'>
				<Logo>
					<img src='../../Assets/logo.png' alt='Weds360_Logo' />
					{/* <button className='Toggler'>
					<FaBars />
				</button> */}
				</Logo>

				<NavItems>
					<div className='nav-container'>
						{data.map((item, index) => {
							return <DropDown {...item} key={index} />;
						})}
					</div>
				</NavItems>

				<Search>
					<div className='search-icon'>
						<button>
							<BsSearch />
						</button>
						<input type='text' placeholder='Search' />
					</div>
				</Search>
				<Icons>
					<div className='icons-container'>
						<BsFillPersonPlusFill />
						<button
							className='language'
							onClick={() => setChangeLanguage(!changeLanguage)}>
							{changeLanguage ? <span>E</span> : <span>ع</span>}
						</button>
					</div>
				</Icons>
			</div>
		</Nav>
	);
};

const Nav = styled.nav`
	overflow: hidden;
	display: flex;
	padding: 1.5rem 0.1rem;
	position: fixed;
	top: 0;
	width: 100%;
	background-color: #fff;
	z-index: 99999999999999999;
	box-sizing: border-box;

	.container {
		display: flex;
		width: 100%;
		justify-content: space-evenly;
		padding: 0 2rem;
		box-sizing: border-box;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
const Logo = styled.div`
	img {
		width: 5rem;
	}
`;
const NavItems = styled.div`
	.nav-container {
		display: flex;
		justify-content: space-evenly;
		width: 100%;
		align-content: center;
		align-items: center;
		padding: 1rem;
		box-sizing: border-box;
	}
`;

const Search = styled.div`
	display: flex;
	align-items: center;

	.search-icon {
		width: 100%;
		display: flex;
		background-color: #f5f5f5;
		border-radius: 0.5rem;
		input {
			width: 100%;
			border: none;
			border-radius: 0.5rem;
			padding-left: 1rem;
			font-size: 1rem;
			background-color: #f5f5f5;
			&.active {
				background-color: red;
			}
		}
		button {
			border: none;
			border-radius: 0.5rem;
			padding: 0.5rem;
			font-size: 1rem;
			cursor: pointer;
		}
	}
`;

const Icons = styled.div`
	display: flex;
	align-content: center;
	align-items: center;
	height: 5rem;
	font-size: 1.3rem;
	.icons-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}
	.language {
		background-color: black;
		color: white;
		border-radius: 10px;
		cursor: pointer;
		font-weight: 600;
		span {
			font-size: 1rem;
			font-weight: 500;
		}
	}
`;

export default Navbar;
