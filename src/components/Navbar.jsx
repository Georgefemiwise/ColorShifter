import React from 'react';

export default function Navbar() {
	return (
		<nav class='flex items-center justify-between flex-wrap border bg-[#835DCD]  p-3'>
			<div class='flex items-center flex-shrink-0 text-white ml-16'>
				<span class='font-semibold text-xl tracking-tight text-center'>
					ColorShifter
				</span>
			</div>
			{/* <div class='block lg:hidden'>
				<button class='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
					<svg
						className='fill-current h-3 w-3'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'>
						<title>Menu</title>
						<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
					</svg>
				</button>
			</div> */}
			{/* <div class='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
				<div class='text-sm lg:flex-grow'></div>
				<div>
					<a
						href='#'
						class='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'>
						Download
					</a>
				</div>
			</div> */}
		</nav>
	);
}
