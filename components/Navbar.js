import React from 'react';
import SvgVercel from './svg/Vercel';
import styles from './Navbar.module.css';
import Link from 'next/link';

import CartContainer from './CartContainer';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} w-full h-32 flex flex-row justify-between items-center`}>
      <Link href='/'>
        <a>
          <SvgVercel  className='ml-16'/>
        </a>
      </Link>
      
      <div className='navbar__cart pr-16'>
        <span className='navbar__cart--display'><CartContainer /></span>
      </div>
    </nav>
  );
}

export default Navbar;