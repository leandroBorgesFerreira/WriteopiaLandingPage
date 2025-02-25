import React from 'react';
import { Link } from 'react-router-dom';

const LargeLink = ({ style = {}, to="/", type = 'button', children = 'Button'}) => 
  <Link className="text-4xl w-screen text-start font-bold pt-2 pb-2 pl-6 pr-10 flex items-center justify-between" style={style} to={to}>
    {children}
  </Link>;
  
export default LargeLink;