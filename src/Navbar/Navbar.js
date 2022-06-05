import React, { useEffect, useState } from 'react';
import { BsSearch, BsFillPersonPlusFill } from 'react-icons/bs';

import styled from 'styled-components';

const Navbar = () => {
	const [changeLanguage, setChangeLanguage] = useState(false);

	return (
		<Nav>
			<div className='container'>
				<Logo>
					<img src='../../Assets/logo.png' alt='Weds360_Logo' />
					{/* <button className='Toggler'>
					<FaBars />
				</button> */}
				</Logo>
				<NavItems>
					<div className='nav-container'>
						<ul>
							<li>360 Planner</li>
							<li>Her</li>
							<li>Him</li>
							<li>The Wedding</li>
							<li>Vendors</li>
							<li>Gallery</li>
							<li>Ideas More</li>
							<li>Take a Tour</li>
						</ul>
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
	padding: 1.5rem 0.5rem;
	position: fixed;
	width: 100%;
	background-color: #fff;
	z-index: 99999999999999999;

	.container {
		display: flex;
		width: 100%;
		justify-content: space-between;
		padding: 0 6rem;
	}

	@media screen and (max-width: 768px){
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
		height: 5rem;
		align-content: center;

		ul {
			display: flex;
			list-style: none;
			gap: 3rem;
			align-content: center;
			align-items: center;
		}

		li {
			font-size: 1rem;
			cursor: pointer;
			&:hover {
				font-weight: 600;
			}
		}
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
