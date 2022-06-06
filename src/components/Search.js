import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useGlobalContext } from '../contextAPI';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const { userInput, setUserInput,  } = useGlobalContext();
  const navigate = useNavigate();
	const submitHandler = (e) => {
    e.preventDefault();
    if (userInput.length > 2) {
      setUserInput(userInput);
      navigate(`/photos/`);
    }
	};

	return (
		<Main>
			<form onSubmit={submitHandler}>
				<input
					type='text'
					placeholder='Search'
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
				/>
				<button onClick={submitHandler} type='click'>
					<BsSearch />
				</button>
			</form>
		</Main>
	);
};

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0.5rem;
  box-sizing: border-box;
  /* @media screen and (max-width: 768px) {
    display: none;
  } */
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
    box-sizing: border-box;
    border: 1px solid #e6e6e6;
    padding: 0.5rem;
    box-sizing: border-box;
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0.5rem;
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    color: #000;
  }
  button {
    background-color: #fff;
    border: none;
    outline: none;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    box-sizing: border-box;
    padding: 0.5rem;
    cursor: pointer;
    &:hover {
      background-color: #e6e6e6;
    }
  }
`;


export default Search;
