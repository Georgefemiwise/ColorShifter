import React from 'react';


export default function CustomCard({ id, children, toggle, backgroundColor }) {
	function copyHexCode(props) {
		navigator.clipboard.writeText(backgroundColor).then(() => {
			props.code;

			return true;
		});
		return false;
	}

	return (
		<div
			style={{ backgroundColor }}
			class='relative overflow-hidden flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md xxl:h-[30rem] '>
			<div
				onClick={toggle}
				class='p-6 h-48 flex justify-center items-center'>
				<h5
					id='hexcode'
					class='mb-2 block xl:text-xl** font-sans text-xs font-bold text-gray-900 antialiased uppercase'>
					{children}
				</h5>
			</div>
			<div class='absolute right-0 '>
				<button
					id='copyButton'
					onClick={() => copyHexCode(backgroundColor)}
					class='rounded-bl-xl select-none rounded-sm  py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray shadow-lg shadow-black-500/20 transition-all hover:shadow-md hover:opacity-100 hover:text-white hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none pointer opacity-20 hover:bg-[#835DCD]'
					type='button'
					>
					copy
				</button>
			</div>
		</div>
	);
}
