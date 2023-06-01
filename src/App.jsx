import React, { useState } from 'react';
import CustomCard from './components/CustomCard';
import cardData from './cardData';
import Navbar from './components/Navbar';

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
				toggle={() => toggle(card.id)}
				backgroundColor={card.code}
			/>
		);
	});
	// addnew card

	return (
		<>
			<Navbar />

			<div className=' flex justify-center items-center mt-16 '>
				<div className='w-4/6 m-16 md:px-5 grid gap-2 xxl:grid-cols-6  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 sm:grid-col-1 place-content-center'>
					{cardList}
				</div>
			</div>
		</>
	);
}
