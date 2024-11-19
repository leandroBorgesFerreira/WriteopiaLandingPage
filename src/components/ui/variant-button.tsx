import React from 'react';
import { Link } from 'react-router-dom';

const VariantButton = ({ style = {}, to = '/', type = 'button', children = 'Button'}) => 
	<Link className='variant-button' style={style} to={to}>
		{children}
	</Link>;

export default VariantButton;