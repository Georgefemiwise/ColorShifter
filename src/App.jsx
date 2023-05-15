import React, { useState } from 'react';
import CustomCard from './CustomCard';
import cardData  from './cardData';



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
	function toggle(id) {
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
				children={card.code}
				toggle={toggle}
				backgroundColor={card.code}
			/>
		);
	});

	return (
		<>
			{/* TODO add flex column */}
			<h1 className='text-center capitalize'>color-shifter</h1>
			<div className=' flex justify-center items-center colunm'>
				<div className='w-3/6 grid gap-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 sm:w-11/12 '>
					{cardList}
				</div>
			</div>
		</>
	);
}

/*

 p-5'>
				

				<button
					onClick={null}
					className='bg-orange-500 p-1 px-3 capitalize rounded-sm'>
					add more tile
				</button>

			</div>
		</>
	);
}
*/
