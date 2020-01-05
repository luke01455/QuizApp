import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/about'>
                ABOUT
      </Link>
            <Link className='option' to='/signup'>
                SIGN UP
      </Link>
            <Link className='option' to='/signin'>
                SIGN IN
        </Link>
        </div>
    </div>
);


export default Header;