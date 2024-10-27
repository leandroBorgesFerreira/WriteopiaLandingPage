import React from 'react';

const DefaultButton = ({ style = {}, onClick = () => {}, type = 'button', children = 'Button'}) => 
	<button className='default-button' style={style} onClick={onClick}>
		{children}
	</button>;

export default DefaultButton;