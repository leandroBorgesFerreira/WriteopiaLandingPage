import React from 'react';

const DefaultButton = ({ style = {}, onClick = () => {}, type = 'button', children = 'Button'}) => 
	<button className='bg-black dark:bg-gray-700 text-white px-2.5 py-2 border border-black dark:border-gray-700 rounded-lg cursor-pointer text-lg font-bold mr-1.5 hover:bg-gray-600 hover:border-gray-600' style={style} onClick={onClick}>
		{children}
	</button>;

export default DefaultButton;