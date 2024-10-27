import React from 'react';

const VariantButton = ({ style = {}, onClick = () => {}, type = 'button', children = 'Button'}) => 
	<button className='variant-button' style={style} onClick={onClick}>
		{children}
	</button>;

export default VariantButton;