import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLink = ({ style = {}, to = '/', children = 'Link'}) => 
	<Link className='bg-transparent dark:bg-gray-700 text-black dark:text-white px-2.5 py-2 border-none rounded-lg cursor-pointer text-base font-bold mr-1.5 hover:bg-gray-600' style={style} to={to}>
		{children}
	</Link>;

export default HeaderLink;