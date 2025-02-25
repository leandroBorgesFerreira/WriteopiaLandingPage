import React from 'react';
import { Link } from 'react-router-dom';

const MediumLink = ({ style = {}, to="/", type = 'button', children = 'Button'}) => 
  <Link className="text-xl text-start font-bold pt-2 pb-2 pl-6 pr-6" style={style} to={to}>
    {children}
  </Link>;
  
export default MediumLink;