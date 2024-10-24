import React from 'react';
import '../App.css';

function Footer() {
    const year = new Date().getFullYear();

  return (
      <div className="footer">
        <p className='all-rights'>© {year} Writeopia Docs Limited, Inc. All rights reserved.</p>    
      </div>
  );
}

export default Footer;
