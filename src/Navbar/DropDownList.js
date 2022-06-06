import React from 'react';
import styled from 'styled-components';
const DropDownList = ({ items }) => {
	// console.log(items)
	return (
		<Main>
			<a href=''>{[...items]}</a>
		</Main>
	);
};

const Main = styled.section`
	padding: 10px 0.5rem;

	a {
		&:hover {
			color: #15533a;
			width: 100%;
		}
	}
`;

export default DropDownList;
