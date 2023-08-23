import React from 'react';

export default function CustomCard({ id, children, toggle, hex }) {
	function copyHexCode(props) {
		navigator.clipboard.writeText(hex).then(() => {
			props.code;

			return true;
		});
		return false;
	}
	console.log(hex);

	return (
		// <div
		// 	style={{ hex }}
		// 	class='relative overflow-hidden flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md xxl:h-[30rem] '>
		// 	<div
		// 		onClick={toggle}
		// 		class='p-6 h-48 flex justify-center items-center'>
		// 		<h5
		// 			id='hexcode'
		// 			class='mb-2 block xl:text-xl** font-sans text-xs font-bold text-gray-900 antialiased uppercase'>
		// 			{children}
		// 		</h5>
		// 	</div>
		// 	<
		// </div>
		<div
			style={{ backgroundColor: hex }}
			className={`card  border shadow-md text-primary-focus group`}>
			<div className='card-body'>
				<h2 className='card-title' id='hexcode'>
					{children}
				</h2>
				<p className='opacity-0'>
					If a dog chews shoes whose shoes does he choose?
				</p>
				<div className='card-actions justify-end opacity-50 group-hover:opacity-100'>
					<button
						id='copyButton'
						className='btn btn-xs '
						onClick={toggle}>
						🎲
					</button>
					<button
						id='copyButton'
						className='btn btn-xs '
						onClick={() => copyHexCode(backgroundColor)}>
						copy
					</button>
				</div>
			</div>
		</div>
	);
}
