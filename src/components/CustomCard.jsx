import React, { useState } from 'react';

export default function CustomCard(props) {
	const style =
		'rounded-lg text-center flex items-center justify-center h-28 border border-zinc-600';

	return (
		<div
			className={style}
			onClick={props.handleClick}>custome card</div>
	);
}

// <div
// 	className='rounded-lg text-center flex items-center justify-center h-28 border border-zinc-600'
// 	style={{
// 		backgroundColor: props.backgroundColor
// 	}}
// 	onClick={props.handleBgColorChange}>
// 	<h4>{props.children} </h4>
// </div>
