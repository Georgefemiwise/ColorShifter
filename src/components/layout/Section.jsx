import React from 'react';

export default function Section({ children }) {
	return (
		<div className='flex-1 flex-row my-3'>
			<div className='m-3 rounded flex justify-center'>{children}</div>
		</div>
	);
}
