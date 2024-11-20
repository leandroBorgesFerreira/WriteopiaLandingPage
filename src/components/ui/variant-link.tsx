import React from 'react';
import { Link } from 'react-router-dom';

const VariantLink = ({ style = {}, to = '/', children = 'Button'}) => 
	<Link className='variant-link' style={style} to={to}>
		{children}
	</Link>;

export default VariantLink;