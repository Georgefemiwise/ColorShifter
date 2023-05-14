import React, { useState } from 'react';
import CustomCard from './CustomCard';

const cardData = [
	{
		id: 1,
		code: '',
	},
	{
		id: 2,
		code: '',
	},
];

export default function App() {
	const [arrCard, setArrCard] = useState(cardData);

	function colorGenerator() {
		const codes = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += codes[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	function toggle(id, currentColor) {
		setArrCard((prevArrCard) => {
			return prevArrCard.map((card) => {
				return card.id === id
					? { ...card, code: colorGenerator() }
					: card;
			});
		});
	}

	const cardList = arrCard.map((card) => {
		return (
			<CustomCard
				key={card.id}
				id={card.id}
				children={card.id}
				toggle={toggle}
				backgroundColor={card.code}
			/>
		);
	});


	return (
		<>
			<main className='grid grid-cols-3 m-5'>{cardList}</main>
		</>
	);
}

/*


import React, { useState } from 'react';
import Card from './components/Card';
import cardData from './cardData';

export default function App() {
	const [cardInfo, setCardInfo] = useState(cardData);
	const [count, setCount] = useState(0);

	// function handleChangeClick(id) {
	// 	setCardInfo((prevCardInfo) => {
	// 		return prevCardInfo.map((box) => {
	// 			id === box.id ? '' : box;
	// 		});
	// 	});
	// }

	// function addCard() {
	// 	setCardInfo((prevCards) => {
	// 		return {
	// 			...prevCards,
	// 			// id: prevCards.length,
	// 			// code: 'code man',
	// 			// backgroundColor: '#568564'
	// 		};
	// 	});
	// }

	// function '' {
	// 	const codes = '0123456789ABCDEF';
	// 	let color = '#';
	// 	for (let i = 0; i < 6; i++) {
	// 		color += codes[Math.floor(Math.random() * 16)];
	// 	}
	// 	return color;
	// }

	const cardList = cardData.map((box) => {
		return <Card handleClick={''} />;
	});

	return (
		<>
			<div className='container p-5'>
				<h1 className='font-bold text-center mb-5 '>
					ColorShifter
				</h1>

				<button
					onClick={null}
					className='bg-orange-500 p-1 px-3 capitalize rounded-sm'>
					add more tile
				</button>

				<div className=' flex justify-center items-center'>
					<div className='w-3/6 grid gap-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 sm:w-11/12 '>
						{cardList}
						{count}
					</div>
				</div>
			</div>
		</>
	);
}
*/
