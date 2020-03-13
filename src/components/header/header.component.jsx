import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/auth'

import './header.styles.scss';

const Header = ({transparency}) => {
    const context = useContext(AuthContext)
    
    const [headerColour, setHeaderColour] = useState('white')
    
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    const [scrollTop, setScrollTop] = useState(0);
  
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    }
  
    useEffect(() => {
      window.addEventListener('scroll', onScroll);
    },[]);
  
    useEffect(() => {
      if(scrollTop > vh - 50) {
          setHeaderColour('black')
      } else {
          setHeaderColour('white')
      }
    }, [scrollTop])
    
    return (
        context.user ? (
            <div className={`header ${transparency} ${headerColour}`}>
                <Link className={`logo-container ${headerColour}`} to='/'>
                    <h1 className='header-logo'> Sport Bounty </h1>
                </Link>
                <div className='options'>
                    <Link className={`option ${headerColour}`} to='/faqs'> FAQ'S </Link>
                    <Link className={`option ${headerColour}`} to='/account'>{context.user.username.toUpperCase()}</Link>
                    <div className={`option ${headerColour}`} to='/signin' onClick={context.logout}> SIGN OUT </div>
                </div>
            </div>
        ) : (
            <div className={`header ${transparency} ${headerColour}`}>
                <Link className={`logo-container ${headerColour}`} to='/'>
                <h1 className='header-logo'> Sport Bounty </h1>
                </Link>
                <div className='options'>
                    <Link className={`option ${headerColour}`} to='/faqs'> FAQ'S </Link>
                    <Link className={`option ${headerColour}`} to='/signup'>SIGN UP</Link>
                    <Link className={`option ${headerColour}`} to='/signin'>SIGN IN</Link>
                </div>
            </div>
            )


    )
};


export default Header;