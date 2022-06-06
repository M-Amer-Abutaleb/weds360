import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../contextAPI';

import styled from 'styled-components';
import EachSearchResult from './EachSearchResult';
const SearchPhoto = () => {
	const { query } = useParams();
	const { data, isLoading } = useGlobalContext();
	console.log(data);
	if (isLoading) {
		return (
			<div>
				{' '}
				<h1>Loading...</h1>{' '}
			</div>
		);
	}

	return (
		<>
			{/* <EachSearchResult {...data} /> */}
		</>
	);
};



export default SearchPhoto;
