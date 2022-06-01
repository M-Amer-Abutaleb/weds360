import React from 'react';
import styled from 'styled-components';

const SecondSection = () => {
	const cards = [
		{
			src: '../../Assets/SecondSection/search.png',
			content: 'Search for a vendor',
			id: 1,
		},
		{
			src: '../../Assets/SecondSection/mail.png',
			content: 'Meet and contact a vendor',
			id: 2,
		},
		{
			src: '../../Assets/SecondSection/budget.png',
			content: 'Create and manage your budget',
			id: 3,
		},
		{
			src: '../../Assets/SecondSection/checklist.png',
			content: 'Who is coming? Who is not?',
			id: 4,
		},
		{
			src: '../../Assets/SecondSection/giftboxes.png',
			content: 'Create your dream list',
			id: 5,
		},
		{
			src: '../../Assets/SecondSection/giftboxes.png',
			content: 'Set your tasks',
			id: 6,
		},
	];

	return (
		<Main>
			<Header>
				<h3>
					From booking the right florist to unpacking after your honeymoon. We
					can't wait to help you starting the next chapter of your life!
				</h3>
			</Header>

			<Cards>
				{cards.map((card) => (
					<Card key={card.id}>
						<img src={card.src} alt={card.content} />
						<p>{card.content}</p>
					</Card>
				))}
			</Cards>
		</Main>
	);
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
	width: 100%;
  background-color: #f8f8f8f8;
  padding: 3rem  0 ;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  h3{
    font-size: 20px;
    width: 80%;
    text-align: center;
    color: gray;
    font-weight: 523;
		padding-bottom: 4%;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
	width: 100%;
	flex-wrap: wrap;
	@media screen {
		
	}
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
	width: 200px;
  border-radius: 10px;
  padding:0.5rem;
	margin: 0.5rem;
	
  cursor : pointer;
  border : 4px solid #f8f8f8;
  box-shadow: 1px 3px 3px #00000024;
	img{
		width: 40px;
	}
	p{
		font-size: 16px;
		color: #235f50;
		font-weight: 500;
		text-align: center;
	}
  :hover {
    box-shadow: 0px 5px 10px #00000024;
  }

`;

export default SecondSection;
