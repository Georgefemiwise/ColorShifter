import React, { useState } from 'react';
import CustomCard from './components/CustomCard';
import cardData from './cardData';
import Navbar from './components/Navbar';
import fire from './assets/fire.svg';
import Section from './components/layout/Section';

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
				hex={card.code}
			/>
		);
	});
	// addnew card

	return (
		<>
			<Navbar />

			<div className='container mt-16 '>
				<div className='my-20 h-96'>
					<div className='hero'>
						<div className='hero-content grid grid-cols-2'>
							<div className='hero-title'>
								<p className='uppercase text-xs font-semibold text-secondary'>
									Color shifter
								</p>
								<h1 className='text-5xl font-black my-2'>
									Color shifter
								</h1>
								<p>
									Lorem ipsum, dolor sit amet
									consectetur adipisicing elit. Qui
									quisquam cumque optio atque impedit
									excepturi consectetur. Quisquam hic
									id excepturi, cum debitis,
									consectetur fuga reiciendis
									incidunt velit doloremque harum
									possimus!
								</p>
							</div>
							<div className='hero-image justify-center flex'>
								<img
									src={fire}
									alt=''
									className=' w-60 '
								/>
							</div>
						</div>
					</div>
				</div>
				<Section>
					<div className='bg-secondary   p-60 rounded grid grid-cols-2 items-center'>
						<div className='text-base-100'>
							<h2 className='text-xl font-bold'>
								Lorem ipsum dolor sit.
							</h2>
							<p className=''>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Totam incidunt
								cupiditate obcaecati commodi expedita
								qui quidem repellat repellendus, modi
								nesciunt!
							</p>
						</div>
						<div className=' flex  justify-center'>
							<img src={fire} alt='' className=' w-60 ' />
						</div>
					</div>
				</Section>
				<Section>
					<div className='bg-base-200 flex p-60 rounded items-center flex-row-reverse'>
						<div className='   mx-auto'>
							<div className='grid grid-cols-3 gap-5'>
								{cardList}
							</div>
						</div>
					</div>
				</Section>
				<Section>
					<div className='m flex p-60 rounded items-center flex-row-reverse'>
						<div className='mx-5'>
							<h2 className='text-3xl font-bold'>
								Lorem ipsum dolor sit.
							</h2>
							<p className='mt-3 '>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Totam incidunt
								cupiditate obcaecati commodi expedita
								qui quidem repellat repellendus, modi
								nesciunt!
							</p>
						</div>
						<div className=' flex  justify-center '>
							<img src={fire} alt='' className=' w-60 ' />
						</div>
					</div>
				</Section>
			</div>
		</>
	);
}
