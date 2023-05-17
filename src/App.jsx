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
	// const addCard = () => {
	// 	const newCard = {
	// 		id: cardData.length + 1,
	// 		code: '#99E8D9',
	// 	};
	// 	setArrCard(prevArrCard.push(newCard));

	// };

	return (
		<>
			<Navbar />

			{/* <button
				className='block bg-indigo-400 px-5 py-2'
				onClick={()=>addCard()}>
				Add Card
			</button> */}
			<div className=' flex justify-center items-center mt-16 '>
				<div className='w-4/6 m-16 md:px-5 grid gap-2 xxl:grid-cols-6  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 sm:grid-col-1 place-content-center'>
					{cardList}
				</div>
			</div>
		</>
	);
}

//   return (
//     <div>
//       {/* Render your card components using the cardData array */}
//       {/* For example: */}
//       {cardData.map((card) => (
//         <div key={card.id} style={{ backgroundColor: card.backgroundColor }}>
//           {/* Render card content */}
//         </div>
//       ))}
//     </div>
//   );
// };
