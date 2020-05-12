import React from 'react';
import SvgVercel from './svg/Vercel';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} w-full h-32 flex flex-row justify-between items-center`}>
      <SvgVercel  className='ml-16'/>
      <div className='navbar__cart pr-16'>
        <span className='navbar__cart--display'>Cart</span>
      </div>
    </nav>
  );
}

export default Navbar;