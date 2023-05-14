import React from 'react';

export default function CustomCard({ id, children, toggle, backgroundColor }) {
	return (
		<div
			className='card'
			style={{ backgroundColor: backgroundColor }}
			onClick={() => toggle(id, backgroundColor)}>
			{children}
		</div>
	);
}

