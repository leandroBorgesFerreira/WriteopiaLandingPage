import React from 'react';

const LargeButton = ({ style = {}, onClick = () => {}, type = 'button', children = 'Button'}) => 
  <button className="text-4xl w-screen text-start font-bold p-6" style={style} onClick={onClick}>
    {children}
  </button>;
  
export default LargeButton;